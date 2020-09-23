import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGlobeAmericas = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 5.5V5a.5.5 0 00-.5.5h.5zm0 1l.354.354L5 6.707V6.5h-.5zm-1.707.293l-.354.353.354-.353zM6.5 13H7v-.207l-.146-.147L6.5 13zm-1-1H5v.207l.146.147L5.5 12zm0-1.5H6v-.207l-.146-.147-.354.354zm-1-1H4v.207l.146.147L4.5 9.5zm0-1V8a.5.5 0 00-.5.5h.5zM9 .5v2h1v-2H9zM8.5 3h-1v1h1V3zm-3 2h-1v1h1V5zM4 5.5v1h1v-1H4zm.146.646l-.292.293.707.707.293-.292-.708-.708zm-1 .293L1.354 4.646l-.708.708L2.44 7.146l.707-.707zM6 4.5a.5.5 0 01-.5.5v1A1.5 1.5 0 007 4.5H6zM7.5 3A1.5 1.5 0 006 4.5h1a.5.5 0 01.5-.5V3zM3.854 6.44a.5.5 0 01-.708 0l-.707.706a1.5 1.5 0 002.122 0l-.707-.707zM9 2.5a.5.5 0 01-.5.5v1A1.5 1.5 0 0010 2.5H9zm-2 12V13H6v1.5h1zm-.146-1.854l-1-1-.708.708 1 1 .708-.708zM6 12v-1.5H5V12h1zm-.146-1.854l-1-1-.708.708 1 1 .708-.708zM5 9.5v-1H4v1h1zM4.5 9h4V8h-4v1zm4.5.5v.667h1V9.5H9zm1.833 2.5H13.5v-1h-2.667v1zM10 11.167c0 .46.373.833.833.833v-1c.092 0 .167.075.167.167h-1zM9.833 11c.092 0 .167.075.167.167h1C11 10.522 10.478 10 9.833 10v1zM9 10.167c0 .46.373.833.833.833v-1c.092 0 .167.075.167.167H9zM8.5 9a.5.5 0 01.5.5h1A1.5 1.5 0 008.5 8v1zm-1 5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGlobeAmericas.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGlobeAmericas.displayName = "GlobeAmericas";

export default SvgGlobeAmericas;
