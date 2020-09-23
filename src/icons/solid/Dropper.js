import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDropper = forwardRef(
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
          d="M13.768 1.06a2.5 2.5 0 00-3.536 0L7.5 3.794l-.646-.647-.708.708 5 5 .708-.708-.647-.646 2.732-2.732a2.5 2.5 0 000-3.536l-.171-.171zM6.146 6.146a.5.5 0 01.708 0l2 2a.5.5 0 010 .708L2.707 15H.5a.5.5 0 01-.5-.5v-2.207l6.146-6.147z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDropper.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDropper.displayName = "Dropper";

export default SvgDropper;
