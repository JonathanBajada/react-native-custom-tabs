import * as React from 'react';
import { useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import * as shape from 'd3-shape';
import Tab from './Tab';

const { width } = Dimensions.get('window');
const tabWidth = width / 5;
const height = 70;

const left = shape.line().x((d) => d.x).y((d) => d.y).curve(shape.curveBasis)([ { x: 0, y: 0 }, { x: width, y: 0 } ]);

const right = shape.line().x((d) => d.x).y((d) => d.y).curve(shape.curveBasis)([
	{ x: width, y: 0 },
	{ x: width, y: height },
	{ x: width, y: width },
	{ x: 0, y: width },
	{ x: 0, y: 0 }
]);

const center = shape.line().x((d) => d.x).y((d) => d.y).curve(shape.curveBasis)([
	{ x: tabWidth * 2 - 40, y: 0 },
	{ x: tabWidth * 2 - 5, y: 0 },
	{ x: tabWidth * 2 + 10, y: height * 0.6 },
	{ x: tabWidth * 3 - 10, y: height * 0.6 },
	{ x: tabWidth * 3 + 5, y: 0 },
	{ x: tabWidth * 3 + 40, y: 0 }
]);

const d = `${left} ${center} ${right}`;

const Tabbar = ({ state, navigation }) => {
	const [ selected, setSelected ] = useState('Clients');
	const { routes } = state;
	const renderFocus = (currentTab) => (currentTab === selected ? 'red' : 'black');
	const renderColor = (currentTab) => (currentTab === selected ? 'red' : 'black');

	console.log(state.routes[0]);
	const handlePress = (activeTab, index) => {
		if (state.index !== index && activeTab === 'Resources') {
			setSelected(activeTab);
			navigation.navigate(activeTab);
		}
		if (state.index !== index && activeTab === 'Clients') {
			setSelected(activeTab);
			navigation.navigate(activeTab);
		}
		if (state.index !== index && activeTab === 'Alerts') {
			setSelected(activeTab);
			navigation.navigate(activeTab);
		}
		if (state.index !== index && activeTab === 'Profile') {
			setSelected(activeTab);
			navigation.navigate(activeTab);
		}
		if (state.index !== index && activeTab === 'Bookings') {
			setSelected(activeTab);
			navigation.navigate(activeTab);
		}
	};

	return (
		<View>
			<View style={styles.wrapper}>
				<Svg style={styles.svg} width={width} {...{ height }}>
					<Path {...{ d }} fill="#F8F7F7" />
				</Svg>
			</View>

			<View style={styles.container}>
				{routes.map(
					(route) =>
						route.name === selected ? (
							<Tab
								icon={route.params.icon}
								tab={route}
								onPress={() => handlePress(route.name)}
								color={renderColor(route.name)}
								key={route.key}
								focused={renderFocus(route.name)}
							/>
						) : (
							<Tab
								icon={route.params.icon}
								tab={route}
								onPress={() => handlePress(route.name)}
								color={renderColor(route.name)}
								key={route.key}
								focused={renderFocus(route.name)}
							/>
						)
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		position: 'absolute'
	},
	container: {
		flexDirection: 'row',
		height: 70
	},
	svg: {
		backgroundColor: 'white'
	}
});

export default Tabbar;
