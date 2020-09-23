import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgC = forwardRef(
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
          d="M7.5.421L14 4.213v6.574L7.5 14.58 1 10.787V4.213L7.5.42zM7.5 4a3.5 3.5 0 100 7h.182c.976 0 1.913-.388 2.604-1.078l.068-.068-.708-.708-.068.068A2.682 2.682 0 017.682 10H7.5a2.5 2.5 0 010-5h.182c.711 0 1.393.283 1.896.786l.068.068.708-.708-.068-.068A3.682 3.682 0 007.682 4H7.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgC.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgC.displayName = "C";

export default SvgC;
