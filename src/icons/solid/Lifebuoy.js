import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLifebuoy = forwardRef(
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
          d="M5.404 4.697L2.562 1.855a7.501 7.501 0 019.876 0L9.596 4.697a3.502 3.502 0 00-4.192 0zM10.303 5.404a3.502 3.502 0 010 4.192l2.842 2.842a7.501 7.501 0 000-9.876l-2.842 2.842zM9.596 10.303a3.502 3.502 0 01-4.192 0l-2.842 2.842a7.501 7.501 0 009.876 0l-2.842-2.842zM4.697 5.404a3.502 3.502 0 000 4.192l-2.842 2.842a7.501 7.501 0 010-9.876l2.842 2.842z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLifebuoy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLifebuoy.displayName = "Lifebuoy";

export default SvgLifebuoy;
