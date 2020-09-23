import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAngular = forwardRef(
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
        <path d="M7.5 4.247L9.142 8H5.858L7.5 4.247z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.363.02a.5.5 0 01.274 0l7 2a.5.5 0 01.36.535l-1 9a.5.5 0 01-.273.392l-6 3a.5.5 0 01-.448 0l-6-3a.5.5 0 01-.273-.392l-1-9a.5.5 0 01.36-.536l7-2zM7.5 1.752l3.958 9.047-.916.4L9.579 9H5.421l-.963 2.2-.916-.4L7.5 1.753z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAngular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAngular.displayName = "Angular";

export default SvgAngular;
