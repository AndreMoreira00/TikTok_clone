import React, {useEffect, useState} from "react";
import { View, Pressable, Image, Text} from "react-native";
import { Video ,ResizeMode } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import Estilo from "../styles/Estilo";
import SalvarVideoCurtido from "../functions/SalvarVideoCurtido";
import ObterVideoCurtido from "../functions/ObterVideoCurtido";
import LimparVideosCurtidos from "../functions/LimparVideoCurtido";

export default function Conteudo(props){

  const [estado, definirEstado] = useState(true)
  const [curtido, definirCurtido] = useState(false)

  function Curtir(){
    if (curtido)
      LimparVideosCurtidos(props.codigo);
    else
      SalvarVideoCurtido(props.codigo);
    definirCurtido(!curtido)
  }

  useEffect(function(){
    async function ObterCurtidas(){
      const lista = await ObterVideoCurtido()

      if (lista.includes(props.codigo))
        definirCurtido(true)
    }
    ObterCurtidas()
  },[])

  return <View>
    <LinearGradient colors={["#000", "transparent"]} style={Estilo.ConteudoBarra}>
      <View style={Estilo.conteudoBarraDentro}>
        <Text style={Estilo.conteudoTitulo}>{props.nome}</Text>
        <Text style={Estilo.conteudoDescricao}>{props.descricao}</Text>
        <Text style={Estilo.conteudoEtiqueta}>{props.etiqueta.join("&")}</Text>
      </View>
      <View>
        <Pressable onPress={Curtir}>
          {curtido ? 
            <Image source={require("../../assets/heart-fill.png")}/>
            :
            <Image source={require("../../assets/heart.png")}/>
          }
          
        </Pressable>
      </View>
    </LinearGradient>
    <Pressable onPress={() => definirEstado(!estado)}>
      <Video
      style={Estilo.video}
      source={props.fonte}
      resizeMode={ResizeMode.COVER}
      useNativeControls={false}
      shouldPlay={estado}
      isLooping
      isMuted
      />
    </Pressable>
  </View>
}