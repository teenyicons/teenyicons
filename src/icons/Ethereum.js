import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEthereum = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5.5l.384-.32a.5.5 0 00-.768 0L7.5.5zm-5 6l-.384-.32a.5.5 0 00-.04.585L2.5 6.5zm5 8l-.424.265a.5.5 0 00.848 0L7.5 14.5zm5-8l.424.265a.5.5 0 00-.04-.585l-.384.32zm-5-2l.186-.464L7.5 3.96l-.186.075.186.464zM7.116.18l-5 6 .768.64 5-6-.768-.64zm-5.04 6.585l5 8 .848-.53-5-8-.848.53zm5.848 8l5-8-.848-.53-5 8 .848.53zm4.96-8.585l-5-6-.768.64 5 6 .768-.64zm-10.198.784l5-2-.372-.928-5 2 .372.928zm4.628-2l5 2 .372-.928-5-2-.372.928z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgEthereum.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgEthereum.displayName = "Ethereum";

export default SvgEthereum;
