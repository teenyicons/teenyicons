import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPageBreak = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 8.993H0v1h.5v-1zm2 1H3v-1h-.5v1zm2-1H4v1h.5v-1zm2 1H7v-1h-.5v1zm2-1H8v1h.5v-1zm2 1h.5v-1h-.5v1zm2-1H12v1h.5v-1zm2 1h.5v-1h-.5v1zM10.5.5l.354-.354L10.707 0H10.5v.5zm3 3h.5v-.207l-.146-.147-.354.354zM.5 9.993h2v-1h-2v1zm4 0h2v-1h-2v1zm4 0h2v-1h-2v1zm4 0h2v-1h-2v1zm0 4.007h-10v1h10v-1zM2.5 1h8V0h-8v1zm7.646-.146l3 3 .708-.708-3-3-.708.708zM13 3.5V8h1V3.5h-1zm0 8.25v1.75h1v-1.75h-1zM2 8V1.5H1V8h1zm0 5.5V11H1v2.5h1zm.5.5a.5.5 0 01-.5-.5H1A1.5 1.5 0 002.5 15v-1zm10 1a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM2.5 0A1.5 1.5 0 001 1.5h1a.5.5 0 01.5-.5V0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPageBreak.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPageBreak.displayName = "PageBreak";

export default SvgPageBreak;
