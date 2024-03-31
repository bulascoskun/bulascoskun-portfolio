import skillwise1 from '../assets/images/projects/skillwise-1.png';
import skillwise2 from '../assets/images/projects/skillwise-2.png';
import birebir1 from '../assets/images/projects/birebir-1.png';
import birebir2 from '../assets/images/projects/birebir-2.png';
import scraphero1 from '../assets/images/projects/scraphero-1.png';
import scraphero2 from '../assets/images/projects/scraphero-2.png';

const projectsList = [
  {
    id: 1,
    title: 'SkillWise',
    img: [skillwise1, skillwise2],
    desc: [
      'SkillWise.com is a full-stack web application for students of all ages where users can both purchase books and subscribe to courses, resembling a combination of e-commerce and Udemy.',
      'SkillWise.com offers features including user registration and login, shopping cart functionality, subscription to courses, and order placement.',
      'Developed using React, Tailwind CSS, Node.js, Express.js, and MongoDB.',
      'Also used popular libraries like React Router for routing and Redux Toolkit for state management.',
    ],
    live: 'https://skillwise-production.up.railway.app/welcome',
    github: 'https://github.com/bulascoskun/skillwise',
  },
  {
    id: 2,
    title: 'Birebir',
    img: [birebir1, birebir2],
    desc: [
      'Birebir is a portfolio website designed for an architectural firm. It serves as a platform where visitors can view the projects completed by the architects and easily get in touch with the firm for inquiries or collaborations.',
      'Developed using React, Next.js and CSS.',
    ],
    live: 'https://birebir-project.vercel.app/',
    github: 'https://github.com/bulascoskun/birebir-project',
  },
  {
    id: 3,
    title: 'Scrap Hero',
    img: [scraphero1, scraphero2],
    desc: [
      'Scrap Hero is a website designed to provide users with informa�on about scrap metal prices. It is a static website where users can learn about the current prices of various types of scrap metal.',
      'Developed using React and Styled Components as CSS framework.',
    ],
    live: 'https://scraphero.netlify.app/',
    github: 'https://github.com/bulascoskun/scrap-hero',
  },
];

export default projectsList;
