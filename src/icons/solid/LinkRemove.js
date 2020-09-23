import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLinkRemove = forwardRef(
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
          d="M4 3V0h1v3H4zM9.318.975a3.328 3.328 0 114.707 4.707l-3.171 3.172-.708-.708 3.172-3.171a2.328 2.328 0 10-3.293-3.293L6.854 4.854l-.708-.708L9.318.975zM0 4h3v1H0V4zm10.854.854l-6 6-.708-.708 6-6 .708.708zm-6 2l-3.172 3.171a2.329 2.329 0 003.293 3.293l3.171-3.172.708.708-3.172 3.171A3.328 3.328 0 11.975 9.318l3.171-3.172.708.708zM15 11h-3v-1h3v1zm-5 4v-3h1v3h-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLinkRemove.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLinkRemove.displayName = "LinkRemove";

export default SvgLinkRemove;
