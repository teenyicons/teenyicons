import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFlagAlt = forwardRef(
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
          d="M2.254.065a.5.5 0 01.503.006l10 6a.5.5 0 01-.033.876L3 11.81V15H2V.5a.5.5 0 01.254-.435z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFlagAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFlagAlt.displayName = "FlagAlt";

export default SvgFlagAlt;
