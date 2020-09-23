import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCss3 = forwardRef(
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
          d="M.132.162A.5.5 0 01.5 0h14a.5.5 0 01.498.542l-1 11.916a.5.5 0 01-.34.432l-6 2a.5.5 0 01-.316 0l-6-2a.5.5 0 01-.34-.432L.002.542a.5.5 0 01.13-.38zM11 3H4v1h6v2H6v1h4v2.14l-2.5.833L5 9.14V8H4v1.86l3.5 1.167L11 9.86V3z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCss3.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCss3.displayName = "Css3";

export default SvgCss3;
