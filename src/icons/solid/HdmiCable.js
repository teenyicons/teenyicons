import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHdmiCable = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 15 15"
        fill="none"
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 0h9v5H3V0zm3 3H5V2h1v1zm4 0H9V2h1v1z"
          fill={color}
        />
        <path
          d="M2 6h11v3.809l-2 1V13h-1v2H9v-2H6v2H5v-2H4v-2.191l-2-1V6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgHdmiCable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHdmiCable.displayName = "HdmiCable";

export default SvgHdmiCable;
