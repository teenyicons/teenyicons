import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgStackoverflow = forwardRef(
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
          d="M12.59 5.787l-3.5-5 .82-.574 3.5 5-.82.574zm-.925 1.085l-5-4.5.67-.744 5 4.5-.67.744zm-.491 1.174l-6.1-3.1.453-.892 6.1 3.1-.454.892zm-.283 1.442l-6.7-1.5.218-.976 6.7 1.5-.218.976zM2 9h1v5h9V9h1v6H2V9zm8.95 2.197l-7-.7.1-.995 7 .7-.1.995zM11 13H4v-1h7v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgStackoverflow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgStackoverflow.displayName = "Stackoverflow";

export default SvgStackoverflow;
