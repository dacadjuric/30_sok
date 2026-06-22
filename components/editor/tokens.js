// Monochrome syntax palette — yellow / white / gray only, on brand.
// Keyword & string carry the yellow accent; everything else stays quiet.

export const K = ({ children }) => (
  <span className="text-yellow font-medium">{children}</span>
);

export const Str = ({ children }) => (
  <span className="text-yellow/70">{children}</span>
);

export const C = ({ children }) => (
  <span className="text-comment italic">{children}</span>
);

export const Fn = ({ children }) => (
  <span className="text-white">{children}</span>
);

export const V = ({ children }) => (
  <span className="text-textLight">{children}</span>
);

export const P = ({ children }) => <span className="text-comment">{children}</span>;

// Inline code pill — yellow bg / dark text, exactly like the extension.
export const Pill = ({ children }) => (
  <code className="rounded bg-yellow px-1.5 py-0.5 font-mono text-[0.85em] text-background">
    {children}
  </code>
);
