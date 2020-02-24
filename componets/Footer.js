import React from 'react';
import { Text, View} from 'react-native';

export default (props) => {
    return(
        <View style={{flex:1, backgroundColor:'white', alignItems:'center', justifyContent:'center', padding:40}}>
            <Text style={{fontFamily:'Rubik-Medium', fontSize:16}}>Made with 💓 in GDL</Text>
        </View>
    );
}

  