import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgKanban = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 15 15"
        fill="none"
        ref={ref}
        {...props}
      >
        <path
          d="M0 1h7V0H0v1zM8 1h7V0H8v1zM.5 3a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-6zM8.5 3a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-6z"
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
