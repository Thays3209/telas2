import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Inpult, Text, Button } from 'react-native-elements';


export default function acompanhar() {
  return (

    <View style={styles.container}>

   
      <Text style={styles.titulo1} >Aqui você pode ver o progresso de suas sinalizações</Text>

      <Text style={styles.linha} >___________________________________</Text>

      <View style={styles.bloco}>
      <Text style={styles.titulo2} >Número</Text>
      <Text style={styles.titulo2} >Bairro:</Text>
      <Text style={styles.titulo2} >CEP:</Text>
      <Text style={styles.titulo2} >Iluminado? R:</Text>
      <Text style={styles.titulo2} >Seguro? R:</Text>
      <Text style={styles.titulo2} >Outras observações:</Text>
      </View>
      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFFs',
    //alignItems: 'center',
    fontFamily:'Montserrat',
    fontStyle: 'normal',
    //justifyContent: 'center',
  },
  titulo1: {
    fontSize: '20px',
    width:'100vw',
    padding:'0px',
    marginTop: '10vw',
    textAlign: 'center',
    fontweight: 'bold',
    
  },

  linha:{
    color:'#d3d3d3',
    width:'80vw'

  },

  titulo2: {
    marginTop: '3vw',
    fontweight: 'bold',
  },

  text: {

    marginTop: '5vw',
    width:'80vw',
    textAlign: 'center',
  },

  bloco: {
    border:'5px #FFCD37',
    padding:'20px',
    width:'80vw',

  },

});