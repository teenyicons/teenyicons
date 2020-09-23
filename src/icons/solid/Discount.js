import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDiscount = forwardRef(
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
          d="M6.448.436l-1.13 1.129a.488.488 0 01-.344.143H3.196c-.822 0-1.488.666-1.488 1.488v1.778c0 .13-.052.253-.143.345L.435 6.448a1.488 1.488 0 000 2.104l1.13 1.13a.488.488 0 01.143.344v1.778c0 .822.666 1.488 1.488 1.488h1.778c.13 0 .253.052.345.143l1.129 1.13a1.488 1.488 0 002.104 0l1.13-1.13a.488.488 0 01.344-.143h1.778c.822 0 1.488-.666 1.488-1.488v-1.778c0-.13.052-.253.143-.345l1.13-1.129a1.488 1.488 0 000-2.104l-1.13-1.13a.488.488 0 01-.143-.344V3.196c0-.822-.666-1.488-1.488-1.488h-1.778a.488.488 0 01-.345-.143L8.552.435a1.488 1.488 0 00-2.104 0zm-1.802 9.21l5-5 .708.708-5 5-.708-.708zM5 5v1h1V5H5zm4 5h1V9H9v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDiscount.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDiscount.displayName = "Discount";

export default SvgDiscount;
