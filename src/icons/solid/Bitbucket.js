import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBitbucket = forwardRef(
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
          d="M.5 0a.5.5 0 00-.495.57l2 14A.5.5 0 002.5 15h10a.5.5 0 00.495-.43L14.219 6H9.373l-.333 4H5.96l-.417-5h8.82l.632-4.43A.5.5 0 0014.5 0H.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBitbucket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBitbucket.displayName = "Bitbucket";

export default SvgBitbucket;
