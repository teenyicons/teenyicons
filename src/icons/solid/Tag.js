import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTag = forwardRef(
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
        <path d="M10 4.5a.5.5 0 111 0 .5.5 0 01-1 0z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.146.146A.5.5 0 017.5 0h6A1.5 1.5 0 0115 1.5v6a.5.5 0 01-.146.354l-7 7a.5.5 0 01-.708 0l-7-7a.5.5 0 010-.708l7-7zM10.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgTag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTag.displayName = "Tag";

export default SvgTag;
