import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css'

function Header() {

    return (
        <header>
            <nav>

                <ul>
                    <li> <h5>
                        <NavLink to="/" exact activeClassName="active-link">
                            Hottest Posts
                        </NavLink>
                        <NavLink to="/subreddit/:subreddit" activeClassName="active-link">
                            subreddit
                        </NavLink>

                    </h5>
                    </li>
                </ul>

            </nav>
        </header>

    );

}

export default Header;