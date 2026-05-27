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
      <path d="M6.17481 10.3333C4.96738 10.7408 4.22049 11.304 4.22049 11.9261C4.22049 12.7743 5.60897 13.513 7.6601 13.897M7.6601 13.897C6.89833 14.2824 6.44271 14.7715 6.44271 15.3038C6.44271 16.5474 8.93001 17.5556 11.9983 17.5556C12.7884 17.5556 13.54 17.4887 14.2205 17.3682M7.6601 13.897C8.61629 14.076 9.71648 14.1779 10.8872 14.1779C12.5946 14.1779 14.1521 13.9611 15.3316 13.6045M16.4427 10.1243C15.031 10.5414 13.0635 10.8002 10.8872 10.8002C6.5916 10.8002 3.10938 9.79203 3.10938 8.5484C3.10938 7.5881 5.18563 6.76821 8.10937 6.44446" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22 19.0699C22 20.6882 17.5228 22 12 22C6.47715 22 2 20.6882 2 19.0699C2 17.9195 3.70729 16.9239 7 16.4444" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.7591 8.78799C22.9744 7.69436 23.5765 14.2562 17.5547 16.4438" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.5582 2C16.8173 2.12346 15.4246 2.81481 15.7802 4.59259C16.1358 6.37037 15.6322 7.30864 15.3359 7.55556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.1128 2C12.372 2.14815 10.9793 2.97778 11.3349 5.11111C11.6905 7.24444 11.1869 7.81482 10.8906 8.11111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: java
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for java (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-java {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-java {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-java 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-java 3s ease-in-out infinite alternate;
}
</style>