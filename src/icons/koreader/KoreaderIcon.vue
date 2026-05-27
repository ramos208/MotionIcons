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
      <path d="M7.8489 0v14.5581L6.1996 13.178 4.55 14.5581V.0258c-1.3637.1773-2.427 1.3509-2.427 2.7634v18.4216c0 1.3362.951 2.4601 2.2081 2.7279a7.9086 7.9086 0 0 1-.2363-1.92c0-4.3601 3.5401-7.9072 7.8918-7.9072 4.3516 0 7.8915 3.547 7.8915 7.9071a7.95 7.95 0 0 1-.0817 1.1292c.4864-.5029.788-1.186.788-1.937V2.7892c0-1.1618-.7192-2.1625-1.7332-2.5802L12.2039 7.323c.7334.8645 3.202 3.2692 6.3988 6.001.6706.5732 1.1863 1.0062 1.7217 1.234-1.1597.002-2.3696-.005-2.7622 0-2.2832.031-2.3345-.415-3.0694-1.0028-1.122-.8968-3.6824-3.4473-4.9377-4.6126-.4278-.3977-.6702-.8597-.6702-1.2922v-.352c0-.5752.2163-1.1301.6055-1.5534L14.7784 0zm10.5979 0c1.531 0 2.784 1.2553 2.784 2.7892v18.4216c0 1.534-1.253 2.7892-2.784 2.7892h.6461c1.531 0 2.784-1.2553 2.784-2.7892V2.7892C21.877 1.2552 20.624 0 19.093 0zm-6.4601 17.0838c-2.7159 0-4.9253 2.2137-4.9253 4.9348 0 .705.1508 1.3743.4177 1.9814h9.015a4.91 4.91 0 0 0 .4177-1.9814c0-2.721-2.2093-4.9348-4.9251-4.9348z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: koreader
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for koreader (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-koreader {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-koreader {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-koreader 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-koreader 3s ease-in-out infinite alternate;
}
</style>