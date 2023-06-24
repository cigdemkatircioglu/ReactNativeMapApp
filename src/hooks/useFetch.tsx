import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function useFetch(url:string) {

    const[data,setData,]=useState(null);
    const[loading,setLoading,]=useState(true);
    const[error,setError,]=useState(null);
    const fetchHandle=async()=>{
  try{

  }catch(error){
    
  }
    };
  return (
    <View>
      <Text>useFetch</Text>
    </View>
  )
}