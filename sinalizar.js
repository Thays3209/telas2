import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Inpult, Text, Button } from 'react-native-elements';


export default function sinalizar() {
  return (

    <View style={styles.container}>

    <View style={styles.black}>  
      <Text style={styles.titulo1} >COM ESSA AÇÃO
       VOCÊ AJUDA MUITA GENTE</Text>
    </View>


    <Inpult
      placeholder="Seu CPF" 
      />

     <Inpult
      placeholder="Seu Estado"
      />

      <Inpult
      placeholder="Cidade"
      />

      <Inpult
      placeholder="Bairro"
      />

      <Inpult
      placeholder="Endereço"
      />

      <Inpult
      placeholder="Número"
      />


      <Button
       icon = { 
       <Icon 
         name = "arrow-right"
         size={15}
         color="white"
         backgroundColor="#FFCD37"
        />
       }
       title="Enviar"
      />


     

    
    

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFFs',
    alignItems: 'center',
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

  black: {
    backgroundColor:'#000000',
    color='#FFFFFFs',
    marginTop: '5vw',
    fontSize: '50px',
    width:'80vw',
    textAlign: 'center',
  },

});