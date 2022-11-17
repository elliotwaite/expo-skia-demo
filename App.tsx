import { Text, View } from 'react-native'
import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <WithSkiaWeb
        opts={{
          locateFile: (file: string) =>
            `https://cdn.jsdelivr.net/npm/canvaskit-wasm@0.36.1/bin/full/${file}`,
        }}
        getComponent={() => import('./src/PathExample')}
        fallback={<Text>Loading Skia...</Text>}
      />
    </View>
  )
}
