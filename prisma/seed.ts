import prisma from '../lib/prisma'
import { ISkill } from '../interfaces'
const projectData = [
  {
    //use this desc size as template no longer
    title: 'Westmont House',
    img: 'https://imgur.com/sY35Oo3',
    githubURL: 'https://github.com/Kam-Mivehchi/Westmont-House',
    deployedURL: 'https://westmonthouse.com',
    description: "Responsive web application built for Westmont House, an assited living facility in Mclean, Virginia. Improved page performance by 15% and established a CI/CD pipeline for future changes",
    skills: ['Next.js', 'Styled-Components', 'SASS', 'EmailJS', 'JavaScript',],
    userId: 'clk1qaatt0000qubo9wwcwqv4'
  },
  {
    //use this desc size as template no longer
    title: 'CollectURL',
    img: 'https://imgur.com/yxhH9Zl',
    githubURL: 'https://github.com/Kam-Mivehchi/CollectURL',
    deployedURL: 'https://lovely-banoffee-8811b7.netlify.app/',
    description: "Designed to collect websites and group them together into a single buckets. Inspired by my journey as a software developer, which relies on learning concepts from various sources. This tool allows online learners to easily keep track of related websites and create lists to reference later.",
    skills: ["React", "JavaScript", 'Styled-Components', 'CSS', 'Express', 'MongoDB', 'Mongoose', 'Axios', '3rd Party API'],
    userId: 'clk1qaatt0000qubo9wwcwqv4'
  },
  {
    //use this desc size as template no longer
    title: 'Type{Scripts} 2.0',
    img: 'https://imgur.com/jVNlT8R',
    githubURL: 'https://github.com/Kam-Mivehchi/TypeScripts2-FrontEnd',
    deployedURL: 'https://typescripts-react.herokuapp.com/',
    description: "TypeScripts 2.0 is a typing game for all developers, new and experienced alike where users are able to see their typing skills. TypeScripts 2.0 features a refactored React front-end connected to the original database",
    skills: ["React", "JavaScript", 'TailwindCSS', 'CSS', 'Express', 'MySQL', 'Axios'],
    userId: 'clk1qaatt0000qubo9wwcwqv4'
  },
  {
    title: 'Weather Buddy',
    img: 'https://imgur.com/60ZQM7m',
    githubURL: 'https://github.com/Kam-Mivehchi/Weather-Dashboard',
    deployedURL: 'https://kam-mivehchi.github.io/Weather-Dashboard/',
    description: "Weather Dashboard is a sleek and responsive solution to recive weather information from around the world. This application allows user input(string input or button preset) to change the forecast to reflect their desired location. Weather data is updated dynamically with the use of Open Weather API and JavaScript.",
    skills: ["JavaScript", "HTML", 'CSS', "Local Storage", "Bootstrap 5", "DayJS", "Open Weather API"],
    userId: 'clk1qaatt0000qubo9wwcwqv4'
  },
  {
    title: 'BangerAlert',
    img: 'https://imgur.com/dtYJJBB',
    githubURL: 'https://github.com/Kam-Mivehchi/BangerAlert---Spotify-Companion',
    deployedURL: 'https://banger-alert-redux.herokuapp.com/',
    description: "BangerAlert is a Spotify Companion App that hosts a new wrapper and displays lyrics to sing along with. The application uses the Spotify API to provide a simple interface to enhance the listening experience.",
    skills: ["React", "JavaScript", 'Bootstrap 4', 'CSS', 'Express', 'Spotify Web API'],
    userId: 'clk1qaatt0000qubo9wwcwqv4'
  },

  {
    title: 'Workout Wizard',
    img: 'https://imgur.com/BDZN0fa',
    githubURL: 'https://github.com/Kam-Mivehchi/project-1',
    deployedURL: 'https://runaariga.github.io/project-1/',
    description: "Application where the user is able to find a workout specifically to certain muscle groups.If the user selects a muscle group, application will provide a list of workouts and videos",
    skills: ["JavaScript", "HTML", 'CSS'],
    userId: 'clk1qaatt0000qubo9wwcwqv4'
  },

]

const skillData =
  [
    { name: 'Next.js', img: 'https://imgur.com/A8pEUb9' },
    { name: 'Styled-Components', img: 'https://imgur.com/1l2o00m' },
    { name: 'SASS', img: 'https://imgur.com/0yTuG0u' },
    { name: 'EmailJS', img: 'https://imgur.com/vG95RQp' },
    { name: 'JavaScript', img: 'https://imgur.com/3R8g07P' },
    { name: 'React', img: 'https://imgur.com/6xI2zkg' },
    { name: 'CSS', img: 'https://imgur.com/dIiW6K9' },
    { name: 'Express', img: 'https://imgur.com/ZDFcMHD' },
    { name: 'MongoDB', img: 'https://imgur.com/PZcHhuS' },
    { name: 'Mongoose', img: 'https://imgur.com/1GR6ejs' },
    { name: 'Axios', img: 'https://imgur.com/7wlmkQD' },
    { name: '3rd Party API', img: 'https://imgur.com/SNdWZpx' },
    { name: 'TailwindCSS', img: 'https://imgur.com/96dBe2C' },
    { name: 'MySQL', img: 'https://imgur.com/5Pw3jfN' },
    { name: 'HTML', img: 'https://imgur.com/RqGYqT0' },
    { name: "Local Storage", img: 'https://imgur.com/gZBZOrj' },
    { name: "Bootstrap 5", img: 'https://imgur.com/yGxu8hn' },
    { name: "DayJS", img: 'https://imgur.com/Ewqg446' },
    { name: "Open Weather API", img: 'https://imgur.com/d5QYEFg' },
    { name: 'Bootstrap 4', img: 'https://imgur.com/yGxu8hn' },
    { name: 'Spotify Web API', img: 'https://imgur.com/HIawAcU' }
  ]

const chemSkillData =
  [
    { name: 'Mass spectrometry', img: '' },
    { name: 'GC-MS', img: '' },
    { name: 'FTIR Spectroscopy', img: '' },
    { name: 'RAMAN Spectroscopy', img: '' },
    { name: 'IR Spectroscopy', img: '' },
    { name: 'ICP-AES', img: '' },
    { name: 'NMR', img: '' },
    { name: 'Bench Testing', img: '' },
    { name: 'Quality Control', img: '' },
    { name: 'Product Development', img: '' },
    { name: 'Problem Solving', img: '' },
    { name: 'Formulation', img: '' },
    { name: 'Leadership', img: '' },
    { name: 'Product Development', img: '' },
    { name: 'Unkown Sample Analysis', img: '' },

  ]


async function createSkills() {

  const skills = await prisma.skill.createMany({
    data: chemSkillData,
    skipDuplicates: true, // Skip 'Bobo'
  })
  console.log(skills)
}
async function createTags() {

  const skills = await prisma.skill.createMany({
    data: chemSkillData,
    skipDuplicates: true, // Skip 'Bobo'
  })
  console.log(skills)
}
async function createProjects() {

  const skills = await prisma.project.createMany({
    data: projectData,
    skipDuplicates: true, // Skip 'Bobo'
  })
  console.log(skills)
}
createSkills()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
