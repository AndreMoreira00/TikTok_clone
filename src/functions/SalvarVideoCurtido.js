import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function SalvarVideoCurtido(codigo){
  try{
    const videosCurtidos = await AsyncStorage.getItem("curtidos")
    const videosCurtidosLista = JSON.parse(videosCurtidos || "[]")

    if (videosCurtidosLista.includes(codigo)=== false){
      videosCurtidosLista.push(codigo)
    }

    const videosCurtidosNovo = JSON.stringify(videosCurtidosLista)
    await AsyncStorage.setItem("curtidos", videosCurtidosNovo)
  }
  catch(erro){
    console.log(erro)
  }
}