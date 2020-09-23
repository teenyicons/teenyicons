import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgNintendoSwitch = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M8.5 14.5H8a.5.5 0 00.5.5v-.5zm0-12V2a.5.5 0 00-.5.5h.5zm6 9h.5-.5zm-3 3V14v.5zm3-9H14h.5zm-3-3V3v-.5zm-5-2H7a.5.5 0 00-.5-.5v.5zm0 12v.5a.5.5 0 00.5-.5h-.5zm-6-9H1 .5zm3-3V1 .5zm0 12v.5-.5zm-3-3H0h.5zm13.5-4v6h1v-6h-1zM11.5 14h-3v1h3v-1zm-2.5.5v-12H8v12h1zM8.5 3h3V2h-3v1zm5.5 8.5a2.5 2.5 0 01-2.5 2.5v1a3.5 3.5 0 003.5-3.5h-1zm1-6A3.5 3.5 0 0011.5 2v1A2.5 2.5 0 0114 5.5h1zm-9-5v12h1V.5H6zM6.5 12h-3v1h3v-1zM1 9.5v-6H0v6h1zM3.5 1h3V0h-3v1zM1 3.5A2.5 2.5 0 013.5 1V0A3.5 3.5 0 000 3.5h1zM3.5 12A2.5 2.5 0 011 9.5H0A3.5 3.5 0 003.5 13v-1zm9.5-1.5A1.5 1.5 0 0011.5 9v1a.5.5 0 01.5.5h1zM11.5 12a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM10 10.5a1.5 1.5 0 001.5 1.5v-1a.5.5 0 01-.5-.5h-1zm1 0a.5.5 0 01.5-.5V9a1.5 1.5 0 00-1.5 1.5h1zM3.5 5a.5.5 0 01-.5-.5H2A1.5 1.5 0 003.5 6V5zm.5-.5a.5.5 0 01-.5.5v1A1.5 1.5 0 005 4.5H4zM3.5 4a.5.5 0 01.5.5h1A1.5 1.5 0 003.5 3v1zm0-1A1.5 1.5 0 002 4.5h1a.5.5 0 01.5-.5V3z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgNintendoSwitch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgNintendoSwitch.displayName = "NintendoSwitch";

export default SvgNintendoSwitch;
