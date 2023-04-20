import React from "react";

import "./list-item.css";

const ListItem = (props: {
  new_prop:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  description:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <div className="list-item-container">
      <h5 className="list-item-text HeadingThree">{props.new_prop}</h5>
      <span>{props.description}</span>
    </div>
  );
};

ListItem.defaultProps = {
  description:
    "Gain access to the demographics, psychographics, and location of unique people who are interested and talk about your brand.",
  new_prop: "1. Listen to Social Conversations",
};

export default ListItem;
