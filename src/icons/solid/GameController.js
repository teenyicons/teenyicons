import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGameController = forwardRef(
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
          d="M0 5.5A3.5 3.5 0 013.5 2h8A3.5 3.5 0 0115 5.5v4.528a2.972 2.972 0 01-5.63 1.329L9.19 11H5.809l-.179.357A2.972 2.972 0 010 10.027V5.5zM4 8V7H3V6h1V5h1v1h1v1H5v1H4zm6 0H9V7h1v1zm1-2h1V5h-1v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGameController.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGameController.displayName = "GameController";

export default SvgGameController;
