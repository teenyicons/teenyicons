import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgThumbDown = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 9.5H3v.146l.078.122L3.5 9.5zm2.698 4.24l.421-.27-.421.27zm2.667-1.51l-.448.223.448-.224zM7.5 9.5V9a.5.5 0 00-.447.724L7.5 9.5zm7-5h.5v-.167l-.1-.133-.4.3zm-2.4-3.2l.4-.3-.4.3zM8.282 14.231l.257.429-.257-.429zM1 10V0H0v10h1zm2.078-.232l2.698 4.24.843-.537-2.697-4.24-.844.537zm6.234 2.237L7.947 9.276l-.894.448 1.364 2.729.895-.447zM7.5 10h5V9h-5v1zM15 7.5v-3h-1v3h1zm-.1-3.3L12.5 1l-.8.6 2.4 3.2.8-.6zM10.5 0h-5v1h5V0zM3 2.5v7h1v-7H3zm9.5 7.5A2.5 2.5 0 0015 7.5h-1A1.5 1.5 0 0112.5 9v1zm-7-10A2.5 2.5 0 003 2.5h1A1.5 1.5 0 015.5 1V0zm3.039 14.66a2.034 2.034 0 00.773-2.655l-.895.448c.242.483.07 1.071-.393 1.35l.515.857zM12.5 1a2.5 2.5 0 00-2-1v1a1.5 1.5 0 011.2.6l.8-.6zM5.776 14.008a2.034 2.034 0 002.763.652l-.515-.858a1.034 1.034 0 01-1.405-.331l-.843.537z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgThumbDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgThumbDown.displayName = "ThumbDown";

export default SvgThumbDown;
