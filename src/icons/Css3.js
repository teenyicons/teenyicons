import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCss3 = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5.5V0a.5.5 0 00-.498.542L.5.5zm14 0l.498.042A.5.5 0 0014.5 0v.5zm-1 12l.158.474a.5.5 0 00.34-.433L13.5 12.5zm-6 2l-.158.474a.499.499 0 00.316 0L7.5 14.5zm-6-2l-.498.041a.5.5 0 00.34.433L1.5 12.5zm9-9h.5V3h-.5v.5zm0 6l.158.474L11 9.86V9.5h-.5zm-3 1l-.158.474.158.053.158-.053L7.5 10.5zm-3-1H4v.36l.342.114L4.5 9.5zM.5 1h14V0H.5v1zM14.002.458l-1 12 .996.083 1-12-.996-.083zm-.66 11.568l-6 2 .316.948 6-2-.316-.948zm-5.684 2l-6-2-.316.948 6 2 .316-.948zm-5.66-1.567l-1-12-.996.083 1 12 .996-.083zM10.5 3H4v1h6.5V3zM6 7h4.5V6H6v1zm4-.5v3h1v-3h-1zm.342 2.526l-3 1 .316.948 3-1-.316-.948zm-2.684 1l-3-1-.316.948 3 1 .316-.948zM5 9.5V8H4v1.5h1zm5-6v3h1v-3h-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCss3.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCss3.displayName = "Css3";

export default SvgCss3;
