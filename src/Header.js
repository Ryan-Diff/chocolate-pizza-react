import React from 'react';


export default class Header extends React.Component {
render() {
    return (
    <header>
        <div id="top-logo">
            <img src={this.props.logo} id="logo" alt="logo"/> 
            <label>
                <h1 class="logo">Delicious</h1>
                <p class="logo">THE BEST FOOD BLOG ON THE WEB.</p>
            </label>
        </div>

        <div id="social-icons">
            <img src={this.props.facebook} alt="facebook"/>
            <img src={this.props.twitter} alt="twitter"/>
            <img src={this.props.google} alt="google"/>
            <img src={this.props.insta} alt="insta"/>
            <img src={this.props.flickr} alt="flickr"/>
            <img src={this.props.pinterest} alt="pinterest"/>
            <img src={this.props.rss} alt="rss"/>
            <img src={this.props.mail} alt="mail"/>

        </div>
    </header>  
        );
    } 
};