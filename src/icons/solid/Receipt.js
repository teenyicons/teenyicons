import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgReceipt = forwardRef(
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
          d="M1 .5a.5.5 0 01.5-.5h12a.5.5 0 01.5.5v14a.5.5 0 01-.724.447L11.5 14.06l-1.776.888a.5.5 0 01-.448 0L7.5 14.06l-1.776.888a.5.5 0 01-.448 0L3.5 14.06l-1.776.888A.5.5 0 011 14.5V.5zM4 5h2V4H4v1zm4 0h3V4H8v1zM6 8H4V7h2v1zm2 0h3V7H8v1zm3 3H8v-1h3v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgReceipt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgReceipt.displayName = "Receipt";

export default SvgReceipt;
