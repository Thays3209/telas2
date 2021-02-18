import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Inpult, Text, Button } from 'react-native-elements';


export default function acompnhar1() {
  return (

    <View style={styles.container}>

   
      <Text style={styles.titulo1} >Ajude esses locais a se tornarem moradias</Text>

      <Text style={styles.linha} >___________________________________</Text>

      <View style={styles.bloco}>
      <Text style={styles.titulo2} >Bairro:</Text>
      <Text style={styles.titulo2} >Logradouro:</Text>
      <Text style={styles.titulo2} >Número:</Text>
      <Text style={styles.text} >“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum”</Text>
      
      <Button
       icon = { 
       <Icon 
         name = "arrow-right"
         size={15}
         color="white"
         backgroundColor="#FFCD37"
        />
       }
       title="Ajude a transformar"
      />
       
       </View>

       <View style={styles.bloco}>
      <Text style={styles.titulo2} >Bairro:</Text>
      <Text style={styles.titulo2} >Logradouro:</Text>
      <Text style={styles.titulo2} >Número:</Text>
      <Text style={styles.text} >“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum”</Text>
      
      <Button
       icon = { 
       <Icon 
         name = "arrow-right"
         size={15}
         color="white"
         backgroundColor="#FFCD37"
        />
       }
       title="Ajude a transformar"
      />
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