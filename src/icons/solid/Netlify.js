import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgNetlify = forwardRef(
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
          d="M7.146.146a.5.5 0 01.708 0l.98.98-1.82 2.94-2.706-1.081L7.146.146zM3.539 3.754L2.426 4.867 4.72 7.772 6.479 4.93l-2.94-1.176zM1.714 5.579L.146 7.146a.502.502 0 00-.061.075l3.522.755-1.893-2.397zM.66 8.367l1.007 1.007 1.175-.54L.66 8.368zM2.42 10.128l.52.52.654-1.058-1.173.538zM3.666 11.373l3.48 3.48a.5.5 0 00.708 0l.323-.323.119-.615L4.819 9.51l-1.153 1.863zM9.438 13.269l2.488-2.488-1.93-.413-.558 2.9zM12.768 9.939l1.781-1.78-3.833-1.534-.531 2.76 2.583.554zM14.92 7.23a.51.51 0 00-.066-.084L12.99 5.283l-1.368.628L14.92 7.23zM12.236 4.53l-.937-.938-.288 1.499 1.225-.562zM10.445 2.738l-.885-.885-1.604 2.59 2.007.804.482-2.509zM5.998 8.488L9.662 6.81l-.455 2.367-3.209-.688zM6.112 9.535l2.906.623-.473 2.46-2.433-3.083zM6.187 7.302l2.9-1.329-1.665-.666-1.235 1.995z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgNetlify.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgNetlify.displayName = "Netlify";

export default SvgNetlify;
