import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgParagraph = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13 1.5H6.5a4 4 0 100 8h1m3 4.5V1.5M7.5 14V1.5"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgParagraph.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgParagraph.displayName = "Paragraph";

export default SvgParagraph;
