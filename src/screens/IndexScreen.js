import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Context } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {

    const { state, deleteBlogPost } = useContext(Context);

    return (
        <View style={styles.view}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.postView}>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather style={styles.postIcon} name="trash" />
                                </TouchableOpacity>
                                <Text style={styles.postText}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')} style={styles.create}>
                <Feather name="plus-square" size={35} />
            </TouchableOpacity>
        ),
    };
};

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
    },
    postView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 0.2,
        borderColor: 'lightgrey',
        borderRadius: 4,
        marginVertical: 5,
    },
    postText: {
        fontSize: 25,
        marginHorizontal: 10
    },
    postIcon: {
        fontSize: 30,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 4,
        width: 50,
        textAlign: 'center',
        lineHeight: 50,
        marginVertical: 5
    },
    create: {
        marginLeft: 10
    }
});

export default IndexScreen;




