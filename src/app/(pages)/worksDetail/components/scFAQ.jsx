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
          title={"There are many passages but the majority?"}
        >
          Voluptates amet earum velit nobis aliquam laboriosam nihil debitis
          facere
        </AccordionComponentItem>
        <AccordionComponentItem
          ref={accordionRefs}
          id={"2"}
          title={"There are many passages but the majority?"}
        >
          Voluptates amet earum velit nobis aliquam laboriosam nihil debitis
          facere voluptatibus consectetur quae quasi fuga, ad corrupti libero
          omnis sapiente non assumenda, incidunt officiis eaque iste minima
          autem.
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
          title={"There are many passages but the majority?"}
        >
          Voluptates amet earum velit nobis aliquam laboriosam nihil debitis
          facere voluptatibus consectetur quae quasi fuga, ad corrupti libero
          omnis sapiente non assumenda, incidunt officiis eaque iste minima
          autem. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur blanditiis, veniam quas, quaerat repellat, quam similique
          cumque libero suscipit repellendus voluptatum distinctio inventore ea
          nam corrupti incidunt natus minima consequuntur! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quasi excepturi a ex recusandae
          corrupti ab at iure vero quaerat, rerum totam aspernatur numquam,
          ipsum vitae commodi quibusdam dolorem tempora error?
        </AccordionComponentItem>
        <AccordionComponentItem
          ref={accordionRefs}
          id={"5"}
          title={"There are many passages but the majority?"}
        >
          Voluptates amet earum velit nobis aliquam laboriosam nihil debitis
          facere voluptatibus consectetur quae quasi fuga, ad corrupti libero
          omnis sapiente non assumenda, incidunt officiis eaque iste minima
          autem.
        </AccordionComponentItem>
        <AccordionComponentItem
          ref={accordionRefs}
          id={"6"}
          title={"There are many passages but the majority?"}
        >
          Voluptates amet earum velit nobis aliquam laboriosam nihil debitis
          facere voluptatibus consectetur quae quasi fuga, ad corrupti libero
          omnis sapiente non assumenda, incidunt officiis eaque iste minima
          autem.
        </AccordionComponentItem>
      </AccordionComponent>
    </section>
  );
};

export default ScFAQ;
