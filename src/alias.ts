type skill = [number, string, number];

let skill = 5;
console.log(skill);
const html: skill = [1, 'html', 10];
const css: skill = [2, 'css', 20];
const js: skill = [3, 'javascript', 30];

const allSkills: skill[] = [
  html, css, js
]

type module = {
  index: number,
  title: string,
  hours: number,
};

type FinalProject = {
  discriptionFinalProject: string;
  hoursFinalProject: number,
}

type ModuleWithFinalProject = module | FinalProject;

const MWP: ModuleWithFinalProject = {
  index: 1,
  title: 'HTML Basics',
  hours: 10,
  discriptionFinalProject: 'CRM',
  hoursFinalProject: 12,
};


const m1: ModuleWithFinalProject = {
  index: 1,
  title: 'HTML Basics',
  hours: 10,
};
const m2: module = {
  index: 2,
  title: 'CSS Basics',
  hours: 15,
};

const course1: module[] = [ m1, m2 ];
const course2: Array<module> = [ m1, m2 ];

const course3: readonly module[] = [ m1, m2 ];
const course4: ReadonlyArray<module> = [ m1, m2 ];
