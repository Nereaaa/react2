import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="p-3 m-3">
                <h1>{this.props.titulo}</h1>
            </div>
        )
    }
}

export default Header;