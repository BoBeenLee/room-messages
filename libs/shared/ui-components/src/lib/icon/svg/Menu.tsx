import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path d="M4 5h16v2H4zm0 6h16v2H4zm0 6h16v2H4z" fill="#FFF" />
      </g>
    </svg>
  );
}

export default SvgComponent;
