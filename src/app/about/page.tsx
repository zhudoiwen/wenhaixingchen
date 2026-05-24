import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "文海星辰 - 武汉本地网站搭建 | 同城GEO优化 企业官网定制",
  description: "了解文海星辰，专注于武汉本地网站搭建与企业官网定制服务",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="关于页面"
        description="了解我们的故事和使命，探索我们如何帮助创业公司取得成功。"
      />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
