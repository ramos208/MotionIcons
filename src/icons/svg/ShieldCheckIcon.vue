<template>
  <AnimatedIcon v-bind="props" ariaLabel="Shield Check icon">
    <path
      class="shield-body"
      d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06"
    />
    <path class="shield-check" d="M15 19l2 2l4 -4" />
  </AnimatedIcon>
</template>

<script setup lang="ts">
import AnimatedIcon from '../../components/AnimatedIcon.vue';

const props = defineProps({
  size: { type: Number, default: 24 },
  color: { type: String, default: '' },
  duration: { type: Number, default: 0.5 },
  hover: { type: Boolean, default: true },
  active: { type: Boolean, default: true },
  loop: { type: Boolean, default: false },
  strokeWidth: { type: Number, default: 2 },
  glow: { type: Boolean, default: false },
  physics: { type: Boolean, default: true }
});
</script>

<style scoped>
.shield-body {
  transform-origin: 50% 50%;
}

.shield-check {
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
  opacity: 0;
}

.animated-icon-wrapper.is-hovering .shield-body {
  animation: pulse-shield 0.35s ease-out forwards;
}

.animated-icon-wrapper.is-hovering .shield-check {
  animation: draw-check 0.3s ease-in-out forwards;
}

@keyframes pulse-shield {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes draw-check {
  0% { stroke-dashoffset: 20; opacity: 0; }
  10% { opacity: 1; }
  100% { stroke-dashoffset: 0; opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .animated-icon-wrapper.is-hovering .shield-body,
  .animated-icon-wrapper.is-hovering .shield-check {
    animation: none;
    stroke-dashoffset: 0;
    opacity: 1;
  }
}
</style>
