import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgWand = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.853 8.848l.354-.353-.707-.707-.353.353.706.707zM9 10.493v.5h1v-.5H9zm1-.999v-.5H9v.5h1zM9 1.5V2h1v-.5H9zM10 .5V0H9v.5h1zM4.5 4.997H4v1h.5v-1zm1 1H6v-1h-.5v1zm8-1H13v1h.5v-1zm1 1h.5v-1h-.5v1zm-2.353-3.852l-.354.354.707.707.353-.354-.706-.707zm1.706-.292l.354-.353L13.5.792l-.353.354.706.707zm-8-.707L5.5.792l-.707.708.354.353.706-.707zm.294 1.706l.353.354.707-.707-.354-.354-.706.707zm6.706 5.29l-.353-.354-.707.707.354.353.706-.707zm.294 1.706l.353.353.707-.707-.354-.354-.706.708zM.853 14.844l6-5.996-.706-.707-6 5.996.706.707zM10 10.495v-1H9v1h1zm0-8.995V.5H9v1h1zM4.5 5.997h1v-1h-1v1zm9 0h1v-1h-1v1zm-.647-3.145l1-.999-.706-.707-1 1 .706.706zm-7.706-.999l1 1 .706-.708-1-1-.706.708zm7 6.995l1 1 .706-.708-1-.999-.706.707z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgWand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgWand.displayName = "Wand";

export default SvgWand;
