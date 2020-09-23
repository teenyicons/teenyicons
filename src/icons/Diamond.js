import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDiamond = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 14.5l-.395.307a.5.5 0 00.79 0L7.5 14.5zm-7-9l-.429-.257a.5.5 0 00.034.564L.5 5.5zm3-5V0h-.283L3.07.243 3.5.5zm8 0l.429-.257L11.783 0H11.5v.5zm3 5l.395.307a.5.5 0 00.034-.564L14.5 5.5zm-6.605 8.693l-7-9-.79.614 7 9 .79-.614zM.929 5.757l3-5L3.07.243l-3 5 .858.514zM3.5 1h8V0h-8v1zm7.571-.243l3 5 .858-.514-3-5-.858.514zm3.034 4.436l-7 9 .79.614 7-9-.79-.614z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDiamond.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDiamond.displayName = "Diamond";

export default SvgDiamond;
