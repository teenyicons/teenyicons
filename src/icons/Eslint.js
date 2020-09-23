import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEslint = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 7.5l-.447-.224a.5.5 0 000 .448L.5 7.5zm3-6V1a.5.5 0 00-.447.276L3.5 1.5zm8 0l.447-.224A.5.5 0 0011.5 1v.5zm3 6l.447.224a.5.5 0 000-.448L14.5 7.5zm-3 6v.5a.5.5 0 00.447-.276L11.5 13.5zm-8 0l-.447.224A.5.5 0 003.5 14v-.5zm4-9.5l.277-.416-.277-.185-.277.185L7.5 4zm-3 2l-.277-.416L4 5.732V6h.5zm0 3H4v.268l.223.148L4.5 9zm3 2l-.277.416.277.185.277-.185L7.5 11zm3-2l.277.416.223-.148V9h-.5zm0-3h.5v-.268l-.223-.148L10.5 6zM.947 7.724l3-6-.894-.448-3 6 .894.448zM3.5 2h8V1h-8v1zm7.553-.276l3 6 .894-.448-3-6-.894.448zm3 5.552l-3 6 .894.448 3-6-.894-.448zM11.5 13h-8v1h8v-1zm-7.553.276l-3-6-.894.448 3 6 .894-.448zm3.276-9.692l-3 2 .554.832 3-2-.554-.832zM4 6v3h1V6H4zm.223 3.416l3 2 .554-.832-3-2-.554.832zm3.554 2l3-2-.554-.832-3 2 .554.832zM11 9V6h-1v3h1zm-.223-3.416l-3-2-.554.832 3 2 .554-.832z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgEslint.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgEslint.displayName = "Eslint";

export default SvgEslint;
