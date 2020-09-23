import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgStop = forwardRef(
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
        <path d="M12 3H3v9h9V3z" fill={color} />
      </svg>
    );
  }
);

SvgStop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgStop.displayName = "Stop";

export default SvgStop;
