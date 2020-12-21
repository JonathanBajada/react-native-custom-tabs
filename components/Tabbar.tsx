import * as React from 'react';
import { View, SafeAreaView, Dimensions, StyleSheet } from 'react-native';
import {Svg, Path} from 'react-native-svg';
import * as shape from 'd3-shape';
import StaticTabbar from './StaticTabbar'



const {width} = Dimensions.get("window");
const tabWidth = width / 5;
const height = 80;

const left = shape.line()
    .x( d => d.x)
    .y(d => d.y)
    .curve(shape.curveBasis)([
            {x: 0, y: 0},
            {x: width , y:0},
            
    ]);

const right = shape.line()
    .x( d => d.x)
    .y(d => d.y)
    .curve(shape.curveBasis)([
            {x: width, y:0},
            {x: width , y: height},
            {x: width, y: width},
            {x:0, y: width},
            {x:0, y: 0}
    ]);

const center = shape.line()
.x(d => d.x)
.y(d => d.y)
.curve(shape.curveBasis)
(
    [
        { x: 100 , y: 0 },
        { x: 130 , y: 0 },
        { x: tabWidth * 2 + 10, y: height * 0.63 },
        { x: tabWidth * 3 - 10, y: height * 0.63 },
        { x: 230 , y: 0 },
        { x: 250 , y: 0 },

    ]
)

const d = `${left} ${center} ${right}`;
interface TabbarProps {}

export default class TabShape extends React.PureComponent<TabbarProps> {
	render() {
        return (
        <>
             <Svg width={width} {...{height}} >
                <Path {...{d}} fill="#F0F0F0"/>
                <View>
                    <StaticTabbar  />
                </View>
            </Svg>
            <SafeAreaView style={styles.safeArea}/>
        </>
        )
	}
}

const styles = StyleSheet.create({
    safeArea : {
    backgroundColor: 'grey'
    }
})

