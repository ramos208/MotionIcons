<template>
  <AnimatedIcon v-bind="props" ariaLabel="Map icon">
    <g class="map-group">
      <path 
        class="map-outline"
        d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"
      />
      <path class="map-line-right" d="M15 5.764v15" />
      <path class="map-line-left" d="M9 3.236v15" />
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
.animated-icon-wrapper.is-hovering .map-outline {
  transform-origin: center;
  animation: pulse-map 1.5s ease-in-out infinite alternate;
}

.animated-icon-wrapper.is-hovering .map-line-left {
  transform-origin: 9px center;
  animation: wiggle-line 1.5s ease-in-out infinite alternate;
}

.animated-icon-wrapper.is-hovering .map-line-right {
  transform-origin: 15px center;
  animation: wiggle-line-reverse 1.5s ease-in-out infinite alternate;
}

@keyframes pulse-map {
  0% { transform: scale(1); }
  100% { transform: scale(1.05); }
}

@keyframes wiggle-line {
  0% { transform: skewY(0deg); }
  100% { transform: skewY(5deg); }
}

@keyframes wiggle-line-reverse {
  0% { transform: skewY(0deg); }
  100% { transform: skewY(-5deg); }
}

@media (prefers-reduced-motion: reduce) {
  .animated-icon-wrapper.is-hovering .map-outline,
  .animated-icon-wrapper.is-hovering .map-line-left,
  .animated-icon-wrapper.is-hovering .map-line-right {
    animation: none;
  }
}
</style>
