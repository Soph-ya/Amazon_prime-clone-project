import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { styles } from "./styles";
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";


import MarioSuper from '../../assets/images/mario_super.png'
import amazon_prime from '../../assets/images/amazon_prime.png'
import { MOVIESRECOMENDED } from '../../../utils/moviesRecomended'
import { MoviesCard } from '../../components/MoviesCard'
import {  MOVIESORIGINALS } from '../../../utils/moviesOriginals'
import { MOVIESANIMATION} from '../../../utils/moviesAnimation'
import { MOVIESHEROES } from '../../../utils/moviesHeroes';
import { MOVIESTERROR } from '../../../utils/moviesTerror';


const Home = () => {


  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // Desmarca a categoria se ela já estiver selecionada
    } else {
      setSelectedCategory(category); // Marca a categoria selecionada
    }
  };

  const getCategoryStyle = (category) => {
    if (selectedCategory === category) {
      return [styles.categoryBorder, styles.selectedCategory];
    }
    return styles.categoryBorder;
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Image style={styles.title} source={amazon_prime} />
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
          <MaterialCommunityIcons style={styles.iconsStyle} name="monitor-share" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
          <FontAwesome style={styles.iconsStyle} name="user-circle" size={24} color="white" />
          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.category}>

        <TouchableOpacity
          style={[
            styles.categoryBorder,
            selectedCategory === 'todos' && styles.selectedCategory
          ]}
          onPress={() => setSelectedCategory('todos')}
        >
          <Text
            style={[
              styles.categoryText,
              selectedCategory === 'todos' && styles.selectedCategoryText
            ]}
          >
            Todos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.categoryBorder,
            selectedCategory === 'filmes' && styles.selectedCategory
          ]}
          onPress={() => setSelectedCategory('filmes')}
        >
          <Text
            style={[
              styles.categoryText,
              selectedCategory === 'filmes' && styles.selectedCategoryText
            ]}
          >
            Filmes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.categoryBorder,
            selectedCategory === 'series' && styles.selectedCategory
          ]}
          onPress={() => setSelectedCategory('series')}
        >
          <Text
            style={[
              styles.categoryText,
              selectedCategory === 'series' && styles.selectedCategoryText
            ]}
          >
            Séries
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.categoryBorder,
            selectedCategory === 'esportes' && styles.selectedCategory
          ]}
          onPress={() => setSelectedCategory('esportes')}
        >
          <Text
            style={[
              styles.categoryText,
              selectedCategory === 'esportes' && styles.selectedCategoryText
            ]}
          >
            Esportes
          </Text>
        </TouchableOpacity>



      </View>


      <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>

        <TouchableOpacity>
          <Image style={styles.movieThumbnailImg} source={MarioSuper} />
        </TouchableOpacity>



        <Text style={styles.movieText}> <Text style={styles.movieTextTitle}>Prime</Text> — Filmes Recomendados</Text>

        <FlatList
          data={MOVIESRECOMENDED}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => 
          <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.movieText}> <Text style={styles.movieTextTitle}>Prime</Text> — Amazon Originais e exclusivos</Text>

        <FlatList
          data={MOVIESORIGINALS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.movieText}> <Text style={styles.movieTextTitle}>Prime</Text> — Filmes para toda a família</Text>

        <FlatList
          data={MOVIESANIMATION}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.movieText}> <Text style={styles.movieTextTitle}>Prime</Text> — Super heróis e vilões</Text>

        <FlatList
          data={MOVIESHEROES}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.movieText}> <Text style={styles.movieTextTitle}>Prime</Text> — Filmes de Terror</Text>

        <FlatList
          data={MOVIESTERROR}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />

       
      </ScrollView>
    </SafeAreaView >
  );
}

export default Home;
