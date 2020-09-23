import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEdge = forwardRef(
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
          d="M7.5 0A7.5 7.5 0 000 7.382v.013h.006v.012c-.01 1.13.232 2.25.709 3.275v.002a7.5 7.5 0 009.163 3.932l-.001-.004.067-.023.004-.001a7.518 7.518 0 003.902-3.093.718.718 0 00-.95-1.017c-.167.088-.34.164-.516.23a5.07 5.07 0 01-1.787.322c-2.405 0-4.34-1.64-4.342-3.561a1.221 1.221 0 01.621-1.048l.011-.006c.168-.079.36-.165.607-.16h.005a1.269 1.269 0 011.254 1.17 2.4 2.4 0 01.004.127c0 .157-.095.479-.31.767l-.01.009c-.02.02-.06.058-.102.108a.803.803 0 00-.185.514c0 .375.241.644.471.805h.001c.502.35 1.176.477 1.662.53.504.054.915.035.896.035h.002a3.757 3.757 0 001.907-.526A3.856 3.856 0 0015 6.475c.015-1.286-.438-2.17-.642-2.569l-.032-.063C13.065 1.377 10.369 0 7.5 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgEdge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgEdge.displayName = "Edge";

export default SvgEdge;
