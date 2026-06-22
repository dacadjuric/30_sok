// Line-numbered code surface. `lines` is an array of either a React node
// (plain line) or { node, mark: "+" | "-" } for diff rows.
export default function CodeBlock({
  lines,
  startLine = 1,
  className = "",
  size = "base",
}) {
  const textSize =
    size === "lg"
      ? "text-sm sm:text-lg leading-7 sm:leading-9"
      : size === "sm"
      ? "text-xs sm:text-sm leading-6"
      : "text-[13px] sm:text-[15px] leading-7";

  return (
    <div className={`font-mono ${textSize} ${className}`}>
      {lines.map((entry, i) => {
        const node = entry?.node !== undefined ? entry.node : entry;
        const mark = entry?.mark;
        const rowBg =
          mark === "+"
            ? "bg-diffPlusBg"
            : mark === "-"
            ? "bg-diffMinusBg"
            : "";
        const markColor =
          mark === "+" ? "text-yellow" : mark === "-" ? "text-comment" : "";
        return (
          <div key={i} className={`flex ${rowBg}`}>
            <span className="select-none w-10 sm:w-12 shrink-0 pr-3 text-right text-comment/60 border-r border-line">
              {startLine + i}
            </span>
            {mark !== undefined && (
              <span
                className={`select-none w-5 shrink-0 text-center ${markColor}`}
                aria-hidden
              >
                {mark}
              </span>
            )}
            <code
              className={`px-3 sm:px-4 whitespace-pre-wrap break-words ${
                mark === "-" ? "text-comment" : ""
              }`}
            >
              {node === "" ? " " : node}
            </code>
          </div>
        );
      })}
    </div>
  );
}
