import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgWan = forwardRef(
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
          d="M.953 5L.01.605.99.395 1.976 5H5.9l1.122-3.647a.5.5 0 01.956 0L9.1 5h3.924l.987-4.605.978.21L14.047 5H15v1h-1.167l-.643 3H15v1h-2.024l-.987 4.605a.5.5 0 01-.967.042L9.592 10H5.408l-1.43 4.647a.5.5 0 01-.967-.042L2.024 10H0V9h1.81l-.643-3H0V5h.953zM2.19 6l.643 3h1.836l.923-3H2.19zm4.449 0l-.924 3h3.57L8.36 6H6.64zm1.415-1L7.5 3.2 6.946 5h1.108zm1.354 1l.923 3h1.836l.643-3H9.408zm2.545 4h-1.314l.774 2.518.54-2.518zM4.36 10H3.047l.54 2.518L4.36 10z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgWan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgWan.displayName = "Wan";

export default SvgWan;
