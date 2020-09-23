import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFirebase = forwardRef(
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
          d="M3.33.03a.5.5 0 01.524.116l2.078 2.08a.505.505 0 00-.032.056L2.175 9.988 3.33.03zM2.262 11.94l4.98 2.989a.5.5 0 00.444.035l5-2a.5.5 0 00.31-.52l-1-9a.5.5 0 00-.828-.318L9.513 4.597 2.262 11.94zM8.938 3.756L7.916 2.223a.5.5 0 00-.853.034l-.31.558-2.986 6.177 5.171-5.236z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFirebase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFirebase.displayName = "Firebase";

export default SvgFirebase;
