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
      <path d="M8 0c-.6312 0-1.1429.5117-1.1429 1.1429v13.8583c-1.9716.5075-3.4285 2.2973-3.4285 4.4274C3.4286 21.9533 5.4753 24 8 24c2.5247 0 4.5714-2.0467 4.5714-4.5714 0-2.1301-1.4569-3.92-3.4285-4.4274v-4.7155h4.7346c.541 0 .9796-.5117.9796-1.1428 0-.6312-.4386-1.1429-.9796-1.1429H9.143V2.2857h10.2857c.6312 0 1.1428-.5117 1.1428-1.1428C20.5714.5117 20.0598 0 19.4286 0Zm0 17.1429c1.2624 0 2.2857 1.0233 2.2857 2.2857 0 1.2623-1.0233 2.2857-2.2857 2.2857-1.2624 0-2.2857-1.0234-2.2857-2.2857 0-1.2624 1.0233-2.2857 2.2857-2.2857z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: electronfiddle
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for electronfiddle (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-electronfiddle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-electronfiddle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-electronfiddle 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-electronfiddle 3s ease-in-out infinite alternate;
}
</style>