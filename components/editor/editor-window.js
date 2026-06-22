// Window chrome used to frame every "panel" on the page as an editor file.
export default function EditorWindow({
  filename,
  right,
  children,
  className = "",
  bodyClassName = "",
  glow = false,
}) {
  return (
    <div
      className={`relative rounded-xl border border-line bg-panel/80 backdrop-blur-sm shadow-2xl shadow-black/50 overflow-hidden ${className}`}
    >
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-xl ring-1 ring-yellow/20"
        />
      )}
      {/* title bar */}
      <div className="flex items-center gap-3 border-b border-line bg-gutter px-4 py-2.5">
        <span className="flex items-center gap-1.5" aria-hidden>
          <span className="size-3 rounded-full bg-yellow/80" />
          <span className="size-3 rounded-full bg-comment/40" />
          <span className="size-3 rounded-full bg-comment/40" />
        </span>
        {filename && (
          <span className="ml-1 inline-flex items-center gap-2 rounded-md bg-panel px-2.5 py-1 text-xs text-textLight">
            <span className="size-1.5 rounded-full bg-yellow" aria-hidden />
            {filename}
          </span>
        )}
        {right && (
          <span className="ml-auto text-xs text-comment">{right}</span>
        )}
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
