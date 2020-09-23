import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFlagAlt = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M12.5 6.5l.224.447a.5.5 0 00.033-.876L12.5 6.5zm-10-6l.257-.429A.5.5 0 002 .5h.5zm10.257 5.571l-10-6-.514.858 10 6 .514-.858zM2 .5v11h1V.5H2zm.724 11.447l10-5-.448-.894-10 5 .448.894zM3 15v-3.5H2V15h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFlagAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFlagAlt.displayName = "FlagAlt";

export default SvgFlagAlt;
