import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Svg360 = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 5.5l.4.3a.5.5 0 00-.4-.8v.5zM3 7.5l-.4-.3A.5.5 0 003 8v-.5zm9.736-4.646l.382.323-.382-.323zM2 6h2.5V5H2v1zm2.1-.8l-1.5 2 .8.6 1.5-2-.8-.6zM3 8h.5V7H3v1zm.5 1H2v1h1.5V9zm.5-.5a.5.5 0 01-.5.5v1A1.5 1.5 0 005 8.5H4zM3.5 8a.5.5 0 01.5.5h1A1.5 1.5 0 003.5 7v1zM8 5h-.5v1H8V5zM6 6.5v1h1v-1H6zm0 1v1h1v-1H6zM7.5 7h-1v1h1V7zM9 8.5A1.5 1.5 0 007.5 7v1a.5.5 0 01.5.5h1zM7.5 10A1.5 1.5 0 009 8.5H8a.5.5 0 01-.5.5v1zm0-1a.5.5 0 01-.5-.5H6A1.5 1.5 0 007.5 10V9zm0-4A1.5 1.5 0 006 6.5h1a.5.5 0 01.5-.5V5zM12 6.5v2h1v-2h-1zm-1 2v-2h-1v2h1zm.5.5a.5.5 0 01-.5-.5h-1a1.5 1.5 0 001.5 1.5V9zm.5-.5a.5.5 0 01-.5.5v1A1.5 1.5 0 0013 8.5h-1zM11.5 6a.5.5 0 01.5.5h1A1.5 1.5 0 0011.5 5v1zm0-1A1.5 1.5 0 0010 6.5h1a.5.5 0 01.5-.5V5zm-4 9A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 0A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zm6 3a.5.5 0 01.5.5h1A1.5 1.5 0 0013.5 2v1zm0 1a.5.5 0 01-.5-.5h-1A1.5 1.5 0 0013.5 5V4zm-.5-.5c0-.123.044-.235.118-.323l-.763-.646c-.221.261-.355.6-.355.969h1zm.118-.323A.498.498 0 0113.5 3V2c-.46 0-.871.207-1.145.531l.763.646zM7.5 1c1.934 0 3.671.844 4.862 2.186l.748-.664A7.483 7.483 0 007.5 0v1zm5.854 3.67c.414.856.646 1.815.646 2.83h1c0-1.17-.268-2.277-.746-3.265l-.9.436zM14 3.5a.5.5 0 01-.348.477l.304.952A1.5 1.5 0 0015 3.5h-1zm-.348.477A.5.5 0 0113.5 4v1a1.5 1.5 0 00.456-.07l-.304-.953z"
          fill={color}
        />
      </svg>
    );
  }
);

Svg360.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Svg360.displayName = "360";

export default Svg360;
