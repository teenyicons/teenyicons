import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgXls = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13.5 3.5h.5v-.207l-.146-.147-.354.354zm-3-3l.354-.354L10.707 0H10.5v.5zm-4 10H6v.5h.5v-.5zm-2-1H5v-.207l-.146-.147L4.5 9.5zm-2-2H2v.207l.146.147L2.5 7.5zm8-1V6H10v.5h.5zm0 2H10V9h.5v-.5zm2 0h.5V8h-.5v.5zm0 2v.5h.5v-.5h-.5zm-10-1l-.354-.354L2 9.293V9.5h.5zm2-2l.354.354L5 7.707V7.5h-.5zM2 5V1.5H1V5h1zm11-1.5V5h1V3.5h-1zM2.5 1h8V0h-8v1zm7.646-.146l3 3 .708-.708-3-3-.708.708zM2 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 001 1.5h1zM1 12v1.5h1V12H1zm1.5 3h10v-1h-10v1zM14 13.5V12h-1v1.5h1zM12.5 15a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM1 13.5A1.5 1.5 0 002.5 15v-1a.5.5 0 01-.5-.5H1zM6 6v4.5h1V6H6zm.5 5H9v-1H6.5v1zM4 9.5V11h1V9.5H4zm.854-.354l-2-2-.708.708 2 2 .708-.708zM3 7.5V6H2v1.5h1zM13 6h-2.5v1H13V6zm-3 .5v2h1v-2h-1zm.5 2.5h2V8h-2v1zm1.5-.5v2h1v-2h-1zm.5 1.5H10v1h2.5v-1zM3 11V9.5H2V11h1zm-.146-1.146l2-2-.708-.708-2 2 .708.708zM5 7.5V6H4v1.5h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgXls.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgXls.displayName = "Xls";

export default SvgXls;
