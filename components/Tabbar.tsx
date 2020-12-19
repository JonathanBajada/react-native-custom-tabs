import * as React from 'react';
import { View, SafeAreaView, Dimensions, StyleSheet } from 'react-native';
import {Svg, Path} from 'react-native-svg';
import * as shape from 'd3-shape';

const tabs = [
    {name: "grid"},
    {name: "list"},
    {name: "refresh-cw"},
    {name: "refresh-cw"},
    {name: "user"},
];
const {width} = Dimensions.get("window");
const tabWidth = width / tabs.length;
const height = 70;

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
        { x: tabWidth * 2, y: 0 },
        { x: tabWidth * 2 + 5, y: 0 },
        { x: tabWidth * 2 + 15, y: height * 0.45 },
        { x: tabWidth * 3 - 15, y: height * 0.45 },
        { x: tabWidth * 3 - 5, y: 0 },
        { x: tabWidth * 3, y: 0 },

    ]
)

const d = `${left} ${center} ${right}`;
interface TabbarProps {}

export default class TabShape extends React.PureComponent<TabbarProps> {
	render() {
        return (
        <>
             <Svg width={width} {...{height}} >
                <Path {...{d}} fill="white"/>
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

