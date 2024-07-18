export default function ProductHuntIcon({
  width = 30,
  height = 30,
  color = "#818589",
  ...rest
}) {
  return (
    <svg
      viewBox="0 0 30 30"
      width={width}
      height={height}
      fill={color}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm-4 5.992h5.5a4.5 4.5 0 0 1 0 9h-3V21H11V8.992zm2.5 2.5v4h3c1.103 0 2-.897 2-2s-.897-2-2-2h-3z" />
    </svg>
  );
}
