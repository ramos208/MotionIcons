<template>
  <AnimatedIcon v-bind="props" ariaLabel="Dashboard icon">
    <g class="dashboard-group">
      <rect class="rect-1" width="7" height="9" x="3" y="3" rx="1" />
      <rect class="rect-2" width="7" height="5" x="14" y="3" rx="1" />
      <rect class="rect-3" width="7" height="9" x="14" y="12" rx="1" />
      <rect class="rect-4" width="7" height="5" x="3" y="16" rx="1" />
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
.rect-1, .rect-2, .rect-3, .rect-4 {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.animated-icon-wrapper.is-hovering .rect-1 {
  transform: translateX(10px);
}
.animated-icon-wrapper.is-hovering .rect-2 {
  transform: translate(-1px, 12px);
}
.animated-icon-wrapper.is-hovering .rect-3 {
  transform: translateX(-10px);
}
.animated-icon-wrapper.is-hovering .rect-4 {
  transform: translate(1px, -12px);
}

@media (prefers-reduced-motion: reduce) {
  .animated-icon-wrapper.is-hovering .rect-1,
  .animated-icon-wrapper.is-hovering .rect-2,
  .animated-icon-wrapper.is-hovering .rect-3,
  .animated-icon-wrapper.is-hovering .rect-4 {
    transform: none;
  }
}
</style>
