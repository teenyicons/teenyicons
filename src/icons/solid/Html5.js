import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHtml5 = forwardRef(
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
          d="M.132.161A.5.5 0 01.5 0h14a.5.5 0 01.498.542l-1 12a.5.5 0 01-.34.432l-6 2a.499.499 0 01-.316 0l-6-2a.5.5 0 01-.34-.433l-1-12a.5.5 0 01.13-.38zM11 3H4v4h6v2.14l-2.5.833L5 9.14V8H4v1.86l3.5 1.167L11 9.86V6H5V4h6V3z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgHtml5.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHtml5.displayName = "Html5";

export default SvgHtml5;
