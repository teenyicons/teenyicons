import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRuby = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M14.5 14.5v.5h.5v-.5h-.5zm0-14h.5V0h-.5v.5zm-6 0V0h-.207l-.147.146L8.5.5zm-8 8l-.354-.354L0 8.293V8.5h.5zm0 6H0v.5h.5v-.5zm4-4l-.224.447.019.01.02.007.185-.464zm0-6V4a.5.5 0 00-.5.5h.5zm6 0l.464-.186-.008-.019-.009-.019-.447.224zm4.5 10V.5h-1v14h1zM14.5 0h-6v1h6V0zM8.146.146l-8 8 .708.708 8-8-.708-.708zM0 8.5v6h1v-6H0zM.5 15h14v-1H.5v1zM14.146.146l-14 14 .708.708 14-14-.708-.708zM5 10.5v-6H4v6h1zM4.5 5h6V4h-6v1zm-.186 5.964l10 4 .372-.928-10-4-.372.928zm5.722-6.278l4 10 .928-.372-4-10-.928.372zM8.053.724l2 4 .894-.448-2-4-.894.448zM.276 8.947l4 2 .448-.894-4-2-.448.894z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgRuby.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRuby.displayName = "Ruby";

export default SvgRuby;
