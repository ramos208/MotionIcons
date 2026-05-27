<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-radar']"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      :stroke-width="strokeWidth" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      class="icon-geometry anim-ambient-floating"
    >
      <path d="M11.877.032 1.252 5.885a.253.253 0 0 0 .003.446l5.679 3.02c.077.041.17.04.246-.004l4.694-2.697a.254.254 0 0 1 .253 0l4.692 2.697a.253.253 0 0 0 .246.004l5.682-3.021a.253.253 0 0 0 .003-.446L12.122.031a.254.254 0 0 0-.245 0ZM6.924 10.898l-5.71-3.036a.254.254 0 0 0-.373.224V18.25c0 .093.05.178.131.222l9.976 5.495a.254.254 0 0 0 .376-.222v-6.053a.255.255 0 0 0-.127-.22l-4.012-2.305a.252.252 0 0 1-.127-.22v-3.825a.253.253 0 0 0-.135-.224Zm10.152 0 5.71-3.035a.254.254 0 0 1 .373.224v10.164c0 .093-.05.178-.131.222l-9.976 5.495a.254.254 0 0 1-.376-.222v-6.053c0-.091.049-.175.127-.22l4.012-2.305a.252.252 0 0 0 .127-.22v-3.825c0-.094.052-.18.135-.224Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: builtbybit
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for builtbybit (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

defineProps({
  size: { type: Number, default: 24 },
  strokeWidth: { type: Number, default: 2 }
});
</script>

<style scoped>
.ai-motion-icon-wrapper {
  position: relative;
  display: inline-flex;
  cursor: pointer;
}

.anim-ambient-floating {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-builtbybit {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-builtbybit {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-builtbybit 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-builtbybit 3s ease-in-out infinite alternate;
}
</style>