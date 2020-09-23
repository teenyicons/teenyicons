import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSoundOff = forwardRef(
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
          d="M9 1.5a.5.5 0 00-.757-.429L3.362 3.998H1.5c-.829 0-1.5.67-1.5 1.5V9.5c0 .829.67 1.5 1.5 1.5h1.862l4.88 2.929A.5.5 0 009 13.5v-12zM13.207 7.496l1.414 1.413-.707.707L12.5 8.203l-1.414 1.413-.707-.707 1.414-1.413-1.414-1.413.707-.707L12.5 6.789l1.415-1.413.706.707-1.414 1.413z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSoundOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSoundOff.displayName = "SoundOff";

export default SvgSoundOff;
