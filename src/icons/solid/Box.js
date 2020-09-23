import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBox = forwardRef(
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
          d="M7.303.04a.5.5 0 01.394 0L14.5 2.956l-7 3-7-3L7.303.04zM0 3.83v7.67c0 .2.12.38.303.46L7 14.83v-8l-7-3zM8 6.83l7-3v7.67a.5.5 0 01-.303.46L8 14.83v-8z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBox.displayName = "Box";

export default SvgBox;
