import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={18}
      viewBox="0 0 26 18"
      {...props}
    >
      <g fill="none" fillRule="evenodd" stroke="#FFF" strokeWidth={2}>
        <rect width={24} height={16} x={1} y={1} rx={2} />
        <path d="M23.678 1l.75.793-9.856 6.065a2.994 2.994 0 01-3.144 0h0l-9.636-5.93L3.06 1h20.618z" />
      </g>
    </svg>
  );
}

export default SvgComponent;
