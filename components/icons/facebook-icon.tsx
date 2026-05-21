import React from "react";
import { SVGIconProps } from "../../types";

const FacebookIcon = (props: SVGIconProps) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    {...props}
  >
    <path d="M9 8H7v3h2v9h3v-9h3.6l.4-3H12V6c0-.9.2-1 1-1h2V2h-3c-3.1 0-4 1.4-4 4v2z" />
  </svg>
);

export default FacebookIcon;
