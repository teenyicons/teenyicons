import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLaravel = forwardRef(
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
          d="M4.104 3.397L6.57 8.33l-2.645.882L2.597 3.9l1.507-.502zM9.277 11.508L7.981 8.915l3.157-1.053 1.165 1.83-3.026 1.816zM12.184 6.46l-.622.207-.518-.814.577-.145.563.751z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 2.5A2.5 2.5 0 012.5 0h10A2.5 2.5 0 0115 2.5v10a2.5 2.5 0 01-2.5 2.5h-10A2.5 2.5 0 010 12.5v-10zm4.804.062a.5.5 0 00-.605-.25l-2.357.785a.5.5 0 00-.327.596l1.571 6.285a.5.5 0 00.644.354l3.292-1.098 1.602 3.204a.5.5 0 00.705.205l3.928-2.357a.5.5 0 00.165-.697l-1.306-2.053 1.042-.347a.5.5 0 00.242-.775l-1.178-1.571a.5.5 0 00-.522-.185l-1.571.393a.5.5 0 00-.3.753l.755 1.188L7.53 8.011 4.804 2.562z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLaravel.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLaravel.displayName = "Laravel";

export default SvgLaravel;
