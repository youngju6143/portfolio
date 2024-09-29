import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ShibaModel(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('public/models/shiba/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Group18985_default_0.geometry} material={materials['default']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Box002_default_0.geometry} material={materials['default']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object001_default_0.geometry} material={materials['default']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('public/models/shiba/scene.gltf')
