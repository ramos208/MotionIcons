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
      <path d="M5.15 5.875c-.492 0-.936-.453-.936-.954 0-1.155 2.858-2.01 6.11-2.01.295 0 .492 0 .492-.25 0-.452-.985-.602-.985-1.355C9.831.502 10.767 0 11.95 0c1.183 0 2.12.502 2.12 1.306 0 .753-.986.853-.986 1.355 0 .151.148.251.492.251 3.252 0 6.16.803 6.16 2.009a.944.944 0 01-.937.953H5.151zm14.732 4.568c1.183.753 1.626 2.109 1.43 3.365l-1.38 7.58C19.636 22.897 18.354 24 16.826 24H7.17c-1.526 0-2.808-1.104-3.104-2.611l-1.38-7.581a3.307 3.307 0 011.48-3.315c.69-.501.836-1.355 0-1.656-1.184-.452-.938-1.908.245-1.908h7.193c1.133 0 2.514.853 2.514 3.615 0 2.762-1.282 2.51-1.282 4.468 0 .854.69 1.758 1.527 1.859 1.43.15 2.267-.402 2.267-2.41 0-2.06-1.182-3.013-1.182-4.72 0-2.059 1.28-2.863 2.118-2.863h2.07c1.182 0 1.43 1.457.246 1.909-.837.35-.69 1.205 0 1.656z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: iconjar
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for iconjar (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-iconjar {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-iconjar {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-iconjar 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-iconjar 3s ease-in-out infinite alternate;
}
</style>