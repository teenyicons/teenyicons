import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSimohamed = forwardRef(
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
        <path d="M6 9H5V8h1v1zM10 9H9V8h1v1z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 5.5a5.5 5.5 0 1111 0v.56a2.063 2.063 0 011.5 2.502l-.151.604a2.422 2.422 0 01-1.825 1.777A6.5 6.5 0 0111.7 12.4l-.6.8a4.5 4.5 0 01-7.2 0l-.6-.8a6.5 6.5 0 01-.823-1.457A2.422 2.422 0 01.65 9.166l-.15-.604A2.063 2.063 0 012 6.06V5.5zM3 7h3V6H3v-.293l.975-.975A2.5 2.5 0 015.743 4h3.514a2.5 2.5 0 011.768.732l.975.975V6H9v1h3v1.5a5.5 5.5 0 01-.455 2.19l-.64.384c-.35.21-.718.386-1.098.526l-1.1-1.1H6.293l-1.1 1.1a6.5 6.5 0 01-1.098-.526l-.64-.384A5.5 5.5 0 013 8.5V7zm-1 .124c-.411.22-.653.702-.53 1.195l.151.605c.078.309.253.573.488.762A6.499 6.499 0 012 8.5V7.124zm4.307 4.777c.372.066.75.099 1.132.099h.122c.381 0 .76-.034 1.133-.1l-.401-.4H6.707l-.4.4zm6.584-2.215c.235-.19.41-.453.488-.762l.15-.605A1.062 1.062 0 0013 7.124V8.5c0 .4-.037.797-.11 1.186z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSimohamed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSimohamed.displayName = "Simohamed";

export default SvgSimohamed;
