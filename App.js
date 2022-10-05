import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import {Image,StyleSheet} from "react-native";
import ProjectsScreen from './src/screens/ProjectsScreen';

const navigator = createStackNavigator({
  Projects:ProjectsScreen
},{
  initialRouteName:"Projects",
  defaultNavigationOptions:{
    //title:"Hi",
  }
}
);

export default createAppContainer(navigator)
