import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function ObterVideoCurtido(){
  try{
    const videosCurtidos = await AsyncStorage.getItem("curtidos")
    const videosCurtidosLista = JSON.parse(videosCurtidos || "[]")
    return videosCurtidosLista
  }
  catch(erro){
    console.log(erro)
  }
  return []
}