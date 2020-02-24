import React from 'react';
import { Text, View} from 'react-native';

export default (props) => {

    const { title } = props;
    
    return(
        <View style={{padding:5, backgroundColor:'white', paddingLeft:20}}>
            <Text style={{fontFamily:'Rubik-Medium', fontSize:16}}>{title}</Text>
        </View>
    );
}