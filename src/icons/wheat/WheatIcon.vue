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
      <path d="M14.3498 9.65091L3 21M19.67 8.58588C17.5419 10.7138 14.3498 9.64986 14.3498 9.64986C14.3498 9.64986 13.2857 6.45793 15.4138 4.32997C16.8028 2.94105 18.6451 2.91196 19.7572 3.05928C20.3813 3.14194 20.8581 3.61868 20.9407 4.24275C21.088 5.35481 21.0589 7.19698 19.67 8.58588ZM15.7685 15.6803C12.931 15.6803 11.5123 12.843 11.5123 12.843C11.5123 12.843 12.931 10.0057 15.7685 10.0057C17.5878 10.0057 18.8238 11.1722 19.4766 12.0092C19.8638 12.5057 19.8638 13.1803 19.4766 13.6767C18.8238 14.5138 17.5878 15.6803 15.7685 15.6803ZM8.3202 8.23242C8.3202 11.0697 11.1576 12.4883 11.1576 12.4883C11.1576 12.4883 13.9951 11.0697 13.9951 8.23242C13.9951 6.41314 12.8285 5.17713 11.9913 4.52438C11.4949 4.13732 10.8204 4.13732 10.3239 4.52438C9.4868 5.17713 8.3202 6.41314 8.3202 8.23242ZM11.1576 20.2903C8.3202 20.2903 6.90148 17.4531 6.90148 17.4531C6.90148 17.4531 8.3202 14.6158 11.1576 14.6158C12.9769 14.6158 14.213 15.7822 14.8658 16.6193C15.253 17.1157 15.253 17.7904 14.8658 18.2868C14.213 19.1239 12.9769 20.2903 11.1576 20.2903ZM3.70936 12.8425C3.70936 15.6798 6.5468 17.0984 6.5468 17.0984C6.5468 17.0984 9.38424 15.6798 9.38424 12.8425C9.38424 11.0232 8.21763 9.78721 7.3805 9.13446C6.88408 8.74739 6.20952 8.74739 5.71311 9.13446C4.87597 9.7872 3.70936 11.0232 3.70936 12.8425Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: wheat
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for wheat (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-wheat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-wheat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-wheat 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-wheat 3s ease-in-out infinite alternate;
}
</style>