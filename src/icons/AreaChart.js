import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAreaChart = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 14.5H0v.5h.5v-.5zm6-9l.4-.3a.5.5 0 00-.816.023L6.5 5.5zm3 4l-.4.3a.5.5 0 00.807-.01L9.5 9.5zM0 0v14.5h1V0H0zm.5 15H15v-1H.5v1zm2.416-3.223l4-6-.832-.554-4 6 .832.554zM6.1 5.8l3 4 .8-.6-3-4-.8.6zm3.807 3.99l5-7-.814-.58-5 7 .814.58z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAreaChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAreaChart.displayName = "AreaChart";

export default SvgAreaChart;
