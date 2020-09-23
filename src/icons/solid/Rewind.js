import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRewind = forwardRef(
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
          d="M8 2.5a.5.5 0 00-.79-.407l-7 5a.5.5 0 000 .814l7 5A.5.5 0 008 12.5V8.472l6.21 4.435A.5.5 0 0015 12.5v-10a.5.5 0 00-.79-.407L8 6.528V2.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgRewind.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRewind.displayName = "Rewind";

export default SvgRewind;
