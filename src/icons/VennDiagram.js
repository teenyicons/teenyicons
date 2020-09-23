import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgVennDiagram = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M2.5 9.5a5 5 0 1110 0 5 5 0 01-10 0z" stroke={color} />
        <path d="M.5 5.5a5 5 0 1110 0 5 5 0 01-10 0z" stroke={color} />
        <path d="M4.5 5.5a5 5 0 1110 0 5 5 0 01-10 0z" stroke={color} />
      </svg>
    );
  }
);

SvgVennDiagram.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgVennDiagram.displayName = "VennDiagram";

export default SvgVennDiagram;
