import { Text, View, StyleSheet } from 'react-native'
import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web'

export default function App() {
  return (
    <View style={styles.container}>
      <WithSkiaWeb
        // @ts-ignore
        getComponent={() => import('./HelloWorld')}
        fallback={<Text style={{ textAlign: 'center' }}>Loading Skia...</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
