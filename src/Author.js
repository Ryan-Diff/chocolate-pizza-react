import React from 'react';

class Author extends React.Component {
    render() {
        return (
            <div id='author'>
                <img src={this.props.vanessa} alt="author"/>
                <h3>Vanessa Stevenson</h3>
                <p>
                    Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am. 
                </p>
                <button id='share-button'> Share</button>  
        
            </div>
        )
    }
}

export default Author