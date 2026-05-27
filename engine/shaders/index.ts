export interface ShaderProfile {
  vertexShader: string;
  fragmentShader: string;
  uniforms: Record<string, any>;
}

export class Shaders {
  /**
   * Generates a unique GLSL shader configuration based on the icon semantics.
   */
  static generateShader(category: string): ShaderProfile {
    switch (category) {
      case 'ai':
        return {
          vertexShader: `
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `.trim(),
          fragmentShader: `
            varying vec2 vUv;
            uniform float time;
            void main() {
              float pulse = sin(time * 5.0) * 0.5 + 0.5;
              vec3 glowColor = vec3(0.0, 0.8, 1.0) * pulse;
              gl_FragColor = vec4(glowColor, 0.8);
            }
          `.trim(),
          uniforms: { time: { value: 0 } }
        };
      case 'weather':
        return {
          vertexShader: `
            varying vec2 vUv;
            uniform float time;
            void main() {
              vUv = uv;
              vec3 pos = position;
              pos.z += sin(pos.x * 5.0 + time) * 0.2;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `.trim(),
          fragmentShader: `
            varying vec2 vUv;
            void main() {
              gl_FragColor = vec4(0.8, 0.9, 1.0, 0.6);
            }
          `.trim(),
          uniforms: { time: { value: 0 } }
        };
      default:
        return {
          vertexShader: `
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `.trim(),
          fragmentShader: `
            varying vec2 vUv;
            void main() {
              gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
            }
          `.trim(),
          uniforms: {}
        };
    }
  }
}
