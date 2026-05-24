<template>
  <AnimatedIcon v-bind="props" ariaLabel="Flame icon">
    <g class="flame-group">
      <path
        d="M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.621 -2.333 5.588c0 3.704 3.134 6.706 7 6.706s7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235"
      />
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
.flame-group {
  transform-origin: 50% 100%;
}

.animated-icon-wrapper.is-hovering .flame-group {
  animation: flicker 0.6s ease-out infinite alternate;
}

@keyframes flicker {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  25% { transform: translate(1px, -2px) rotate(4deg); }
  50% { transform: translate(-1px, -1px) rotate(-3deg); }
  75% { transform: translate(0.5px, -2px) rotate(2deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@media (prefers-reduced-motion: reduce) {
  .animated-icon-wrapper.is-hovering .flame-group {
    animation: none;
  }
}
</style>
