import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgNuxtjs = forwardRef(
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
          d="M6.5 2a.5.5 0 01.429.243l1.527 2.545.613-1.042a.5.5 0 01.862 0l5 8.5A.5.5 0 0114.5 13H.5a.5.5 0 01-.429-.757l6-10A.5.5 0 016.5 2zM5.374 12h6.243L8.465 6.746 5.375 12zM7.88 5.77L4.214 12h-2.83L6.5 3.472 7.879 5.77zm1.163-.005L12.783 12h.843L9.5 4.986l-.458.779z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgNuxtjs.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgNuxtjs.displayName = "Nuxtjs";

export default SvgNuxtjs;
