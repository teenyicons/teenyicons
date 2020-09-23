import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGoogleStreetview = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 11.5H4a.5.5 0 00.5.5v-.5zm6 0v.5a.5.5 0 00.5-.5h-.5zm-6 .5h6v-1h-6v1zm6.5-.5v-2h-1v2h1zm-7-2v2h1v-2H4zM7.5 6A3.5 3.5 0 004 9.5h1A2.5 2.5 0 017.5 7V6zM11 9.5A3.5 3.5 0 007.5 6v1A2.5 2.5 0 0110 9.5h1zm3 2c0 .245-.114.52-.406.816-.294.299-.745.59-1.341.846-1.191.51-2.871.838-4.753.838v1c1.984 0 3.804-.344 5.147-.92.67-.287 1.245-.642 1.659-1.061.416-.422.694-.936.694-1.519h-1zM7.5 14c-1.882 0-3.562-.328-4.753-.838-.596-.256-1.047-.547-1.341-.846C1.114 12.02 1 11.746 1 11.5H0c0 .583.278 1.097.694 1.519.414.42.989.774 1.66 1.062C3.695 14.656 5.515 15 7.5 15v-1zM1 11.5c0-.242.11-.513.394-.805.286-.294.725-.582 1.306-.837l-.4-.916c-.656.287-1.218.64-1.622 1.056C.27 10.416 0 10.925 0 11.5h1zm11.3-1.642c.581.255 1.02.543 1.305.837.284.292.395.563.395.805h1c0-.575-.27-1.084-.678-1.502-.404-.416-.966-.769-1.622-1.056l-.4.916zM7.5 4A1.5 1.5 0 016 2.5H5A2.5 2.5 0 007.5 5V4zM9 2.5A1.5 1.5 0 017.5 4v1A2.5 2.5 0 0010 2.5H9zM7.5 1A1.5 1.5 0 019 2.5h1A2.5 2.5 0 007.5 0v1zm0-1A2.5 2.5 0 005 2.5h1A1.5 1.5 0 017.5 1V0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGoogleStreetview.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGoogleStreetview.displayName = "GoogleStreetview";

export default SvgGoogleStreetview;
