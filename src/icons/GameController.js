import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGameController = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M9.817 11.133l-.447.224.447-.224zM9.5 10.5l.447-.224A.5.5 0 009.5 10v.5zm-4 0V10a.5.5 0 00-.447.276l.447.224zm8.5-5v4.528h1V5.5h-1zm-3.736 5.41l-.317-.634-.894.448.316.633.895-.447zM9.5 10h-4v1h4v-1zm-4.447.276l-.317.634.894.447.317-.633-.894-.448zM1 10.028V5.5H0v4.528h1zM3.5 3h8V2h-8v1zm-.528 9A1.972 1.972 0 011 10.028H0A2.972 2.972 0 002.972 13v-1zm9.056 0c-.747 0-1.43-.422-1.764-1.09l-.894.447A2.972 2.972 0 0012.027 13v-1zM14 10.028C14 11.117 13.117 12 12.028 12v1A2.972 2.972 0 0015 10.028h-1zm-9.264.882A1.972 1.972 0 012.972 12v1a2.972 2.972 0 002.658-1.643l-.894-.447zM15 5.5A3.5 3.5 0 0011.5 2v1A2.5 2.5 0 0114 5.5h1zm-14 0A2.5 2.5 0 013.5 3V2A3.5 3.5 0 000 5.5h1zM3 7h3V6H3v1zm1-2v3h1V5H4zm7 1h1V5h-1v1zM9 8h1V7H9v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGameController.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGameController.displayName = "GameController";

export default SvgGameController;
