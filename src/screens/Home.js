import React from "react";
import { ScrollView, StatusBar, View, Text } from "react-native";
import Dados from "../databases/Dados";
import Conteudo from "../components/Conteudo";
import Navegador from "../components/Navegador";

export default function Home({navigation}){
  const dadosAleatorio = Dados.sort(function(){
    return Math.random()- 0.5
  })

  return <View>
    <StatusBar barStyle={"light-content"} backgroundColor={"#000"}/>
    <Navegador navigation={navigation}/>
    <ScrollView pagingEnabled>
      {dadosAleatorio.length > 0 && 
        dadosAleatorio.map(function(video){
          return <Conteudo
          key={video.codigo}
          codigo = {video.codigo}
          fonte={video.fonte}
          nome={video.fonte}
          descricao={video.descricao}
          etiqueta={video.etiqueta}
        />
        })
      }
    </ScrollView>
  </View>
}