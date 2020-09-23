import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGooglePlayStore = forwardRef(
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
          d="M1.251.066a.5.5 0 01.5.002l7.843 4.575-2.427 2.184L1 1.277V.5a.5.5 0 01.251-.434zM1 2.623v9.754L6.42 7.5 1 2.623zM1 13.723v.777a.5.5 0 00.752.432l7.842-4.575-2.427-2.184L1 13.723zM10.501 9.828l3.25-1.896a.5.5 0 000-.864l-3.25-1.896L7.914 7.5l2.587 2.328z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGooglePlayStore.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGooglePlayStore.displayName = "GooglePlayStore";

export default SvgGooglePlayStore;
