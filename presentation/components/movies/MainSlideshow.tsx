import { I18nManager, useWindowDimensions, View } from 'react-native';

import { Extrapolation, interpolate } from 'react-native-reanimated';
import { Carousel } from 'react-native-reanimated-carousel';

import type { Movie } from '../../../infrastructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
}

const MainSlideshow = ({ movies }: Props) => {
  const width = useWindowDimensions().width;
  const itemSize = 200;
  const centerOffset = Math.max(0, (width - itemSize) / 2);
  const directionSign = I18nManager.isRTL ? -1 : 1;
  const initialIndex = Math.floor(movies.length / 2);

  return (
    <View className="h-[250px] w-full">
      <Carousel
        data={movies}
        renderItem={({ item }) => (
          <View
            style={{
              width: itemSize,
              height: 250,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MoviePoster id={item.id} poster={item.poster} />
          </View>
        )}
        style={{
          width,
          height: 250,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        itemSize={itemSize}
        itemAnimation={(relativeProgress) => {
          'worklet';

          const parallaxOffset = interpolate(
            relativeProgress,
            [-1, 0, 1],
            [-itemSize + 30, 0, itemSize - 40],
          );
          const scale = interpolate(
            relativeProgress,
            [-1, 0, 1],
            [0.82, 0.95, 0.82],
            Extrapolation.CLAMP,
          );

          return {
            transform: [
              { translateX: directionSign * (centerOffset + parallaxOffset) },
              { scale },
            ],
          };
        }}
        loop
        defaultIndex={initialIndex}
      />
    </View>
  );
};

export default MainSlideshow;
