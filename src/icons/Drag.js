import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDrag = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 7.5l.137-.48a.5.5 0 00-.618.617L7.5 7.5zm2 7l-.48.137a.5.5 0 00.94.06L9.5 14.5zm5-5l.197.46a.5.5 0 00-.06-.94l-.137.48zM11 11l-.197-.46a.5.5 0 00-.263.263L11 11zM3.5 3.5V3H3v.5h.5zm10 0h.5V3h-.5v.5zm-10 10H3v.5h.5v-.5zM0 1h1V0H0v1zm4 0h1V0H4v1zm4 0h1V0H8v1zM0 5h1V4H0v1zm0 4h1V8H0v1zm7.02-1.363l2 7 .96-.274-2-7-.96.274zm7.617 1.382l-7-2-.274.962 7 2 .274-.962zM9.96 14.697l1.5-3.5-.92-.394-1.5 3.5.92.394zm1.237-3.237l3.5-1.5-.394-.92-3.5 1.5.394.92zM3.5 4h10V3h-10v1zm9.5-.5V7h1V3.5h-1zm-10 0v10h1v-10H3zM3.5 14H7v-1H3.5v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDrag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDrag.displayName = "Drag";

export default SvgDrag;
