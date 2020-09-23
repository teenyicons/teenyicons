import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCodepen = forwardRef(
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
          d="M7.21.093a.5.5 0 01.58 0l7 5A.5.5 0 0115 5.5v4a.5.5 0 01-.21.407l-7 5a.5.5 0 01-.58 0l-7-5A.5.5 0 010 9.5v-4a.5.5 0 01.21-.407l7-5zM1 6.472L2.44 7.5 1 8.528V6.472zM1.36 9.5L7 13.528v-2.77L3.3 8.113 1.36 9.5zm2.8-2L7.5 9.886 10.84 7.5 7.5 5.114 4.16 7.5zM8 4.243l3.7 2.643L13.64 5.5 8 1.472v2.77zM7 1.472v2.77L3.3 6.887 1.36 5.5 7 1.472zm7 5L12.56 7.5 14 8.528V6.472zM13.64 9.5L11.7 8.114 8 10.757v2.771L13.64 9.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCodepen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCodepen.displayName = "Codepen";

export default SvgCodepen;
