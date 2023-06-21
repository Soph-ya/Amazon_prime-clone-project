import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { styles } from "./styles";



export const MoviesCard = (props) => {
	return (
        <TouchableOpacity>

		<Image style={styles.img} source={props.movieURL} />

	    </TouchableOpacity>
    ) 

};