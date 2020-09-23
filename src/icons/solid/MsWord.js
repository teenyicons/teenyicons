import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMsWord = forwardRef(
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
          d="M2.015 5.621l1 4a.5.5 0 00.901.156l.584-.876.584.876a.5.5 0 00.901-.156l1-4-.97-.242-.726 2.903-.373-.56a.5.5 0 00-.832 0l-.373.56-.726-2.903-.97.242z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.5 0A1.5 1.5 0 002 1.5V3h-.5A1.5 1.5 0 000 4.5v6A1.5 1.5 0 001.5 12H2v1.5A1.5 1.5 0 003.5 15h10a1.5 1.5 0 001.5-1.5v-12A1.5 1.5 0 0013.5 0h-10zm-2 4a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMsWord.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMsWord.displayName = "MsWord";

export default SvgMsWord;
