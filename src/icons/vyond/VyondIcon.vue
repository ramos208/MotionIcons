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
      <path d="M1.55 16.382 0 7.616h1.328l.928 6.18.932-6.18h1.328l-1.55 8.766H1.55zm5.486-7.61H6.022l1.166 3.776v2.68h.924v-2.68L9.28 8.772H8.262L7.65 11.35l-.614-2.58v.002zm5.12 1.92c0-.324-.128-.482-.372-.482s-.37.16-.37.482v2.616c0 .324.126.492.37.492s.372-.166.372-.492v-2.616zm-.344-1.256c.69 0 1.144.468 1.144 1.262v2.52c0 .872-.432 1.346-1.172 1.346s-1.162-.468-1.162-1.376v-2.52c0-.766.44-1.24 1.19-1.24m5.032-.656v4.2l-1.344-4.2h-.896v6.456h.924v-3.944l1.316 3.944h.936V8.772h-.936zm5.07 6.32c.508 0 .706-.322.706-.92v-4.22c0-.72-.336-1.044-1.08-1.044h-.31v6.184h.684zM19.89 7.616h1.924c1.504 0 2.186.784 2.186 2.408v3.912c0 1.678-.62 2.448-2.122 2.448H19.89V7.616z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: vyond
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for vyond (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-vyond {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-vyond {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-vyond 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-vyond 3s ease-in-out infinite alternate;
}
</style>