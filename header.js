import React from 'react';


class SocialIcon extends React.Component {
    render() {
        return <img{this.props.src}/>


    }
}

class Header extends React.Component {
render() {
    return(
    <div>
        <div id="top-logo">
            <img src='./assets/logo.png' id="logo"/> 
            <label>
                <h1 class="logo">Delicious</h1>
                <p class="logo">THE BEST FOOD BLOG ON THE WEB.</p>
            </label>
        </div>

        <div id='social-icons'>

        </div>
        );

    </div>    
        )
    } 
}