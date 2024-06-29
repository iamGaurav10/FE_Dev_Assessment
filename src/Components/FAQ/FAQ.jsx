import React from "react";
import "./FAQ.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import data from "../utils/SliderSettings/Accordion";

const FAQ = () => {
  return (
    <section className="faq_container">
      <span>FAQ</span>
      <Accordion
        className="accordion"
        allowMultipleExpanded={false}
        preExpanded={[0]}
      >
        {data.map((item, i) => (
          <AccordionItem className="AcoordionItem" key={i}>
            <AccordionItemHeading>
              <AccordionItemButton className="accordion_button">

                {/* <AccordionItemState>
                  {({expanded})=> expanded ? setClassName("expanded"):setClassName("collapsed")}
                </AccordionItemState> */}
                <div className="acc_heading">
                  <div>{item.heading}</div>
                  <div>{item.icon}</div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="accordion_panel">
              <span>{item.detail}</span>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
