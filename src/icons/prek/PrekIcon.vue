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
      <path d="M13.3 0c-.38.003-.84 1.468-1.288 1.467-.454 0-.908-1.483-1.313-1.433-.406.05-.569 1.61-.994 1.716S8.447.507 8.08.639c-.367.131-.252 1.735-.67 1.936-.42.202-1.396-.972-1.756-.745s-.01 1.734-.352 2.042-1.502-.466-1.778-.175.352 1.612.087 1.999c-.265.386-1.42-.026-1.63.339-.211.365.543 1.383.37 1.83-.172.448-1.315.493-1.43.902-.113.409.757 1.168.755 1.56.033.532-1.002.489-.53 2.496.286.808.37 4.53 5.974 7.159-.322 2.542-1.14 2.71-1.245 3.402.022.476.54.639.639.613.185-.007 2.513-.879 4.246-3.272 4.34.367 7.727-1.231 9.595-2.931 1.754-2.028 2.402-3.652 2.684-6.408.104-.627-.644-.659-.663-1.079s.817-1.127.702-1.52c-.09-.604-1.34-.407-1.43-1.017-.069-.47.539-1.428.4-1.705-.193-.383-1.49-.143-1.628-.405-.216-.407.331-1.632.046-1.939-.285-.306-1.528.367-1.715.151-.3-.347.052-1.774-.395-2.019-.48-.263-1.445.919-1.709.75-.386-.248-.348-1.845-.727-1.984-.38-.139-1.085 1.222-1.513 1.112-.429-.11-.707-1.685-1.09-1.73zm3.332 5.868c.2.007.442.143.459.312.033.327-.08.263-1.145 2.056s-4.042 6.553-4.463 7.34c-.458.856-1.048 1.604-1.798.807s-2.352-2.691-3.028-3.533c-.675-.842-.534-.76-.553-.814-.018-.054-.106-.256.129-.532.496-.582.917-.786 1.263-1.008.346-.223.422-.283.777.068s1.14 1.466 1.491 1.82.308.15 1.411-.952c1.104-1.101 2.696-3.048 3.799-4.165s1.168-1.415 1.658-1.399"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: prek
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for prek (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-prek {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-prek {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-prek 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-prek 3s ease-in-out infinite alternate;
}
</style>