import calculatorApp from '../images/calculator-app.png';
import caelumJoyas from '../images/caelum-joyas.png';
import cityCakes from '../images/city-cakes.png';
import counterApp from '../images/counter-app.png';

const myProjects = [
  {
    id: 1,
    image: caelumJoyas,
    name: 'Caelum Joyas',
    url: 'https://mvieraamado.github.io/web/',
    gitHub: 'https://github.com/mvieraamado/web',
    description: 'HTML, CSS, Bootstrap, JQuery'
  },
  {
    id: 2,
    image: calculatorApp,
    name: 'Calculator App',
    url: 'https://calculator-app-rjs.netlify.app/',
    gitHub: 'https://github.com/mvieraamado/reactjs-calculator',
    description: 'CSS, React JS'
  },
  {
    id: 3,
    image: cityCakes,
    name: 'City Cakes',
    url: 'https://mvieraamado.github.io/javascript18040-city-cakes/',
    gitHub: 'https://github.com/mvieraamado/javascript18040-city-cakes',
    description: 'HTML, CSS, JavaScript, Jquery'
  },
  {
    id: 4,
    image: counterApp,
    name: 'Counter',
    url: 'https://pink-counter.netlify.app/',
    gitHub: 'https://github.com/mvieraamado/counter',
    description: 'CSS, React JS'
  }
];

const tech = ['HTML', 'CSS',
  'Bootstrap', 'JavaScript', 'JQuery', 'React JS', 'Firebase', 
  'React Bootstrap', 'Chakra UI', 'Axios', 'Formik', 'Python'
]

export function list () {
  return new Promise ((resolve,)=> {
    setTimeout(()=> resolve(myProjects), 1800);
  })
};

export function techList () {
  return new Promise ((resolve,)=> {
    setTimeout(()=> resolve(tech), 2000)
  })
}

