import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSimohamed = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M12.5 5.5v3a6 6 0 01-1.2 3.6l-.6.8a4 4 0 01-6.4 0l-.6-.8a6 6 0 01-1.2-3.6v-3m10 0a5 5 0 00-10 0m10 0l-1.121-1.121A3 3 0 009.257 3.5H5.743a3 3 0 00-2.122.879L2.5 5.5m2.5 3h1m3 0h1m-4-2H2.5A1.562 1.562 0 00.985 8.44l.151.605A1.921 1.921 0 003 10.5m6-4h3.5c1.016 0 1.761.955 1.515 1.94l-.151.605A1.921 1.921 0 0112 10.5M3 11l.837.502a7 7 0 003.602.998h.122a7 7 0 003.602-.998L12 11m-6.5 1l1-1h2l1 1"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgSimohamed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSimohamed.displayName = "Simohamed";

export default SvgSimohamed;
