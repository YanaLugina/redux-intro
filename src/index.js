import { createStore } from 'redux';

// Reducer - чистая функция, не изменяет аргументы, не зависит от внешних параметров, не производит побочных эффектов
const reducer = (state = 0, action) => {

    switch (action.type) {
        case 'RND':
            return state + action.payload;
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        default:
            return state;
    }
};

// store.subscribe(func) - подписываемся на получение нотификации, когда store каким-либо образом изменился
//store.getState() вызываем для получения текущего значения нашего state
// для изменения store, для этого вызываем store.dispatch({ type: 'INC' }) и передаем тип нашего action

const store = createStore(reducer);

//action-creators
const inc = () => ({ type: 'INC' });

const dec = () => ({ type: 'DEC' });
const rnd = (payload) => ({ type: 'RND', payload });

document
    .getElementById('inc')
    .addEventListener('click', () => {
        store.dispatch(inc())
    });

document
    .getElementById('dec')
    .addEventListener('click', () => {
      store.dispatch(dec())
    });

document
    .getElementById('rnd')
    .addEventListener('click', () => {
        const payload = Math.floor(Math.random()*10);
        store.dispatch(rnd(payload))
    });

const update = () => {
    document.getElementById('counter')
        .innerHTML = store.getState();
};


store.subscribe(update);


