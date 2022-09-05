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
        <g fill="#FFF">
          <path d="M7.05 12.536l8.486-8.486 1.414 1.414-8.486 8.486z" />
          <path d="M8.464 11.05l8.486 8.486-1.414 1.414-8.486-8.486z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;
