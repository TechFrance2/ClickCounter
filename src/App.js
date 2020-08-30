import React from 'react'

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      isLoggedIn: true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }
  
  render () {
    let buttonText = this.state.isLoggedIn ? "LOG IN" : "LOG OUT";
    let displayText = this.state.isLoggedIn ? "You are logged out" : "You are logged in"
    return(
      <div>
        <h1> {displayText} </h1> 
        <button onClick ={this.handleClick}>{buttonText}</button>
      </div>
    )
  } 
}
export default App
