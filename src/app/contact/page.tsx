import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "文海星辰 - 武汉本地网站搭建 | 同城GEO优化 企业官网定制",
  description: "联系文海星辰，获取武汉本地网站搭建及企业官网定制服务",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="联系页面"
        description="有任何问题？请随时联系我们，我们会尽快回复您。"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
