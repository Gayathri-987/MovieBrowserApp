import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { getMovieDetails } from '../services/tmdbApi';

const MovieDetailsScreen = ({ route }) => {
  const { movieId } = route.params; // Get movieId from route params
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieDetails(movieId);
        setMovie(response.data);
        console.log(response.data,"responsedata")
      } catch (error) {
        console.error(error);
        setError('Failed to load movie details');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  if (!movie) {
    return (
      <View style={styles.container}>
        <Text>No movie details found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.poster}
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.releaseDate}>Release Date: {movie.release_date}</Text>
      <Text style={styles.rating}>Rating: {movie.vote_average}</Text>
      <Text style={styles.rating}>Revenue: {movie.revenue}</Text>
      <Text style={styles.rating}>Popularity: {movie.popularity}</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  poster: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  releaseDate: {
    fontSize: 16,
    marginVertical: 5,
  },
  rating: {
    fontSize: 16,
    marginVertical: 5,
  },
  overview: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default MovieDetailsScreen;
