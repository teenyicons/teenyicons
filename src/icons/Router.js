import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRouter = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1.5 9.5V9H1v.5h.5zm12 0h.5V9h-.5v.5zm0 5v.5h.5v-.5h-.5zm-12 0H1v.5h.5v-.5zm1.72-8.339C4.373 4.761 5.916 4 7.5 4V3c-1.917 0-3.732.924-5.052 2.525l.771.636zM7.5 4c1.583 0 3.126.762 4.281 2.161l.771-.636C11.232 3.924 9.417 3 7.5 3v1zm-6.614.318C2.658 2.17 5.04 1 7.5 1V0C4.71 0 2.055 1.33.114 3.682l.772.636zM7.5 1c2.46 0 4.842 1.17 6.614 3.318l.772-.636C12.945 1.329 10.29 0 7.5 0v1zM7 6v3h1V6H7zm-5.5 4h12V9h-12v1zM13 9.5v5h1v-5h-1zm.5 4.5h-12v1h12v-1zM2 14.5v-5H1v5h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgRouter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRouter.displayName = "Router";

export default SvgRouter;
