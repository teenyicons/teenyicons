import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgVrHeadset = forwardRef(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.467 3.572l.394.985c.478.106.953.227 1.425.362.423.12.714.507.714.946V9.21A3.79 3.79 0 0111.21 13h-.542a.783.783 0 01-.687-.408c-1.071-1.963-3.89-1.963-4.962 0a.783.783 0 01-.687.408H3.79A3.79 3.79 0 010 9.21V5.865c0-.44.291-.825.714-.946.472-.135.947-.256 1.425-.362l.394-.985A2.5 2.5 0 014.854 2h5.292a2.5 2.5 0 012.321 1.572zm-9.006.37A1.5 1.5 0 014.854 3h5.292a1.5 1.5 0 011.393.943l.153.384a24.703 24.703 0 00-8.384 0l.153-.384z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgVrHeadset.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgVrHeadset.displayName = "VrHeadset";

export default SvgVrHeadset;
