import { View, Text, Image } from 'react-native'
import React from 'react'
import MyButton from '@/components/MyButton'
import { TextInput } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'

const Login = () => {
   const route = useRouter()
    const onLogin=()=>{
        route.navigate("/Login");
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require("@/assets/images/react-logo@2x.png")} style={{ height: 70, width: 70, paddingVertical: 30, paddingHorizontal: 20 }} />
            <TextInput placeholder='Enter your Email' style={{ padding: 20, borderWidth: 2, borderRadius: 5, }} />
            <TextInput placeholder='Enter your Email' style={{ padding: 20, borderWidth: 2, borderRadius: 5, }} />
            <MyButton title={"Login"} onPress={()=>onLogin}/>
        </View>
    )
}


export default Login;