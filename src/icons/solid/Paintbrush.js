import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPaintbrush = forwardRef(
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
          d="M14.854.146a.5.5 0 01.079.605l-3.841 6.634-3.477-3.477L14.25.068a.5.5 0 01.605.078zM6.72 4.427l-1.97 1.14a.5.5 0 00-.104.787l4 4a.5.5 0 00.787-.103l1.14-1.97L6.72 4.426zM.99 10.441a3.063 3.063 0 012.947-2.227H4a3 3 0 013 3v.053a2.947 2.947 0 01-2.947 2.947h-.08c-.386 0-.767-.086-1.115-.252a1.594 1.594 0 00-1.57.113l-.51.341a.5.5 0 01-.759-.553l.971-3.422z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPaintbrush.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPaintbrush.displayName = "Paintbrush";

export default SvgPaintbrush;
