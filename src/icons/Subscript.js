import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSubscript = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M12.5 14.5l-.354-.354A.5.5 0 0012.5 15v-.5zM15 14h-2.5v1H15v-1zm-2.146.854l1.792-1.793-.707-.707-1.793 1.792.708.708zM13.793 11H13.5v1h.293v-1zm-.293 0a1.5 1.5 0 00-1.5 1.5h1a.5.5 0 01.5-.5v-1zm1.5 1.207C15 11.54 14.46 11 13.793 11v1c.114 0 .207.093.207.207h1zm-.354.854c.227-.227.354-.534.354-.854h-1a.207.207 0 01-.06.147l.706.707zM1.9 13.8l9-12-.8-.6-9 12 .8.6zm-.8-12l9 12 .8-.6-9-12-.8.6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSubscript.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSubscript.displayName = "Subscript";

export default SvgSubscript;
