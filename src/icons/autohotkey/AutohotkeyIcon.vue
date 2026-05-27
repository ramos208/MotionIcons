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
      <path d="M20.514.508V.51H1.803C1.053.51.079 1.135 0 2.27v17.133h.002v2.325c.08 1.136 1.05 1.763 1.8 1.763h1.505l.002-.002h18.869c1.256-.053 1.766-1.066 1.822-1.699v-3.023h-.002V2.209c-.056-.633-.567-1.648-1.824-1.701h-1.66zM3.412 1.623h17.154c.898 0 1.618.72 1.618 1.617v16.64c0 .898-.72 1.62-1.618 1.62H3.412a1.616 1.616 0 01-1.619-1.62V3.24c0-.897.722-1.617 1.62-1.617zm3.315 12.412l-1.895 5.037h.703l.526-1.467h2.02l.497 1.467h.744l-1.824-5.037h-.771zm8.43.008v5.037h.679v-1.767l.793-.758 1.76 2.525h.884l-2.154-3.002 2.098-2.035h-.94l-2.441 2.441v-2.441h-.68zm-5.153.027v5.037h.682v-2.351h2.628v2.351h.682V14.07h-.682v2.084h-2.628V14.07h-.682zm-2.926.717h.014l.742 2.217H6.271l.807-2.217z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: autohotkey
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for autohotkey (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-autohotkey {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-autohotkey {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-autohotkey 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-autohotkey 3s ease-in-out infinite alternate;
}
</style>