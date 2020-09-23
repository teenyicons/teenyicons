import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPaintbrush = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 14l-.481-.136a.5.5 0 00.758.552L.5 14zm.971-3.422l.481.136-.48-.136zm-.46 3.081l-.277-.416.277.416zm2.062-.148l-.215.451.215-.451zM5 6l-.25-.433a.5.5 0 00-.104.787L5 6zm4 4l-.354.354a.5.5 0 00.787-.103L9 10zM14.5.5l.433.25a.5.5 0 00-.684-.683L14.5.5zM.981 14.136l.971-3.422-.962-.273-.971 3.422.962.274zm2.956-4.922H4v-1h-.063v1zm2.063 2v.053h1v-.053H6zm-1.947 2h-.08v1h.08v-1zm-3.32.03l-.51.34.554.832.512-.34-.555-.833zm2.555-.185a2.594 2.594 0 00-2.554.184l.555.832a1.594 1.594 0 011.569-.113l.43-.903zm.685.155c-.237 0-.471-.053-.685-.155l-.43.903c.348.166.73.252 1.115.252v-1zM6 11.267a1.947 1.947 0 01-1.947 1.947v1A2.947 2.947 0 007 11.267H6zM4 9.214a2 2 0 012 2h1a3 3 0 00-3-3v1zm-2.048 1.5a2.063 2.063 0 011.985-1.5v-1c-1.37 0-2.573.91-2.947 2.227l.962.273zm2.694-4.36l4 4 .708-.708-4-4-.708.708zM14.25.067l-9.5 5.5.5.866 9.5-5.5-.5-.866zM9.432 10.251l5.5-9.5-.866-.502-5.5 9.5.866.502zM7.146 4.854l3 3 .708-.708-3-3-.708.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPaintbrush.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPaintbrush.displayName = "Paintbrush";

export default SvgPaintbrush;
