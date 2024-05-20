import React, {useState} from "react";
import { ScrollView, StatusBar, View, Text, TextInput, Pressable, Image} from "react-native";
import Navegador from "../components/Navegador";
import Estilo from "../styles/Estilo";
import Dados from "../databases/Dados";
import Conteudo from "../components/Conteudo";

export default function Search({navigation}){
  const [pesquisa, definirPesquisa] = useState("")
  const [resultados, definirResultados] = useState([])

  function TrazerResultados(){
    const lista = []
    Dados.forEach(function(video){
      if (video.etiqueta.includes(pesquisa.toLocaleLowerCase())){
        lista.push(video)
      }
    })
    if(lista.length === 0){
      alert("Nenhum video encontrado!")
    }
    definirResultados(lista)
  }

  return <View style={Estilo.tela}>
    <StatusBar barStyle={"light-content"} backgroundColor={"#000"}/>
    <Navegador navigation={navigation}/>
    <ScrollView pagingEnabled>
      {resultados.length === 0 ?
        <View style={{ ...Estilo.telaMensagem, flexDirection:"row"}}>
          <TextInput
          style={{backgroundColor:"#000", fontSize:32, color:"#aaa",}}
          onChangeText={definirPesquisa}
          value={pesquisa}
          placeholder="Pesquisar por"
          placeholderTextColor={"#aaa"}
          keyboardType="default"/>
          <Pressable onPress={TrazerResultados}>
            <View style={Estilo.botao}>
              <Image style={Estilo.navegadorIcone} source={require("../../assets/magnifying-glass.png")}/>
            </View>
          </Pressable>
        </View>
      :
        resultados.map(function(video){
          return <Conteudo
          key={video.codigo}
          codigo={video.codigo}
          fonte={video.fonte}
          nome={video.nome}
          descricao={video.descricao}
          etiqueta={video.etiqueta}/>
        })
      }
    </ScrollView>
  </View>
}