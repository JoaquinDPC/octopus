import { IMision } from '../interfaces/mainInterfaces';

export const mock: IMision[] = [{
  _id: '1',
  checked: false,
  missionName: 'Make lentails',
  description: 'SOME',
  userId: '1',
  deleted: false,
  timeStampt: new Date()
}, {
  _id: '2',
  checked: false,
  missionName: `Estaba la pájara pinta
    sentada en un verde limón.
    Con el pico cortaba la rama,
    con la rama cortaba la flor.
    Ay, ay, ay!
    Cuándo vendrá mi amor...
    Me arrodillo a los pies de mi amante,
    me levanto constante, constante.
    Dame la mano, dame la otra,`,
    description: 'SOME',
    userId: '1',
    deleted: false,
    timeStampt: new Date()
}, {
  _id: '3',
  checked: false,
  missionName: 'read a book',
  description: 'SOME',
  userId: '1',
  deleted: false,
  timeStampt: new Date()
}, {
  _id: '4',
  checked: true,
  missionName: 'play ps4',
  description: 'SOME',
  userId: '1',
  deleted: false,
  timeStampt: new Date()
}, {
  _id: '5',
  checked: true,
  missionName: 'do 2 backflips :)',
  description: 'SOME',
  userId: '1',
  deleted: false,
  timeStampt: new Date()
}, {
  _id: '6',
  checked: false,
  missionName: 'FIX drag component. Your current implementation is shit! >:(',
  description: 'SOME',
  userId: '1',
  deleted: false,
  timeStampt: new Date()
}];

