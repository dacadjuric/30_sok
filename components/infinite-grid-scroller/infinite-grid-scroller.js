import Image from "next/image";

import cpp from "../../assets/logos/cpp.svg";
import csharp from "../../assets/logos/csharp.svg";
import css from "../../assets/logos/css.svg";
import dart from "../../assets/logos/dart.svg";
import git from "../../assets/logos/git.svg";
import go from "../../assets/logos/go.svg";
import html from "../../assets/logos/html.svg";
import interview_questions from "../../assets/logos/interview_questions.svg";
import javascript from "../../assets/logos/javascript.svg";
import php from "../../assets/logos/php.svg";
import python from "../../assets/logos/python.svg";
import ramda from "../../assets/logos/ramda.svg";
import react from "../../assets/logos/react.svg";
import ruby from "../../assets/logos/ruby.svg";

const languages = [
  { name: "C++", logo: cpp },
  { name: "C#", logo: csharp },
  { name: "CSS", logo: css },
  { name: "Dart", logo: dart },
  { name: "Git", logo: git },
  { name: "Go", logo: go },
  { name: "HTML", logo: html },
  { name: "Interview Questions", logo: interview_questions },
  { name: "Javascript", logo: javascript },
  { name: "Python", logo: python },
  { name: "PHP", logo: php },
  { name: "Ramda", logo: ramda },
  { name: "React", logo: react },
  { name: "Ruby", logo: ruby },
];

const DURATION = 35000;
const DEFAULT_ROWS = 5;
const TAGS_PER_ROW = 10;

function getRowTags(rowIndex) {
  const offset = rowIndex % languages.length;
  const rotated = [...languages.slice(offset), ...languages.slice(0, offset)];
  return rotated.slice(0, TAGS_PER_ROW);
}

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="flex w-max animate-loop">
        {children}
        {children}
      </div>
    </div>
  );
};

function Tag({ text, logo }) {
  return (
    <div className="flex flex-shrink-0 items-center gap-x-3 text-textLight text-sm bg-panel border border-line rounded-md py-3 px-4 mr-5 font-mono hover:border-yellow/40 transition-colors">
      <Image src={logo} alt={`${text} icon`} className="w-5 h-5" />
      <span className="font-medium whitespace-nowrap">{text}</span>
      <span className="text-comment text-xs whitespace-nowrap">snippet</span>
    </div>
  );
}

export default function InfiniteGridScroller({ rows = DEFAULT_ROWS }) {
  return (
    <div className="relative w-full flex flex-shrink-0 flex-col gap-4 sm:gap-6 overflow-hidden">
      {[...new Array(rows)].map((_, i) => (
        <InfiniteLoopSlider
          key={i}
          duration={DURATION + i * 2500}
          reverse={i % 2 === 1}
        >
          {getRowTags(i).map(({ name, logo }) => (
            <Tag text={name} key={name} logo={logo} />
          ))}
        </InfiniteLoopSlider>
      ))}
      <div className="pointer-events-none bg-gradient-to-r from-background via-transparent via-[percentage:30%_70%] to-background absolute inset-0" />
    </div>
  );
}
