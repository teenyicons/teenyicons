import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgInEarHeadphones = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M14.5 12.5v.5h.5v-.5h-.5zm-2 0H12v.5h.5v-.5zm-12 0H0v.5h.5v-.5zm2 0v.5H3v-.5h-.5zM10 5V1.654H9V5h1zm4-1.5v9h1v-9h-1zm.5 8.5h-2v1h2v-1zm-2-6H11v1h1.5V6zm-1.846-5h.846V0h-.846v1zM11 6a1 1 0 01-1-1H9a2 2 0 002 2V6zm4-2.5A3.5 3.5 0 0011.5 0v1A2.5 2.5 0 0114 3.5h1zm-5-1.846c0-.361.293-.654.654-.654V0C9.74 0 9 .74 9 1.654h1zM13 12.5V15h1v-2.5h-1zM6 5V1.654H5V5h1zM0 3.5v9h1v-9H0zM.5 13h2v-1h-2v1zm2-6H4V6H2.5v1zm1.846-7H3.5v1h.846V0zM4 7a2 2 0 002-2H5a1 1 0 01-1 1v1zM1 3.5A2.5 2.5 0 013.5 1V0A3.5 3.5 0 000 3.5h1zm5-1.846C6 .74 5.26 0 4.346 0v1c.361 0 .654.293.654.654h1zM1 12.5V15h1v-2.5H1zM12 4v2.5h1V4h-1zM2 4v2.5h1V4H2zm11 8.5v-6h-1v6h1zm-10 0v-6H2v6h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgInEarHeadphones.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgInEarHeadphones.displayName = "InEarHeadphones";

export default SvgInEarHeadphones;
