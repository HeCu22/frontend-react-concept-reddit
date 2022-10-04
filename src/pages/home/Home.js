import React, {useState, useEffect} from 'react';
import axios from "axios";
import Article from "./article/Article";
import logo from "../../assets/logo.png";
import './Home.css';


function Home() {
    const [subReddit, setSubreddit] = useState([]);
    // const [error, toggleError] = useState(false);


    useEffect(() => {

        async function fetchData() {
            // toggleError(false);

            try {
                const result = await axios.get("https://www.reddit.com/hot.json?limit=15")
                setSubreddit(result.data.data.children.slice(0, 15));
                // console.log(result.data.data);

            } catch (e) {
                // toggleError(true)
                console.error(e);
            }
        }

        fetchData();

    }, [])


    function handleClick(evt) {
        console.log('geliked');
    }

    return (
        <section className="overview">
            <section className="headhome">
                < h1> Reddit </h1>
                <button type="button" onClick={handleClick}><span className="headhome"><img src={logo}
                                                                                           alt="logo"/></span></button>
            <h2>Hottest posts</h2>
            <h3>on Reddit right now</h3>
            </section>
            <>
                {subReddit.map((item) => {
                    return (
                        <Article
                            key={item.data.name}
                            title={item.data.title}
                            subreddit={item.data.subreddit}
                            comments={item.data.num_comments}
                            ups={item.data.ups}
                            url={item.data.url}
                        />
                    )

                })}
            </>

        </section>


    );
}

export default Home;