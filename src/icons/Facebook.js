import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFacebook = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 14.5a7 7 0 110-14 7 7 0 010 14zm0 0v-8a2 2 0 012-2h.5m-5 4h5"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgFacebook.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFacebook.displayName = "Facebook";

export default SvgFacebook;
