import React from 'react';
import { Image, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.viewStyle}>
            <Image style={styles.imageStyle} source={require('./imm-logo.png')} />
        </View>
    );
};

const styles = {

    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 85,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },

    imageStyle: {
        flex: 1,
        width: 150,
        height: 70,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default Header;
