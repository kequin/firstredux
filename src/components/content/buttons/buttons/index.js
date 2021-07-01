import React from 'react';
import { useDispatch } from 'react-redux';
import { any_Type } from '../../../../actions';

const Details = ({children}) => {
    const dispatch = useDispatch();
    return(
        <div onClick={() => dispatch(any_Type(children))}>
            {children}
        </div>
    )
}

export default Details;