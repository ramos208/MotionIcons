<template>
  <ThreeIcon v-bind="props">
    <template #default="{ isHovering, rotation }">
      <TresMesh
        ref="meshRef"
        cast-shadow
        :rotation="[rotation.y, rotation.x, 0]"
      >
        <TresBoxGeometry :args="[2, 2, 2]" />
        <TresMeshPhysicalMaterial
          :color="isHovering ? '#4F46E5' : '#818CF8'"
          :metalness="0.5"
          :roughness="0.1"
          :clearcoat="1"
          :transmission="0.5"
          :thickness="1.5"
        />
      </TresMesh>
    </template>
  </ThreeIcon>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import ThreeIcon from "../../components/ThreeIcon.vue";
import gsap from "gsap";
import { useReducedMotion } from "../../composables/useReducedMotion";

const props = defineProps({
  size: { type: Number, default: 64 },
  interactive: { type: Boolean, default: true },
});

const meshRef = ref(null);
const { prefersReducedMotion } = useReducedMotion();

let rafId = 0;
let previousTime = 0;

const loop = (time: number) => {
  rafId = requestAnimationFrame(loop);
  const delta = (time - previousTime) / 1000;
  previousTime = time;

  if (meshRef.value && !prefersReducedMotion.value) {
    meshRef.value.rotation.y += delta * 0.5;
    meshRef.value.rotation.x += delta * 0.2;
  }
};

onMounted(() => {
  previousTime = performance.now();
  rafId = requestAnimationFrame(loop);
});

onUnmounted(() => {
  cancelAnimationFrame(rafId);
});
</script>
