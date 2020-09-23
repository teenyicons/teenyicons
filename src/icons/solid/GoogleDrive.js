import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGoogleDrive = forwardRef(
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
          d="M4.563 1.258A.5.5 0 015 1h5a.5.5 0 01.436.255L14.23 8H8.473L4.576 1.765a.5.5 0 01-.013-.507zM3.91 14h8.59a.5.5 0 00.447-.276l2-4A.5.5 0 0014.5 9H7.092l-3.181 5zM.064 9.255l3.792-6.742 3.05 4.88-3.982 6.372a.5.5 0 01-.871-.041l-2-4a.5.5 0 01.011-.47z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGoogleDrive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGoogleDrive.displayName = "GoogleDrive";

export default SvgGoogleDrive;
