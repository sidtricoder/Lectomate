import React from 'react';
import { Header, Footer, WavesBackground } from './index';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
      <Header />
      {children}
      <Footer />
      <WavesBackground fixed={true} />
    </div>
  );
};

export default Layout;
