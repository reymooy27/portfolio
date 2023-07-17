'use client'
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { useGLTF, OrthographicCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    Rectangle: THREE.Mesh;
    logo_apple_1: THREE.Mesh;
    logo_apple_2: THREE.Mesh;
    connector: THREE.Mesh;
    screen_1: THREE.Mesh;
    green_light: THREE.Mesh;
    black_border_notch_screen: THREE.Mesh;
    grey_border_creen: THREE.Mesh;
    Rectangle_1: THREE.Mesh;
    metalic_screen: THREE.Mesh;
    camera: THREE.Mesh;
    border_black_camera: THREE.Mesh;
    Cube: THREE.Mesh;
    base_2: THREE.Mesh;
    Rectangle_2: THREE.Mesh;

    Subdiv_3: THREE.Mesh;
    Subdiv_3_1: THREE.Mesh;
    Subdiv_3_2: THREE.Mesh;
    Subdiv_3_3: THREE.Mesh;
    Subdiv_2: THREE.Mesh;
    Subdiv_2_1: THREE.Mesh;
    Subdiv: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Torus: THREE.Mesh;
    keybord_lign: THREE.Mesh;
    keybord_lign_1: THREE.Mesh;
    keybord_lign_2: THREE.Mesh;
    keybord_lign_3: THREE.Mesh;
    keybord_lign_4: THREE.Mesh;
    Rectangle_6: THREE.Mesh;
    Rectangle_7: THREE.Mesh;
    Rectangle_5: THREE.Mesh;
    Rectangle_14: THREE.Mesh;
    Rectangle_13: THREE.Mesh;
    Rectangle_12: THREE.Mesh;
    Rectangle_11: THREE.Mesh;
    Rectangle_8: THREE.Mesh;
    Rectangle_4: THREE.Mesh;
    Rectangle_9: THREE.Mesh;
    Rectangle_3: THREE.Mesh;
    Rectangle_10: THREE.Mesh;
    Rectangle_2_1: THREE.Mesh;
    keybord_lign_5: THREE.Mesh;
    keybord_lign_6: THREE.Mesh;
    keyboard_1: THREE.Mesh;
    mesh_25_instance_1: THREE.Mesh;
    mesh_26_instance_1: THREE.Mesh;
    mesh_26_instance_2: THREE.Mesh;
    mesh_26_instance_3: THREE.Mesh;
    mesh_27_instance_1: THREE.Mesh;
    mesh_27_instance_2: THREE.Mesh;
    mesh_27_instance_3: THREE.Mesh;
    mesh_27_instance_4: THREE.Mesh;
    mesh_27_instance_5: THREE.Mesh;
    mesh_27_instance_6: THREE.Mesh;
    mesh_27_instance_7: THREE.Mesh;
    mesh_27_instance_8: THREE.Mesh;
    mesh_27_instance_9: THREE.Mesh;
    mesh_27_instance_10: THREE.Mesh;
    mesh_28_instance_1: THREE.Mesh;
    mesh_28_instance_2: THREE.Mesh;
    mesh_28_instance_3: THREE.Mesh;
    mesh_28_instance_4: THREE.Mesh;
    mesh_28_instance_5: THREE.Mesh;
    mesh_28_instance_6: THREE.Mesh;
    mesh_28_instance_7: THREE.Mesh;
    mesh_28_instance_8: THREE.Mesh;
    mesh_28_instance_9: THREE.Mesh;
    mesh_28_instance_10: THREE.Mesh;
    mesh_28_instance_11: THREE.Mesh;
    mesh_29_instance_1: THREE.Mesh;
    mesh_29_instance_2: THREE.Mesh;
    mesh_29_instance_3: THREE.Mesh;
    mesh_29_instance_4: THREE.Mesh;
    mesh_29_instance_5: THREE.Mesh;
    mesh_29_instance_6: THREE.Mesh;
    mesh_29_instance_7: THREE.Mesh;
    mesh_29_instance_8: THREE.Mesh;
    mesh_29_instance_9: THREE.Mesh;
    mesh_29_instance_10: THREE.Mesh;
    mesh_29_instance_11: THREE.Mesh;
    mesh_29_instance_12: THREE.Mesh;
    mesh_29_instance_13: THREE.Mesh;
    mesh_44_instance_1: THREE.Mesh;
    mesh_44_instance_2: THREE.Mesh;
    mesh_44_instance_3: THREE.Mesh;
    mesh_44_instance_4: THREE.Mesh;
    mesh_44_instance_5: THREE.Mesh;
    mesh_44_instance_6: THREE.Mesh;
    mesh_44_instance_7: THREE.Mesh;
    mesh_44_instance_8: THREE.Mesh;
    mesh_44_instance_9: THREE.Mesh;
    mesh_44_instance_10: THREE.Mesh;
    mesh_44_instance_11: THREE.Mesh;
    mesh_44_instance_12: THREE.Mesh;
    mesh_44_instance_13: THREE.Mesh;
    mesh_45_instance_1: THREE.Mesh;
    mesh_45_instance_2: THREE.Mesh;
    mesh_45_instance_3: THREE.Mesh;
    mesh_45_instance_4: THREE.Mesh;
    mesh_45_instance_5: THREE.Mesh;
    mesh_45_instance_6: THREE.Mesh;
    mesh_45_instance_7: THREE.Mesh;
    mesh_45_instance_8: THREE.Mesh;
    mesh_45_instance_9: THREE.Mesh;
    mesh_45_instance_10: THREE.Mesh;
    mesh_45_instance_11: THREE.Mesh;
    mesh_45_instance_12: THREE.Mesh;
    mesh_45_instance_13: THREE.Mesh;
    trackpad_top: THREE.Mesh;
    trackpad_border: THREE.Mesh;
    Rectangle_9_1: THREE.Mesh;
    Rectangle_10_1: THREE.Mesh;
    Rectangle_9_2: THREE.Mesh;
    Rectangle_8_1: THREE.Mesh;
    Rectangle_8_2: THREE.Mesh;
    Rectangle_3_1: THREE.Mesh;
    Ellipse: THREE.Mesh;
    Rectangle_6_1: THREE.Mesh;
    Rectangle_5_1: THREE.Mesh;
    Rectangle_4_1: THREE.Mesh;
  };
  materials: {};
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const state = useThree()
  console.log(state)
  const { nodes } = useGLTF("/macbook_pro_copy.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[-15.425, 162.722, -212.286]}
          rotation={[-2.412, -0.457, 3.117]}
          scale={0.392}
        >
          <pointLight
            intensity={1.9}
            decay={2}
            distance={2000}
            color="#d591ff"
            position={[-260.186, 737.205, 1655.588]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={2.069}
          />
          <pointLight
            intensity={1.9}
            decay={2}
            distance={2000}
            color="#ffb9f7"
            position={[-285.397, -58.2, -10.105]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={2.069}
          />
          <pointLight
            intensity={1.9}
            decay={2}
            distance={2000}
            color="#b76aff"
            position={[0, -58.2, -10.105]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={2.069}
          />
          <group position={[-1.273, -436.608, -17.856]} scale={[1, 1, 1.002]}>
            <group
              position={[-6.964, 478.108, 16.318]}
              scale={[1.957, 1.957, 1089621.131]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.logo_apple_1.geometry}
                material={nodes.logo_apple_1.material}
                position={[-22.723, 24.789, 0]}
                scale={[0.094, 0.094, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.logo_apple_2.geometry}
                material={nodes.logo_apple_2.material}
                position={[0.139, 47.161, 0]}
                scale={[0.094, 0.094, 0]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.connector.geometry}
              material={nodes.connector.material}
              position={[1.273, -20.522, -5.615]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={2.069}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.screen_1.geometry}
              material={nodes.screen_1.material}
              position={[669.198, 44.158, 0.656]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.899, 0.9, 0.9]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.green_light.geometry}
              material={nodes.green_light.material}
              position={[-25.412, 906.024, 0.612]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.818, 0.81, 0.922]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.black_border_notch_screen.geometry}
              material={nodes.black_border_notch_screen.material}
              position={[691.334, 915.76, 0.966]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[0.902, 0.902, 1.004]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.grey_border_creen.geometry}
              material={nodes.grey_border_creen.material}
              position={[0.451, 448.36, 9.162]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.902, 0.902, 1.004]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_1.geometry}
              material={nodes.Rectangle_1.material}
              position={[0, 448.36, 15.068]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.902, 0.902, 1.004]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.metalic_screen.geometry}
              material={nodes.metalic_screen.material}
              position={[0, 448.36, 10.166]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.902, 0.902, 1.004]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.camera.geometry}
              material={nodes.camera.material}
              position={[-3.459, 906.024, 0.612]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.818, 0.81, 0.922]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.border_black_camera.geometry}
              material={nodes.border_black_camera.material}
              position={[-3.459, 906.024, 0.841]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.818, 0.81, 0.922]}
            />
          </group>
          <group position={[-56.341, -457.519, -546.112]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube.geometry}
              material={nodes.Cube.material}
              position={[56.341, 17.747, 516.407]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[2.069, 2.069, 2.074]}
            />
            <group
              position={[5.418, -7.126, -0.405]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.base_2.geometry}
                material={nodes.base_2.material}
                position={[10.976, 13.354, 134.945]}
              />
            </group>
            <group
              position={[1.277, 32.071, 180.03]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_2.geometry}
                material={nodes.Rectangle_2.material}
                position={[585.274, 0.305, -16.442]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_2.geometry}
                material={nodes.Rectangle_2.material}
                position={[-697.577, 0.305, -16.442]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
              />
            </group>
            <group
              position={[51.909, -18.233, -11.947]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Subdiv_3.geometry}
                material={nodes.Subdiv_3.material}
                position={[466.778, 3.425, -412.464]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1.092, 1.146, 1.127]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Subdiv_3_1.geometry}
                material={nodes.Subdiv_3_1.material}
                position={[466.778, -2.641, -412.464]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1, 1.05, 1.033]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Subdiv_3_2.geometry}
                material={nodes.Subdiv_3_2.material}
                position={[-466.778, 3.425, -412.464]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1.092, 1.146, 1.127]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Subdiv_3_3.geometry}
                material={nodes.Subdiv_3_3.material}
                position={[-463.996, -3.761, -412.392]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1, 1.05, 1.033]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Subdiv_2.geometry}
                material={nodes.Subdiv_2.material}
                position={[466.778, 3.425, 326.825]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1.092, 1.146, 1.127]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Subdiv_2_1.geometry}
                material={nodes.Subdiv_2_1.material}
                position={[466.778, -2.641, 326.825]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1, 1.05, 1.033]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Subdiv.geometry}
                material={nodes.Subdiv.material}
                position={[-466.778, 3.425, 326.825]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1.092, 1.146, 1.127]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={nodes.Cylinder.material}
                position={[-466.778, -2.641, 326.825]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1, 1.05, 1.033]}
              />
            </group>
            <group
              position={[57.789, 37.671, 198.94]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Torus.geometry}
                material={nodes.Torus.material}
                position={[542.483, -3.08, -197.924]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1.167}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.keybord_lign.geometry}
                material={nodes.keybord_lign.material}
                position={[306.674, -9.042, 198.694]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.keybord_lign_1.geometry}
                material={nodes.keybord_lign_1.material}
                position={[-550.659, -9.042, 198.694]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.keybord_lign_2.geometry}
                material={nodes.keybord_lign_2.material}
                position={[-364.399, -9.042, 120.028]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.keybord_lign_3.geometry}
                material={nodes.keybord_lign_3.material}
                position={[-405.798, -9.042, 40.694]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.keybord_lign_4.geometry}
                material={nodes.keybord_lign_4.material}
                position={[-429.326, -9.042, -40.639]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_6.geometry}
                material={nodes.Rectangle_6.material}
                position={[-39.254, -9.042, 198.255]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_7.geometry}
                material={nodes.Rectangle_7.material}
                position={[214.76, -9.042, 198.255]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_5.geometry}
                material={nodes.Rectangle_5.material}
                position={[-293.933, -9.042, 198.255]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_14.geometry}
                material={nodes.Rectangle_14.material}
                position={[466.157, -8.966, 180.772]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 2.667]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_13.geometry}
                material={nodes.Rectangle_13.material}
                position={[466.157, -8.966, 215.498]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 2.667]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_12.geometry}
                material={nodes.Rectangle_12.material}
                position={[548.766, -8.966, 215.498]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 2.667]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_11.geometry}
                material={nodes.Rectangle_11.material}
                position={[386.568, -8.966, 215.498]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 2.667]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_8.geometry}
                material={nodes.Rectangle_8.material}
                position={[494.676, -9.042, 120.419]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_4.geometry}
                material={nodes.Rectangle_4.material}
                position={[-499.797, -9.042, 120.419]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_9.geometry}
                material={nodes.Rectangle_9.material}
                position={[513.917, -9.042, 40.905]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_3.geometry}
                material={nodes.Rectangle_3.material}
                position={[-519.297, -9.042, 40.905]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_10.geometry}
                material={nodes.Rectangle_10.material}
                position={[523.26, -9.042, -119.429]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_2_1.geometry}
                material={nodes.Rectangle_2_1.material}
                position={[-530.797, -9.042, -40.801]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_3.geometry}
                material={nodes.Rectangle_3.material}
                position={[-529.297, -9.042, -196.639]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.keybord_lign_5.geometry}
                material={nodes.keybord_lign_5.material}
                position={[-429.326, -9.042, -196.639]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.keybord_lign_6.geometry}
                material={nodes.keybord_lign_6.material}
                position={[-549.326, -9.042, -118.989]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.keyboard_1.geometry}
                material={nodes.keyboard_1.material}
                position={[0, -7.703, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 2.159]}
              />
              <group
                position={[-550.659, -9.042, 198.694]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_26_instance_1.geometry}
                  material={nodes.mesh_26_instance_1.material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_26_instance_2.geometry}
                  material={nodes.mesh_26_instance_2.material}
                  position={[81, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_26_instance_3.geometry}
                  material={nodes.mesh_26_instance_3.material}
                  position={[162, 0, 0]}
                />
              </group>
              <group
                position={[-364.399, -9.042, 120.028]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27_instance_1.geometry}
                  material={nodes.mesh_27_instance_1.material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27_instance_2.geometry}
                  material={nodes.mesh_27_instance_2.material}
                  position={[81, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27_instance_3.geometry}
                  material={nodes.mesh_27_instance_3.material}
                  position={[162, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27_instance_4.geometry}
                  material={nodes.mesh_27_instance_4.material}
                  position={[243, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27_instance_5.geometry}
                  material={nodes.mesh_27_instance_5.material}
                  position={[324, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27_instance_6.geometry}
                  material={nodes.mesh_27_instance_6.material}
                  position={[405, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27_instance_7.geometry}
                  material={nodes.mesh_27_instance_7.material}
                  position={[486, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27_instance_8.geometry}
                  material={nodes.mesh_27_instance_8.material}
                  position={[567, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27_instance_9.geometry}
                  material={nodes.mesh_27_instance_9.material}
                  position={[648, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27_instance_10.geometry}
                  material={nodes.mesh_27_instance_10.material}
                  position={[729, 0, 0]}
                />
              </group>
              <group
                position={[-405.798, -9.042, 40.694]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_1.geometry}
                  material={nodes.mesh_28_instance_1.material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_2.geometry}
                  material={nodes.mesh_28_instance_2.material}
                  position={[81, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_3.geometry}
                  material={nodes.mesh_28_instance_3.material}
                  position={[162, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_4.geometry}
                  material={nodes.mesh_28_instance_4.material}
                  position={[243, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_5.geometry}
                  material={nodes.mesh_28_instance_5.material}
                  position={[324, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_6.geometry}
                  material={nodes.mesh_28_instance_6.material}
                  position={[405, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_7.geometry}
                  material={nodes.mesh_28_instance_7.material}
                  position={[486, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_8.geometry}
                  material={nodes.mesh_28_instance_8.material}
                  position={[567, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_9.geometry}
                  material={nodes.mesh_28_instance_9.material}
                  position={[648, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_10.geometry}
                  material={nodes.mesh_28_instance_10.material}
                  position={[729, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_11.geometry}
                  material={nodes.mesh_28_instance_11.material}
                  position={[810, 0, 0]}
                />
              </group>
              <group
                position={[-429.326, -9.042, -40.639]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_29_instance_1.geometry}
                  material={nodes.mesh_29_instance_1.material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_29_instance_2.geometry}
                  material={nodes.mesh_29_instance_2.material}
                  position={[81, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_29_instance_3.geometry}
                  material={nodes.mesh_29_instance_3.material}
                  position={[162, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_29_instance_4.geometry}
                  material={nodes.mesh_29_instance_4.material}
                  position={[243, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_29_instance_5.geometry}
                  material={nodes.mesh_29_instance_5.material}
                  position={[324, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_29_instance_6.geometry}
                  material={nodes.mesh_29_instance_6.material}
                  position={[405, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_29_instance_7.geometry}
                  material={nodes.mesh_29_instance_7.material}
                  position={[486, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_29_instance_8.geometry}
                  material={nodes.mesh_29_instance_8.material}
                  position={[567, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_29_instance_9.geometry}
                  material={nodes.mesh_29_instance_9.material}
                  position={[648, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_29_instance_10.geometry}
                  material={nodes.mesh_29_instance_10.material}
                  position={[729, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_29_instance_11.geometry}
                  material={nodes.mesh_29_instance_11.material}
                  position={[810, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_29_instance_12.geometry}
                  material={nodes.mesh_29_instance_12.material}
                  position={[891, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_29_instance_13.geometry}
                  material={nodes.mesh_29_instance_13.material}
                  position={[972, 0, 0]}
                />
              </group>
              <group
                position={[-429.326, -9.042, -196.639]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_1.geometry}
                  material={nodes.mesh_44_instance_1.material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_2.geometry}
                  material={nodes.mesh_44_instance_2.material}
                  position={[81, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_3.geometry}
                  material={nodes.mesh_44_instance_3.material}
                  position={[162, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_4.geometry}
                  material={nodes.mesh_44_instance_4.material}
                  position={[243, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_5.geometry}
                  material={nodes.mesh_44_instance_5.material}
                  position={[324, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_6.geometry}
                  material={nodes.mesh_44_instance_6.material}
                  position={[405, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_7.geometry}
                  material={nodes.mesh_44_instance_7.material}
                  position={[486, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_8.geometry}
                  material={nodes.mesh_44_instance_8.material}
                  position={[567, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_9.geometry}
                  material={nodes.mesh_44_instance_9.material}
                  position={[648, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_10.geometry}
                  material={nodes.mesh_44_instance_10.material}
                  position={[729, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_11.geometry}
                  material={nodes.mesh_44_instance_11.material}
                  position={[810, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_12.geometry}
                  material={nodes.mesh_44_instance_12.material}
                  position={[891, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_13.geometry}
                  material={nodes.mesh_44_instance_13.material}
                  position={[972, 0, 0]}
                />
              </group>
              <group
                position={[-549.326, -9.042, -118.989]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_45_instance_1.geometry}
                  material={nodes.mesh_45_instance_1.material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_45_instance_2.geometry}
                  material={nodes.mesh_45_instance_2.material}
                  position={[81, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_45_instance_3.geometry}
                  material={nodes.mesh_45_instance_3.material}
                  position={[162, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_45_instance_4.geometry}
                  material={nodes.mesh_45_instance_4.material}
                  position={[243, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_45_instance_5.geometry}
                  material={nodes.mesh_45_instance_5.material}
                  position={[324, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_45_instance_6.geometry}
                  material={nodes.mesh_45_instance_6.material}
                  position={[405, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_45_instance_7.geometry}
                  material={nodes.mesh_45_instance_7.material}
                  position={[486, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_45_instance_8.geometry}
                  material={nodes.mesh_45_instance_8.material}
                  position={[567, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_45_instance_9.geometry}
                  material={nodes.mesh_45_instance_9.material}
                  position={[648, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_45_instance_10.geometry}
                  material={nodes.mesh_45_instance_10.material}
                  position={[729, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_45_instance_11.geometry}
                  material={nodes.mesh_45_instance_11.material}
                  position={[810, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_45_instance_12.geometry}
                  material={nodes.mesh_45_instance_12.material}
                  position={[891, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_45_instance_13.geometry}
                  material={nodes.mesh_45_instance_13.material}
                  position={[972, 0, 0]}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh_25_instance_1.geometry}
                material={nodes.mesh_25_instance_1.material}
                position={[306.674, -9.042, 198.694]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group
              position={[-4.129, 34.514, -284.996]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.trackpad_top.geometry}
                material={nodes.trackpad_top.material}
                position={[-61.189, -1.672, -41.264]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.834, 0.835, 5]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.trackpad_border.geometry}
                material={nodes.trackpad_border.material}
                position={[-61.189, -2.481, -41.264]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.834, 0.835, 5]}
              />
            </group>
            <group
              position={[-633.046, 12.571, 270.937]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_9_1.geometry}
                material={nodes.Rectangle_9_1.material}
                position={[-2.047, -20.268, 425.433]}
                rotation={[Math.PI / 2, 1.276, -Math.PI / 2]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_10_1.geometry}
                material={nodes.Rectangle_10_1.material}
                position={[0, 0, -105.067]}
                rotation={[0, Math.PI / 2, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_9_2.geometry}
                material={nodes.Rectangle_9_2.material}
                position={[0, 2.5, -26.067]}
                rotation={[0, Math.PI / 2, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_8_1.geometry}
                material={nodes.Rectangle_8_1.material}
                position={[0, 2.945, 79.567]}
                rotation={[0, Math.PI / 2, 0]}
              />
            </group>
            <group position={[745.729, 14.036, 293.612]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_8_2.geometry}
                material={nodes.Rectangle_8_2.material}
                position={[-1.384, -18.907, -448.108]}
                rotation={[Math.PI / 2, 1.231, -Math.PI / 2]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_3_1.geometry}
                material={nodes.Rectangle_3_1.material}
                position={[0.772, 1.08, 83.997]}
                rotation={[0, Math.PI / 2, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse.geometry}
                material={nodes.Ellipse.material}
                position={[0.485, -0.08, -113.497]}
                rotation={[0, Math.PI / 2, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_6_1.geometry}
                material={nodes.Rectangle_6_1.material}
                position={[0.485, 0.575, -58.939]}
                rotation={[0, Math.PI / 2, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_5_1.geometry}
                material={nodes.Rectangle_5_1.material}
                position={[0.485, 0.575, 5.16]}
                rotation={[0, Math.PI / 2, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_4_1.geometry}
                material={nodes.Rectangle_4_1.material}
                position={[0.485, 1.08, 83.997]}
                rotation={[0, Math.PI / 2, 0]}
              />
            </group>
          </group>
        </group>
        <OrthographicCamera
          makeDefault={false}
          far={50000}
          near={0}
          position={[40.958, 1.219, 1000]}
        >
          <directionalLight
            intensity={0.6}
            // decay={2}
            rotation={[-0.7, 0.648, 0.949]}
          />
        </OrthographicCamera>
        <OrthographicCamera
          makeDefault={false}
          far={100000}
          near={0}
          position={[-23.634, -444.708, 892.736]}
          rotation={[0.463, -0.065, 0.032]}
        />
      </group>
    </group>
  );
}
useGLTF.preload("./macbook_pro_copy.gltf");
