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
      <path d="M23.613 3.494h-.087C19.268 4.91 13.69 4.91 12.14 4.885l-1.434-.025C6.476 4.705 4.318 3.082.538 1.394c-.261-.116-.565.077-.536.348.029.927.275 4.818 3.186 5.836.102.04.218.077.32.103.144.026.202.142.231.22l.246.76c.044.18.174.334.32.334h.245c.217 0 .391.155.406.348v.735c0 .077-.073.141-.16.141H2.928c-.174 0-.319.13-.319.284v1.147c0 .154.145.283.32.283h1.867c.087 0 .16.064.16.142v.31c0 .076-.073.141-.16.141H2.928c-.174.012-.305.128-.305.283v1.148c0 .129.116.27.247.27h1.94c.088 0 .16.065.16.142v7.537c0 .387.362.709.797.709h1.318c.434 0 .797-.322.797-.71V14.37c0-.077.072-.142.16-.142l8.14-.013c.087 0 .16.065.16.142v7.576c0 .386.362.709.797.709h1.318c.434 0 .796-.323.796-.71v-7.588c0-.077.073-.141.16-.141 0 0 2.028-.013 2.057-.026a.29.29 0 0 0 .144-.245v-1.135c0-.155-.144-.283-.333-.283h-2.013V12.5h-.015v-.425c0-.078.073-.142.16-.142h1.868c.174 0 .319-.129.319-.283v-1.147c0-.155-.145-.284-.32-.284h-1.867c-.087 0-.16-.064-.16-.14v-.736c0-.18.174-.348.406-.348h.246c.174 0 .275-.167.319-.335l.246-.76c.03-.103.13-.193.246-.232 1.869-.412 2.637-1.636 3.274-3.556V4.1c.072-.49-.26-.58-.377-.605zM16.37 8.97v1.12c0 .155-.102.271-.232.271h-2.607c-.13 0-.232-.116-.232-.27v-1.12c0-.143.1-.272.232-.272h2.607a.28.28 0 0 1 .232.27zm-5.375 0v1.12c0 .142-.102.271-.232.271H8.157c-.13 0-.232-.116-.232-.27v-1.12c0-.143.101-.272.232-.272h2.607a.28.28 0 0 1 .232.27z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: jinja
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for jinja (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-jinja {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-jinja {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-jinja 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-jinja 3s ease-in-out infinite alternate;
}
</style>