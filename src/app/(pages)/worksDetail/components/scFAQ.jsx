"use client";
import AccordionComponent from "@/app/components/Accordion/page";
import AccordionComponentItem from "@/app/components/AccordionComponentItem/page";
import { useAccordionComponent } from "@/app/contexts/AccordionContext/page";
import React, { useEffect, useRef } from "react";

const ScFAQ = () => {
  // trạng thái các item accordion active
  const { isActive, handleSetReset } = useAccordionComponent();

  const accordionRefs = useRef({});

  // cập nhật mỗi khi các item active có biến đổi  xử lí dropdown item trên accordion
  useEffect(() => {
    Object.keys(accordionRefs.current).forEach((item) => {
      if (
        accordionRefs.current[item].parentElement.classList.contains("active")
      ) {
        accordionRefs.current[
          item
        ].style.height = `${accordionRefs.current[item].scrollHeight}px`;
      } else {
        accordionRefs.current[item].style.height = `0px`;
      }
    });
  }, [isActive]);
  useEffect(() => {
    return () => {
      handleSetReset?.();
    };
  }, []);

  return (
    <section className="scFAQ pt-[50px]">
      <h2 className="title_2">FAQ</h2>
      <AccordionComponent>
        <AccordionComponentItem
          ref={accordionRefs}
          id={"1"}
          title={"What is your return policy?"}
        >
          We accept returns within 30 days of purchase. Items must be unused and
          in their original packaging. To start a return, contact our support
          team with your order details.
        </AccordionComponentItem>
        <AccordionComponentItem
          ref={accordionRefs}
          id={"2"}
          title={". How long does shipping take?"}
        >
          Shipping usually takes between 3–7 business days depending on your
          location. International orders may take longer.
        </AccordionComponentItem>
        <AccordionComponentItem
          ref={accordionRefs}
          id={"3"}
          title={"There are many passages but the majority?"}
        >
          Voluptates amet earum velit nobis aliquam laboriosam nihil debitis
          facere voluptatibus consectetur quae quasi fuga, ad corrupti libero
          omnis sapiente non assumenda, incidunt officiis eaque iste minima
          autem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
          voluptatibus accusantium harum dicta. Tempore, possimus ut dolorem
          molestiae odio illo ipsum vitae provident temporibus reprehenderit.
          Nulla labore fugit nobis culpa!
        </AccordionComponentItem>
        <AccordionComponentItem
          ref={accordionRefs}
          id={"4"}
          title={"Do you offer international shipping?"}
        >
          Yes, we ship worldwide! International shipping fees and delivery times
          vary by destination. Additional customs charges may apply depending on
          your country’s regulations.
        </AccordionComponentItem>
        <AccordionComponentItem
          ref={accordionRefs}
          id={"5"}
          title={"Can I change or cancel my order after placing it?"}
        >
          We process orders quickly, but if you contact us within 2 hours of
          placing your order, we may be able to make changes or cancel it. After
          that, we cannot guarantee modifications.
        </AccordionComponentItem>
        <AccordionComponentItem
          ref={accordionRefs}
          id={"6"}
          title={"Are your products eco-friendly?"}
        >
          Absolutely. Sustainability is one of our core values. We use
          biodegradable packaging, recyclable materials, and partner with
          suppliers who follow eco-friendly practices.
        </AccordionComponentItem>
      </AccordionComponent>
    </section>
  );
};

export default ScFAQ;
