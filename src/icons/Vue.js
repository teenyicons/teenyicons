import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgVue = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 13.5l-.432.252a.5.5 0 00.864 0L7.5 13.5zm4-12l.434.248A.5.5 0 0011.5 1v.5zm-4 7l-.434.248a.5.5 0 00.868 0L7.5 8.5zm-4-7V1a.5.5 0 00-.434.748L3.5 1.5zm3 0l.447-.224L6.81 1H6.5v.5zm1 2l-.447.224a.5.5 0 00.894 0L7.5 3.5zm1-2V1h-.309l-.138.276.447.224zm-8.432.252l7 12 .864-.504-7-12-.864.504zm7.864 12l7-12-.864-.504-7 12 .864.504zm3.134-12.5l-4 7 .868.496 4-7-.868-.496zm-3.132 7l-4-7-.868.496 4 7 .868-.496zM3.5 2h3V1h-3v1zm2.553-.276l1 2 .894-.448-1-2-.894.448zm1.894 2l1-2-.894-.448-1 2 .894.448zM8.5 2h3V1h-3v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgVue.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgVue.displayName = "Vue";

export default SvgVue;
