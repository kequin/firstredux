import React from 'react';
import style from './style.module.scss';
import { connect } from 'react-redux';

const Total = ({total}) => {
    console.log();
    return (
        <div className={style.Container}>
            <h3>
                {total.last}
            </h3>
            <h1>
                {total.now}
            </h1>
        </div>
    )
}

const mapStateToProps = state => { return { total: state } }

export default connect(mapStateToProps)(Total);