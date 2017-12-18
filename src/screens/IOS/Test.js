import React from 'react';
import { View, Button, Image, Text, Dimensions } from 'react-native';
import Card from './Card';


const Test = (props) => {

    return (
        <View>
        <Card style={{flex: 1}} >
            <Text style={{ textAling: 'center' }}> Deine Immocation Apps </Text>

            <View style={styles.wrapperStyle}>
                <View style={styles.boxStyle}>
                    <Image source={require('./icon1.png')} style={{ width: 150, height: 150 }} />
                </View>

                <View style={styles.wrapperStyle}>
                    <View style={styles.boxStyle} />
                    <Image source={require('./icon1.png')} style={{ width: 150, height: 150 }} />
                </View>
            </View>

            <View style={[styles.wrapperStyle, { marginBottom: 10 }]}>
                <Button style={styles.buttonStyle} title="Rechner" />
                <Button style={styles.buttonStyle} title="Rente" />
            </View>

        </Card>
        </View>
    );
};

const styles = {
    wrapperStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    boxStyle: {
        width:150,
        height: 150
    },

    buttonStyle: {
        width: 150,
        height: 50
    }
};

export default Test;
