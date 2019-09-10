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

export default reducer;