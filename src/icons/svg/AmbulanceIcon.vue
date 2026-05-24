<template>
  <AnimatedIcon v-bind="props" ariaLabel="Ambulance icon">
    <g class="ambulance">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path
        d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"
      />
      <path d="M9 18h6" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </g>
    <g class="plus">
      <path d="M10 10H6" />
      <path d="M8 8v4" />
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
.plus {
  transform-origin: 8px 8px;
}

.animated-icon-wrapper.is-hovering .ambulance {
  animation: jitter 0.6s ease-in-out infinite alternate;
}

.animated-icon-wrapper.is-hovering .plus {
  animation: pulse 0.6s ease-in-out infinite alternate;
}

@keyframes jitter {
  0% { transform: translateX(0px); }
  33% { transform: translateX(1px); }
  66% { transform: translateX(0px); }
  100% { transform: translateX(-1px); }
}

@keyframes pulse {
  0% { transform: scale(1); }
  100% { transform: scale(1.3); }
}

@media (prefers-reduced-motion: reduce) {
  .animated-icon-wrapper.is-hovering .ambulance,
  .animated-icon-wrapper.is-hovering .plus {
    animation: none;
  }
}
</style>
