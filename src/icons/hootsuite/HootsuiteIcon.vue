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
      <path d="M11.417 11.14c.505.75.28 1.572-.38 2.017-.66.444-1.505.343-2.01-.407-.506-.75-.282-1.572.378-2.017.66-.444 1.506-.343 2.012.407zm5.017-.274c-.66.444-.884 1.266-.379 2.016.506.75 1.352.852 2.012.407.66-.444.884-1.266.379-2.016-.506-.75-1.352-.852-2.012-.407zm7.422-7.086L19.03 6.638l.236.272c2.224 2.613 3.591 6.409 4.247 8.606a4.362 4.362 0 0 1-.638 3.8C21.449 21.295 18.398 24 12.369 24c-6.58 0-10-3.25-11.644-5.251a3.117 3.117 0 0 1-.51-3.067c.909-2.444 2.766-7.126 4.257-8.825a13.158 13.158 0 0 1 2.897-2.478L2.4.534c-.27-.208-.034-.632.285-.513l8.077 3.006c.38-.066.758-.1 1.13-.1 1.407 0 2.737.307 4.074 1.084l7.744-.695c.266-.024.378.331.147.464zm-8.218 13.656a4.126 4.126 0 0 1-3.316-.232c-.073-.037-.143.055-.087.115.457.49 1.273 1.35 1.766 1.775.102.088.259.077.35-.023l1.369-1.512c.053-.059-.008-.15-.082-.123zm.24-1.156-1.796-2.018a.34.34 0 0 0-.513.008l-1.44 1.716a.18.18 0 0 0 .031.262c.333.239 1.148.76 1.942.76.734 0 1.402-.285 1.724-.447a.18.18 0 0 0 .052-.281zm1.616-8.409c-.3-.034-.603.035-.862.188l-1.808 1.07c-.45.268-1.02.231-1.432-.091L11.819 7.82a4.669 4.669 0 0 0-1.776-.858c-2.698-.638-4.532.78-5.914 3.44-1.32 2.539-.583 6.184 2.672 7.05 3.438.914 5.71-2.903 6.618-4.175a.439.439 0 0 1 .712-.002c1.408 1.916 3.306 3.968 5.34 3.557 2.656-.535 2.342-3.905 1.512-5.7-.735-1.588-1.83-3.074-3.49-3.262z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hootsuite
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hootsuite (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hootsuite {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hootsuite {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hootsuite 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hootsuite 3s ease-in-out infinite alternate;
}
</style>