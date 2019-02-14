const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState().toJS()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const heightBtn = document.getElementById('height')
heightBtn.addEventListener('click', e => dispatch({
    type: 'CHANGE_HEIGHT'
}))

const widthBtn = document.getElementById('width')
widthBtn.addEventListener('click', e => dispatch({
    type: 'CHANGE_WIDTH'
}))

const redBtn = document.getElementById('red')
redBtn.addEventListener('click', e => dispatch({
    type: 'CHANGE_COLOR',
    color: '#FF0000'
}))

const blueBtn = document.getElementById('blue')
blueBtn.addEventListener('click', e => dispatch({
    type: 'CHANGE_COLOR',
    color: '#0000FF'
}))


