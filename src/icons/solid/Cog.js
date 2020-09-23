import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCog = forwardRef(
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
          d="M6.026 7.5c0-.827.66-1.5 1.473-1.5.813 0 1.473.673 1.473 1.5S8.312 9 7.499 9c-.813 0-1.473-.673-1.473-1.5z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.568 0h3.86l.164.837V.84l.27 1.335c.383.172.74.386 1.068.627l1.345-.458.796-.251.417.727 1.087 1.854.425.743-.633.563-1.009.874c.032.197.061.418.061.646 0 .228-.03.45-.06.646l1.012.878.629.559-.428.748-1.084 1.849-.417.73-.807-.258-1.334-.454a5.877 5.877 0 01-1.068.627l-.27 1.335v.003L9.43 15h-3.86l-.163-.839-.27-1.336a5.877 5.877 0 01-1.068-.627l-1.343.457-.799.255-.415-.73-1.088-1.855L0 9.583l.632-.563 1.008-.875A4.075 4.075 0 011.58 7.5c0-.227.03-.45.061-.645l-1.014-.88L0 5.418l.426-.748L1.511 2.82l.415-.728.808.256 1.334.454a5.875 5.875 0 011.068-.627l.27-1.337L5.568 0zM7.5 5C6.144 5 5.045 6.12 5.045 7.5s1.1 2.5 2.454 2.5c1.355 0 2.454-1.12 2.454-2.5S8.853 5 7.5 5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCog.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCog.displayName = "Cog";

export default SvgCog;
