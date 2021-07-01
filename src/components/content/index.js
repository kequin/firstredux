import React from 'react';
import Buttons from './buttons';
import Total from './Total'; 
import style from './style.module.scss'

const Content = () => {

    return ( 
        <div className={style.Container}>
            <Total />
            <Buttons />
        </div>
    )
}

export default Content;