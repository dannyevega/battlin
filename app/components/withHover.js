import React from 'react';

// default propName used for naming collisions -- you can set the propname to whatever you want in the component that's using withHover
export default function withHover(Component, propName = 'hovering') {
  return class WithHover extends React.Component {
    state = { hovering: false }
  
    handleMouseOver = () => this.setState({ hovering: true });
  
    handleMouseOut = () => this.setState({ hovering: false });
  
    render() {
      const props = {
        [propName]: this.state.hovering,
        ...this.props
      }

      return (
        <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
          <Component {...props} />
        </div>
      );
    }
  }
}
