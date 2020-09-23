import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDocker = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 5.5V5H0v.5h.5zm2-2V3H2v.5h.5zm4-2V1H6v.5h.5zm2 0H9V1h-.5v.5zm4 6H12V8h.5v-.5zM1 7.5v-2H0v2h1zm2 0v-4H2v4h1zM2.5 4h6V3h-6v1zM8 3.5v4h1v-4H8zm-3 4v-4H4v4h1zm2 0v-6H6v6h1zM6.5 2h2V1h-2v1zM8 1.5v2h1v-2H8zm5.736 8.5H15V9h-1.264v1zM10 5v.5h1V5h-1zm2 1.5v1h1v-1h-1zm.5 1.5h1V7h-1v1zm1.5.5v1h1v-1h-1zm-.5-.5a.5.5 0 01.5.5h1A1.5 1.5 0 0013.5 7v1zm-2-2a.5.5 0 01.5.5h1A1.5 1.5 0 0011.5 5v1zM3 10h1V9H3v1zm5.5-3h-8v1h8V7zM0 7.5v1h1v-1H0zM5.5 14h.528v-1H5.5v1zm.528 0a7.736 7.736 0 006.23-3.15l-.805-.593A6.737 6.737 0 016.028 13v1zM0 8.5A5.5 5.5 0 005.5 14v-1A4.5 4.5 0 011 8.5H0zM.5 6h11V5H.5v1zm9.5-.5A1.5 1.5 0 018.5 7v1A2.5 2.5 0 0011 5.5h-1zM13.736 9c-.96 0-1.769.558-2.283 1.257l.806.593c.383-.522.922-.85 1.477-.85V9z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDocker.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDocker.displayName = "Docker";

export default SvgDocker;
