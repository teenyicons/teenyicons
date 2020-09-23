import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEyeClosed = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 9C5.186 9 3.561 7.848 2.497 6.666a9.368 9.368 0 01-1.449-2.164 5.065 5.065 0 01-.08-.18l-.004-.007v-.001L.5 4.5l-.464.186v.002l.003.004a2.107 2.107 0 00.026.063l.078.173a10.367 10.367 0 001.61 2.406C2.94 8.652 4.814 10 7.5 10V9zm7-4.5a68.887 68.887 0 01-.464-.186l-.003.008-.015.035-.066.145a9.37 9.37 0 01-1.449 2.164C11.44 7.848 9.814 9 7.5 9v1c2.686 0 4.561-1.348 5.747-2.666a10.365 10.365 0 001.61-2.406 6.164 6.164 0 00.104-.236l.002-.004v-.001h.001L14.5 4.5zM8 12V9.5H7V12h1zm-6.646-1.646l2-2-.708-.708-2 2 .708.708zm10.292-2l2 2 .708-.708-2-2-.708.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgEyeClosed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgEyeClosed.displayName = "EyeClosed";

export default SvgEyeClosed;
