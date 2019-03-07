import React  from 'react';
import PropTypes from 'prop-types';
//import './News.css';

function News({title, thmb}){
    
    return(
        <div>
            <div className="box__header">
                <h2>Recent News <span><span></span>12:21</span></h2>
                <button type="button">EN &gt; KR</button>
            </div>
            <NewsThmb thmb={thmb}/>
            <h1>{title}</h1>
        </div>
    )
}

function NewsThmb({thmb}){
    return (
        <img src={thmb} width="300px" alt="NewsThmb"/>
    )
}

News.propTypes = {
    title : PropTypes.string.isRequired,
    thmb : PropTypes.string.isRequired
}

NewsThmb.propTypes = {
    thmb : PropTypes.string.isRequired
}

export default News;