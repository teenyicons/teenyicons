import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDiscount = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M5 5.5h1m3 4h1M10 5l-5 5M6.801.79L5.672 1.917a.988.988 0 01-.698.29H3.196a.988.988 0 00-.988.988v1.778a.988.988 0 01-.29.698L.79 6.802a.988.988 0 000 1.397l1.13 1.129c.185.185.289.436.289.698v1.778c0 .546.442.988.988.988h1.778c.262 0 .513.104.698.29l1.13 1.129a.988.988 0 001.397 0l1.129-1.13a.988.988 0 01.698-.289h1.778a.988.988 0 00.988-.988v-1.778c0-.262.104-.513.29-.698l1.129-1.13a.988.988 0 000-1.397l-1.13-1.129a.988.988 0 01-.289-.698V3.196a.988.988 0 00-.988-.988h-1.778a.988.988 0 01-.698-.29L8.198.79a.988.988 0 00-1.397 0z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgDiscount.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDiscount.displayName = "Discount";

export default SvgDiscount;
