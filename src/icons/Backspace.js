import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBackspace = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 12.5l-.39.312A.5.5 0 004.5 13v-.5zm-4-5l-.39-.312a.5.5 0 000 .624L.5 7.5zm4-5V2a.5.5 0 00-.39.188l.39.312zm9.5 1v8h1v-8h-1zm-.5 8.5h-9v1h9v-1zm-8.61.188l-4-5-.78.624 4 5 .78-.624zm-4-4.376l4-5-.78-.624-4 5 .78.624zM4.5 3h9V2h-9v1zm9.5 8.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zm1-8A1.5 1.5 0 0013.5 2v1a.5.5 0 01.5.5h1zM6.146 5.854l4 4 .708-.708-4-4-.708.708zm4-.708l-4 4 .708.708 4-4-.708-.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBackspace.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBackspace.displayName = "Backspace";

export default SvgBackspace;
