import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDrag = forwardRef(
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
          d="M1 1H0V0h1v1zm4 0H4V0h1v1zm4 0H8V0h1v1zM3 3h11v4h-1V4H4v9h3v1H3V3zM1 5H0V4h1v1zm6.146 2.146a.5.5 0 01.491-.127l7 2a.5.5 0 01.06.94l-3.316 1.422-1.421 3.316a.5.5 0 01-.94-.06l-2-7a.5.5 0 01.126-.49zm1.082 1.082l1.366 4.782.946-2.207a.5.5 0 01.263-.263l2.207-.946-4.782-1.366zM1 9H0V8h1v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDrag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDrag.displayName = "Drag";

export default SvgDrag;
