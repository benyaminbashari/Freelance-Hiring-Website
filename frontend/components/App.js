import React from 'react';

import MyNavBar from './MyNavBar'
import MainPage from './MainPage'

class App extends React.Component {
    render() {
        return (
            <div>
                <MyNavBar name={''}/>
                <MainPage/>
            </div>
        );
    }
}



export default App;