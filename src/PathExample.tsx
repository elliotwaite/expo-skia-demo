import { Canvas, Path } from '@shopify/react-native-skia'

export default function PathExample() {
  return (
    <Canvas style={{ flex: 1 }}>
      <Path path="M 100 200 L 158 100 L 216 200 Z" />
    </Canvas>
  )
}
