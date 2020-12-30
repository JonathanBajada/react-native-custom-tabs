import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Clients from '../../screens/Clients';
import Profile from '../../screens/Profile';
import Exercises from '../../screens/Exercises';
import Tabbar from './Tabbar';
import Resources from '../../screens/Resources';
import Treatment from '../../screens/Treatment';

import ClientIMG from '../../images/Clients.png';
import ExerciseIMG from '../../images/Exercise.png';
import TreatmentIMG from '../../images/Treatment.png';
import ToolsIMG from '../../images/ToolsIcon.png';
import ProfileIconIMG from '../../images/ProfileIcon.png';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
	return (
		<Tab.Navigator tabBar={(props) => <Tabbar {...props} />}>
			<Tab.Screen name="Profile" component={Profile} initialParams={{ icon: ProfileIconIMG }} />
			<Tab.Screen name="Exercises" component={Exercises} initialParams={{ icon: ExerciseIMG }} />
			<Tab.Screen name="Treatment" component={Treatment} initialParams={{ icon: TreatmentIMG }} />
			<Tab.Screen name="Clients" component={Clients} initialParams={{ icon: ClientIMG }} />
			<Tab.Screen name="Resources" component={Resources} initialParams={{ icon: ToolsIMG }} />
		</Tab.Navigator>
	);
};

export default TabNavigator;
