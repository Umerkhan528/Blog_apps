import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router'

const Register = () => {
    const route = useRouter();
    const onRegister=()=>{
        route.navigate("/main")
    }
  return (
    <View style={{ flex: 1, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' }}>
      <TextInput placeholder='Enter your Email' style={{ margin: 10,padding:20 , borderWidth: 2, borderRadius: 5, height: 40, width:120 }} />
      <TextInput placeholder='Enter your Email' style={{ margin: 10,padding:20, borderWidth: 2, borderRadius: 5, height: 40, width:120  }} />
            <MyButton title={"Register"} onPress={onRegister}/>
        </View>
  )
}

export default Register;