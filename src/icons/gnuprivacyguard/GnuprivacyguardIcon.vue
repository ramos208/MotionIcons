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
      <path d="M2.968 11.583h1.274v-3.82A7.76 7.76 0 0 1 12.005 0a7.76 7.76 0 0 1 7.762 7.763v3.783c-.018.01-.037.028-.056.037l-.01.01-.008.009h-.01l-.01.01-.009.009H19.636l-.018.018h-.02l-.018.01h-.01l-.009.01-.009.009h-.01l-.009.009-.009.01-.01.009-.009.009-.028.019-.019.01-.028.018-.018.01-.02.009-.027.018-.019.01-.01.009-.027.019-.02.01-.046.027-.019.01-.018.009-.02.01h-.008l-.057.027h-.019c-.018.01-.037.02-.065.038h-.01l-.009.01-.028.018-.018.01-.029.018-.018.01h-.01l-.028.018-.018.01-.02.009c-.018.01-.046.019-.065.028l-.018.01-.02.009-.037.018-.037.02-.047.018-.047.019-.019.009-.037.019-.019.01c-1.545.739-4.017 1.516-8.708 1.853-3.362.244-5.403 1.723-6.724 3.502zm4.842 0h8.371v-3.82a4.184 4.184 0 0 0-4.186-4.186A4.184 4.184 0 0 0 7.81 7.763zm13.222 1.461V24H5.572c1.704-.946 2.968-.852 5.075-.787 2.865.094 6.03-1.105 7.585-2.696 1.554-1.592-.14-.375-1.901.074-1.76.45-5.17.497-7.454-.103 7.173.094 9.973-2.219 11.555-4.307 1.583-2.079-.683-.365-2.153.356-1.47.72-4.036 1.227-6.864.852 4.27-.01 7.52-2.144 9.607-4.345z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gnuprivacyguard
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for gnuprivacyguard (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-gnuprivacyguard {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-gnuprivacyguard {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gnuprivacyguard 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-gnuprivacyguard 3s ease-in-out infinite alternate;
}
</style>