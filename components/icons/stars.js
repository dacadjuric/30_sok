// Clean, uniform 5-star rating.
export default function StarRating({ count = 5, size = 18, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-yellow ${className}`}
      role="img"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2.3l2.95 6.18 6.8.62-5.13 4.5 1.53 6.65L12 17.5 5.85 20.75l1.53-6.65-5.13-4.5 6.8-.62z" />
        </svg>
      ))}
    </span>
  );
}
