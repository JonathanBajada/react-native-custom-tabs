import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Clients from '../../screens/Clients';
import Profile from '../../screens/Profile';
import Alerts from '../../screens/Alerts';
import Tabbar from './Tabbar';
import Resources from '../../screens/Resources';
import Bookings from '../../screens/Bookings';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
	return (
		<Tab.Navigator tabBar={(props) => <Tabbar {...props} />}>
			<Tab.Screen name="Profile" component={Profile} initialParams={{ icon: 'user' }} />
			<Tab.Screen name="Alerts" component={Alerts} initialParams={{ icon: 'bell' }} />
			<Tab.Screen name="Bookings" component={Bookings} initialParams={{ icon: 'book-open' }} />
			<Tab.Screen name="Clients" component={Clients} initialParams={{ icon: 'scissors' }} />
			<Tab.Screen name="Resources" component={Resources} initialParams={{ icon: 'settings' }} />
		</Tab.Navigator>
	);
};

export default TabNavigator;
