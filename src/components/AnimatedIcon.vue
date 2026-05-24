<template>
  <div
    ref="iconRef"
    class="animated-icon-wrapper"
    :class="[
      { 'is-hovering': isHovering, 'is-active': isActive, 'has-glow': glow },
      color ? `text-[${color}]` : 'text-current',
    ]"
    :style="{ width: `${size}px`, height: `${size}px`, color: color }"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
    @mousedown="isActive = true"
    @mouseup="isActive = false"
    @touchstart="isActive = true"
    @touchend="isActive = false"
    role="img"
    :aria-label="ariaLabel || 'Animated icon'"
  >
    <svg
      v-if="iconType === 'svg'"
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      :viewBox="`0 0 24 24`"
      fill="none"
      stroke="currentColor"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="animated-icon-svg"
    >
      <slot></slot>
    </svg>
    <slot v-else name="custom"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, watch } from "vue";
import { useIconAnimation } from "../composables/useIconAnimation";

const props = defineProps({
  size: { type: Number, default: 24 },
  color: { type: String, default: "" },
  duration: { type: Number, default: 0.3 },
  hover: { type: Boolean, default: true },
  active: { type: Boolean, default: true },
  loop: { type: Boolean, default: false },
  strokeWidth: { type: Number, default: 2 },
  glow: { type: Boolean, default: false },
  morph: { type: Boolean, default: false },
  physics: { type: Boolean, default: true },
  ariaLabel: { type: String, default: "" },
  iconType: { type: String, default: "svg" },
});

const iconRef = ref<HTMLElement | null>(null);
const isHovering = ref(false);
const isActive = ref(false);

const { hover: propsHover, active: propsActive } = toRefs(props);

// Allow external control over hover/active states
watch(propsHover, (val) => (isHovering.value = val));
watch(propsActive, (val) => (isActive.value = val));

useIconAnimation({
  element: iconRef,
  hover: isHovering,
  active: isActive,
  duration: props.duration,
  loop: props.loop,
  morph: props.morph,
  physics: props.physics,
});
</script>

<style scoped>
.animated-icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform-origin: center;
  transition: filter 0.3s ease;
  position: relative;
}

.animated-icon-wrapper.has-glow {
  filter: drop-shadow(0 0 8px currentColor);
}

.animated-icon-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}
</style>
