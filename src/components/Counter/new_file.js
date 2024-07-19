
state = {count: 0}
onDecrement = () => {
  this.setState(prevState) => {
    console.log(prevState.count)
    return(count: prevState.count+1)
  }
}

inCrement = () => {
  this.setState(prevstate) => {
    console.log(prevState.count)
    return(count: prevState.count-1)
  }
}
render() {
  const {count} = this.state
}
