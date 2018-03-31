// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

// export default class Spaceship extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.name}</h1>
//                 <p>{this.props.speed}</p>
//                 <p>{this.props.hasRockets}</p>
//                 <p>{this.props.colors.join (', ')}</p>
//             </div>
//         );
//     }
// }

export default class Spaceship extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.speed}</p>
                <p>{this.props.hasRockets}</p>
                <p>{this.props.colors.join (', ')}</p>
            </div>
        );
    }
}

Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red']
}

// module.exports = Spaceship;

//if export default defined above, then no need to export default Spaceship again. Vise Versa