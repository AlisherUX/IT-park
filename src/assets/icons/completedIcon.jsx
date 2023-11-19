const CompletedIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M70 20c-.287 0-.82 0-23.254 4.484A12.342 12.342 0 0 0 40 22.5c-2.422 0-4.733.683-6.746 1.984C10.813 20 10.305 20 10 20 4.393 20 0 26.589 0 35s4.393 15 10 15c.301 0 .799 0 22.5-4.333V57.5a2.499 2.499 0 0 0 3.619 2.236L40 57.795l3.881 1.941a2.506 2.506 0 0 0 2.433-.11A2.499 2.499 0 0 0 47.5 57.5V45.667C69.201 50 69.699 50 70 50c5.608 0 10-6.589 10-15s-4.392-15-10-15Z"
    />
    <path
      fill="url(#b)"
      d="M40 22.5c-6.892 0-12.5 5.608-12.5 12.5S33.108 47.5 40 47.5 52.5 41.892 52.5 35 46.892 22.5 40 22.5Z"
    />
    <path
      fill="url(#c)"
      d="M70 20c-5.608 0-10 6.589-10 15s4.392 15 10 15 10-6.589 10-15-4.392-15-10-15Z"
    />
    <path
      fill="url(#d)"
      d="M70 50a2.5 2.5 0 0 1-2.5-2.5V35a2.5 2.5 0 0 1 5 0v12.5A2.5 2.5 0 0 1 70 50Z"
    />
    <path
      fill="url(#e)"
      d="M40 47.5c-2.815 0-5.407-.947-7.5-2.523V57.5a2.499 2.499 0 0 0 3.619 2.236L40 57.797l3.881 1.94a2.506 2.506 0 0 0 2.433-.11A2.499 2.499 0 0 0 47.5 57.5V44.977A12.425 12.425 0 0 1 40 47.5Z"
    />
    <path fill="url(#f)" d="M40 40a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
    <defs>
      <linearGradient
        id="a"
        x1={15.95}
        x2={64.05}
        y1={59.05}
        y2={10.95}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FA9D74" />
        <stop offset={1} stopColor="#FADF9B" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={31.165}
        x2={48.835}
        y1={43.835}
        y2={26.165}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7055C2" />
        <stop offset={1} stopColor="#D055C2" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={60.951}
        x2={79.051}
        y1={44.051}
        y2={25.951}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF6A59" />
        <stop offset={1} stopColor="#FFA677" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={65.108}
        x2={74.894}
        y1={46.144}
        y2={36.358}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3C3C3C" />
        <stop offset={1} stopColor="#666" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={32.861}
        x2={47.14}
        y1={58.898}
        y2={44.618}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF6A59" />
        <stop offset={1} stopColor="#FFD877" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={36.465}
        x2={43.536}
        y1={38.536}
        y2={31.465}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF6A59" />
        <stop offset={1} stopColor="#FFD877" />
      </linearGradient>
    </defs>
  </svg>
)
export default CompletedIcon;