export default function EdgeIcon({ width, height, ...rest }) {
  return (
    <svg
      height={height}
      width={width}
      {...rest}
      viewBox="0 0 24 24"
      className="-mr-4"
    >
      <defs>
        <radialGradient
          id="c"
          cx="93.561%"
          cy="50.866%"
          r="82.423%"
          fx="93.561%"
          fy="50.866%"
          gradientTransform="matrix(-.8608 .07116 -.06141 -.99746 1.772 .95)"
        >
          <stop offset="0%" stopOpacity="0" />
          <stop offset="46%" stopOpacity=".53" />
          <stop offset="100%" />
        </radialGradient>
        <radialGradient
          id="e"
          cx="46.984%"
          cy="43.095%"
          r="102.386%"
          fx="46.984%"
          fy="43.095%"
          gradientTransform="scale(-1 -.8104) rotate(-89.622 -.485 .423)"
        >
          <stop offset="0%" stopOpacity="0" />
          <stop offset="35.431%" stopOpacity=".5" />
          <stop offset="100%" />
        </radialGradient>
        <radialGradient
          id="g"
          cx="9.855%"
          cy="27.453%"
          r="151.448%"
          fx="9.855%"
          fy="27.453%"
          gradientTransform="matrix(.60787 .40858 -.27211 .91272 .113 -.016)"
        >
          <stop offset="0%" stopColor="#35c1f1" />
          <stop offset="11.079%" stopColor="#34c1ed" />
          <stop offset="23.164%" stopColor="#2fc2df" />
          <stop offset="31.446%" stopColor="#2bc3d2" />
          <stop offset="100%" stopColor="#36c752" />
        </radialGradient>
        <radialGradient
          id="h"
          cx="100%"
          cy="57.232%"
          r="57.092%"
          fx="100%"
          fy="57.232%"
          gradientTransform="matrix(.1872 .95968 -.63915 .28109 1.179 -.548)"
        >
          <stop offset="0%" stopColor="#66eb6e" />
          <stop offset="100%" stopColor="#66eb6e" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="b" x1="0%" x2="100%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#0c59a4" />
          <stop offset="100%" stopColor="#114a8b" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="76.69%"
          x2="33.272%"
          y1="24.818%"
          y2="83.176%"
        >
          <stop offset="0%" stopColor="#1b9de2" />
          <stop offset="16.164%" stopColor="#1595df" />
          <stop offset="66.749%" stopColor="#0680d7" />
          <stop offset="100%" stopColor="#0078d4" />
        </linearGradient>
        <path
          id="a"
          d="M18.051 14.885a7.3 7.3 0 0 1-.823.368 7.97 7.97 0 0 1-2.805.505c-3.697 0-6.917-2.543-6.917-5.806 0-.918.531-1.713 1.283-2.132-3.343.14-4.203 3.625-4.203 5.666 0 5.771 5.319 6.357 6.466 6.357.618 0 1.55-.18 2.112-.356l.102-.035a10.022 10.022 0 0 0 5.202-4.127c.173-.274-.131-.591-.417-.441z"
        />
        <path
          id="f"
          d="M11.9 11.629c-.063.082-.258.195-.258.442 0 .203.133.4.369.565 1.123.784 3.241.678 3.247.678a4.65 4.65 0 0 0 2.365-.655 4.8 4.8 0 0 0 .885-.664 4.83 4.83 0 0 0 1.493-3.467c.02-1.751-.622-2.915-.886-3.431C17.458 1.862 13.884 0 9.998 0A10 10 0 0 0 0 9.859c.037-2.855 2.875-5.16 6.247-5.16.273 0 1.833.027 3.282.787 1.276.67 1.945 1.479 2.41 2.282.483.834.569 1.886.569 2.306s-.212 1.041-.609 1.555z"
        />
      </defs>
      <g transform="translate(2 2)">
        <use href="#a" fill="url(#b)" />
        <use href="#a" fill="url(#c)" opacity=".35" />
        <path
          fill="url(#d)"
          d="M8.259 18.86a6.18 6.18 0 0 1-1.776-1.67 6.362 6.362 0 0 1-1.182-3.704c0-2.041.951-3.85 2.416-4.995.333-.26.759-.523 1.073-.671.244-.115.661-.323 1.214-.315a2.528 2.528 0 0 1 2.007 1.013 2.49 2.49 0 0 1 .497 1.458c0-.016 1.911-6.219-6.254-6.219C2.824 3.756 0 7.012 0 9.867c0 1.811.42 3.257.946 4.378a10.024 10.024 0 0 0 6.004 5.279c.963.308 1.988.476 3.054.476a9.99 9.99 0 0 0 3.16-.512 5.92 5.92 0 0 1-1.775.273 5.914 5.914 0 0 1-3.13-.9z"
        />
        <path
          fill="url(#e)"
          d="M6.482 17.19A6.362 6.362 0 0 1 5.3 13.486c0-2.041.951-3.85 2.416-4.995.333-.26.759-.523 1.073-.671.244-.115.661-.323 1.214-.315a2.528 2.528 0 0 1 2.007 1.013 2.49 2.49 0 0 1 .497 1.458c0-.016 1.911-6.219-6.254-6.219C2.824 3.756 0 7.012 0 9.867c0 1.811.42 3.257.946 4.378a10.024 10.024 0 0 0 6.004 5.279c.963.308 1.988.476 3.054.476a9.99 9.99 0 0 0 3.16-.512 5.92 5.92 0 0 1-1.775.273 5.914 5.914 0 0 1-3.13-.9 6.18 6.18 0 0 1-1.776-1.67z"
          opacity=".41"
        />
        <use href="#f" fill="url(#g)" />
        <use href="#f" fill="url(#h)" />
      </g>
    </svg>
  );
}
