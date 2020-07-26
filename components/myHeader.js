import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native-elements';
import {Header, Icon} from 'react-navigation';

const MyHeader=props=>{
return(
    <Header

    centerComponent={{text:props.title,style:{color:'#90A5A9', fontSize:20, fontWeight:"bold"}}}
    backgroundColour="#eaf8fe"
    />
);
};
export default MyHeader;