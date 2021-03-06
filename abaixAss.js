import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Inpult, Text, Button } from 'react-native-elements';


export default function AbaixAssina() {
  return (

    <View style={styles.container}>

      
      <Text style={styles.titulo1} >Ajude esse lugar!</Text>
      <Text style={styles.titulo2} >Bairro:</Text>
      <Text style={styles.titulo2} >Logradouro:</Text>
      <Text style={styles.titulo2} >Número</Text>


      <Inpult
      placeholder="Seu nome"
      />

      <Inpult
      placeholder="Seu email"
      />

      <Inpult
      placeholder="Seu CPF"
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
       title="enviar"
      />


      <View style={styles.black}>
           <Text style={styles.titulo1} >Como você ajuda?</Text>
           <Text style={styles.text} >Com essa ação você ajuda
            essa sinalização a ganhar força
            com isso podemos fazer mais pressão
            no Ministério Público para que algo 
            seja feito nesse imóvel</Text>

      </View>
    

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
  },

});