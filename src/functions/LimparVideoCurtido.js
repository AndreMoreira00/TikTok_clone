import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function LimparVideosCurtidos(codigo){
  try{
    const videosCurtidos = await AsyncStorage.getItem("curtidos")
    const videosCurtidosLista = JSON.parse(videosCurtidos || "[]")

    const videosCurtidosRemovido = videosCurtidosLista.filter(function(video){
      return video != codigo
    })

    const videosCurtidosNovo = JSON.stringify(videosCurtidosRemovido)
    await AsyncStorage.setItem("curtidos", videosCurtidosNovo)
  }
  catch(erro){
    console.log(erro)
  }
} 