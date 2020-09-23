import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPaintbucket = forwardRef(
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
          d="M4.5 0A2.5 2.5 0 002 2.5v3.793l-.44.44a2.5 2.5 0 000 3.535l3.172 3.171a2.5 2.5 0 003.536 0l4.171-4.171a2.5 2.5 0 000-3.536L9.268 2.561a2.498 2.498 0 00-2.342-.666A2.501 2.501 0 004.5 0zM6 3.707V7h1V2.914a1.5 1.5 0 011.56.354l3.172 3.171a1.5 1.5 0 010 2.122l-.44.439H1.915a1.5 1.5 0 01.354-1.56L6 3.706zm-.009-1.372A1.5 1.5 0 003 2.5v2.793L5.732 2.56c.082-.083.169-.158.259-.226z"
          fill={color}
        />
        <path
          d="M12.645 9.737l1.534 1.534a2.17 2.17 0 11-3.069 0l1.535-1.534z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPaintbucket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPaintbucket.displayName = "Paintbucket";

export default SvgPaintbucket;
