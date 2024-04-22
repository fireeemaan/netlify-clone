import React from "react";
import PropTypes from "prop-types";
import className from "classnames";

const ContentAnchor = ({ children, href, hoverable }) => {
  const classes = className("underline font-semibold", {
    "hover:no-underline": hoverable,
  });

  return (
    <a href="#" className={classes}>
      {children}
    </a>
  );
};

export default ContentAnchor;
