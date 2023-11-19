const PauseIcon = (props) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={16} cy={16} r={16} fill="white" />
    <rect x={10} y={10} width={4.61538} height={13} rx={1} fill="#166199" />
    <rect
      x={17.3846}
      y={10}
      width={4.61538}
      height={13}
      rx={1}
      fill="#166199"
    />
  </svg>
);
export default PauseIcon;
