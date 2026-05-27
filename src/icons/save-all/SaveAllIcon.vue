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
      <path d="M16.8787 2H12C9.17157 2 7.75736 2 6.87868 2.87868C6 3.75736 6 5.17157 6 8V12C6 14.8284 6 16.2426 6.87868 17.1213C7.75736 18 9.17157 18 12 18H16C18.8284 18 20.2426 18 21.1213 17.1213C22 16.2426 22 14.8284 22 12V7.12132C22 6.25606 22 5.82342 21.8851 5.42026C21.822 5.19879 21.7335 4.98533 21.6216 4.78409C21.4178 4.41775 21.1118 4.11183 20.5 3.5C19.8882 2.88817 19.5822 2.58225 19.2159 2.37843C19.0147 2.26647 18.8012 2.17805 18.5797 2.11492C18.1766 2 17.7439 2 16.8787 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 6V12.0002C2 16.7143 2 19.0713 3.46447 20.5357C4.92893 22.0002 7.28597 22.0002 12 22.0002L18 22.0002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 2C10 3.88562 10 4.82843 10.5858 5.41421C11.1716 6 12.1144 6 14 6C15.8856 6 16.8284 6 17.4142 5.41421C18 4.82843 18 3.88562 18 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 18V15C18 13.1144 18 12.1716 17.4142 11.5858C16.8284 11 15.8856 11 14 11C12.1144 11 11.1716 11 10.5858 11.5858C10 12.1716 10 13.1144 10 15V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: save-all
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for save-all (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-save-all {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-save-all {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-save-all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-save-all 3s ease-in-out infinite alternate;
}
</style>