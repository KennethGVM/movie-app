import { FlatList, Text, View } from 'react-native';
import { Movie } from '../../../infrastructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

const MovieHorizontalList = ({ movies, title }: Props) => {
  return (
    <View className="mb-4">
      {title && <Text className="text-2xl font-bold px-4">{title}</Text>}
      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
      />
    </View>
  );
};

export default MovieHorizontalList;
