import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default (props) => {

    const {title} = props;
    
    return(
        <View
          style={styles.mainCointainer}>
          <TouchableOpacity>
            <Text style={{ color: 'white', fontFamily:'Rubik-Medium', fontSize:16, backgroundColor:'orange', padding:10}}>
                {`List Item ${title}`}
            </Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mainCointainer: {
      height: 200,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#61dafb',

    },
  });
  