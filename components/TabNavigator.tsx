import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Create from '../screens/Create';
import Tabbar from '../components/Tabbar';
import Client from '../screens/Client';
import Treatment from '../screens/Treatment';

import ClientIMG from '../images/Clients.png';
import ExerciseIMG from '../images/Exercise.png';
import TreatmentIMG from '../images/Treatment.png';
import ToolsIMG from '../images/ToolsIcon.png';
import ProfileIconIMG from '../images/ProfileIcon.png';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<Tab.Navigator tabBar={(props) => <Tabbar {...props} />}>
			<Tab.Screen name="Home" component={Home} initialParams={{ icon: ClientIMG }} />
			<Tab.Screen name="Create" component={Create} initialParams={{ icon: ExerciseIMG }} />
			<Tab.Screen name="Profile" component={Profile} initialParams={{ icon: TreatmentIMG }} />
			<Tab.Screen name="Client" component={Client} initialParams={{ icon: ToolsIMG }} />
			<Tab.Screen name="Treatment" component={Treatment} initialParams={{ icon: ProfileIconIMG }} />
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({});

export default TabNavigator;
