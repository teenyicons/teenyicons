import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgWifiFull = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.219 9.318c1.155-1.4 2.698-2.161 4.281-2.161v-1c-1.917 0-3.732.924-5.052 2.525l.771.636zM7.5 7.157c1.583 0 3.126.762 4.281 2.161l.771-.636C11.232 7.08 9.417 6.157 7.5 6.157v1zM.886 6.318C2.659 4.168 5.042 2.985 7.5 2.985v-1c-2.793 0-5.446 1.346-7.386 3.697l.772.636zM7.5 2.985c2.458 0 4.84 1.183 6.614 3.333l.772-.636C12.946 3.33 10.293 1.985 7.5 1.985v1zM7.5 12a.5.5 0 01-.5-.5H6A1.5 1.5 0 007.5 13v-1zm.5-.5a.5.5 0 01-.5.5v1A1.5 1.5 0 009 11.5H8zm-.5-.5a.5.5 0 01.5.5h1A1.5 1.5 0 007.5 10v1zm0-1A1.5 1.5 0 006 11.5h1a.5.5 0 01.5-.5v-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgWifiFull.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgWifiFull.displayName = "WifiFull";

export default SvgWifiFull;
