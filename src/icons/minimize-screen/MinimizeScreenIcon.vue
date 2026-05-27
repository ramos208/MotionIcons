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
      <path d="M11.4333 16.0659L8.6912 15.9658C8.28365 15.951 7.96094 15.6163 7.96094 15.2084L7.96094 12.5936M13.4609 10.5659L8.41716 15.5843" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22 7C22 8.8856 22 9.8284 21.4142 10.4142C20.8284 11 19.8856 11 18 11H17C15.1144 11 14.1716 11 13.5858 10.4142C13 9.8284 13 8.8856 13 7L13 6C13 4.1144 13 3.1716 13.5858 2.5858C14.1716 2 15.1144 2 17 2L18 2C19.8856 2 20.8284 2 21.4142 2.5858C22 3.1716 22 4.1144 22 6V7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22 15.5V13.5M10 22H14M2 10L2 14M10.5 2L8.5 2M21.9401 18.5C21.7861 19.5656 21.4865 20.321 20.9037 20.9038C20.321 21.4865 19.5656 21.7861 18.5 21.9401M5.5 21.9401C4.4344 21.7861 3.679 21.4865 3.0963 20.9037C2.5135 20.321 2.2139 19.5656 2.0599 18.5M2.0599 5.5C2.2139 4.4344 2.5135 3.679 3.0963 3.0963C3.679 2.5135 4.4344 2.2139 5.5 2.0599" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: minimize-screen
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for minimize-screen (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-minimize-screen {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-minimize-screen {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-minimize-screen 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-minimize-screen 3s ease-in-out infinite alternate;
}
</style>