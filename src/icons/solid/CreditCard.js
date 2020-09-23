import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCreditCard = forwardRef(
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
          d="M13.5 2A1.5 1.5 0 0115 3.5V5H0V3.5A1.5 1.5 0 011.5 2h12z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 6v5.5A1.5 1.5 0 001.5 13h12a1.5 1.5 0 001.5-1.5V6H0zm2 4h6V9H2v1zm11 0h-3V9h3v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCreditCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCreditCard.displayName = "CreditCard";

export default SvgCreditCard;
