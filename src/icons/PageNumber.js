import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPageNumber = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M10.5.5l.354-.354L10.707 0H10.5v.5zm3 3h.5v-.207l-.146-.147-.354.354zm-4 9l-.354-.354A.5.5 0 009.5 13v-.5zm3 1.5h-10v1h10v-1zM2.5 1h8V0h-8v1zm7.646-.146l3 3 .708-.708-3-3-.708.708zM2.5 14a.5.5 0 01-.5-.5H1A1.5 1.5 0 002.5 15v-1zm10 1a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM2.5 0A1.5 1.5 0 001 1.5h1a.5.5 0 01.5-.5V0zM12 12H9.5v1H12v-1zm-2.146.854l1.792-1.793-.707-.707-1.793 1.792.708.708zM10.793 9H10.5v1h.293V9zM10.5 9A1.5 1.5 0 009 10.5h1a.5.5 0 01.5-.5V9zm1.5 1.207C12 9.54 11.46 9 10.793 9v1c.114 0 .207.093.207.207h1zm-.354.854c.227-.227.354-.534.354-.854h-1a.207.207 0 01-.06.147l.706.707zM13 3.5v10h1v-10h-1zm-11 10v-12H1v12h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPageNumber.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPageNumber.displayName = "PageNumber";

export default SvgPageNumber;
