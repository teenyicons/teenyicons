import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPool = forwardRef(
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
          d="M5.636 1C4.15 1 3 2.203 3 3.727V4h6v-.364C9 1.57 10.633 0 12.682 0v1C11.167 1 10 2.14 10 3.636V10H9V9H3v3H2V3.727C2 1.688 3.56 0 5.636 0v1zM3 8h6V5H3v3z"
          fill={color}
        />
        <path
          d="M7.44 13.442c-.895.504-1.877 1.058-3.485 1.058-1.483 0-2.614-.762-3.33-1.568l.75-.664c.584.66 1.462 1.232 2.58 1.232 1.339 0 2.128-.442 3.004-.935l.01-.007c.895-.504 1.877-1.058 3.485-1.058 1.531 0 2.884.82 3.852 1.572l-.612.79c-.923-.716-2.052-1.362-3.24-1.362-1.339 0-2.128.442-3.004.935l-.01.007z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPool.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPool.displayName = "Pool";

export default SvgPool;
