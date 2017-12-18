import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from 'react-native-button';
import { StackNavigator } from 'react-navigation';
import { Actions } from 'react-native-router-flux';

const GraphBox = ({ boxTitle,  btn2Route, navigate }) => {
    const {
        imageStyle,
        containerContentStyle,
        containerContentSize,
        buttonStyle
    } = styles;

    return (
        <Card>
            <View style={[containerContentSize, {marginTop: 13, backgroundColor: '#fff'}]}>
                <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
                    {boxTitle}
                </Text>
            </View>

            <CardItem >
                <View style={{height:240, justifyContent: 'space-around'}}>
                    <Image style={imageStyle}
                        source={require('./icon1.png')} />

                    <View style={{justifyContent: 'center', alignItems: 'center' }}>
                    <Button
                        onPress={() => Actions.login()}
                        containerStyle={{ padding: 5, overflow: 'hidden', borderRadius: 10, backgroundColor: '#E03145', width: 155 }}
                        disabledContainerStyle={{ backgroundColor: 'grey' }}
                        style={{ fontSize: 20, color: 'white' }}>
                        Bierdeckel-{"\n"}Rechner
                    </Button>
                    </View>
                </View>

                <View style={{ height: 240, justifyContent: 'space-around' }}>
                    <Image
                        style={imageStyle}
                        source={require('./icon2.png')}
                    />

                    <View style={{justifyContent: 'center', alignItems: 'center' }}>
                    <Button
                        onPress={() => Actions.register()}
                        containerStyle={{ padding: 5, height: 35, overflow: 'hidden', borderRadius: 10, backgroundColor: '#E03145', width: 100 }}
                        disabledContainerStyle={{ backgroundColor: 'grey' }}
                        style={{ fontSize: 20, color: 'white' }}>
                        Rechner
                    </Button>
                    </View>
                </View>
            </CardItem>
        </Card>
    );
};

const styles = {
    imageStyle: {
        width: 175,
        height: 175
    },

    containerContentStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    containerContentSize: {
        justifyContent: 'space-around',
        flexDirection: 'row'
    },

    buttonStyle: {
        backgroundColor: 'red'
    }
};

export default GraphBox;
