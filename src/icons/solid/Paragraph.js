import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgParagraph = forwardRef(
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
          d="M2 5.5A4.5 4.5 0 016.5 1H13v1h-2v12h-1V2H8v12H7v-4h-.5A4.5 4.5 0 012 5.5zM7 9V2h-.5a3.5 3.5 0 100 7H7z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgParagraph.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgParagraph.displayName = "Paragraph";

export default SvgParagraph;
