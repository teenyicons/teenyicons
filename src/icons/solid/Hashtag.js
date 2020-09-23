import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHashtag = forwardRef(
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
          d="M5.41 5l.597-3.582.986.164L6.423 5H9.41l.597-3.582.986.164L10.423 5H13v1h-2.743l-.5 3H13v1H9.59l-.597 3.582-.986-.164.57-3.418H5.59l-.597 3.582-.986-.164.57-3.418H2V9h2.743l.5-3H2V5h3.41zm.847 1l-.5 3h2.986l.5-3H6.257z"
          fill={color}
        />
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
