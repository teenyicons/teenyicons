import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBag = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.401 6.39l-.497-.056.497.056zm-.778 7l.497.055-.497-.055zm11.754 0l-.497.055.497-.055zm-.778-7l.497-.056-.497.056zM1.904 6.334l-.778 7 .994.11.778-7-.994-.11zM2.617 15h9.766v-1H2.617v1zm11.257-1.666l-.778-7-.994.11.778 7 .993-.11zM11.604 5H3.396v1h8.21V5zm1.492 1.334A1.5 1.5 0 0011.605 5v1a.5.5 0 01.497.445l.994-.11zM12.383 15a1.5 1.5 0 001.49-1.666l-.993.11a.5.5 0 01-.497.556v1zM1.126 13.334A1.5 1.5 0 002.617 15v-1a.5.5 0 01-.497-.555l-.994-.11zm1.772-6.89A.5.5 0 013.395 6V5a1.5 1.5 0 00-1.49 1.334l.993.11zM5 4v-.5H4V4h1zm5-.5V4h1v-.5h-1zM7.5 1A2.5 2.5 0 0110 3.5h1A3.5 3.5 0 007.5 0v1zM5 3.5A2.5 2.5 0 017.5 1V0A3.5 3.5 0 004 3.5h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBag.displayName = "Bag";

export default SvgBag;
