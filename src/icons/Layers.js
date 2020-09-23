import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLayers = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 1.5l.197-.46a.5.5 0 00-.394 0l.197.46zm-7 3l-.197-.46a.5.5 0 000 .92L.5 4.5zm7 3l-.197.46a.5.5 0 00.394 0L7.5 7.5zm7-3l.197.46a.5.5 0 000-.92l-.197.46zm-7 6l-.197.46.197.084.197-.084-.197-.46zm0 3l-.197.46.197.084.197-.084-.197-.46zM7.303 1.04l-7 3 .394.92 7-3-.394-.92zm-7 3.92l7 3 .394-.92-7-3-.394.92zm7.394 3l7-3-.394-.92-7 3 .394.92zm7-3.92l-7-3-.394.92 7 3 .394-.92zM.303 7.96l7 3 .394-.92-7-3-.394.92zm7.394 3l7-3-.394-.92-7 3 .394.92zm-7.394 0l7 3 .394-.92-7-3-.394.92zm7.394 3l7-3-.394-.92-7 3 .394.92z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLayers.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLayers.displayName = "Layers";

export default SvgLayers;
