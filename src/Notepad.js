import React from 'react';

class Notepad extends React.Component {
    render() {
        return (
            <div id='note-pad'>
                <img src={this.props.notepad} alt="notepad"/>
                <ul>
                    <li>1 1/2 cups milk</li>
                    <li>1/2 cup marscarpone</li>
                    <li>1/2 tsp pink salt</li>
                    <li>1 lb Black Mission Figs</li>
                    <li>1/2 cup cup brown sugar</li>
                    <li>2-4 tbsp water</li>
                    <li>1 1/2 cups heavy cream</li>
                    <li>1/3 granulated </li>
                    <li>2 egg yolks</li>
                    <li>1 lemon, juiced</li>
                    <li>2 tbsp butter</li>
                    <li>1 cup honey roasted pecans, roughly chopped</li>
                </ul>
                
            </div>
        )
    }
}

export default Notepad