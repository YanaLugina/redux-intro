import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer';
//import * as actions from "./actions";  после деструктуризации тоже не нужен уже

import App from './components/app';


// store.subscribe(func) - подписываемся на получение нотификации, когда store каким-либо образом изменился
//store.getState() вызываем для получения текущего значения нашего state
// для изменения store, для этого вызываем store.dispatch({ type: 'INC' }) и передаем тип нашего action
// после деструктуризации dispatch из store, его писать стало удобнее

const store = createStore(reducer);

/*
До деструктуризации архитектуры, до выделения модулей в отдельную папку dispatch больше не нужен так как мы можем получить все необходимое из store в компоненте App:
const { dispatch } = store;
*/


//связывание action-creator и функции dispatch
// это наша функция, но такая же есть и в redux, поэтому нашу мы не используем

/*const bindActionCreator = (creator, dispatch) => (...args) => {
    dispatch(creator(...args));
};*/

//  в функии bindActionCreators от redux можно использовать сразу несколько creators(inc, dec ...), для этого передаем вместо inc - объект с набором creators (функций)
// как было /*const rndDispatch = bindActionCreators(rnd, dispatch);*/
// как стало:

/*
До деструктуризации архитектуры, до выделения модулей в отдельную папку было:
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
 */

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




ReactDOM.render(
        /*
        До деструктуризации архитектуры, до выделения модулей в отдельную папку было:
        <Counter
            counter={store.getState()}
            inc={inc}
            dec={dec}
            rnd={() => {
                const payload = Math.floor(Math.random()*10);
                rnd(payload);
            }}
        />,
        */
    <Provider store={store}>
            <App />
    </Provider>,
    document.getElementById('root')
);


// Provider от react-redux уже имеет подписку на обновление контента, поэтому вручную нет необходимости прописывать на изменение store, необходимо отрендерить только один раз, удаляем оборачивание render в функцию update и последующий ее вызов по подписке.
/*
update();
store.subscribe(update);
*/






