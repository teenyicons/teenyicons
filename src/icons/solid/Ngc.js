import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgNgc = forwardRef(
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
          d="M12.117 3.005a11.58 11.58 0 00-9.234 0A3.065 3.065 0 000 6.065v6.199a1.736 1.736 0 003.289.776l.516-1.033A2.422 2.422 0 007.13 9.133L6.806 8h1.388l-.323 1.133a2.422 2.422 0 003.324 2.874l.516 1.033A1.736 1.736 0 0015 12.264V6.5v-.435a3.065 3.065 0 00-2.883-3.06zm-7.473.433c.65.39 1.15 1.018 1.368 1.785L6.52 7h1.96l.508-1.777a3.063 3.063 0 011.368-1.785 10.582 10.582 0 00-5.712 0zM14 8.925l-1.909 2.386a2.416 2.416 0 01-.08.095l.595 1.187a.736.736 0 001.394-.33V8.926zm-11.012 2.48a2.516 2.516 0 01-.08-.094L1 8.925v3.339a.736.736 0 001.394.33l.594-1.188z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgNgc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgNgc.displayName = "Ngc";

export default SvgNgc;
