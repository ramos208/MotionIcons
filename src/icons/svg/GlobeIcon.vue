<template>
  <AnimatedIcon v-bind="props" ariaLabel="Globe icon">
    <g class="globe-group">
      <circle class="globe-outline" cx="12" cy="12" r="10" />
      <path class="globe-meridian" d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path class="globe-equator" d="M2 12h20" />
    </g>
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
.animated-icon-wrapper.is-hovering .globe-meridian {
  transform-origin: center;
  animation: spin-horizontal 2s linear infinite;
}

@keyframes spin-horizontal {
  from { transform: scaleX(1); }
  50% { transform: scaleX(-1); }
  to { transform: scaleX(1); }
}

@media (prefers-reduced-motion: reduce) {
  .animated-icon-wrapper.is-hovering .globe-meridian {
    animation: none;
  }
}
</style>
