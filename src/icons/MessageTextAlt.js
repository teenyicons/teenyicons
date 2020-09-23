import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMessageTextAlt = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 11.493H4v-.5h-.5v.5zm0 2.998H3a.5.5 0 00.8.4l-.3-.4zm4-2.998v-.5h-.167l-.133.1.3.4zm-3-7.496H4v1h.5v-1zm6 1h.5v-1h-.5v1zm-6 1.998H4v1h.5v-1zm4 1H9v-1h-.5v1zM3 11.493v2.998h1v-2.998H3zm.8 3.398l4-2.998-.6-.8-4 2.998.6.8zm3.7-2.898h6v-1h-6v1zm6 0c.829 0 1.5-.67 1.5-1.5h-1c0 .277-.223.5-.5.5v1zm1.5-1.5V1.5h-1v8.994h1zM15 1.5C15 .67 14.329 0 13.5 0v1c.277 0 .5.223.5.5h1zM13.5 0h-12v1h12V0zm-12 0C.671 0 0 .67 0 1.5h1c0-.277.223-.5.5-.5V0zM0 1.5v8.993h1V1.5H0zm0 8.993c0 .83.671 1.5 1.5 1.5v-1a.499.499 0 01-.5-.5H0zm1.5 1.5h2v-1h-2v1zm3-6.996h6v-1h-6v1zm0 2.998h4v-1h-4v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMessageTextAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMessageTextAlt.displayName = "MessageTextAlt";

export default SvgMessageTextAlt;
