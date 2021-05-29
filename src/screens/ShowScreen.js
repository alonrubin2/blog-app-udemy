import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';



const ShowScreen = ({ navigation }) => {

    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
        <View style={styles.view}>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>
        </View>
    );
}


ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit')} style={styles.edit}>
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        marginTop: 10,
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        letterSpacing: 2
    },
    content: {
        fontSize: 20,
        padding: 18,
    },
    edit: {
        marginLeft: 10,
    }
});

export default ShowScreen;
