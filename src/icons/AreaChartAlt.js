import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAreaChartAlt = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 14.5H0v.5h.5v-.5zm1.5-3v.5h1v-.5H2zm13-9V2h-1v.5h1zM0 0v14.5h1V0H0zm.5 15H15v-1H.5v1zM3 11.5c0-1.454.244-2.88.707-3.922C4.177 6.52 4.798 6 5.5 6V5c-1.298 0-2.178.98-2.707 2.172C2.256 8.38 2 9.954 2 11.5h1zM5.5 6c.32 0 .642.158 1.005.492.366.338.713.798 1.095 1.308.368.49.77 1.03 1.217 1.442.45.416 1.004.758 1.683.758V9c-.32 0-.642-.158-1.005-.492C9.13 8.17 8.782 7.71 8.4 7.2c-.368-.49-.77-1.03-1.217-1.442C6.733 5.342 6.179 5 5.5 5v1zm5 4c1.223 0 2.363-.763 3.173-2.045C14.485 6.668 15 4.819 15 2.5h-1c0 2.18-.485 3.832-1.173 4.92C12.137 8.514 11.277 9 10.5 9v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAreaChartAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAreaChartAlt.displayName = "AreaChartAlt";

export default SvgAreaChartAlt;
