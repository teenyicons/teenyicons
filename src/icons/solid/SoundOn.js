import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSoundOn = forwardRef(
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
          d="M8.746 1.065A.5.5 0 019 1.5v12a.5.5 0 01-.757.429L3.362 11H1.5A1.5 1.5 0 010 9.5V5.497c0-.829.672-1.499 1.5-1.499h1.862l4.88-2.927a.5.5 0 01.504-.006zM13.854 4.144l-.354-.353-.707.707.351.352.003.002.02.022a3.194 3.194 0 01.386.597c.22.439.447 1.112.447 2.025 0 .913-.228 1.586-.447 2.025-.11.22-.219.382-.297.486a1.988 1.988 0 01-.11.133l-.002.003-.351.35.707.708.354-.353-.354-.354.354.354.001-.002.002-.002.005-.005.014-.014.043-.048c.035-.04.082-.097.137-.17.11-.146.251-.36.391-.639.28-.56.553-1.386.553-2.472s-.272-1.911-.553-2.472a4.19 4.19 0 00-.39-.639 2.89 2.89 0 00-.181-.217l-.014-.015-.005-.005-.002-.002c0-.001-.002-.002-.355.352l.354-.354z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSoundOn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSoundOn.displayName = "SoundOn";

export default SvgSoundOn;
