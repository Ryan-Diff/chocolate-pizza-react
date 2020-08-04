import React from 'react';
import Notepad from './Notepad.js';
import Author from './Author.js';
import Footer from './Footer.js';

class Main extends React.Component {
    render() {
    return (
      <main>
          <div id='main-head'>
                <h1>Chocolate Pizza</h1>
                <p>POSTED ON 15 DEC 2013 / DESSERTS</p>
            </div>
            <div id='pizza-image'>
                <img src={this.props.chocopizza} alt="choco-pizza"/>
            </div>
            <div id='text-body'>
                <p>
                    For the-fig swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completly.
                </p>
                <p>
                    Ice cream: In a small pot over medium heat, combine milk, and granulated sugar ius completely dissolved and the milk is just barley lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture is cooled. 
                </p>
                <p>
                    Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i,e., let spin and thicken for 20 minutes before adding marscarpone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before serving. 
                </p>
            </div>
            <Notepad notepad='list-bg.png'/>
            <Author vanessa='van-pic.png'/>
            <Footer smalllogo='small-logo.png'/>
        

      </main>
    
     );
    }
}

export default Main