import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSlack = forwardRef(
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
          d="M10.385 6.923H8.077v-5.77a1.154 1.154 0 012.308 0v5.77zM12.692 6.923H11.54V5.77a1.154 1.154 0 111.153 1.154zM13.846 8.077h-5.77v2.308h5.77a1.154 1.154 0 000-2.308zM8.077 12.692V11.54H9.23a1.154 1.154 0 11-1.154 1.153zM1.154 4.615h5.77v2.308h-5.77a1.154 1.154 0 010-2.308zM6.923 2.308v1.154H5.77a1.154 1.154 0 111.154-1.154zM1.154 9.23c0-.636.516-1.153 1.154-1.153h1.154V9.23a1.154 1.154 0 01-2.308 0zM4.615 13.846v-5.77h2.308v5.77a1.154 1.154 0 01-2.308 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSlack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSlack.displayName = "Slack";

export default SvgSlack;
