import React from 'react';
import { Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardItem from './CardItem'
import BookCardItem from './CardItem';
import Button from 'react-native-button';

const BookBox = ({ boxTitle, goSafari}) => {
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
                        <Button onPress={goSafari('https://www.amazon.de/gp/product/1973363178/')}>
                            <Image style={imageStyle} source={require('./amazon.de.png')} />
                        </Button>    
                    </View>

                    <View >
                        <Button onPress={goSafari('https://www.amazon.de/gp/product/B0775V7KG8/')}>
                            <Image style={imageStyle} source={require('./kindle.png')} />
                        </Button>    
                    </View>

                    <View >
                        <Button onPress={goSafari('https://www.amazon.de/gp/product/B077Y3Z7V4/')}>
                            <Image style={imageStyle} source={require('./audible.png')} />
                        </Button>    
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
