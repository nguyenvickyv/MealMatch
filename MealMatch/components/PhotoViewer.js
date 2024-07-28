import { StyleSheet, Image } from 'react-native';

export default function PhotoViewer({ placeholderImageSource }) {
  return (
    <Image source={placeholderImageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    borderRadius: 0,
  },
});
