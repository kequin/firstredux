import getMathHandler from './assets/applyMath.js'
const defaultState = {
    last: '',
    now: '',
    lastSymbol: true,
    isWritten: false
}

const reducer = (state = defaultState, action) => {
    let newString = state.now;
    let lastString = state.last;
    switch (action.type) {
        case 'NEW_ACTION':
            if (newString.lenght === 0 || state.lastSymbol) {
                newString = state.now;
            } else {
                newString = state.now + ' ' + action.payload + ' ';
            }
            return {
                last: state.last,
                now: newString,
                lastSymbol: true,
                isWritten: false
            };
        case 'NEW_NUMBER':
            if (state.isWritten) {
                newString = action.payload;
            } else {
                newString = state.now + action.payload;
            }
            return {
                last: state.last,
                now: newString,
                lastSymbol: false,
                isWritten: false
            }
        case 'DELETE_ONE':
            newString = state.now.slice(0, -1)
            return {
                last: state.last,
                now: newString,
                lastSymbol: false,
                isWritten: false
            }
        case 'DELETE_ALL':
            newString = '';
            return {
                last: state.last,
                now: newString,
                lastSymbol: true,
                isWritten: false
            }
        case 'TOTAL':
            lastString = newString;
            newString = getMathHandler(newString);
            return {
                last: lastString,
                now: newString + ' ',
                lastSymbol: false,
                isWritten: true
            }
        case 'SQRT':
            newString = state.now + '√';
            return {
                last: lastString,
                now: newString,
                lastSymbol: false,
                isWritten: false
            }
        default:
            return state;
    } 
}

export default reducer;