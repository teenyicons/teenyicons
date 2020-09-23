import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCaretVertical = forwardRef(
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
          d="M7.5 1.336L2.17 6h10.66L7.5 1.336zM7.5 13.664L12.83 9H2.17l5.33 4.664z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCaretVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCaretVertical.displayName = "CaretVertical";

export default SvgCaretVertical;
