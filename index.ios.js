import React, { Component } from 'react'
import {
   AsyncStorage,
   AppRegistry
} from 'react-native'
import asyncComponent from './src/asyncComponent'

export default class asyncStorageTest extends Component {
   constructor() {
      super();
      this.state = {
         'data': ''
      }
   }
   componentDidMount = () => {
      AsyncStorage.getItem('data').then((value) => {
         this.setState({'data': value});
      });
   }
   setData = (value) => {
      AsyncStorage.setItem('data', value);
      this.setState({'data': value});
   }
   render() {
      return (
         <AsyncStorageExample
            data = {this.state.data}
            setData = {this.setData}
         />
      );
   }
}

AppRegistry.registerComponent('asyncStorageTest', () => asyncStorageTest);
