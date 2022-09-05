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
        <g transform="translate(2 2)">
          <rect
            width={18}
            height={18}
            x={1}
            y={1}
            stroke="#FFF"
            strokeWidth={2}
            rx={3}
          />
          <rect width={4} height={4} x={11} y={4} fill="#FFF" rx={2} />
          <path
            stroke="#FFF"
            strokeWidth={2}
            d="M1.014 13.268l2.596-2.596a.999.999 0 011.377-.035l9.366 8.46h0"
          />
          <path
            stroke="#FFF"
            strokeWidth={2}
            d="M10 15.268l2.602-2.602a.998.998 0 011.37-.04l4.984 4.42h0"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;
