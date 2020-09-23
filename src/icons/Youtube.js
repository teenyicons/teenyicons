import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgYoutube = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1.61 12.738l-.104.489.105-.489zm11.78 0l.104.489-.105-.489zm0-10.476l.104-.489-.105.489zm-11.78 0l.106.489-.105-.489zM6.5 5.5l.277-.416A.5.5 0 006 5.5h.5zm0 4H6a.5.5 0 00.777.416L6.5 9.5zm3-2l.277.416a.5.5 0 000-.832L9.5 7.5zM0 3.636v7.728h1V3.636H0zm15 7.728V3.636h-1v7.728h1zM1.506 13.227c3.951.847 8.037.847 11.988 0l-.21-.978a27.605 27.605 0 01-11.568 0l-.21.978zM13.494 1.773a28.606 28.606 0 00-11.988 0l.21.978a27.607 27.607 0 0111.568 0l.21-.978zM15 3.636c0-.898-.628-1.675-1.506-1.863l-.21.978c.418.09.716.458.716.885h1zm-1 7.728a.905.905 0 01-.716.885l.21.978A1.905 1.905 0 0015 11.364h-1zm-14 0c0 .898.628 1.675 1.506 1.863l.21-.978A.905.905 0 011 11.364H0zm1-7.728c0-.427.298-.796.716-.885l-.21-.978A1.905 1.905 0 000 3.636h1zM6 5.5v4h1v-4H6zm.777 4.416l3-2-.554-.832-3 2 .554.832zm3-2.832l-3-2-.554.832 3 2 .554-.832z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgYoutube.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgYoutube.displayName = "Youtube";

export default SvgYoutube;
