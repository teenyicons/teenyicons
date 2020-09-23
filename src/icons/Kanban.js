import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgKanban = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 3.5V3a.5.5 0 00-.5.5h.5zm6 0H7a.5.5 0 00-.5-.5v.5zm0 11v.5a.5.5 0 00.5-.5h-.5zm-6 0H0a.5.5 0 00.5.5v-.5zm8-11V3a.5.5 0 00-.5.5h.5zm6 0h.5a.5.5 0 00-.5-.5v.5zm0 6v.5a.5.5 0 00.5-.5h-.5zm-6 0H8a.5.5 0 00.5.5v-.5zM0 1h7V0H0v1zm8 0h7V0H8v1zM.5 4h6V3h-6v1zM6 3.5v11h1v-11H6zM6.5 14h-6v1h6v-1zm-5.5.5v-11H0v11h1zM8.5 4h6V3h-6v1zm5.5-.5v6h1v-6h-1zm.5 5.5h-6v1h6V9zM9 9.5v-6H8v6h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgKanban.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgKanban.displayName = "Kanban";

export default SvgKanban;
