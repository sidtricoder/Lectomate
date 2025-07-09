import os
from huggingface_hub import InferenceClient
from doctr.models import ocr_predictor
from doctr.io import DocumentFile

import time

from dotenv import load_dotenv
load_dotenv()

def proc(prompt):
    client = InferenceClient(
        provider="fireworks-ai",
        api_key=os.getenv("HF_API_KEY"),
    )

    with open("temp.txt", 'w') as file:
        file.write(prompt)

    completion = client.chat.completions.create(
        model="deepseek-ai/DeepSeek-R1",
        messages=[
            {
                "role": "user",
                "content": f"""What do you understand by: {prompt} Give your output in PLAIN TEXT format and NOT markdown html format. 
                             Also structure your output exactly in the following format:
                             Page 1 : Explanation in most easy way(in exactly 30 words for each page)
                             Page 2 : Its explanation
                             and so on...
                             """
            }
        ],
    )
    import re
    
    response = completion.choices[0].message.content

    if response is None:
        print("No response received from the API")
        return

    cleaned = re.sub(r"<think>.*?</think>", "", response, flags=re.DOTALL).strip()

    print(cleaned)
    return cleaned


def extract_page_text_safe(page):
    """Safely extract text from a page object"""
    text = ""
    try:
        for block in page.blocks:
            for line in block.lines:
                line_words = []
                for word in line.words:
                    line_words.append(word.value)
                text += " ".join(line_words) + "\n"
            text += "\n"  # Block separator
    except Exception as e:
        text = f"Error extracting text from page: {str(e)}"
    
    return text.strip()

def generate_manim(prompt):
    client = InferenceClient(
        provider="featherless-ai",
        api_key=os.getenv("HF_API_KEY"),
    )

    completion = client.chat.completions.create(
        model="Qwen/Qwen2.5-Coder-32B-Instruct",
        messages=[
            {
                "role": "user",
                "content": f"""Generate Manim code for the content : {prompt}, wherever required(only for STEM) otherwise say NOT REQUIRED.
                                Give your output in PLAIN TEXT format and NOT markdown html format.
                                Follow the following format strictly:
                                Page 1: Manim code or Not required
                                Page 2 : Manim code or not required
                                and so on..."""
            }
        ],
    )

    import re
    
    response = completion.choices[0].message.content

    if response is None:
        print("No response received from the API")
        return

    cleaned = re.sub(r"<think>.*?</think>", "", response, flags=re.DOTALL).strip()

    print(cleaned)

def print_file(x):
    print(x.filename)
    t = time.time()
    print(t)
    with open("temp.pdf", "wb") as f:
        f.write(x.file.read())    
    model = ocr_predictor(pretrained=True)
    doc = DocumentFile.from_pdf("temp.pdf")

    result = model(doc)
        
    formatted_pages = []
    
    # Use the direct page objects (recommended)
    for page_idx, page in enumerate(result.pages):
        page_text = extract_page_text_safe(page)
        formatted_pages.append(f"PAGE {page_idx + 1}:\n{page_text}")
    
    final_text = "\n\n--- PAGE SEPARATOR ---\n\n".join(formatted_pages)
    print("Final text processed now giving to AI for further refining!")
    y = time.time()
    print(y-t)
    text = proc(final_text)
    z = time.time()
    print(z-y)
    
    generate_manim(text)