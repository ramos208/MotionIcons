<template>
  <div
    ref="containerRef"
    class="three-icon-wrapper"
    :style="{ width: `${size}px`, height: `${size}px` }"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <TresCanvas
      alpha
      antialias
      :shadows="shadows"
      :window-size="false"
      class="tres-canvas"
    >
      <TresPerspectiveCamera :position="[0, 0, 5]" :look-at="[0, 0, 0]" />
      <OrbitControls
        v-if="interactive"
        :enable-zoom="false"
        :enable-pan="false"
      />

      <TresAmbientLight v-if="lighting" :intensity="0.5" />
      <TresDirectionalLight
        v-if="lighting"
        :position="[5, 5, 5]"
        :intensity="1"
        cast-shadow
      />

      <Suspense>
        <slot :isHovering="isHovering" :rotation="rotationParams"></slot>
      </Suspense>
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { TresCanvas } from "@tresjs/core";
import { OrbitControls } from "@tresjs/cientos";
import { useThreeIcon } from "../composables/useThreeIcon";

const props = defineProps({
  size: { type: Number, default: 64 },
  lighting: { type: Boolean, default: true },
  shadows: { type: Boolean, default: true },
  bloom: { type: Boolean, default: false },
  interactive: { type: Boolean, default: true },
  physics: { type: Boolean, default: false },
});

const containerRef = ref<HTMLElement | null>(null);
const isHovering = ref(false);

const { rotationParams } = useThreeIcon({
  container: containerRef,
  interactive: props.interactive,
  physics: props.physics,
});
</script>

<style scoped>
.three-icon-wrapper {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.tres-canvas {
  width: 100%;
  height: 100%;
  pointer-events: none; /* Let the wrapper handle events */
}
</style>
