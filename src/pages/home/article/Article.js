import React from 'react';
import {Link} from "react-router-dom";
import './Article.css';

function Article({title, subreddit, comments, ups, url}) {

    return (
        <article className="article-item">
            <h3><Link to={{ pathname: `${url}` }} target="_blank" >{title}</Link></h3>
            <h4><Link to={`/subreddit/${subreddit}`} > <span>{subreddit}</span></Link></h4>
            <p>{comments}</p>
            <p>{ups}</p>

        </article>
    );
}

export default Article;