import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEyeClosed = forwardRef(
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
          d="M2.497 6.666C3.56 7.848 5.186 9 7.5 9s3.939-1.152 5.003-2.334a9.37 9.37 0 001.449-2.164 4.967 4.967 0 00.08-.18l.004-.007v-.001l.464.186.464.186v.002l-.003.004-.005.014a3.334 3.334 0 01-.1.222 10.37 10.37 0 01-1.61 2.406 9.204 9.204 0 01-.598.607l1.706 1.705-.708.708-1.774-1.775A7.304 7.304 0 018 9.984V12H7V9.984A7.304 7.304 0 013.128 8.58l-1.774 1.775-.708-.708 1.706-1.705a9.237 9.237 0 01-.599-.607 10.367 10.367 0 01-1.61-2.406 6.064 6.064 0 01-.099-.222L.04 4.692l-.002-.004v-.001H.035L.5 4.5l.464-.186.004.008a2.633 2.633 0 00.08.18 9.368 9.368 0 001.449 2.164zM.964 4.314z"
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
