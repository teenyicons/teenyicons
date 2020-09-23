import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHashtag = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M2 5.5h11m-11 4h11m-6.5-8l-2 12m6-12l-2 12" stroke={color} />
      </svg>
    );
  }
);

SvgHashtag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHashtag.displayName = "Hashtag";

export default SvgHashtag;
