import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TextInput, View, Image, Button } from "react-native";

export default function Index() {
  const route = useRouter();
  const onContinue = () => {
    route.push("/main")
  }
//  const [counter,setCounter] = useState(0)
// const [counter2,setCounter2] = useState(0)
//  console.log(counter)
//  useEffect(()=>{
//   setCounter2(preVal=>preVal+2)
//  },[counter])
//   return (
//     <View>
//       <Text>{counter}</Text>
//       <Text>{counter2}</Text>
//       <Button onPress={()=>{setCounter(counter+1)}} title="Up"/>
//     </View>
//   )
  return (
    <View style={{ flex: 1, backgroundColor: '#262626', justifyContent: 'center', alignItems: 'center' }}>
      <TextInput placeholder='Enter your Email' style={{ margin: 10,padding:20 , borderWidth: 2, borderRadius: 5, height: 40, width:120 }} />
      <TextInput placeholder='Enter your Email' style={{ margin: 10,padding:20, borderWidth: 2, borderRadius: 5, height: 40, width:120  }} />
      <MyButton title={"Continue"} onPress={onContinue} />
    </View>
  );
}
