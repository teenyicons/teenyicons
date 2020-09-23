import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgInbox = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.713 11.493l-.035-.5.035.5zM1.5 1h12V0h-12v1zm12.5.5v12h1v-12h-1zM13.5 14h-12v1h12v-1zM1 13.5v-12H0v12h1zm.5.5a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 15v-1zm12.5-.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zM13.5 1a.5.5 0 01.5.5h1A1.5 1.5 0 0013.5 0v1zm-12-1A1.5 1.5 0 000 1.5h1a.5.5 0 01.5-.5V0zm6 12c.083 0 .166-.003.248-.009l-.07-.997A2.546 2.546 0 017.5 11v1zm-.823-.098c.264.064.54.098.823.098v-1c-.203 0-.4-.024-.589-.07l-.234.973zm.234-.972c-.969-.233-1.9-.895-2.97-1.586C2.924 8.687 1.771 8 .5 8v1c.938 0 1.858.512 2.899 1.184.987.638 2.099 1.434 3.278 1.719l.234-.973zm.837 1.061c1.386-.097 2.7-.927 3.865-1.632C12.843 9.616 13.922 9 15 9V8c-1.407 0-2.732.794-3.905 1.503-1.237.749-2.324 1.414-3.417 1.49l.07.998z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgInbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgInbox.displayName = "Inbox";

export default SvgInbox;
