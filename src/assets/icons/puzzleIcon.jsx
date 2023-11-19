const PuzzleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={72}
    height={72}
    fill="none"
    {...props}
  >
    <rect width={72} height={72} fill="#FAFAFA" rx={16} />
    <g clipPath="url(#a)">
      <path
        fill="url(#b)"
        d="M51 37.25c-3.75 0-3.75 3.75-7.5 1.25V31c0-1.375-1.125-2.5-2.5-2.5h-7.5c-2.5-3.75 1.25-3.75 1.25-7.5a5 5 0 0 0-10 0c0 3.75 3.75 3.75 1.25 7.5h-7.5A2.507 2.507 0 0 0 16 31v22.5c0 1.375 1.125 2.5 2.5 2.5H26c2.5-3.75-1.25-3.75-1.25-7.5a5 5 0 0 1 10 0c0 3.75-3.75 3.75-1.25 7.5H41c1.375 0 2.5-1.125 2.5-2.5V46c3.75-2.5 3.75 1.25 7.5 1.25a5 5 0 0 0 0-10Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={16.734}
        x2={43.911}
        y1={55.266}
        y2={28.09}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7055C2" />
        <stop offset={1} stopColor="#D055C2" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M16 16h40v40H16z" />
      </clipPath>
    </defs>
  </svg>
);
export default PuzzleIcon;