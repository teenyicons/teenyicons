import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgVim = forwardRef(
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
          d="M7 1H1v3h1v10h3.74L14 3.675V1H8v3h1.432L6 8.119V4h1V1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgVim.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgVim.displayName = "Vim";

export default SvgVim;
