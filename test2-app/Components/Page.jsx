import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export const Page = ({title, children}) => {
    return(
        <div style={{ textAlign: 'left', margin: '20px', flex: 'display',}}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}