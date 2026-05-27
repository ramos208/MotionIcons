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
      <path d="M7 6C7 7.65685 8.34315 9 10 9C11.6569 9 13 7.65685 13 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.1117 3H8.88824C6.2172 3 4.88168 3 4.01968 3.82064C3.15769 4.64128 3.08361 5.98325 2.93545 8.66719L2.60424 14.6672C2.44025 17.6379 2.35826 19.1233 3.2403 20.0616C4.12235 21 5.60058 21 8.55703 21H11.443C14.3994 21 15.8777 21 16.7597 20.0616C17.6417 19.1233 17.5597 17.6379 17.3957 14.6672L17.0645 8.66717C16.9163 5.98324 16.8423 4.64127 15.9803 3.82064C15.1183 3 13.7828 3 11.1117 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.8882 3H15.1117C17.7827 3 19.1182 3 19.9802 3.82064C20.8422 4.64127 20.9163 5.98324 21.0645 8.66717L21.3957 14.6672C21.5597 17.6379 21.6417 19.1233 20.7597 20.0616C19.8776 21 18.3994 21 15.4429 21H12.557" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: shopping-bag03
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for shopping-bag03 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-shopping-bag03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-shopping-bag03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-shopping-bag03 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-shopping-bag03 3s ease-in-out infinite alternate;
}
</style>