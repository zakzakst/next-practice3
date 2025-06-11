"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const ThreeSample = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const width = ref.current.clientWidth;
    const height = ref.current.clientHeight;

    // シーン・カメラ・レンダラー
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    ref.current.appendChild(renderer.domElement);

    // テクスチャ読み込み
    const loader = new THREE.TextureLoader();
    loader.load("/600x600.png", (texture) => {
      // シェーダーマテリアル
      const material = new THREE.ShaderMaterial({
        uniforms: {
          u_texture: { value: texture },
        },
        vertexShader: `
          varying vec2 v_uv;
          void main() {
            v_uv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          precision mediump float;
          varying vec2 v_uv;
          uniform sampler2D u_texture;

          void main() {
            vec4 color = texture2D(u_texture, v_uv);
            gl_FragColor = color;
          }
        `,
      });
      const geometry = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      renderer.render(scene, camera);
    });

    return () => {
      ref.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={ref} style={{ width: "100%", height: "100vh" }} />;
};
