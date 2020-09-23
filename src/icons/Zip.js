import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgZip = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 8.5V8h-.39l-.095.379.485.121zm2 0l.485-.121L5.89 8H5.5v.5zm.69 2.758l.484-.122-.485.122zm-3.38 0l.486.12-.485-.12zM9.5 10.5l.277-.416A.5.5 0 009 10.5h.5zm3 2l-.277.416A.5.5 0 0013 12.5h-.5zm-3-8H9V5h.5v-.5zM1.5 1h12V0h-12v1zm12.5.5v12h1v-12h-1zM13.5 14h-12v1h12v-1zM1 13.5v-12H0v12h1zm.5.5a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 15v-1zm12.5-.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zM13.5 1a.5.5 0 01.5.5h1A1.5 1.5 0 0013.5 0v1zm-12-1A1.5 1.5 0 000 1.5h1a.5.5 0 01.5-.5V0zM3 3h3V2H3v1zm0 2h3V4H3v1zm0 2h3V6H3v1zm.5 2h2V8h-2v1zm1.515-.379l.69 2.758.97-.243-.69-2.757-.97.242zM5.219 12H3.781v1h1.438v-1zm-1.923-.621l.69-2.758-.971-.242-.69 2.757.97.243zM3.78 12a.5.5 0 01-.485-.621l-.97-.243A1.5 1.5 0 003.78 13v-1zm1.923-.621A.5.5 0 015.22 12v1a1.5 1.5 0 001.455-1.864l-.97.243zM10 13v-2.5H9V13h1zm-.777-2.084l3 2 .554-.832-3-2-.554.832zM13 12.5V10h-1v2.5h1zM9 6v3h1V6H9zm3 0v3h1V6h-1zM9.5 8h3V7h-3v1zm.5-3.5v-1H9v1h1zm3-.5h-1.5v1H13V4zm-1.5 0h-2v1h2V4zm-.5-.5v1h1v-1h-1zm-.5-.5a.5.5 0 01.5.5h1A1.5 1.5 0 0010.5 2v1zm-.5.5a.5.5 0 01.5-.5V2A1.5 1.5 0 009 3.5h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgZip.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgZip.displayName = "Zip";

export default SvgZip;
