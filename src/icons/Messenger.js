import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMessenger = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.935 12.264l.482.132a.5.5 0 00-.164-.517l-.318.385zM2.326 14.5l-.482-.131a.5.5 0 00.694.584l-.212-.453zm2.435-1.141l.188-.463a.5.5 0 00-.4.01l.212.453zM6.5 6.5l.3-.4-.293-.22-.298.213.291.407zm2 1.5l-.3.4.316.237.304-.253L8.5 8zm-1-8C3.379 0 0 3.201 0 7.196h1C1 3.795 3.889 1 7.5 1V0zM0 7.196c0 2.188 1.023 4.139 2.617 5.454l.636-.771C1.87 10.739 1 9.062 1 7.196H0zm2.452 4.937l-.608 2.236.965.262.608-2.235-.965-.263zm.086 2.82l2.435-1.142-.424-.905-2.435 1.141.424.906zm2.035-1.131c.9.366 1.89.57 2.927.57v-1a6.764 6.764 0 01-2.55-.496l-.377.926zm2.927.57c4.121 0 7.5-3.202 7.5-7.196h-1c0 3.4-2.889 6.195-6.5 6.195v1zM15 7.195C15 3.2 11.621 0 7.5 0v1C11.111 1 14 3.795 14 7.196h1zM3.29 9.406l3.5-2.5-.58-.813-3.5 2.5.58.814zM6.2 6.9l2 1.5.6-.8-2-1.5-.6.8zm2.62 1.484l3-2.5-.64-.768-3 2.5.64.768z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMessenger.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMessenger.displayName = "Messenger";

export default SvgMessenger;
