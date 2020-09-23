import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAnja = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M9.007 4.4l.034-.498-.034.498zM2.955 8.139l-.461-.194.46.194zM7.5 14c-1.627 0-3.1-.958-3.762-2.444l-.913.406A5.116 5.116 0 007.5 15v-1zm3.761-2.444A4.116 4.116 0 017.5 14v1a5.116 5.116 0 004.675-3.038l-.914-.406zM2 15V6H1v9h1zM7.5 1A5.5 5.5 0 0113 6.5h1A6.5 6.5 0 007.5 0v1zM2 6.5A5.5 5.5 0 017.5 1V0A6.5 6.5 0 001 6.5h1zm11 0V15h1V6.5h-1zM8.974 4.9l1.493.099.066-.998-1.492-.1-.067.998zM11 4.5V3h-1v1.5h1zM3.416 8.331A5.624 5.624 0 018.974 4.9l.067-.997a6.624 6.624 0 00-6.547 4.042l.922.387zm6.73-3.477c.47.47 1.33 1.49 1.69 3.342l.98-.19c-.406-2.1-1.394-3.291-1.962-3.86l-.708.708zM6.5 13H8v-1H6.5v1zM8 13a2 2 0 002-2H9a1 1 0 01-1 1v1zm4.5-4h-2v1h2V9zm-4-1H12V7H8.5v1zm-5 0h3V7h-3v1zm3 0h2V7h-2v1zm-2 1h-2v1h2V9zM6 7.5A1.5 1.5 0 014.5 9v1A2.5 2.5 0 007 7.5H6zM10.5 9A1.5 1.5 0 019 7.5H8a2.5 2.5 0 002.5 2.5V9zm-6.762 2.556c-.495-1.116-.73-2.255-.322-3.225l-.922-.387c-.57 1.36-.2 2.826.33 4.018l.914-.406zm8.437.406c.53-1.19.91-2.574.642-3.957l-.982.19c.212 1.09-.08 2.25-.574 3.36l.914.407z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAnja.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAnja.displayName = "Anja";

export default SvgAnja;
