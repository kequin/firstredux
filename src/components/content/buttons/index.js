import React from 'react';
import style from './style.module.scss';
import Details from './buttons';

const Buttons = () => {
    const object = ['.', '√', 'delete' ,'C', 1, 2, 3,'*', 4, 5, 6,'/', 7, 8, 9, '+', 0, '00', '=', '-' ];
    const map = object.map((item, idx) => <li key={idx}><Details>{item}</Details></li>)
    return (
        <div className={style.Buttons}>
            <ul>
                {map} 
            </ul>
        </div>
    )
}

export default Buttons;