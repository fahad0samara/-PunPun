import React from "react";

import "./feature-card.css";

const FeatureCard = (props: {
  image_alt: string | undefined;
  image_src: string | undefined;
  new_prop:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  text:
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
    <div className="feature-card-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card-image"
      />
      <h5 className="feature-card-text HeadingThree">{props.new_prop}</h5>
      <span className="feature-card-text1">{props.text}</span>
    </div>
  );
};

FeatureCard.defaultProps = {
  image_src: "/playground_assets/rocket1.svg",
  image_alt: "image",
  text: "Get the latest design ideas and turn it into reality.",
  new_prop: "Design",
};

export default FeatureCard;
