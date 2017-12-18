import React from 'react';
import { View } from 'react-native';

const BookCardItem = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        marginTop: 10,
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        flexDirection: 'column',
        borderColor: '#ddd'
    }
};

export default BookCardItem;