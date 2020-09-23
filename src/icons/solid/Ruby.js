import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRuby = forwardRef(
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
          d="M4.293 4L8.058.236 9.73 4H4.293zM14.293 0l-3.632 3.632L9.047 0h5.246zM.236 8.058L4 9.73V4.293L.236 8.058zM3.632 10.661L0 9.047v5.246l3.632-3.632zM5 9.293L9.293 5H5v4.293zM15 13.731l-3.907-9.117L15 .707v13.024zM14.048 14.048l-3.717-8.672-4.955 4.955 8.672 3.717zM4.614 11.093L13.731 15H.707l3.907-3.907z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgRuby.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRuby.displayName = "Ruby";

export default SvgRuby;
