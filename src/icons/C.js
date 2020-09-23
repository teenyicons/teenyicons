import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgC = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M10 5.5l-.068-.068a3.182 3.182 0 00-2.25-.932H7.5a3 3 0 000 6h.182c.844 0 1.653-.335 2.25-.932L10 9.5m-8.5 1v-6l6-3.5 6 3.5v6l-6 3.5-6-3.5z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgC.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgC.displayName = "C";

export default SvgC;
