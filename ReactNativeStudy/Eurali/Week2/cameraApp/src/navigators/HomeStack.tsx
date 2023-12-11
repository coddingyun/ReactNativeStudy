import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import colors from '../styles/colors';
//import GradientText from '../utils/gradientText';

const Stack = createStackNavigator();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'CMC님의 사진첩',
          //headerTitle: <GradientText colors={["#ddd", "#fff"]}>CMC</GradientText>,
          headerStyle: {
            backgroundColor: colors.DeepDarkGrey,
          },
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 20,
          },
          headerTitleAlign: 'left',
          headerTintColor: colors.purple,
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
