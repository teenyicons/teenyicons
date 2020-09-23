import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHourglass = forwardRef(
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
          d="M12 1h2V0H1v1h2v3.672a2.5 2.5 0 00.732 1.767l.707.707a.5.5 0 010 .708l-1 1A1.5 1.5 0 003 9.914V14H1v1h13v-1h-2V9.914a1.5 1.5 0 00-.44-1.06l-1-1a.5.5 0 010-.708l1-1a1.5 1.5 0 00.44-1.06V1zM4.25 5.5h6.543l.06-.06A.5.5 0 0011 5.085V1H4v3.672c0 .296.088.584.25.828z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgHourglass.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHourglass.displayName = "Hourglass";

export default SvgHourglass;
