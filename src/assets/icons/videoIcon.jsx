const VideoIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <mask
      id="mask0_40_30"
      style={{
        maskType: "luminance",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={3}
      width={26}
      height={24}
    >
      <path
        d="M26 4H6C5.46957 4 4.96086 4.19315 4.58579 4.53697C4.21071 4.88079 4 5.3471 4 5.83333V24.1667C4 24.6529 4.21071 25.1192 4.58579 25.463C4.96086 25.8068 5.46957 26 6 26H26C26.5304 26 27.0391 25.8068 27.4142 25.463C27.7893 25.1192 28 24.6529 28 24.1667V5.83333C28 5.3471 27.7893 4.88079 27.4142 4.53697C27.0391 4.19315 26.5304 4 26 4Z"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6667 17.4443V13.7397L17.1667 15.5914L20.6667 17.4443L17.1667 19.2966L13.6667 21.1489V17.4443Z"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 9.5H28M22 4L18 9.5M14 4L10 9.5"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </mask>
    <g mask="url(#mask0_40_30)">
      <path d="M0 0.333496H32V29.6668H0V0.333496Z" fill="#166199" />
    </g>
  </svg>
)
export default VideoIcon