import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgListOrdered = forwardRef(
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
          d="M0 2h2v3h1v1H0V5h1V3H0V2zm15 2H5V3h10v1zm0 4H5V7h10v1zM0 11.5A1.5 1.5 0 011.5 10h.293a1.207 1.207 0 01.853 2.06l-.939.94H3v1H.5a.5.5 0 01-.354-.854l1.793-1.792A.207.207 0 001.793 11H1.5a.5.5 0 00-.5.5H0zm15 .5H5v-1h10v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgListOrdered.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgListOrdered.displayName = "ListOrdered";

export default SvgListOrdered;
