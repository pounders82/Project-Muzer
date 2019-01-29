import React from 'react';
import styles from './style.css';


const Landing = () => {
    return(


        <div>
            <div id="title">
                Muzer
            </div>

            <div id="logout">
                Log out
            </div>
            <div id="user">
                User
            </div>
            <div id="head">
            </div>
            <div id="foreground">
                <div id="holder">
                    <div id="logo">
                        <p>LOGO</p>
                    </div>
                    <div id="player">
                        <p>media player</p>
                    </div>
                    <div id="list">
                        <input type="text							</div>					</div>"
                               placeholder="Search.."/>
                        {/**/}
                        <button onClick="createButtons()">Search</button>
                        <div id="button-box">
                            <button className="button">
                                <div className="name">Song Name</div>
                                <div className="artist">Artist</div>
                                <div className="album">Album</div>
                            </button>



                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Landing;