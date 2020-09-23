import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgReddit = forwardRef(
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
          d="M7.621 1.015A.5.5 0 007 1.5v3.515A8.16 8.16 0 003.455 6.06c-.388-.341-.911-.515-1.433-.515A2.022 2.022 0 000 7.566c0 .747.406 1.394 1.007 1.742A2.725 2.725 0 001 9.5c0 1.243.852 2.376 2.021 3.17C4.206 13.475 5.804 14 7.5 14c1.696 0 3.294-.525 4.479-1.33C13.148 11.876 14 10.743 14 9.5c0-.064-.002-.128-.007-.192A2.008 2.008 0 0015 7.566a2.022 2.022 0 00-2.022-2.022c-.522 0-1.045.174-1.433.515A8.16 8.16 0 008 5.015V2.14l3.055.764a1.5 1.5 0 10.074-1.012L7.62 1.015zM12.5 3a.5.5 0 01-.5-.492v-.016a.5.5 0 11.5.508zM5 9h1V8H5v1zm2.5 2c-.987 0-1.617-.17-2.306-.46l-.388.92c.796.336 1.558.54 2.694.54s1.898-.204 2.694-.54l-.388-.92c-.69.29-1.32.46-2.306.46zM10 9H9V8h1v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgReddit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgReddit.displayName = "Reddit";

export default SvgReddit;
