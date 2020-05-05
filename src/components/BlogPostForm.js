import React, {useState} from 'react'
import {TextInput, Text, StyleSheet, Button, View} from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)

    return(
        <View>
            <Text style={styles.textStyle} >Enter Title</Text>
            <TextInput style={styles.InputStyle} value={title} onChangeText={(text)=>{setTitle(text)} }/>
            <Text style={styles.textStyle} >Enter Content</Text>
            <TextInput style={styles.InputStyle} value={content} onChangeText={(text)=>{setContent(text)}}/>
            <Button 
                title="Save Blog Post" 
                onPress={() => onSubmit(title, content)}                
            />
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
      title: '',
      content: ''
    }
}

const styles = StyleSheet.create({
    InputStyle : {
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 4,
        margin: 8,
        padding: 2
    },

    textStyle : {
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 8
    }
}) 

export default BlogPostForm