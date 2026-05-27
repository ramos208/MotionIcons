<template>
  <div 
    class="three-viewport-container" 
    @pointerenter="isHovered = true" 
    @pointerleave="isHovered = false"
  >
    <!-- 3D Canvas Area with white background -->
    <div class="canvas-wrapper">
      <TresCanvas 
        antialias 
        shadow-map
        class="tres-canvas-detail"
      >
        <!-- Force explicit white clear color background -->
        <TresColor attach="background" args="['#ffffff']" />

        <TresPerspectiveCamera 
          ref="cameraRef"
          :position="initialCameraPos" 
          :look-at="[0, 0, 0]" 
        />
        
        <OrbitControls 
          ref="controlsRef"
          :enable-zoom="true" 
          :enable-pan="false" 
          :damping-factor="0.05"
          :enable-damping="true"
        />
        
        <!-- Pure White Lighting and Neutral Lights to keep selected color perfectly accurate -->
        <TresAmbientLight :intensity="0.85" />
        <TresDirectionalLight :position="[5, 10, 5]" :intensity="1.3" />
        <TresDirectionalLight :position="[-5, -10, -5]" :intensity="0.45" />

        <!-- Subtle Visual Grid Floor Underneath -->
        <TresGridHelper :args="[14, 14, '#cbd5e1', '#f1f5f9']" :position="[0, -2.4, 0]" />

        <!-- Center Wrapper -->
        <TresGroup ref="wrapperGroupRef">
          <!-- SVG Paths container rotated to be right side up -->
          <TresGroup ref="groupRef" :rotation="[Math.PI, 0, 0]">
            <!-- Render Fills as Solid Extrusions -->
            <template v-for="(item, idx) in compiledShapes" :key="'fill-' + idx">
              <TresMesh 
                v-if="item.type === 'fill' && item.shape" 
                cast-shadow 
                receive-shadow
              >
                <TresExtrudeGeometry :args="[item.shape, extrudeSettings]" />
                <TresMeshPhysicalMaterial 
                  :color="color || '#818CF8'"
                  :roughness="0.2"
                  :metalness="0.1"
                  :clearcoat="0.8"
                  :side="DoubleSide"
                />
              </TresMesh>
            </template>

            <!-- Render Strokes as Smooth Sleek 3D Tubes -->
            <template v-for="(item, idx) in compiledShapes" :key="'stroke-' + idx">
              <TresMesh 
                v-if="item.type === 'stroke' && item.curve" 
                cast-shadow 
                receive-shadow
              >
                <TresTubeGeometry :args="[item.curve, 64, 0.7, 8, false]" />
                <TresMeshPhysicalMaterial 
                  :color="color || '#818CF8'"
                  :roughness="0.15"
                  :metalness="0.3"
                  :clearcoat="0.8"
                  :side="DoubleSide"
                />
              </TresMesh>
            </template>
          </TresGroup>
        </TresGroup>
      </TresCanvas>

      <!-- Floating Reset Button inside canvas -->
      <button 
        class="reset-view-btn" 
        @click="resetView"
        title="Reset Camera View"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
        <span class="reset-tooltip">Reset View</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue';
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import * as THREE from 'three';
import { DoubleSide } from 'three';

interface ShapeItem {
  type: 'fill' | 'stroke';
  shape?: THREE.Shape;
  curve?: THREE.Curve<THREE.Vector3>;
  color: THREE.Color;
}

const props = defineProps({
  svgString: { type: String, required: true },
  color: { type: String, default: '#818CF8' },
  animation: { type: String, default: 'none' },
  cameraPosition: { type: Array as () => number[], default: () => [0, 0, 7] },
  initialAutoRotate: { type: Boolean, default: false }
});

const initialCameraPos = ref<number[]>(props.cameraPosition);
const autoRotate = ref(props.initialAutoRotate);
const isHovered = ref(false);

// Expose method to read the current live camera position
const getCurrentCameraPosition = (): number[] => {
  if (cameraRef.value) {
    const cam = cameraRef.value;
    return [
      Math.round(cam.position.x * 100) / 100,
      Math.round(cam.position.y * 100) / 100,
      Math.round(cam.position.z * 100) / 100
    ];
  }
  return [0, 0, 7];
};

defineExpose({ getCurrentCameraPosition });
const baseScale = ref(1.0);
const compiledShapes = ref<ShapeItem[]>([]);

const wrapperGroupRef = ref<THREE.Group | null>(null);
const groupRef = ref<THREE.Group | null>(null);
const cameraRef = ref<any>(null);
const controlsRef = ref<any>(null);

const extrudeSettings = {
  depth: 4,
  bevelEnabled: true,
  bevelSegments: 5,
  steps: 1,
  bevelSize: 0.6,
  bevelThickness: 0.6
};

// SVG Shape and Stroke compiler
const parseSvg = () => {
  if (!props.svgString) return;
  try {
    const loader = new SVGLoader();
    const svgData = loader.parse(props.svgString);
    const shapes: ShapeItem[] = [];
    
    svgData.paths.forEach((path) => {
      const isFill = path.userData?.style?.fill && path.userData.style.fill !== 'none';
      const isStroke = path.userData?.style?.stroke && path.userData.style.stroke !== 'none';
      
      const fillColor = path.userData?.style?.fill;
      let shapeColor = new THREE.Color(props.color);
      if (fillColor && fillColor !== 'none') {
        shapeColor.set(fillColor);
      } else {
        const strokeColor = path.userData?.style?.stroke;
        if (strokeColor && strokeColor !== 'none') {
          shapeColor.set(strokeColor);
        }
      }
      
      // 1. Process filled geometries
      if (isFill) {
        const pathShapes = path.toShapes(true);
        pathShapes.forEach((shape) => {
          shapes.push({
            type: 'fill',
            shape,
            color: shapeColor
          });
        });
      }
      
      // 2. Process stroke outlines as thick volumetric 3D tubes
      if (isStroke || (!isFill && path.subPaths.length > 0)) {
        path.subPaths.forEach((subPath) => {
          const points2d = subPath.getPoints();
          if (points2d.length >= 2) {
            const points3d = points2d.map(p => new THREE.Vector3(p.x, p.y, 0));
            
            let curve;
            if (points3d.length === 2) {
              curve = new THREE.LineCurve3(points3d[0], points3d[1]);
            } else {
              const start = points3d[0];
              const end = points3d[points3d.length - 1];
              const isClosed = start.distanceTo(end) < 0.1;
              curve = new THREE.CatmullRomCurve3(points3d, isClosed);
            }
            
            shapes.push({
              type: 'stroke',
              curve,
              color: shapeColor
            });
          }
        });
      }
    });
    
    compiledShapes.value = shapes;
    
    // Centering after render
    nextTick(() => {
      setTimeout(() => {
        centerAndNormalizeGroup();
      }, 50);
    });
  } catch (err) {
    console.error('Error parsing SVG to 3D Extrusion:', err);
  }
};

const centerAndNormalizeGroup = () => {
  if (!groupRef.value || !wrapperGroupRef.value) return;
  const group = groupRef.value;
  const wrapper = wrapperGroupRef.value;
  
  // Calculate bounding box
  const box = new THREE.Box3().setFromObject(group);
  const size = new THREE.Vector3();
  box.getSize(size);
  const center = new THREE.Vector3();
  box.getCenter(center);
  
  // Offset coordinates relative to its visual center
  group.position.x = -center.x;
  group.position.y = -center.y;
  group.position.z = -center.z;
  
  // Scale down to a standard visual unit size (e.g. max bound of 5.2 to make it larger)
  const maxDim = Math.max(size.x, size.y, size.z);
  if (maxDim > 0) {
    const scale = 5.2 / maxDim;
    baseScale.value = scale;
    wrapper.scale.set(scale, scale, scale);
  }
};

const resetView = () => {
  if (cameraRef.value) {
    const cam = cameraRef.value;
    cam.position.set(0, 0, 7);
  }
  if (controlsRef.value && controlsRef.value.value) {
    controlsRef.value.value.target.set(0, 0, 0);
  }
  if (wrapperGroupRef.value) {
    wrapperGroupRef.value.rotation.set(0, 0, 0);
    wrapperGroupRef.value.position.set(0, 0, 0);
    wrapperGroupRef.value.scale.set(baseScale.value, baseScale.value, baseScale.value);
  }
};

// Robust browser-native high-performance rotation and animation loop
let rafId = 0;
let previousTime = performance.now();
let accumulatedTime = 0;

const tickLoop = (time: number) => {
  rafId = requestAnimationFrame(tickLoop);
  if (!wrapperGroupRef.value) return;
  
  const group = wrapperGroupRef.value;
  const delta = (time - previousTime) / 1000;
  previousTime = time;

  if (!isHovered.value) {
    // Reset to baseline when not hovering
    accumulatedTime = 0;
    group.position.set(0, 0, 0);
    group.rotation.set(0, 0, 0);
    group.scale.set(baseScale.value, baseScale.value, baseScale.value);
    return;
  }

  accumulatedTime += delta;
  const t = accumulatedTime;
  const anim = props.animation.toLowerCase();
  
  // Base default Y auto-rotation if no other motions are active
  if (autoRotate.value && anim === 'none') {
    group.rotation.y += delta * 0.45;
  } else if (anim === 'none') {
    // Keep it clean
  } else {
    // Clear rotations not active
    group.rotation.set(0, 0, 0);
  }
  
  // Dynamic Real-time 3D Animation Engine
  if (anim.includes('pulse') || anim === 'breathing' || anim === 'soft pulse') {
    const scaleMult = 1.0 + Math.sin(t * 4.5) * 0.12;
    group.scale.set(baseScale.value * scaleMult, baseScale.value * scaleMult, baseScale.value * scaleMult);
    group.position.set(0, 0, 0);
  } 
  else if (anim.includes('bounce') || anim === 'hop' || anim === 'peek' || anim === 'snap' || anim === 'pop') {
    const bounceY = Math.abs(Math.sin(t * 6)) * 1.2;
    group.position.y = bounceY - 0.6;
    const squash = 1.0 - (bounceY < 0.2 ? (0.2 - bounceY) * 0.5 : 0);
    group.scale.set(baseScale.value * (2.0 - squash), baseScale.value * squash, baseScale.value);
  } 
  else if (anim.includes('spin') || anim.includes('rotate') || anim.includes('orbit') || anim === 'spiral') {
    group.rotation.y = t * 2.5;
    if (anim.includes('3d')) {
      group.rotation.x = t * 0.8;
    }
    group.position.set(0, 0, 0);
    group.scale.set(baseScale.value, baseScale.value, baseScale.value);
  } 
  else if (anim.includes('shake') || anim === 'cartoon shake' || anim === 'wiggle') {
    group.position.x = Math.sin(t * 30) * 0.18;
    group.scale.set(baseScale.value, baseScale.value, baseScale.value);
  } 
  else if (anim.includes('float') || anim === 'drift' || anim === 'silk float') {
    group.position.y = Math.sin(t * 2) * 0.35;
    group.rotation.y = Math.sin(t * 1.5) * 0.25;
    group.scale.set(baseScale.value, baseScale.value, baseScale.value);
  } 
  else if (anim.includes('heartbeat') || anim === 'glow pulse' || anim === 'flicker') {
    const beat = (t * 2) % 2;
    let hpScale = 1.0;
    if (beat < 0.2) {
      hpScale = 1.0 + Math.sin((beat / 0.2) * Math.PI) * 0.2;
    } else if (beat < 0.4) {
      hpScale = 1.0 + Math.sin(((beat - 0.2) / 0.2) * Math.PI) * 0.12;
    }
    group.scale.set(baseScale.value * hpScale, baseScale.value * hpScale, baseScale.value * hpScale);
    group.position.set(0, 0, 0);
  } 
  else if (anim.includes('swing') || anim === 'pendulum') {
    group.rotation.z = Math.sin(t * 3.5) * 0.35;
    group.position.set(0, 0, 0);
    group.scale.set(baseScale.value, baseScale.value, baseScale.value);
  } 
  else if (anim.includes('jiggle') || anim === 'jelly' || anim === 'squish' || anim === 'elastic') {
    const jScaleY = 1.0 + Math.sin(t * 16) * 0.15;
    const jScaleX = 1.0 - Math.sin(t * 16) * 0.1;
    group.scale.set(baseScale.value * jScaleX, baseScale.value * jScaleY, baseScale.value);
    group.position.set(0, 0, 0);
  }
  else if (anim.includes('flip')) {
    group.rotation.x = t * 3.5;
    group.position.set(0, 0, 0);
    group.scale.set(baseScale.value, baseScale.value, baseScale.value);
  }
  else {
    // Normal baseline (smooth resetting if animation ends)
    group.position.set(0, 0, 0);
    group.scale.set(baseScale.value, baseScale.value, baseScale.value);
  }
};

onMounted(() => {
  previousTime = performance.now();
  rafId = requestAnimationFrame(tickLoop);
});

onUnmounted(() => {
  cancelAnimationFrame(rafId);
});

watch(() => props.svgString, parseSvg, { immediate: true });
watch(() => props.color, parseSvg);
</script>

<style scoped>
.three-viewport-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}

.canvas-wrapper {
  flex-grow: 1;
  width: 100%;
  height: 100%;
  min-height: 280px;
  position: relative;
  background: #ffffff;
}

.tres-canvas-detail {
  width: 100%;
  height: 100%;
  z-index: 1;
}

/* Floating Reset Button */
.reset-view-btn {
  position: absolute;
  bottom: 12px;
  right: 12px;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(203, 213, 225, 0.6);
  color: #475569;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.reset-view-btn:hover {
  background: #ffffff;
  border-color: #818cf8;
  color: #818cf8;
  box-shadow: 0 4px 12px rgba(129, 140, 248, 0.25);
  transform: scale(1.08);
}

.reset-view-btn:active {
  transform: scale(0.95);
}

/* Custom Tooltip */
.reset-tooltip {
  position: absolute;
  bottom: calc(100% + 8px);
  right: 0;
  background: #1e293b;
  color: #f8fafc;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 6px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transform: translateY(4px);
  transition: all 0.2s ease;
}

.reset-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  right: 12px;
  border: 5px solid transparent;
  border-top-color: #1e293b;
}

.reset-view-btn:hover .reset-tooltip {
  opacity: 1;
  transform: translateY(0);
}
</style>
