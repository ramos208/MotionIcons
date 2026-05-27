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
      <path d="M12.254 0L1.795 6.038l-.254-.152-.008.008v.652l.576-.33-.254-.144L12.313.034zm1.677.965L3.472 7.004l-.212-.128-1.727 1v.601l2.252-1.296-.211-.118 10.458-6.038zm1.677.966L5.148 7.969l-.169-.102-3.446 1.99v.56l3.93-2.27-.17-.093 10.45-6.039zm1.668.957l-6.512 3.777-.33-.186L8.57 7.554v.381L6.826 8.943l-.127-.076-5.166 2.972v.517l5.606-3.244-.127-.076 1.558-.898v.398l1.152.66L8.51 9.9l-.085-.051-6.885 3.98v.458l7.283-4.2-.084-.052 1.21-.703 1.178.686-2.55 1.465v.271L1.542 15.82v.407L8.58 12.16v.313l1.092.627-8.13 4.7v.178l.161.093 8.282-4.776 1.127.652-2.532 1.448v.33l-5.471 3.16.27.151 5.2-3.006v.381l3.414-1.973 1.024.593-1.008.584v.102l-7.19 4.15.23.126L12 15.98v.102l1.414-.813 1.118.643-1.82 1.059.16.093-.864.5v.144l-5.47 3.159.186.11 5.284-3.049v.144l1.305-.754.254.153 1.82-1.05v-.305l7.08-4.082v-.517l-7.071 4.09v-.186l-1.118-.643 8.19-4.726v-.457l-8.58 4.954-1.024-.593 2.532-1.473v-.34l7.071-4.072v-.407l-7.071 4.082v-.254l-1.143-.66 8.214-4.743-.008-.203-.153-.085-8.375 4.827-1.084-.618 2.54-1.474v-.372l5.505-3.176-.271-.152-5.242 3.023v-.313L11.975 9.51l-1.178-.686 8.376-4.835-.229-.127-8.358 4.835-1.144-.66 1.855-1.076-.347-.203 6.512-3.76zM11.983 10.5l1.084.627-1.211.703-1.33.762-1.084-.618zm1.389.813l1.152.66-2.558 1.466-1.135-.652L12 12.11zm9.087 2.134L12 19.486v.195l-3.743 2.16.135.084L12 19.842v.195l10.459-6.03zm0 1.931L12 21.417v.246L9.968 22.84l.101.05L12 21.782v.237l10.459-6.03zm0 1.94L12 23.347v.296l-.313.187.059.025.254-.144V24l10.459-6.03Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: paritysubstrate
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for paritysubstrate (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-paritysubstrate {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-paritysubstrate {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-paritysubstrate 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-paritysubstrate 3s ease-in-out infinite alternate;
}
</style>