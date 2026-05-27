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
      <path d="M10.7554 13.485V19.9954C10.7554 20.8264 10.083 21.5 9.25361 21.5C8.42421 21.5 7.75184 20.8264 7.75184 19.9954V9.96807M10.7554 16.4892L11.8098 16.4624C12.8942 16.4347 13.7589 15.5461 13.7589 14.4593V13.4552M13.4777 15.4844L14.8133 15.4297C15.8977 15.4021 16.7625 14.5134 16.7625 13.4266V12.4226M16.4767 14.4593L18.0171 14.27C19.0164 14.135 19.7591 13.2759 19.7497 12.2657L19.7017 7.06579C19.7017 4.88227 17.5886 2.5 15.3226 2.5H10.4418C9.24956 2.5 7.8322 3.28085 6.60739 5.34841L4.99251 7.78577C4.41226 8.54219 3.58594 9.90362 5.1584 11.7712L7.75184 14.531" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hand-pointing-down04
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hand-pointing-down04 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hand-pointing-down04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, 6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, 4px) skew(0deg); }
}

@keyframes motion-ai-idle-hand-pointing-down04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hand-pointing-down04 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hand-pointing-down04 3s ease-in-out infinite alternate;
}
</style>