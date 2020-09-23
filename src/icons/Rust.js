import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRust = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2 10.5h5m-4.5-6H9a1.5 1.5 0 110 3H4.5m0-3v6m3-3h1a2 2 0 012 2 1 1 0 001 1H13M7.5.5l1.344 1.11 1.693-.417.73 1.584 1.706.359-.03 1.743 1.382 1.063L13.54 7.5l.784 1.558-1.382 1.063.03 1.743-1.707.359-.729 1.584-1.693-.418L7.5 14.5l-1.344-1.11-1.693.417-.73-1.584-1.706-.359.03-1.743L.675 9.058 1.46 7.5.675 5.942 2.057 4.88l-.03-1.743 1.706-.359.73-1.584 1.693.417L7.5.5z"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgRust.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRust.displayName = "Rust";

export default SvgRust;
