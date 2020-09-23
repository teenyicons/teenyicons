import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHdScreen = forwardRef(
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
          d="M.948 1.108A.744.744 0 000 1.823v9.354c0 .494.473.85.948.715A23.85 23.85 0 017 10.98V13H2v1h11v-1H8v-2.02c2.039.042 4.073.346 6.052.912a.744.744 0 00.948-.715V1.823a.744.744 0 00-.948-.715 23.85 23.85 0 01-13.104 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgHdScreen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHdScreen.displayName = "HdScreen";

export default SvgHdScreen;
