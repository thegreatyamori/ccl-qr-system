import React from 'react'
import SvgIcon from "@material-ui/core/SvgIcon";

export default function QRIcon() {
  return (
    <SvgIcon>
      <path d="M3,21h8.2v-8.2H3V21z M4.6,14.5h4.9v4.9H4.6V14.5z" />
      <rect x="6.3" y="16.1" width="1.6" height="1.6" />
      <rect x="16.1" y="19.4" width="1.6" height="1.6" />
      <rect x="19.4" y="19.4" width="1.6" height="1.6" />
      <polygon
        points="19.4,14.5 17.7,14.5 17.7,12.8 12.8,12.8 12.8,21 14.5,21 14.5,16.1 16.1,16.1 16.1,17.7 21,17.7 21,12.8 21,12.8 
	19.4,12.8 "
      />
      <path d="M3,11.2h8.2V3H3V11.2z M4.6,4.6h4.9v4.9H4.6V4.6z" />
      <rect x="6.3" y="6.3" width="1.6" height="1.6" />
      <path d="M12.8,3v8.2H21V3H12.8z M19.4,9.5h-4.9V4.6h4.9V9.5z" />
      <rect x="16.1" y="6.3" width="1.6" height="1.6" />
    </SvgIcon>
  );
}
