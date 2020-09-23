import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDocuments = forwardRef(
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
          d="M3 1.5A1.5 1.5 0 014.5 0h6.151L14 2.232V11.5a1.5 1.5 0 01-1.5 1.5H12v.5a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 011 13.5v-10A1.5 1.5 0 012.5 2H3v-.5zM3 3h-.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h8a.5.5 0 00.5-.5V13H4.5A1.5 1.5 0 013 11.5V3z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDocuments.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDocuments.displayName = "Documents";

export default SvgDocuments;
