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
      <path d="M.084 10.059a.084.084 0 0 0-.084.084v3.574c0 .046.038.084.084.084h.912a.083.083 0 0 0 .082-.084v-3.574a.083.083 0 0 0-.082-.084zm1.775 0c-.062 0-.105.058-.076.11l1.895 3.257.011.02c.195.306.577.495 1.002.494.426-.001.807-.196.997-.508L7.75 10.17c.028-.046-.007-.111-.076-.111H6.658a.086.086 0 0 0-.074.039l-1.857 2.925c-.017.028-.064.023-.079.006L2.936 10.1a.085.085 0 0 0-.077-.04zm7.598 0c-.73-.001-1.324.488-1.324 1.091v1.557c0 .603.594 1.094 1.324 1.094h3.049a.082.082 0 0 0 .082-.084v-.733a.082.082 0 0 0-.082-.084H9.234c-.017 0-.03-.015-.03-.033V10.99c0-.017.013-.033.03-.033h3.272a.08.08 0 0 0 .082-.082v-.732a.082.082 0 0 0-.082-.084zm5.443 0c-.73-.001-1.324.488-1.324 1.091v1.557c0 .603.594 1.094 1.324 1.094h3.05a.084.084 0 0 0 .083-.084v-.733a.084.084 0 0 0-.084-.084h-3.271c-.018 0-.032-.015-.032-.033V10.99c0-.017.014-.033.032-.033h3.271a.082.082 0 0 0 .084-.082v-.732a.084.084 0 0 0-.084-.084zm5.334 0c-.73 0-1.324.49-1.324 1.093v1.555c0 .603.594 1.094 1.324 1.094h2.442c.73 0 1.324-.49 1.324-1.094v-1.555c0-.603-.594-1.093-1.324-1.093zm-.226.898h2.879c.015 0 .027.012.027.027v1.889a.027.027 0 0 1-.027.027h-2.88a.027.027 0 0 1-.027-.027v-1.889c0-.015.013-.027.028-.027zm-10.215.56a.05.05 0 0 0-.049.051v.73c0 .028.022.052.049.052h2.72a.05.05 0 0 0 .05-.051v-.73a.05.05 0 0 0-.05-.051z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: iveco
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for iveco (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-iveco {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-iveco {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-iveco 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-iveco 3s ease-in-out infinite alternate;
}
</style>