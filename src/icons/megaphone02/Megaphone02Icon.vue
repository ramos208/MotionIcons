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
      <path d="M14.9263 4.41103L8.27352 7.60452C7.76151 7.85029 7.21443 7.91187 6.65675 7.78693C6.29177 7.70517 6.10926 7.66429 5.9623 7.64751C4.13743 7.43912 3 8.88342 3 10.5443V11.4557C3 13.1166 4.13743 14.5609 5.9623 14.3525C6.10926 14.3357 6.29178 14.2948 6.65675 14.2131C7.21443 14.0881 7.76151 14.1497 8.27352 14.3955L14.9263 17.589C16.4534 18.3221 17.217 18.6886 18.0684 18.4029C18.9197 18.1172 19.2119 17.5041 19.7964 16.278C21.4012 12.9112 21.4012 9.08885 19.7964 5.72196C19.2119 4.49586 18.9197 3.88281 18.0684 3.5971C17.217 3.3114 16.4534 3.67794 14.9263 4.41103Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 17V17.5C13 18.7841 13 19.4261 12.776 19.7886C12.4773 20.2719 11.9312 20.545 11.3653 20.4939C10.9409 20.4557 10.4273 20.0704 9.4 19.3L8.2 18.4C7.22253 17.6669 7 17.2218 7 16V14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.5 14V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: megaphone02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for megaphone02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-megaphone02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-megaphone02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-megaphone02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-megaphone02 3s ease-in-out infinite alternate;
}
</style>