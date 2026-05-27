<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-mechanical']"
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
      <path d="M2.28 20.494 0 18.865c.67-.938 1.36-1.66 2.088-2.171.805-.568 1.667-.869 2.555-.869.824 0 1.539.198 2.178.582.261.16.504.344.734.549.16.14.281.255.53.504.383.384.537.524.728.633.205.127.422.185.735.185s.53-.058.734-.185c.192-.109.351-.25.734-.633.25-.249.37-.364.537-.51a4.69 4.69 0 0 1 .728-.543c.639-.384 1.348-.582 2.171-.582.824 0 1.533.198 2.172.582.255.153.491.332.728.542.166.147.287.262.536.511.383.384.543.524.735.633.204.127.421.185.734.185.281 0 .588-.109.945-.358.44-.306.92-.81 1.418-1.507L24 18.042c-.67.938-1.36 1.666-2.088 2.17-.805.57-1.667.87-2.555.87-.824 0-1.539-.199-2.178-.582a5.072 5.072 0 0 1-.734-.543c-.166-.146-.281-.261-.537-.51v-.007c-.376-.377-.536-.517-.728-.626-.204-.127-.415-.185-.728-.185s-.523.058-.728.185c-.191.109-.35.25-.728.626v.007c-.255.249-.37.364-.536.51-.243.211-.48.39-.735.543-.638.383-1.354.581-2.177.581-.824 0-1.54-.198-2.178-.58a5.593 5.593 0 0 1-.735-.544 11.126 11.126 0 0 1-.53-.51c-.383-.384-.536-.524-.728-.633-.204-.127-.421-.185-.734-.185-.281 0-.588.109-.945.358-.44.313-.92.81-1.418 1.507zM3.417 2.919h2.33c.965 0 1.75.779 1.75 1.75v6.795h4.554v2.452H6.795c-.964 0-1.75-.786-1.75-1.75V5.371H3.417Zm17.818 1.75v1.82h-2.453V5.37h-1.928v8.545H14.4V5.37h-1.928v1.118H10.02v-1.82c0-.971.786-1.75 1.75-1.75h7.708c.971 0 1.757.779 1.757 1.75zm0 0"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: languagetool
// Category: mechanical
// Physics Presets: Dynamic kinetic adaptation for languagetool (simpleicons). Selected semantic motion: mechanical with custom idle (ambient-floating) and interaction profile (gear-rotate) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-languagetool {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(90deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-languagetool {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-languagetool 0.45s cubic-bezier(0.76, 0, 0.24, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-languagetool 3s ease-in-out infinite alternate;
}
</style>