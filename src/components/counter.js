import React from 'react';
import { bindActionCreators } from 'redux';
import * as actions from "../actions";

/* connect компонент высшего порядка, который связывает react и redux,
оборачивая Counter эта функция вернет новый компонент,
который передаст в counter все необходимые данные из redux store
в который ранее мы передавали так: const Counter = ({ counter, inc, dec, rnd }) => {
*/
import { connect } from 'react-redux';

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="jumbotron">
            <h2>{ counter }</h2>
            <button
                onClick={dec}
                className="btn btn-primary btn-lg">DEC</button>
            <button
                onClick={inc}
                className="btn btn-primary btn-lg">INC</button>
            <button
                onClick={rnd}
                className="btn btn-primary btn-lg">RND</button>
        </div>
    );
};

// Здесь мы получаем state из connect, рассказываем какие именно значения из store нам нужны в counter
const mapStateToStore = (state) => {
    return {
        counter: state
    }
};

// Здесь мы передаем экшены в state, в качестве ключей объектов - свойства, которые мы хотим присвоить компоненту counter
// а в качестве значений - будут те функции, которые мы присваиваем

/* Чтобы функцию mapDispatchToProps данную часть кода используем bindActionCreators из redux
    return {
    inc: () => dispatch(inc()),
    dec: () => dispatch(dec()),
    rnd: () => {
        const rundomValue = Math.floor(Math.random()*10);
        dispatch(rnd(rundomValue));
    }
    */

// из-зе того что мы в action-creators  в rnd перенесли часть кода по нахождению рандомного числа
/*
Мы смогли преобразовать функцию:

const mapDispatchToProps = (dispatch) => {
            const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
            return {
                inc,
                dec,
                rnd
            }
        };

таким образом:

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

*/

// этот паттерн спользуется очень часто и поэтому в функцию connect мы можем вместо передачи функции mapDispatchToProps передать наши действия action-creators
//  export default connect(mapStateToStore, mapDispatchToProps)(Counter);
// получили следующее:

export default connect(mapStateToStore, actions)(Counter);