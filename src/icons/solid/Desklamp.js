import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDesklamp = forwardRef(
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
          d="M6.854 1.146l1.884 1.885a4.551 4.551 0 014.98.98c.27.27.27.708 0 .979L7.99 10.717c-.27.27-.71.27-.98 0a4.551 4.551 0 01-.979-4.979l-.984-.984L2.166 8.46 7.707 14H13v1H2v-1h4.293L1.146 8.854a.5.5 0 01-.04-.66L4.333 4.04l-.188-.187a1.914 1.914 0 112.708-2.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDesklamp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDesklamp.displayName = "Desklamp";

export default SvgDesklamp;
