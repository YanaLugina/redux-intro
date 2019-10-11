//action-creators
export const inc = () => ({ type: 'INC' });
export const dec = () => ({ type: 'DEC' });

//action-creator может быть нечистой функцией, но лучше делать его числой функцией
export const rnd = () => {
    return {
        type: 'RND',
        payload: Math.floor(Math.random()*10)
    };
};