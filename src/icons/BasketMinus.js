import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBasketMinus = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.449 14.398l.447-.224-.447.224zm10.102 0l.447.224-.447-.224zM.703 6h13.594V5H.703v1zM14 5.703v.439h1v-.439h-1zM12.386 14H2.614v1h9.772v-1zM1 6.142v-.439H0v.439h1zm1.896 8.032A17.96 17.96 0 011 6.142H0c0 2.944.685 5.847 2.002 8.48l.894-.448zM2.614 14c.12 0 .229.068.282.174l-.894.448a.685.685 0 00.612.378v-1zm9.49.174a.315.315 0 01.282-.174v1c.26 0 .496-.146.612-.378l-.894-.448zM14 6.142c0 2.788-.65 5.538-1.896 8.032l.894.448A18.96 18.96 0 0015 6.142h-1zM14.297 6A.297.297 0 0114 5.703h1A.703.703 0 0014.297 5v1zM.703 5A.703.703 0 000 5.703h1A.297.297 0 01.703 6V5zm3.226.757l3-5L6.07.243l-3 5 .858.514zm4.142-5l3 5 .858-.514-3-5-.858.514zM5 10h5V9H5v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBasketMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBasketMinus.displayName = "BasketMinus";

export default SvgBasketMinus;
