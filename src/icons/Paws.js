import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPaws = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1.425 2.118l.307.647M.75 4.647l.307.647m5.277-3.176l.307.706M3.88 1l.306.647m6.934 5.118l-.306.647m-2.148.47l-.307.706m5.891 1.824l-.307.647m-.368-3.177l-.307.647M3.941 4.235c.43-.176.92-.176 1.35.06l1.657.823c.552.294.736 1 .307 1.47-.185.236-.491.353-.798.353H5.72c-.306 0-.613.118-.797.353l-.43.53c-.184.235-.49.352-.798.352-.613 0-1.104-.588-.981-1.176l.368-1.765c.123-.411.43-.823.859-1zM11.059 10c.43.177.737.588.86 1.059l.367 1.764A.976.976 0 0111.305 14c-.307 0-.614-.118-.798-.353l-.43-.53c-.184-.235-.49-.352-.797-.352h-.737c-.307 0-.613-.118-.798-.353a.978.978 0 01.307-1.47l1.657-.824c.368-.294.92-.353 1.35-.118z"
          stroke={color}
          strokeMiterlimit={10}
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgPaws.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPaws.displayName = "Paws";

export default SvgPaws;
