import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBasketPlus = forwardRef(
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
          d="M4.383 5L6.93.757 6.07.243 3.217 5H.703A.703.703 0 000 5.703v.439c0 2.944.685 5.847 2.002 8.48a.685.685 0 00.612.378h9.772c.26 0 .496-.146.612-.379A18.96 18.96 0 0015 6.141v-.438A.703.703 0 0014.297 5h-2.514L8.93.243 8.07.757 10.617 5H4.383zM7 12v-2H5V9h2V7h1v2h2v1H8v2H7z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBasketPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBasketPlus.displayName = "BasketPlus";

export default SvgBasketPlus;
