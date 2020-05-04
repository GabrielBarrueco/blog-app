import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Button } from 'react-native'
import { Context }   from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const indexScreen = ({ navigation }) => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context)

    return(
        <View>
            <View>
                <FlatList 
                    data={state}
                    keyExtractor={(blogPost) => blogPost.title}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={()=> navigation.navigate('Show', {id: item.id})}>
                                <View style={styles.rowStyle}>
                                    <Text style={styles.titleStyle}>{item.title} - {item.id}</Text>
                                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>                                
                                        <Feather name="trash" style={styles.iconStyle}/>
                                    </TouchableOpacity>                                
                                </View>
                            </TouchableOpacity>
                            
                        )
                    }}
                />
                
            </View>
        </View>
    )
}

indexScreen.navigationOptions = ({ navigation }) => {
    return {
      headerRight: () => 
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Feather name="plus" size={30} />
        </TouchableOpacity>      
    };
  };

const styles = StyleSheet.create({
    rowStyle : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderTopWidth: 1,
        borderColor: '#333'
    },

    iconStyle : {
        fontSize: 18,
        margin: 4
    },

    titleStyle : {
        fontSize: 18,
    }
})

export default indexScreen