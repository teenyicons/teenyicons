import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlien = forwardRef(
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
          d="M3.039 1.403C4.127.513 5.629 0 7.501 0c1.873 0 3.374.514 4.463 1.403 1.089.89 1.727 2.125 1.921 3.498.37 2.453-.151 4.776-1.554 6.816-.668.99-1.558 1.97-2.6 2.627l-.007.004c-1.431.87-3.014.87-4.445 0l-.007-.004c-1.042-.657-1.931-1.637-2.6-2.627C1.264 9.68.742 7.354 1.118 4.901c.194-1.373.832-2.608 1.921-3.498zM6.736 7.96l-.711.703L3.85 6.46l.712-.702L6.736 7.96zm1.53 0l.712.703 2.175-2.203-.712-.702L8.267 7.96zm-2.001 2.816l.457.202c.097.043.2.105.28.156a15.37 15.37 0 01.26.163 2.036 2.036 0 00.24.127 2.036 2.036 0 00.24-.128 8.542 8.542 0 00.258-.162c.082-.051.184-.113.28-.156l.458-.202.404.915-.457.202c-.024.01-.071.037-.156.09l-.086.054-.183.114c-.097.059-.21.124-.324.175a1.084 1.084 0 01-.435.106c-.173 0-.33-.06-.434-.106a3.003 3.003 0 01-.324-.175c-.06-.036-.125-.078-.183-.114l-.087-.055a1.543 1.543 0 00-.155-.09l-.457-.201.404-.915z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAlien.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlien.displayName = "Alien";

export default SvgAlien;
