<template>
  <div 
    class="animated-provider-wrapper"
    :class="[
      `anim-${animation}`,
      { 'is-hovering': isHovering, 'has-glow': glow },
      color ? `text-[${color}]` : 'text-current'
    ]"
    :style="{ width: `${size}px`, height: `${size}px`, color: color }"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <component 
      :is="icon" 
      :size="size" 
      :class="['provider-svg', `library-${library}`]" 
      :stroke-width="strokeWidth"
      aria-hidden="true" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  icon: { type: [Object, Function], required: true },
  library: { type: String, default: 'lucide' }, // 'lucide' | 'hero' | 'iconoir'
  animation: { type: String, default: 'pulse' }, // 'pulse' | 'bounce' | 'spin' | 'shake' | 'jiggle' | 'flip'
  size: { type: Number, default: 24 },
  color: { type: String, default: '' },
  strokeWidth: { type: Number, default: 2 },
  glow: { type: Boolean, default: false }
});

const isHovering = ref(false);
</script>

<style scoped>
.animated-provider-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: filter 0.3s ease;
}

.animated-provider-wrapper.has-glow {
  filter: drop-shadow(0 0 8px currentColor);
}

.provider-svg {
  width: 100%;
  height: 100%;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Animations */
.anim-pulse.is-hovering .provider-svg {
  animation: provider-pulse 0.6s ease-in-out infinite alternate;
}
.anim-bounce.is-hovering .provider-svg {
  animation: provider-bounce 0.5s cubic-bezier(0.28, 0.84, 0.42, 1) infinite alternate;
}
.anim-spin.is-hovering .provider-svg {
  animation: provider-spin 1.5s linear infinite;
}
.anim-shake.is-hovering .provider-svg {
  animation: provider-shake 0.4s ease-in-out infinite;
}
.anim-jiggle.is-hovering .provider-svg {
  animation: provider-jiggle 0.4s ease-in-out infinite;
}
.anim-flip.is-hovering .provider-svg {
  animation: provider-flip 1s ease-in-out infinite alternate;
}

/* NEW MOTIONS */
.anim-float.is-hovering .provider-svg {
  animation: provider-float 2s ease-in-out infinite alternate;
}
.anim-heartbeat.is-hovering .provider-svg {
  animation: provider-heartbeat 1.2s ease-in-out infinite;
}
.anim-swing.is-hovering .provider-svg {
  transform-origin: top center;
  animation: provider-swing 1.5s ease-in-out infinite alternate;
}
.anim-wobble.is-hovering .provider-svg {
  animation: provider-wobble 0.8s ease-in-out infinite;
}
.anim-tada.is-hovering .provider-svg {
  animation: provider-tada 1s ease-in-out infinite;
}
.anim-zoom-in.is-hovering .provider-svg {
  transform: scale(1.2);
}
.anim-zoom-out.is-hovering .provider-svg {
  transform: scale(0.8);
}
.anim-rubber-band.is-hovering .provider-svg {
  animation: provider-rubber-band 1s ease-in-out infinite;
}
.anim-spin-pulse.is-hovering .provider-svg {
  animation: provider-spin 1.5s linear infinite, provider-pulse 0.6s ease-in-out infinite alternate;
}
.anim-glitch.is-hovering .provider-svg {
  animation: provider-glitch 0.3s linear infinite;
}

/* KEYFRAMES */
@keyframes provider-pulse {
  0% { transform: scale(1); }
  100% { transform: scale(1.15); }
}
@keyframes provider-bounce {
  0% { transform: translateY(0); }
  100% { transform: translateY(-5px); }
}
@keyframes provider-spin {
  100% { transform: rotate(360deg); }
}
@keyframes provider-shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-3px) rotate(-3deg); }
  75% { transform: translateX(3px) rotate(3deg); }
}
@keyframes provider-jiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
}
@keyframes provider-flip {
  0% { transform: perspective(400px) rotateY(0); }
  100% { transform: perspective(400px) rotateY(180deg); }
}
@keyframes provider-float {
  0% { transform: translateY(0px); }
  100% { transform: translateY(-8px); }
}
@keyframes provider-heartbeat {
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.2); }
  28% { transform: scale(1); }
  42% { transform: scale(1.2); }
  70% { transform: scale(1); }
}
@keyframes provider-swing {
  0% { transform: rotate(15deg); }
  100% { transform: rotate(-15deg); }
}
@keyframes provider-wobble {
  0%, 100% { transform: translateX(0%) rotate(0deg); }
  15% { transform: translateX(-15%) rotate(-5deg); }
  30% { transform: translateX(10%) rotate(3deg); }
  45% { transform: translateX(-10%) rotate(-3deg); }
  60% { transform: translateX(5%) rotate(2deg); }
  75% { transform: translateX(-2%) rotate(-1deg); }
}
@keyframes provider-tada {
  0% { transform: scale(1); }
  10%, 20% { transform: scale(0.9) rotate(-3deg); }
  30%, 50%, 70%, 90% { transform: scale(1.2) rotate(3deg); }
  40%, 60%, 80% { transform: scale(1.2) rotate(-3deg); }
  100% { transform: scale(1); }
}
@keyframes provider-rubber-band {
  0%, 100% { transform: scale(1, 1); }
  30% { transform: scale(1.25, 0.75); }
  40% { transform: scale(0.75, 1.25); }
  50% { transform: scale(1.15, 0.85); }
  65% { transform: scale(0.95, 1.05); }
  75% { transform: scale(1.05, 0.95); }
}
@keyframes provider-glitch {
  0% { transform: translate(0, 0) skew(0deg); }
  20% { transform: translate(-2px, 1px) skew(-5deg); }
  40% { transform: translate(2px, -1px) skew(5deg); }
  60% { transform: translate(-1px, 2px) skew(-2deg); }
  80% { transform: translate(1px, -2px) skew(2deg); }
  100% { transform: translate(0, 0) skew(0deg); }
}

@media (prefers-reduced-motion: reduce) {
  .animated-provider-wrapper .provider-svg {
    animation: none !important;
  }
}
</style>
