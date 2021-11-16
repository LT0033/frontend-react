import React from "react";
import AccordionItem from "./AccordionItem";
import "../css/Accordion.css";

class Accordion extends React.Component {
  render() {
    return (
      <div {...{ className: "wrapper" }}>
        <ul {...{ className: "accordion-list" }}>
          {this.props.data.map((data, key) => {
            return (
              <li {...{ className: "accordion-list__item", key }}>
                <AccordionItem {...data} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Accordion;
