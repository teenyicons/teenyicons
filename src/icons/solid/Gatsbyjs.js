import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGatsbyjs = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm3.305-1.631a4.502 4.502 0 017.409-1.519l.714-.7a5.502 5.502 0 00-9.176 2.2l-.09.29 6.699 6.699.289-.09a5.504 5.504 0 003.823-4.7l.054-.549H9v1h2.889a4.51 4.51 0 01-2.758 3.195L3.305 5.87zm2.841 6.985l-4-4 .708-.708 4 4-.708.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGatsbyjs.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGatsbyjs.displayName = "Gatsbyjs";

export default SvgGatsbyjs;
