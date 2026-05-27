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
      <path d="M18.0685 0H5.9318C2.6579 0 0 2.6578 0 5.9316v12.1367C0 21.3421 2.658 24 5.9318 24h12.1367C21.3423 24 24 21.3421 24 18.0683V5.9316C24 2.6578 21.3423 0 18.0685 0zM10.708 15.4038H8.8102c-.0018.0045-.0031.009-.005.0135L7.1986 19.282a.5058.5058 0 11-.934-.3883l1.4507-3.49H4.8677a.5058.5058 0 110-1.0113h5.8403a.5058.5058 0 110 1.0113zm7.9189 4.1647a.5058.5058 0 01-.6545-.2886L12.6206 6.2306l-2.395 5.761h1.551a.5058.5058 0 110 1.0113H5.9369a.5058.5058 0 110-1.0113h3.194c.0015-.0038.0026-.0075.0042-.0112l3.0223-7.2693a.5058.5058 0 01.457-.3112.5058.5058 0 01.4774.3137L18.908 18.896a.5058.5058 0 01-.2812.6725z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: asciidoctor
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for asciidoctor (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-asciidoctor {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-asciidoctor {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-asciidoctor 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-asciidoctor 3s ease-in-out infinite alternate;
}
</style>