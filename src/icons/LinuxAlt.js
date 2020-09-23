import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLinuxAlt = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.5 9.662c0-.758.224-1.498.645-2.129l.565-.847a7.203 7.203 0 001.07-2.583l.328-1.642a2.44 2.44 0 014.784 0l.329 1.642c.184.922.547 1.8 1.07 2.583l.564.847c.42.63.645 1.371.645 2.129m-7.392 3.637c.386.13.8.201 1.23.201h2.324c.43 0 .844-.07 1.23-.201M6.5 5.5L4.947 8.606a2 2 0 001.79 2.894h1.527a2 2 0 001.789-2.894L8.5 5.5M6.5 3v1.5m2-1.5v1.5m-1.894-.053L5.5 5l.586.586a2 2 0 002.828 0L9.5 5l-1.106-.553a2 2 0 00-1.788 0zM.77 11.325l.479-1.196a1 1 0 01.928-.629h1.164a1 1 0 01.919.606l.93 2.172a1 1 0 01-.319 1.194l-.738.553a1 1 0 01-1.24-.031l-1.835-1.529a1 1 0 01-.288-1.14zm13.46 0l-.479-1.196a1 1 0 00-.928-.629h-1.164a1 1 0 00-.919.606l-.93 2.172a1 1 0 00.319 1.194l.738.553a1 1 0 001.24-.031l1.835-1.529a1 1 0 00.288-1.14z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgLinuxAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLinuxAlt.displayName = "LinuxAlt";

export default SvgLinuxAlt;
