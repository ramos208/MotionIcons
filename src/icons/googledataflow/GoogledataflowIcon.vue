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
      <path d="M5.856 9.6 3.72 9.564l.036-2.46 6.312-3.516L5.94 1.14 8.028 0l4.092 2.436h.012L16.284.108h.06l1.992 1.188-4.188 2.352 6.168 3.684v2.46l-2.124-.036.012-1.284L13.116 5.4l-.024 2.076-1.224-.012v-.0022l-.84-.0098.024-2.076-5.172 2.94L5.856 9.6zm12.252 6.072-5.16 2.94.024-2.064-2.064-.024-.024 2.064-5.1-3.072.012-1.248H3.684v2.4l6.168 3.684 2.0111 1.1971.005.0149L15.972 24h.06l2.028-1.14-4.128-2.448-.02.0111.008-.0231 6.324-3.516.036-2.508-2.148-.024-.024 1.32zM5.664 22.704l1.992 1.188h.06l4.152-2.328-2.016-1.212-4.188 2.352zm13.68-12.024c-.7555 0-1.368.6125-1.368 1.368 0 .7555.6125 1.368 1.368 1.368.7556 0 1.368-.6125 1.368-1.368 0-.7555-.6124-1.368-1.368-1.368zM4.656 13.224c.7555 0 1.368-.6125 1.368-1.368 0-.7556-.6125-1.368-1.368-1.368-.7556 0-1.368.6124-1.368 1.368 0 .7555.6124 1.368 1.368 1.368zm7.416-5.004c-.7555 0-1.368.6125-1.368 1.368 0 .7556.6125 1.368 1.368 1.368s1.368-.6124 1.368-1.368c0-.7555-.6125-1.368-1.368-1.368zm-.108 4.812c-.7555 0-1.368.6125-1.368 1.368s.6125 1.368 1.368 1.368c.7555 0 1.368-.6125 1.368-1.368s-.6125-1.368-1.368-1.368z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: googledataflow
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for googledataflow (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-googledataflow {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-googledataflow {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-googledataflow 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-googledataflow 3s ease-in-out infinite alternate;
}
</style>