import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCostEstimate = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 7H4v1h.5V7zm6 1h.5V7h-.5v1zm-2 2H8v1h.5v-1zm2 1h.5v-1h-.5v1zm-6-7H4v1h.5V4zm2 1H7V4h-.5v1zm4-4.5l.354-.354L10.707 0H10.5v.5zm3 3h.5v-.207l-.146-.147-.354.354zM4.5 8h6V7h-6v1zm4 3h2v-1h-2v1zm-4-6h2V4h-2v1zm8 9h-10v1h10v-1zM2 13.5v-12H1v12h1zM2.5 1h8V0h-8v1zM13 3.5v10h1v-10h-1zM10.146.854l3 3 .708-.708-3-3-.708.708zM2.5 14a.5.5 0 01-.5-.5H1A1.5 1.5 0 002.5 15v-1zm10 1a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM2 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 001 1.5h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCostEstimate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCostEstimate.displayName = "CostEstimate";

export default SvgCostEstimate;
