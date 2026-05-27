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
      <path d="M8.348 1.146c-1.917 0-2.807.326-3.84 2.116L.717 9.852S0 10.779 0 11.998c0 1.22.717 2.156.717 2.156l3.803 6.584c1.033 1.79 1.92 2.116 3.837 2.116h7.286c1.917 0 2.804-.326 3.837-2.116l3.803-6.584s.717-.937.717-2.156-.717-2.146-.717-2.146l-3.79-6.59c-1.034-1.79-1.924-2.116-3.84-2.116Zm.02 2.788.134.003h7c.74-.02 1.174.048 1.605.795l1.116 1.932c.223.386.031.502-.147.502H8.97c-.282 0-.4.079-.4.338v3.102c0 .258.118.337.4.337h11.379c.176 0 .757.145.756 1.016a1.27 1.27 0 0 1-.206.75l-.634 1.1c-.145.22-.28.384-.604.384H8.97v.002c-.282 0-.4.081-.4.34v5.137c0 .197-.122.394-.464.394-.76 0-1.128-.63-1.166-.695l-2.908-5.035-.66-1.147c-.657-1.137-.654-1.216 0-2.35l2.41-4.175 1.115-1.932c.405-.7.811-.805 1.471-.798"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: floorp
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for floorp (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-floorp {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-floorp {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-floorp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-floorp 3s ease-in-out infinite alternate;
}
</style>