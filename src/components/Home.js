import React from 'react';

const Home = () => (
    <div className="home"> 
        <div>
            <h2>What will you learn</h2>
            <ol>
                <li>What is Puppeteer</li>
                <li>How to Integrate Puppeteer with Jest</li>
                <li>Emulating mobile device</li>
                <li>Testing Forms</li>
                <li>Taking screenshots</li>
                <li>Testing fornted</li>
            </ol>
        </div>
        <div>
            <img src="http://localhost:8080/img/jest-puppeteer.png" alt="Jest + Puppeteer"/>
        </div>
    </div>
);

export default Home;