import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgWordpress = forwardRef(
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
          d="M1.5 3a7.5 7.5 0 11-.634 1h1.262l2.893 9.644a.5.5 0 00.957.003l1.541-5.01 1.502 5.007a.5.5 0 00.943.042l3.53-8.827a2.149 2.149 0 00-.705-2.517l-.132-.1a1.929 1.929 0 00-2.7 2.7l.643.858.8-.6-.643-.857a.929.929 0 011.3-1.3l.132.099c.416.312.57.863.377 1.345l-2.999 7.498L7.172 4H8V3H5v1h1.128l.875 2.916-1.497 4.864L3.172 4H4V3H1.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgWordpress.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgWordpress.displayName = "Wordpress";

export default SvgWordpress;
