import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSectionAdd = forwardRef(
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
          d="M0 1.5A1.5 1.5 0 011.5 0H4v1H1.5a.5.5 0 00-.5.5V4H0V1.5zM9 1H6V0h3v1zm4.5 0H11V0h2.5A1.5 1.5 0 0115 1.5V4h-1V1.5a.5.5 0 00-.5-.5zM7 7V4h1v3h3v1H8v3H7V8H4V7h3zM0 9V6h1v3H0zm14 0V6h1v3h-1zM0 13.5V11h1v2.5a.5.5 0 00.5.5H4v1H1.5A1.5 1.5 0 010 13.5zm14 0V11h1v2.5a1.5 1.5 0 01-1.5 1.5H11v-1h2.5a.5.5 0 00.5-.5zM9 15H6v-1h3v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSectionAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSectionAdd.displayName = "SectionAdd";

export default SvgSectionAdd;
