import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import indexScreen from './src/screens/indexScreen'
import showScreen from './src/screens/showScreen'
import createScreen from './src/screens/createScreen'
import editScreen from './src/screens/editScreen'

import { Provider } from './src/context/BlogContext'

const navigator = createStackNavigator({
  Index: indexScreen,
  Show: showScreen,
  Create: createScreen,
  Edit: editScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blog'
  }
})

const App = createAppContainer(navigator)

export default () => {
  return(
    <Provider>
      <App />
    </Provider>
    
  )
}