import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainSlideshow from '../../../presentation/components/movies/MainSlideshow';
import MovieHorizontalList from '../../../presentation/components/movies/MovieHorizontalList';
import { useMovies } from '../../../presentation/hooks/useMovies';

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator size="large" color="purple" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">MoviesApp</Text>
        {/* Carousel de imagenes */}
        <MainSlideshow movies={nowPlayingQuery.data ?? []} />
        {/* Popular */}
        <MovieHorizontalList
          title="Populares"
          movies={popularQuery.data ?? []}
        />
        {/* Favoritos */}
        <MovieHorizontalList
          title="Favoritos"
          movies={topRatedQuery.data ?? []}
        />
        {/* Proximamente */}
        <MovieHorizontalList
          title="Proximamente"
          movies={upcomingQuery.data ?? []}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
