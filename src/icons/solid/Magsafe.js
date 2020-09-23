import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMagsafe = forwardRef(
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
          d="M12 0H3v3h9V0zM14 4H1v6h3v2h1v3h1v-3h3v3h1v-3h1v-2h3V4z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMagsafe.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMagsafe.displayName = "Magsafe";

export default SvgMagsafe;
