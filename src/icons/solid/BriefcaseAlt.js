import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBriefcaseAlt = forwardRef(
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
          d="M5 2.5V3H1.5A1.5 1.5 0 000 4.5v9A1.5 1.5 0 001.5 15h12a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0013.5 3H10v-.5a2.5 2.5 0 00-5 0zM7.5 1A1.5 1.5 0 006 2.5V3h3v-.5A1.5 1.5 0 007.5 1zM.66 7.367a10.083 10.083 0 0013.68 0l-.68-.734a9.083 9.083 0 01-12.32 0l-.68.734z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBriefcaseAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBriefcaseAlt.displayName = "BriefcaseAlt";

export default SvgBriefcaseAlt;
