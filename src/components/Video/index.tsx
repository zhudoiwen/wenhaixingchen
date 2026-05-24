"use client";

import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="我们随时准备为您提供帮助"
          paragraph="我们提供多种解决方案，帮助您解决各种问题。无论您遇到什么挑战，我们都能为您提供支持。"
          center
          mb="80px"
        />
      </div>
    </section>
  );
}
