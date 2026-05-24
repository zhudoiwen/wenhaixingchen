"use client";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import WeChatModal from "@/components/WechatModal";
import { useEffect, useState } from "react";

export default function Home() {
  const [isWeChatOpen, setWeChatOpen] = useState(false);

  // 监听 hash 变化，自动滚动到锚点
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#contact') {
        const targetElement = document.getElementById('contact');
        if (targetElement) {
          // 使用 requestAnimationFrame 确保 DOM 渲染完成
          requestAnimationFrame(() => {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          });
        }
      }
    };

    // 初始加载时检查 hash
    handleHashChange();
    
    // 监听 hash 变化
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <Testimonials />
      <Pricing onButtonClick={() => setWeChatOpen(true)} />
      <Blog />
      <div id="contact" className="flex justify-center py-16">
        <PulsatingButton onClick={() => setWeChatOpen(true)}>联系我们</PulsatingButton>
      </div>
      <WeChatModal 
        isOpen={isWeChatOpen} 
        onClose={() => setWeChatOpen(false)} 
        src="/images/wechat-qr.png" 
      />
    </>
  );
}
