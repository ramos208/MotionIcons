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
      <path d="M5.36.037C2.41.037 0 2.447 0 5.397v13.207c0 2.95 2.41 5.36 5.36 5.36h13.28c2.945 0 5.36-2.41 5.36-5.36V5.396c0-2.95-2.415-5.36-5.36-5.36zm6.585 4.285a7.72 7.72 0 017.717 7.544l.005 7.896h-3.39v-1.326a7.68 7.68 0 01-4.327 1.326 7.777 7.777 0 01-2.384-.378v-4.63a3.647 3.647 0 002.416.91 3.666 3.666 0 003.599-2.97h-1.284a2.416 2.416 0 01-4.73-.66v-.031c0-1.095.728-2.023 1.728-2.316V8.403a3.67 3.67 0 00-2.975 3.6v6.852a7.72 7.72 0 013.625-14.533zm.031 1.87V7.43h.006a4.575 4.575 0 014.573 4.574v.01h1.237v-.01a5.81 5.81 0 00-5.81-5.81zm0 2.149v1.246h.006a2.413 2.413 0 012.415 2.416v.01h1.247v-.01a3.662 3.662 0 00-3.662-3.662zm0 2.252c-.78 0-1.409.629-1.409 1.41 0 .78.629 1.409 1.41 1.409.78 0 1.409-.629 1.409-1.41 0-.78-.629-1.409-1.41-1.409z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: podcastaddict
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for podcastaddict (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-podcastaddict {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-podcastaddict {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-podcastaddict 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-podcastaddict 3s ease-in-out infinite alternate;
}
</style>