import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMessageTextAlt = forwardRef(
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
          d="M0 1.5C0 .67.671 0 1.5 0h12c.829 0 1.5.67 1.5 1.5v8.993c0 .83-.671 1.5-1.5 1.5H7.667L3.8 14.89a.5.5 0 01-.8-.4v-2.498H1.5c-.829 0-1.5-.67-1.5-1.5V1.5zm4 2.497h7v1H4v-1zm0 2.998h5v1H4v-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMessageTextAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMessageTextAlt.displayName = "MessageTextAlt";

export default SvgMessageTextAlt;
