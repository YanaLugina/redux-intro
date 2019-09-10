import { createStore, bindActionCreators } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

import reducer from './reducer';
import * as actions from "./actions";

import Counter from './counter';


// store.subscribe(func) - подписываемся на получение нотификации, когда store каким-либо образом изменился
//store.getState() вызываем для получения текущего значения нашего state
// для изменения store, для этого вызываем store.dispatch({ type: 'INC' }) и передаем тип нашего action
// после деуструктуризации dispatch из store, его писать стало удобнее

const store = createStore(reducer);
const { dispatch } = store;

//связывание action-creator и функции dispatch
// это наша функция, но такая же есть и в redux, поэтому нашу мы не используем

/*const bindActionCreator = (creator, dispatch) => (...args) => {
    dispatch(creator(...args));
};*/

//  в функии bindActionCreators от redux можн оиспользовать сразу несколько creators(inc, dec ...), для этого передаем вместо inc - объект с набором creators (функций)
// как было /*const rndDispatch = bindActionCreators(rnd, dispatch);*/
// как стало:

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);


/*
document
    .getElementById('inc')
    .addEventListener('click', inc);

document
    .getElementById('dec')
    .addEventListener('click', dec);

document
    .getElementById('rnd')
    .addEventListener('click', () => {
      const payload = Math.floor(Math.random()*10);
        rnd(payload)
    });*/



const update = () => {
    ReactDOM.render(
        <Counter
            counter={store.getState()}
            inc={inc}
            dec={dec}
            rnd={() => {
                const payload = Math.floor(Math.random()*10);
                rnd(payload);
            }}
        />,
        document.getElementById('root')
    );
};

update();
store.subscribe(update);




