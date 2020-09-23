import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgApple = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.825 3.241a.343.343 0 01-.343-.342A2.399 2.399 0 019.881.5c.19 0 .342.154.342.343A2.399 2.399 0 017.825 3.24zM12.828 10.457c.132.099.175.28.1.427-1.205 2.414-2.168 3.616-3.047 3.616-.409 0-.811-.132-1.203-.39a1.782 1.782 0 00-1.895-.041c-.474.284-.927.431-1.356.431C4.133 14.5 2 10.518 2 8.332 2 6 3.223 4.22 5.084 4.22c.875 0 1.631.13 2.266.39.269.112.573.104.836-.022.515-.248 1.194-.368 2.038-.368 1.03 0 1.926.513 2.672 1.508a.343.343 0 01-.068.48c-.833.624-1.234 1.326-1.234 2.124 0 .799.401 1.5 1.234 2.125z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgApple.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgApple.displayName = "Apple";

export default SvgApple;
