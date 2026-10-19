import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import MovieCast from '../../../presentation/components/movie/MovieCast';
import MovieDescription from '../../../presentation/components/movie/MovieDescription';
import MovieHeader from '../../../presentation/components/movie/MovieHeader';
import { useMovie } from '../../../presentation/hooks/useMovie';

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { movieQuery, castQuery } = useMovie(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-4">Loading</Text>
        <ActivityIndicator size={30} color="purple" />
      </View>
    );
  }

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movieQuery.data.originalTitle}
        title={movieQuery.data.title}
        poster={movieQuery.data.poster}
      />
      <MovieDescription movie={movieQuery.data} />
      {/* Actores */}
      <MovieCast cast={castQuery.data ?? []} />
    </ScrollView>
  );
};

export default MovieScreen;
