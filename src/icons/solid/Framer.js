import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFramer = forwardRef(
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
          d="M2.038.309A.5.5 0 012.5 0h10a.5.5 0 01.5.5v5a.5.5 0 01-.5.5H8.707l4.147 4.146A.5.5 0 0112.5 11H8v3.5a.5.5 0 01-.854.354l-5-5A.5.5 0 012 9.5v-4a.5.5 0 01.5-.5h3.793L2.146.854a.5.5 0 01-.108-.545z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFramer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFramer.displayName = "Framer";

export default SvgFramer;
