uniform float time;
uniform vec3 color;
varying vec2 vUv;

void main() {
    // A simple glow and pulsating effect shader
    vec2 center = vec2(0.5, 0.5);
    float dist = distance(vUv, center);
    
    float pulse = sin(time * 2.0) * 0.5 + 0.5;
    float alpha = smoothstep(0.5, 0.2, dist) * pulse;
    
    gl_FragColor = vec4(color * alpha * 2.0, alpha);
}
