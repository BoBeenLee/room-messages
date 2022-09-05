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
        <g transform="rotate(-45 11.914 5.464)">
          <rect
            width={12}
            height={12}
            x={1}
            y={1}
            stroke="#FFF"
            strokeWidth={2}
            rx={6}
          />
          <path fill="#FFF" d="M6 12h2v9H6z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;
