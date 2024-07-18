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

const obj = {
  cpp: {
    name: "C++",
    logo: cpp,
  },
  csharp: {
    name: "C#",
    logo: csharp,
  },
  css: {
    name: "CSS",
    logo: css,
  },
  dart: {
    name: "Dart",
    logo: dart,
  },
  git: {
    name: "Git",
    logo: git,
  },
  go: {
    name: "Go",
    logo: go,
  },
  html: {
    name: "HTML",
    logo: html,
  },
  interview_questions: {
    name: "Interview Questions",
    logo: interview_questions,
  },
  javascript: {
    name: "Javascript",
    logo: javascript,
  },
  python: {
    name: "Python",
    logo: python,
  },
  php: {
    name: "PHP",
    logo: php,
  },
  ramda: {
    name: "Ramda",
    logo: ramda,
  },
  react: {
    name: "React",
    logo: react,
  },
  ruby: {
    name: "Ruby",
    logo: ruby,
  },
};

const DURATION = 35000;
const ROWS = 5;
const TAGS_PER_ROW = 10;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

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
    <div className="flex flex-auto items-center gap-x-3 text-white text-sm bg-white/5 rounded-md py-4 px-5 mr-6 ">
      <Image src={logo} alt={`${text} icon`} className="w-6 h-6" />
      <span className="font-medium whitespace-nowrap text-md">{text}</span>
    </div>
  );
}

export default function InfiniteGridScroller() {
  return (
    <div className="relative w-[50%] flex flex-shrink-0 flex-col gap-6 overflow-hidden">
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider
          key={i}
          duration={random(DURATION - 10000, DURATION + 10000)}
          reverse={i % 2}
        >
          {shuffle(Object.values(obj))
            .slice(0, TAGS_PER_ROW)
            .map(({ name, logo }, index) => (
              <Tag text={name} key={index} logo={logo} />
            ))}
        </InfiniteLoopSlider>
      ))}
      <div className="pointer-events-none bg-gradient-to-r from-background via-transparent via-[percentage:30%_70%] to-background absolute inset-0" />
    </div>
  );
}
