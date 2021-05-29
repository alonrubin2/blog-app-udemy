import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Context } from '../context/BlogContext';



const CreateScreen = ({ navigation }) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const { addBlogPost } = useContext(Context);


    return (
        <View style={styles.view}>

            <Text style={styles.label}>Title:</Text>
            <TextInput style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />

            <Text style={styles.label}>Content:</Text>
            <TextInput style={styles.input}
                value={content}
                onChangeText={(text) => setContent(text)}
            />

            <TouchableOpacity style={styles.button}
                onPress={() => {
                    addBlogPost(title, content, () => {
                        navigation.navigate('Index');
                    });
                }}
            >
                <Text style={styles.buttonText}>Add Blog Post</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        marginTop: 10,
    },
    label: {
        fontSize: 28,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        letterSpacing: 2,
        marginRight: 8,
        marginBottom: 5
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        width: '95%',
        marginHorizontal: 10,
        marginBottom: 20,
        padding: 6
    },
    button: {
        alignSelf: 'center',
        backgroundColor: 'orange',
        borderRadius: 8,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
        fontSize: 22,
        fontWeight: 'bold'
    }
});


export default CreateScreen;
