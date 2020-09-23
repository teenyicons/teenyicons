import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgContract = forwardRef(
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
        <path d="M6.796 11.9H6.8h-.003z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zM7 4H4v1h3V4zm4 3H4v1h7V7zm-4.695 3.908c-.404.108-.72.417-.83.75l-.95-.316c.223-.667.807-1.208 1.52-1.4.707-.19 1.514-.03 2.212.611.21-.061.417-.096.622-.107.54-.029 1.023.107 1.438.28.305.127.6.287.85.422.078.044.153.084.222.12.323.17.5.232.611.232v1c-.39 0-.774-.188-1.076-.346a21.802 21.802 0 01-.272-.146 7.689 7.689 0 00-.72-.359c-.334-.14-.663-.222-.999-.204a1.686 1.686 0 00-.15.014l.001.014c.027.324-.107.591-.28.783-.318.354-.837.54-1.227.61a1.962 1.962 0 01-.614.025.9.9 0 01-.33-.11.623.623 0 01-.303-.433.677.677 0 01.111-.48 1.28 1.28 0 01.262-.282c.19-.157.465-.327.834-.513l.027-.02a1.23 1.23 0 00-.96-.145z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgContract.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgContract.displayName = "Contract";

export default SvgContract;
