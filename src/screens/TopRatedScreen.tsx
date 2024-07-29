import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { getTopRated } from '../services/tmdbApi';

const TopRatedScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRated().then(response => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('MovieDetails', { movieId: item.id })}>
          <View style={styles.movieItem}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }} style={styles.poster} />
            <View style={styles.movieInfo}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={{color: '#000'}}>Release Date: {item.release_date}</Text>
              <Text style={{color: '#000'}}>Rating: {item.vote_average}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  movieItem: {
    flexDirection: 'row',
    padding: 10,
  },
  poster: {
    width: 100,
    height: 150,
  },
  movieInfo: {
    marginLeft: 10,
    color: '#000',

  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', 
  },
});

export default TopRatedScreen;
