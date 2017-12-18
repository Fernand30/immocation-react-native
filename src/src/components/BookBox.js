import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardItem from './CardItem'
import BookCardItem from './CardItem';
import Button from 'react-native-button';

const BookBox = ({ boxTitle, btn1Title, btn2Title }) => {
    const {
        imageStyle,
        containerContentStyle,
        containerContentSize,
        buttonStyle
    } = styles;

    return (
        <Card style={{ flexDirection: 'column' }}>

        <View >
                <View style={{ marginTop: 13, flexDirection: 'row', justifyContent: 'space-around', width: 350 }}>
                    <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
                        {boxTitle}
                    </Text>
                </View>

                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{textAlign: 'center' }}>
                        Die Do-it-yourself-Renter: Passives Einkommen {"\n"} aus Immobilien zur Altersvorsorge.
                    </Text>
                </View>
                </View>

            <BookCardItem >
                <View style={{ width: 350, flexDirection: 'row', justifyContent: 'space-around' }}>

                    <View >
                        <Image style={imageStyle} source={require('./amazon.de.png')} />
                    </View>

                    <View >
                        <Image style={imageStyle} source={require('./kindle.png')} />
                    </View>

                    <View >
                        <Image style={imageStyle} source={require('./audible.png')} />
                    </View>
                </View>
            </BookCardItem>
        </Card>
    );
};

const styles = {
    imageStyle: {
        width: 100,
        height: 50,
        resizeMode: 'contain'
    },

    containerContentStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    containerContentSize: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },

    buttonStyle: {
        backgroundColor: 'red'
    }
};

export default BookBox;
