import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBasket = forwardRef(
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
          d="M6.929.757L4.383 5h6.234L8.07.757 8.93.243 11.783 5h2.514c.388 0 .703.315.703.703v.439a18.96 18.96 0 01-2.002 8.48.684.684 0 01-.612.378H2.614a.685.685 0 01-.612-.379A18.96 18.96 0 010 6.141v-.438C0 5.315.315 5 .703 5h2.514L6.07.243l.858.514z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBasket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBasket.displayName = "Basket";

export default SvgBasket;
