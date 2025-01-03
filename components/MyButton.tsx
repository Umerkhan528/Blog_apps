import { View, Text, TouchableOpacity  } from 'react-native'
import React from 'react'

interface IButtonProps{
  title : string;
  onPress : ()=>{};
}

const MyButton = (props: IButtonProps) => {
  const {title,onPress}= props;
  return (
    <TouchableOpacity activeOpacity={0.6} style={{backgroundColor: "Light Blue",height : 70,width:50,borderRadius: 8}} onPress={onPress} >
      <Text style={{fontSize: 15, fontFamily: "notroserif"}}>{title}</Text>
      </TouchableOpacity>
  )
}

export default MyButton