import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgWordpress = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M5.5 13.5l-.479.144a.5.5 0 00.957.003L5.5 13.5zm4 0l-.479.144a.5.5 0 00.943.042L9.5 13.5zm3.53-8.827l.465.186-.464-.186zm-.54-1.931l-.3.4.3-.4zm-.133-.1l.3-.4-.3.4zm-2 2l.4-.3-.4.3zm.286-2l-.3-.4.3.4zM7.5 14A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM2.021 3.644l3 10 .958-.288-3-10-.958.288zm3.957 10.003l2-6.5-.956-.294-2 6.5.956.294zM6.02 3.644l3 10 .958-.288-3-10-.958.288zm6.768-1.302l-.132-.1-.6.8.132.1.6-.8zm-2.832 2.6l.643.858.8-.6-.643-.857-.8.6zm.386-2.7a1.929 1.929 0 00-.386 2.7l.8-.6a.929.929 0 01.186-1.3l-.6-.8zm2.314 0a1.928 1.928 0 00-2.314 0l.6.8a.928.928 0 011.114 0l.6-.8zm.838 2.617a2.149 2.149 0 00-.706-2.517l-.6.8c.416.312.57.863.377 1.345l.929.372zM2 4h2V3H2v1zm3 0h3V3H5v1zm4.964 9.686l3.531-8.827-.928-.372-3.531 8.827.928.372z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgWordpress.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgWordpress.displayName = "Wordpress";

export default SvgWordpress;
