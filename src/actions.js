export const any_Type = (props) => {
    if (/^[0-9]+$/.test(props)) {
        return { type: 'NEW_NUMBER', payload: props }
    } else if(props === 'delete'){
        return {type: 'DELETE_ONE'}
    } else if(props === 'C'){
        return {type: 'DELETE_ALL'}
    } else if(props === '='){
        return { type: 'TOTAL' }
    } else if(props === '√'){
        return  {type: 'SQRT'}
    } else {
        return { type: 'NEW_ACTION', payload: props }
    }
}  