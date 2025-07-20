const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "#",
  title: "Birusha",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Birusha Ndegeya",
  role: "Frontend Web Developer",
  description:
    "I am a freelance web designer & full-stack developer. I'm seriously into writing pretty code, crafting exceptional UX, and using accessibility best practices.",
  resume: "https://example.com",
  social: {
    linkedin: "https://www.linkedin.com/in/birusha-ndegeya-243b032a9",
    github: "https://github.com/BirushaNdegeya",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Emi",
    description:
      "Filter the available data on Wikimedia and identify the most searched articles in a given country. ",
    stack: ["React", "TypeScript", "TailwindCSS"],
    sourceCode: "https://github.com/kaliacad/mostvisitedarticle",
    livePreview: "https://emingi.netlify.app/",
  },
  {
    name: "Libraryware",
    description:
      "Libraryware is an online platform that makes reading interactive and social. ",
    stack: ["NextJs", "React", "TypeScript", "ShadcnUI", "Tailwindcss"],
    sourceCode: "https://github.com/sofiatechnology/libraryware",
    livePreview: "https://sofia-library.netlify.app/",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "SASS",
  "Material UI",
  "Git",
  "NextJS",
  "Jest",
  "Angular",
  "Git",
  "Gerrit",
];

const contact = {
  email: "birushandegeya@gmail.com",
};

export { header, about, projects, skills, contact };
