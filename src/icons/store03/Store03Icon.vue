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
      <path d="M3.00006 10.9871V15.4925C3.00006 18.3243 3.00006 19.7403 3.87874 20.62C4.75742 21.4998 6.17163 21.4998 9.00006 21.4998H15.0001C17.8285 21.4998 19.2427 21.4998 20.1214 20.62C21.0001 19.7403 21.0001 18.3243 21.0001 15.4925V10.9871" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.0001 16.9768C14.316 17.584 13.2269 17.9768 12.0001 17.9768C10.7733 17.9768 9.68415 17.584 9.00006 16.9768" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.7957 2.50294L6.14989 2.53202C4.41172 2.44248 3.96606 3.78259 3.96606 4.43768C3.96606 5.02359 3.89061 5.87774 2.8253 7.4831C1.75999 9.08846 1.84004 9.56536 2.44077 10.6767C2.93934 11.5991 4.20747 11.9594 4.86868 12.02C6.96889 12.0678 7.99072 10.2517 7.99072 8.97523C9.03257 12.1825 11.9956 12.1825 13.3159 11.8157C14.6386 11.4483 15.7718 10.1331 16.0391 8.97523C16.1951 10.4142 16.6682 11.2538 18.0663 11.8308C19.5145 12.4284 20.76 11.515 21.3848 10.9294C22.0097 10.3439 22.4107 9.04401 21.2968 7.6153C20.5286 6.63001 20.2085 5.7018 20.1033 4.73977C20.0424 4.18234 19.9888 3.58336 19.5972 3.20219C19.0248 2.64515 18.2036 2.47613 17.7957 2.50294Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: store03
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for store03 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-store03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-store03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-store03 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-store03 3s ease-in-out infinite alternate;
}
</style>