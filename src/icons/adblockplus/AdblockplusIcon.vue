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
      <path d="M7.027 0L0 7.027v9.941L7.027 24h9.941L24 16.968v-9.94L16.973 0zm.202.48h9.542l6.749 6.749v9.542l-6.749 6.749H7.23L.48 16.771V7.23zm.557 1.344L1.824 7.786v8.428l5.962 5.962h8.428l5.962-5.962V7.786l-5.962-5.962zM4.396 7.68H6.38l2.285 8.41H6.917l-.447-2.002H4.238l-.446 1.997h-1.68zm5.3 0h2.491c.355-.005.71.029 1.061.096.302.058.595.173.85.34.24.164.436.385.57.644.14.269.207.605.207 1.008 0 .192-.024.384-.072.566-.048.188-.12.365-.216.528-.1.168-.23.317-.379.437-.163.13-.35.226-.547.283v.053c.523.11.917.327 1.18.643.265.317.399.759.399 1.33 0 .432-.072.802-.216 1.109-.14.302-.346.561-.605.768-.269.206-.576.36-.902.451-.36.1-.735.154-1.109.149H9.696zm6.667 0h2.669c.374-.005.749.043 1.114.134.33.082.643.236.907.452.269.225.48.513.61.84.148.345.225.772.225 1.281 0 .49-.077.917-.23 1.277-.14.34-.35.643-.624.888a2.553 2.553 0 0 1-.908.518 3.551 3.551 0 0 1-1.099.168H18.01v2.852h-1.647zM5.328 9.125c-.091.446-.182.907-.274 1.373-.09.465-.192.912-.297 1.334l-.178.773h1.555l-.168-.773a31.5 31.5 0 0 1-.302-1.34 55.623 55.623 0 0 0-.293-1.367zm6.005.029v1.92h.773c.403 0 .696-.092.878-.279.182-.187.274-.437.274-.753 0-.317-.092-.548-.279-.682-.187-.134-.475-.206-.864-.206zm6.681.038v2.54h.917c.898 0 1.344-.447 1.344-1.34 0-.437-.115-.749-.34-.931-.226-.183-.562-.269-1.004-.269zm-6.681 3.22v2.204h.931c.902 0 1.354-.384 1.354-1.147 0-.37-.11-.639-.336-.807-.226-.168-.562-.25-1.018-.25z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: adblockplus
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for adblockplus (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-adblockplus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-adblockplus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-adblockplus 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-adblockplus 3s ease-in-out infinite alternate;
}
</style>