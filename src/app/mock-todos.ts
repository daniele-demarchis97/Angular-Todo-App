import { Todo } from "./models/todo";

export const TODOS: Todo[] = [
    { id: 1, description: 'Clean the house', done: false, data: new Date(2012, 3, 1), editable: false},
    { id: 2, description: 'Hack NASA', done: false, data: new Date(2013, 7, 14), editable: false },
    { id: 3, description: 'Become President', done: true, data: new Date(2018, 11, 24), editable: false },
    { id: 4, description: 'Throw out the rubbish', done: false, data: new Date(2020, 7, 25), editable: false },
    { id: 5, description: 'Sleep', done: true, data: new Date(2021, 3, 19), editable: false },
];
