import React  from 'react';
import {PropsWithChildren, useRef,useState} from 'react';
import MapView,{PROVIDER_GOOGLE,Marker,Region} from 'react-native-maps';
import {
  SafeAreaView,
  Dimensions,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors,} from 'react-native/Libraries/NewAppScreen';

const shoppingCenter =[
  {
    id:1,
    title:'Kadikoy Boga',
      coordinate:{
      latitude: 40.9904715,
      longitude: 29.0265964,
     },
    },
    {
      id:2,
      title:'Kadikoy Boga',
      coordinate:{
      latitude: 40.9917025,
      longitude: 29.0231631,

      },
    },
   
  ];

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';



  const activeCard = () => {
    
  }

  
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
      
        <View style={styles.container}>
            <MapView
       provider={PROVIDER_GOOGLE}
       initialRegion={{
        latitude: 40.9904715,
        longitude: 29.0265964,
        latitudeDelta: 0.2,
        longitudeDelta: 0.0421,
      }}
       style={styles.map}
       
    >
      <Marker 
        coordinate={{
        latitude: 40.9904715,
        longitude: 29.0265964,

        }}
        title="Kadikoy Boga"
        draggable
        />
   
    
      <Marker 
        coordinate={{
        latitude: 40.9917025,
        longitude: 29.0231631,

        }}
        title="Kadikoy Sahil"
        
        />
    </MapView>

     </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex:1,
    height: Dimensions.get('screen').height,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
