import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSendUp = forwardRef(
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
          d="M7.5.793l4.354 4.353-.708.708L8 2.707V12H7V2.707L3.854 5.854l-.708-.708L7.5.793zM14 13v1H1v-1h13z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSendUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSendUp.displayName = "SendUp";

export default SvgSendUp;
