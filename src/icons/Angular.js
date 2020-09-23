import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAngular = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5.5l.137-.48a.5.5 0 00-.274 0L7.5.5zm-7 2l-.137-.48a.5.5 0 00-.36.535L.5 2.5zm1 9l-.497.055a.5.5 0 00.273.392L1.5 11.5zm6 3l-.224.447a.5.5 0 00.448 0L7.5 14.5zm6-3l.224.447a.5.5 0 00.273-.392L13.5 11.5zm1-9l.497.055a.5.5 0 00-.36-.536L14.5 2.5zm-7 .5l.458-.2L7.5 1.753 7.042 2.8 7.5 3zM7.363.02l-7 2 .274.96 7-2-.274-.96zM.003 2.554l1 9 .994-.11-1-9-.994.11zm1.273 9.392l6 3 .448-.894-6-3-.448.894zm6.448 3l6-3-.448-.894-6 3 .448.894zm6.273-3.392l1-9-.994-.11-1 9 .994.11zm.64-9.536l-7-2-.274.962 7 2 .274-.962zM4.458 11.2l3.5-8-.916-.4-3.5 8 .916.4zm2.584-8l3.5 8 .916-.4-3.5-8-.916.4zM5 9h5V8H5v1z"
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
