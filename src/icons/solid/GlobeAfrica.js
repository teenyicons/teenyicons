import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGlobeAfrica = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm1 0a6.502 6.502 0 015.527-6.428L7 1.31v.382l-.724.362a.5.5 0 00-.053.863l1.5 1A.5.5 0 008 4h.5a.5.5 0 00.5-.5V3h.5v.5a.5.5 0 00.146.354l.354.353v.586L9.793 5h-.675l-1.894-.947a.5.5 0 00-.448 0l-.894.447H4.5a.5.5 0 00-.485.379l-.5 2a.5.5 0 00.131.475l1.5 1.5a.5.5 0 00.13.093L6 9.31V10.5a.5.5 0 00.146.354l.354.353V12a.5.5 0 00.053.224l.5 1a.5.5 0 00.447.276h1a.5.5 0 00.416-.223l1-1.5a.5.5 0 00.031-.053l.5-1a.5.5 0 00.053-.224v-.833L11.9 7.8a.5.5 0 00.047-.524L11.81 7h.691a.5.5 0 00.5-.5V6h.826A6.5 6.5 0 111 7.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGlobeAfrica.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGlobeAfrica.displayName = "GlobeAfrica";

export default SvgGlobeAfrica;
