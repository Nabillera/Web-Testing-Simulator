export const HINTS = [
  {
    component: "Summary",
    description:
      "Be brief AND specific, avoid words like 'issue', 'problem', 'incorrect', 'wrong' - what we want to do with the summary is pinpoint what exactly is the defect, where and when it happens. Thus, start with the level where the bug was identified, optionally followed by the specific component where it occurs. Follow the format: 'Level {X}: Report Button: The 'Report' button is yellow instead of red",
  },
  { component: "Steps to reproduce", description: "Number each step (1. ... 2. ...), better to start with where to navigate as the first step (e.g. 'Open Level 2'/'Go to Level 0'), then come the rest of the actions you should take to see the defect - gentle reminder, be specific." },
  { component: "Actual result", description: "Again... no vague description such as 'price is calculated incorrectly' - is it doubled, incremented by 10 or simply 0 at all times?" },
  { component: "Expected result", description: "Try to follow the requirements (if provided) as closely as possible, you can even quote them directly: 'Product quantities must never become negative'" },
];
