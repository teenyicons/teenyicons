import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSuperscript = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M12.5 3.5l-.354-.354A.5.5 0 0012.5 4v-.5zm1.793-1.793l-.354-.353.354.353zM15 3h-2.5v1H15V3zm-2.146.854l1.792-1.793-.707-.707-1.793 1.792.708.708zM13.793 0H13.5v1h.293V0zM13.5 0A1.5 1.5 0 0012 1.5h1a.5.5 0 01.5-.5V0zM15 1.207C15 .54 14.46 0 13.793 0v1c.114 0 .207.093.207.207h1zm-.354.854c.227-.227.354-.534.354-.854h-1a.207.207 0 01-.06.147l.706.707zM1.1 1.8l9 12 .8-.6-9-12-.8.6zm9-.6l-9 12 .8.6 9-12-.8-.6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSuperscript.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSuperscript.displayName = "Superscript";

export default SvgSuperscript;
