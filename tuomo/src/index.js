import React from 'react';
import { render } from 'react-dom'
import kuva from '../public/test.jpg'

const Home = () => <div>
    Tuomo on perhonen
    <img style={{ width: '10em' }} src={kuva}></img>
</div>

const refresh = () => render(
    <Home/>,
    document.getElementById('tuomo'),
)

refresh()

if (module.hot) {
    module.hot.accept()
}