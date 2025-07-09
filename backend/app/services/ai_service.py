import re
import time
from typing import Optional, Dict, Any
import logging
from huggingface_hub import InferenceClient

from app.core.config import settings
from app.core.exceptions import AIServiceError

logger = logging.getLogger(__name__)

class AIService:
    """Service for AI model interactions"""
    
    def __init__(self):
        self.deepseek_client = None
        self.qwen_client = None
        self._initialize_clients()
    
    def _initialize_clients(self):
        """Initialize AI service clients"""
        try:
            logger.info("Initializing AI service clients")
            
            # Initialize DeepSeek client for text processing
            self.deepseek_client = InferenceClient(
                provider="fireworks-ai",
                api_key=settings.huggingface_api_key,
            )
            
            # Initialize Qwen client for Manim code generation
            self.qwen_client = InferenceClient(
                provider="featherless-ai",
                api_key=settings.featherless_api_key,
            )
            
            logger.info("AI service clients initialized successfully")
            
        except Exception as e:
            logger.error(f"Failed to initialize AI clients: {str(e)}")
            raise AIServiceError(f"Failed to initialize AI services: {str(e)}")
    
    async def process_text_explanation(self, text: str, format_type: str = "explanation") -> str:
        """Process text and generate explanation"""
        try:
            logger.info(f"Processing text explanation for {len(text)} characters")
            start_time = time.time()
            
            prompt = self._build_explanation_prompt(text, format_type)
            
            completion = self.deepseek_client.chat.completions.create(
                model=settings.deepseek_model,
                messages=[
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],
            )
            
            response = completion.choices[0].message.content
            
            if response is None:
                raise AIServiceError("No response received from DeepSeek API", "DeepSeek")
            
            # Clean response by removing thinking tags
            cleaned_response = re.sub(r"<think>.*?</think>", "", response, flags=re.DOTALL).strip()
            
            processing_time = time.time() - start_time
            logger.info(f"Text explanation processed in {processing_time:.2f} seconds")
            
            return cleaned_response
            
        except Exception as e:
            logger.error(f"Error processing text explanation: {str(e)}")
            raise AIServiceError(f"Failed to process text explanation: {str(e)}", "DeepSeek")
    
    async def generate_manim_code(self, text: str) -> str:
        """Generate Manim code for visualization"""
        try:
            logger.info(f"Generating Manim code for {len(text)} characters")
            start_time = time.time()
            
            prompt = self._build_manim_prompt(text)
            
            completion = self.qwen_client.chat.completions.create(
                model=settings.qwen_model,
                messages=[
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],
            )
            
            response = completion.choices[0].message.content
            
            if response is None:
                raise AIServiceError("No response received from Qwen API", "Qwen")
            
            # Clean response
            cleaned_response = re.sub(r"<think>.*?</think>", "", response, flags=re.DOTALL).strip()
            
            processing_time = time.time() - start_time
            logger.info(f"Manim code generated in {processing_time:.2f} seconds")
            
            return cleaned_response
            
        except Exception as e:
            logger.error(f"Error generating Manim code: {str(e)}")
            raise AIServiceError(f"Failed to generate Manim code: {str(e)}", "Qwen")
    
    def _build_explanation_prompt(self, text: str, format_type: str) -> str:
        """Build prompt for text explanation"""
        base_prompt = f"""What do you understand by: {text}
        
Give your output in PLAIN TEXT format and NOT markdown html format.
Also structure your output exactly in the following format:
Page 1: Explanation in most easy way (in exactly 30 words for each page)
Page 2: Its explanation
and so on..."""
        
        if format_type == "detailed":
            base_prompt += "\n\nProvide detailed explanations with examples where applicable."
        elif format_type == "summary":
            base_prompt += "\n\nProvide concise summaries focusing on key points."
        
        return base_prompt
    
    def _build_manim_prompt(self, text: str) -> str:
        """Build prompt for Manim code generation"""
        return f"""Generate Manim code for the content: {text}
        
Only generate code for STEM subjects where visual representation would be helpful, otherwise respond with "NOT REQUIRED".
Give your output in PLAIN TEXT format and NOT markdown html format.
Follow the following format strictly:
Page 1: Manim code or NOT REQUIRED
Page 2: Manim code or NOT REQUIRED
and so on..."""
    
    async def health_check(self) -> Dict[str, Any]:
        """Check the health of AI services"""
        try:
            logger.info("Performing AI services health check")
            
            # Simple test with both clients
            test_result = {
                "deepseek_available": self.deepseek_client is not None,
                "qwen_available": self.qwen_client is not None,
                "status": "healthy"
            }
            
            logger.info(f"AI services health check result: {test_result}")
            return test_result
            
        except Exception as e:
            logger.error(f"AI services health check failed: {str(e)}")
            return {
                "status": "unhealthy",
                "error": str(e)
            }

# Global AI service instance
ai_service = AIService()
