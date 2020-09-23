import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEthereum = forwardRef(
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
          d="M7.5 0a.5.5 0 01.384.18l5 6a.5.5 0 01.04.585l-5 8a.5.5 0 01-.848 0l-5-8a.5.5 0 01.04-.585l5-6A.5.5 0 017.5 0zM3.241 6.742L7.5 5.04l4.259 1.703L7.5 13.557 3.241 6.742zm7.61-1.44L7.5 3.962l-3.35 1.34L7.5 1.28l3.35 4.02z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgEthereum.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgEthereum.displayName = "Ethereum";

export default SvgEthereum;
