import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMsWord = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 9.5l-.485.121a.5.5 0 00.901.156L3.5 9.5zm1-1.5l.416-.277a.5.5 0 00-.832 0L4.5 8zm1 1.5l-.416.277a.5.5 0 00.901-.156L5.5 9.5zM1.5 4h6V3h-6v1zm6.5.5v6h1v-6H8zM7.5 11h-6v1h6v-1zM1 10.5v-6H0v6h1zm.5.5a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 12v-1zm6.5-.5a.5.5 0 01-.5.5v1A1.5 1.5 0 009 10.5H8zM7.5 4a.5.5 0 01.5.5h1A1.5 1.5 0 007.5 3v1zm-6-1A1.5 1.5 0 000 4.5h1a.5.5 0 01.5-.5V3zm.515 2.621l1 4 .97-.242-1-4-.97.242zm1.901 4.156l1-1.5-.832-.554-1 1.5.832.554zm.168-1.5l1 1.5.832-.554-1-1.5-.832.554zm1.901 1.344l1-4-.97-.242-1 4 .97.242zM3 3.5v-2H2v2h1zM3.5 1h10V0h-10v1zm10.5.5v12h1v-12h-1zM13.5 14h-10v1h10v-1zM3 13.5v-2H2v2h1zm.5.5a.5.5 0 01-.5-.5H2A1.5 1.5 0 003.5 15v-1zm10.5-.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zM13.5 1a.5.5 0 01.5.5h1A1.5 1.5 0 0013.5 0v1zM3 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 002 1.5h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMsWord.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMsWord.displayName = "MsWord";

export default SvgMsWord;
