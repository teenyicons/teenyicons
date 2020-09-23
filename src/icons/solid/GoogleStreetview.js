import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGoogleStreetview = forwardRef(
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
          d="M5 2.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM7.5 6A3.5 3.5 0 004 9.5v2a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-2A3.5 3.5 0 007.5 6z"
          fill={color}
        />
        <path
          d="M1.394 10.695c-.283.292-.394.563-.394.805 0 .245.114.52.406.816.294.299.745.59 1.341.846 1.191.51 2.871.838 4.753.838 1.882 0 3.562-.328 4.753-.838.596-.256 1.047-.547 1.341-.846.292-.296.406-.57.406-.816 0-.242-.11-.513-.395-.805-.285-.294-.724-.582-1.305-.837l.4-.916c.656.287 1.218.64 1.622 1.056.407.418.678.927.678 1.502 0 .583-.278 1.097-.694 1.519-.414.42-.989.774-1.66 1.062-1.342.575-3.162.919-5.146.919s-3.804-.344-5.147-.92c-.67-.287-1.245-.642-1.659-1.061-.416-.422-.694-.936-.694-1.52 0-.575.27-1.083.678-1.501.404-.416.966-.769 1.622-1.056l.4.916c-.581.255-1.02.543-1.306.837z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGoogleStreetview.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGoogleStreetview.displayName = "GoogleStreetview";

export default SvgGoogleStreetview;
