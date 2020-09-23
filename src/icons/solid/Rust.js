import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRust = forwardRef(
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
          d="M7.174.115a.521.521 0 01.652 0l1.178.95 1.483-.357a.516.516 0 01.588.276l.64 1.355 1.494.307c.24.05.411.258.407.498l-.027 1.492 1.211.91a.492.492 0 01.145.621L14.26 7.5l.686 1.333c.11.214.05.475-.145.62l-.726.547h-2.478a.506.506 0 01-.512-.5 2.47 2.47 0 00-.861-1.87c.521-.363.86-.958.86-1.63 0-1.105-.916-2-2.047-2H1.399l-.015-.856a.503.503 0 01.407-.498l1.495-.307.639-1.355a.516.516 0 01.588-.276l1.483.357 1.178-.95z"
          fill={color}
        />
        <path
          d="M.926 5L.2 5.546a.492.492 0 00-.145.621L.74 7.5.055 8.833a.492.492 0 00.145.62L.926 10h2.99V5H.926z"
          fill={color}
        />
        <path
          d="M1.4 11l-.016.856a.503.503 0 00.407.498l1.495.307.639 1.355c.103.218.35.334.588.276l1.483-.357 1.178.95c.19.153.463.153.652 0l1.178-.95 1.483.357a.516.516 0 00.588-.276l.64-1.355 1.494-.307c.24-.05.411-.258.407-.498L13.6 11h-2.005c-.848 0-1.536-.672-1.536-1.5S9.372 8 8.524 8H4.94v2h2.048v1H1.399zM9.036 7H4.94V5h4.096c.565 0 1.024.448 1.024 1S9.6 7 9.036 7z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgRust.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRust.displayName = "Rust";

export default SvgRust;
