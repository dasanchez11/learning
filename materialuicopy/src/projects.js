import redux from './images/redux.png'
import dogBreed from './images/dogBreed.png'
import ecommerce from './images/ecommerce.png'
import memories from './images/memories.png'
import portafolioEdo from './images/portafolioEdo.png'
import roboFriends from './images/roboFriends.png'
import smartBrain from './images/smartBrain.png'


const pry = [
    {id: 1,name: 'Ecommerce', website:'https://ecommercediego.herokuapp.com/',resources:['react', 'redux', 'firebase','routerDom']},
    {id: 2,name: 'SmartBrain',website:'https://smartbrainds.herokuapp.com/',resources:['react', 'redux']},
    {id: 3,name: 'SmartBrainAPI',website:'https://github.com/dasanchez11/Smart-Brain-Api',resources:['node', 'postgressSQL']},
    {id: 4,name: 'DogBreed', website:'https://dasanchez11.github.io/dog-breed-recognition/',resources:['react']},
    {id: 5,name: 'DogBreedAPI', website:'https://github.com/dasanchez11/dog-breed-api',resources:['flask']},
    {id: 6,name: 'Network',website:'',resources:['react']},
    {id: 7,name: 'NetworkAPI',website:'',resources:['mongoDb', 'node']},
    {id: 8,name: 'commerce',website:'',resources:['node']},
    {id: 9,name: 'commerce', website:'',resources:['mongoDb','node']},
    {id: 10,name: 'PortafolioEdo:',website:'https://portafolio-edo.herokuapp.com/',resources:['react', 'redux', 'routerDom']},
    {id: 11,name: 'RobotFriends',website:'https://dasanchez11.github.io/Robot-Friends/',resources:['react']}
]



export const resoucesUrl = {
    react:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
    redux:redux,
    firebase:'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png?hl=es',
    routerDom:'https://visual-engin.com/wp-content/uploads/sites/3/2016/07/1_TKvlTeNqtkp1s-eVB5Hrvg@2x.png',
    node:'https://img.icons8.com/windows/452/node-js.png',
    postgressSQL:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
    flask:'https://miro.medium.com/max/800/1*Q5EUk28Xc3iCDoMSkrd1_w.png',
    mongoDb:'http://www.manualweb.net/img/logos/mongodb.png',
}

const Projects = [
    {id:1,name:'Ecommerce',website:'https://ecommercediego.herokuapp.com/',previewUrl:ecommerce,resources:['react', 'redux', 'firebase','routerDom']},
    {id:2,name:'Smart Brain',website:'https://smartbrainds.herokuapp.com/',previewUrl:smartBrain,resources:['react', 'redux']},
    {id:3,name:'Smart Brain API',website:'https://github.com/dasanchez11/Smart-Brain-Api',previewUrl:'https://blog.ehcgroup.io/wp-content/uploads/2019/08/What-is-an-API.png',resources:['node', 'postgressSQL']},
    {id:4,name:'Dog Breed',website:'https://dasanchez11.github.io/dog-breed-recognition/',previewUrl:dogBreed,resources:['react']},
    {id:5,name:'Dog Breed Api',website:'https://github.com/dasanchez11/dog-breed-api',previewUrl:'https://blog.ehcgroup.io/wp-content/uploads/2019/08/What-is-an-API.png',resources:['flask']},
    {id:6,name:'Network',website:'https://dasanchez11.github.io/memories/',previewUrl:memories,resources:['react', 'redux']},
    {id:7,name:'Network API',website:'https://github.com/dasanchez11/memoriesAPI',previewUrl:'https://blog.ehcgroup.io/wp-content/uploads/2019/08/What-is-an-API.png',resources:['mongoDb', 'node']},
    {id:8,name:'Commerce',website:'',previewUrl:'',resources:['node']},
    {id:9,name:'Commerce API',website:'',previewUrl:'https://blog.ehcgroup.io/wp-content/uploads/2019/08/What-is-an-API.png',resources:['mongoDb','node']},
    {id:10,name:'Portafolio Edo',website:'https://portafolio-edo.herokuapp.com/',previewUrl:portafolioEdo,resources:['react', 'redux', 'routerDom']},
    {id:11,name:'RobotFriends',website:'https://dasanchez11.github.io/Robot-Friends/',previewUrl:roboFriends,resources:['react']},
]

export default Projects