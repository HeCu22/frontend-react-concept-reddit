import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from "axios";
import formatDate from "../../helpers/formatDate";
import {ReactComponent as Back} from "../../assets/back.svg";
import './Subreddit.css';

function Subreddit() {
    const {subreddit} = useParams();
    // const [subReddit, setSubreddit] = useState('Eldenring');
    const [resultData, setResultData] = useState(null);
    const [error, toggleError] = useState(true);


    useEffect(() => {
        async function fetchDataSubreddit() {

            toggleError(false);

            try {
                const {data: {data}} = await axios.get(`https://www.reddit.com/r/${subreddit}/about.json`)

                // console.log('result', (data));
                setResultData((data));


            } catch (e) {
                toggleError(true)
                console.error(e);
            }
        }


        fetchDataSubreddit();

    }, []);

    return (
        <>
            {/*{console.log('Naam:', resultData.name)};*/}
            <section className="headsubreddit">

                <h2>r/{subreddit}</h2>
                <h3>Subreddit specifications</h3>
                {resultData &&
                    <p> since {formatDate(resultData.created)}</p>
                }
            </section>

            {resultData &&


                <section className="subreddit-container">
                    <div className="subreddit">
                        <h1>Title</h1>
                        <p>{resultData.title}</p>
                        <h1>Description:</h1>
                        <p>{resultData.public_description}</p>

                        <img src={resultData.mobile_banner_image}/>
                        <img src={resultData.icon_img}/>
                        <h1>Number of subscribers</h1>
                        <p>{resultData.subscribers}</p>
                        <p><span>  <Back className="back-icon"/> <Link to='/'>Take me back</Link></span></p>
                    </div>
                </section>

            }
        </>
    );
}

export default Subreddit;