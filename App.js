import React, { useEffect} from 'react';
import { View, StyleSheet, Dimensions, Animated, ScrollView, StatusBar} from 'react-native';

//CUSTOM IMPORTS
import Topic from './componets/Topic';
import Footer from './componets/Footer';
import SectionLabel from './componets/Section-Label';
//CONST
const _STATUS_BAR_HEIGHT = StatusBar.currentHeight;
const {width: _WIDTH} = Dimensions.get('window');
const _BASICS = [{id:'1'},{id:'2'},{id:'3'}];
const _ADVANCED = [{id:'1'}];
//VAR
let TITLE_WIDTH = 0;
let SCROLLOFFSET = new Animated.Value(0);

export default () => {

  useEffect(()=>{
    //return
  },[]);


    return (
      <View style={styles.container}>
        <StatusBar translucent={false} backgroundColor={'#61dafb'}/>
        <Animated.View
          style={[
            styles.header,
            {
              width: _WIDTH,
              height: SCROLLOFFSET.interpolate({
                inputRange: [0, 200],
                outputRange: [120, 50],
                extrapolate: 'clamp',
              }),
              paddingLeft: SCROLLOFFSET.interpolate({
                inputRange: [0, 200],
                outputRange: [20, ((_WIDTH - TITLE_WIDTH) /5)],
                extrapolate: 'clamp',
              }),
              backgroundColor: SCROLLOFFSET.interpolate({
                inputRange: [0, 200],
                outputRange: ['#61dafb', 'white'],
                extrapolate: 'clamp',
              }),
            },
          ]}>
          <Animated.Text
            onLayout={e => { TITLE_WIDTH = e.nativeEvent.layout.width; }}
            style={{
              fontFamily: 'Rubik-Medium',
              fontSize: SCROLLOFFSET.interpolate({
                inputRange: [0, 200],
                outputRange: [24, 20],
                extrapolate: 'clamp',
              }),
            }}>
            React Native Examples
          </Animated.Text>
        </Animated.View>

        <ScrollView
          style={{ flex: 1, width: _WIDTH }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: {
                 contentOffset: {
                   y: SCROLLOFFSET
                 }
               }
             }]
          )}
        >

          <View style={{height: 120}}></View>

          <SectionLabel title={'Basic'}/>
         
          {_BASICS.map((value, i) => ( <Topic key={i} title={i}/> )) }

          <SectionLabel title={'More Advanced'}/>

          {_ADVANCED.map((value, i) => ( <Topic key={i} title={i}/> )) }

          <Footer/>

        </ScrollView>
        
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  header: {
    position:'absolute',
    top:0,
    left:0,
    zIndex:100,
    paddingBottom:12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'gainsboro',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
