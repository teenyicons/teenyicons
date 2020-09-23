import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgId = forwardRef(
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
          d="M0 3.5A1.5 1.5 0 011.5 2h12A1.5 1.5 0 0115 3.5v8a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 11.5v-8zM3 6a2 2 0 114 0 2 2 0 01-4 0zm9 0H9V5h3v1zm0 3H9V8h3v1zM5 9a2.927 2.927 0 00-2.618 1.618l-.33.658A.5.5 0 002.5 12h5a.5.5 0 00.447-.724l-.329-.658A2.927 2.927 0 005 9z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgId.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgId.displayName = "Id";

export default SvgId;
