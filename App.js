import React from 'react';

import {Text , View} from 'react-native';
var time = {x :0};
var rval = Math.floor(Math.random() * 255);
var gval = Math.floor(Math.random() * 255);
var bval = Math.floor(Math.random() * 255);
class Timer extends React.Component {

  state = {count: 0}

  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count + 1});
    rval = Math.floor(Math.random() * 255);
 gval = Math.floor(Math.random() * 255);
 bval = Math.floor(Math.random() * 255); }, 1000)
  }

  render() {
    const {count} = this.state
    const {color, size} = this.props

    return (
      <Text style = {{fontSize:50 , color : `rgb(${rval},${gval},${bval})`}}>
        {count}
      </Text>
    )
  }
}
  

export default class App extends React.Component {
 

render(){
  return(
   <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
     <Timer />
      </View>
    )
}
  
  }