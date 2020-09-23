import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgShop = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1.5 2.5V2a.5.5 0 00-.49.402l.49.098zm12 0l.49-.098A.5.5 0 0013.5 2v.5zm1 5V8a.5.5 0 00.49-.598l-.49.098zm-14 0l-.49-.098A.5.5 0 00.5 8v-.5zm3 3H3v.5h.5v-.5zm8 0v.5h.5v-.5h-.5zM0 15h15v-1H0v1zm1-7.5v7h1v-7H1zm12 0v7h1v-7h-1zM1.5 3h12V2h-12v1zm11.51-.402l1 5 .98-.196-1-5-.98.196zM14.5 7H.5v1h14V7zM.99 7.598l1-5-.98-.196-1 5 .98.196zM1 1h13V0H1v1zm2 6.5v3h1v-3H3zm.5 3.5h8v-1h-8v1zm8.5-.5v-3h-1v3h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgShop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgShop.displayName = "Shop";

export default SvgShop;
