import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';

const IndexScreen = () => {

    const { state, addBlogPost } = useContext(Context);

    return (
        <View style={styles.view}>
            <Text style={styles.title}>Index Screen</Text>
            <TouchableOpacity style={styles.button}
                onPress={addBlogPost}
            >
                <Text style={styles.text}>Add Post</Text>
            </TouchableOpacity>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        height: '100%',
        alignItems: 'center'
    },
    button: {
        margin: 10,
        backgroundColor: 'orange',
        borderRadius: 8,
        padding: 6,
        height: 50,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18
    },
    title: {
        margin: 14,
        fontSize: 26,
        letterSpacing: 4,
        fontWeight: 'bold'
    }
});

export default IndexScreen;
