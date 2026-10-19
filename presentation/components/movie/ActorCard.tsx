import { Image, Text, View } from 'react-native';
import { Cast } from '../../../infrastructure/interfaces/cast';

interface Props {
  actor: Cast;
}

const ActorCard = ({ actor }: Props) => {
  return (
    <View className="mx-10 w-[60px]">
      <Image
        source={{ uri: actor.avatar }}
        className="w-[100px] h-[150] rounded-2xl shadow"
        resizeMode="cover"
      />

      <View>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          className="text-lg font-bold"
        >
          {actor.name}
        </Text>
        <Text className="text-gray-6000 text-xs">{actor.character}</Text>
      </View>
    </View>
  );
};

export default ActorCard;
