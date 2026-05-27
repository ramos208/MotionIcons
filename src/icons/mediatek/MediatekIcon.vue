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
      <path d="M3.863 8.996c-.296 0-.664.21-.815.467L.064 14.537c-.15.257-.029.467.267.467h19.805c.297 0 .665-.21.816-.467l2.983-5.074c.15-.257.03-.467-.268-.467zm3.41 1.975h1.09l-.232.402h-.776c-.238 0-.312.093-.312.338v.807h1.37l-.233.402H6.502v-1.197c0-.589.307-.752.771-.752zm1.444 0h.937c.703 0 1.002.27 1.002.959 0 .73-.301.99-.976.99h-.963zm7.832 0h1.09l-.233.402h-.775c-.239 0-.313.093-.313.338-.004.264-.002.539-.002.807h1.372l-.233.402h-1.678v-1.197c0-.589.308-.752.772-.752zm-11.567.004v.986l.569-.984.65-.002v1.941h-.547v-1.191l-.672 1.191h-.546v-1.191l-.688 1.19h-.535l1.121-1.938zm5.98 0h.546v1.941h-.545zm1.798 0h.781v1.941h-.553v-1.383l-.797 1.383h-.552zm1.256 0h1.714l-.232.404h-.504v1.537h-.533v-1.537h-.68zm3.873 0h.547v1.941h-.547zm1.345 0h.545l-.558.968-.002.004h.002l.558.969h-.545l-.56-.97zm-9.994.398v1.145h.297c.432 0 .567-.104.567-.586 0-.483-.135-.559-.567-.559zm-1.847.416h.87l-.185.318h-.86zm9.255 0h.872l-.186.318h-.86Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mediatek
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mediatek (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mediatek {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mediatek {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mediatek 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mediatek 3s ease-in-out infinite alternate;
}
</style>