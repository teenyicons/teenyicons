import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSend = forwardRef(
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
          d="M14.954.71a.5.5 0 01-.1.144L5.4 10.306l2.67 4.451a.5.5 0 00.889-.06L14.954.71zM4.694 9.6L.243 6.928a.5.5 0 01.06-.889L14.293.045a.5.5 0 00-.146.101L4.694 9.6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSend.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSend.displayName = "Send";

export default SvgSend;
