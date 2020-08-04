import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div id='footer'>
                <img src={this.props.smalllogo} alt="small-logo"/>
                <p> Delicious &copy; 2013 All Rights Reserved.</p>
                <p>Proudly published with Ghost.</p>
            </div>
        )
    }
}

export default Footer