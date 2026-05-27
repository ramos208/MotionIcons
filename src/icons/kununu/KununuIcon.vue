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
      <path d="M20.686 17.759a3.26 3.26 0 0 1-2.344-1.004 3.487 3.487 0 0 1-.971-2.422l.015-4.668a1.08 1.08 0 0 0-.302-.751 1.014 1.014 0 0 0-.728-.311c-.272 0-.534.112-.727.311-.192.2-.301.47-.3.752l-.015 4.669c0 .908-.349 1.78-.971 2.422a3.259 3.259 0 0 1-2.344 1.002 3.257 3.257 0 0 1-2.343-1.004 3.482 3.482 0 0 1-.97-2.422L8.7 9.665c0-.282-.109-.552-.302-.752a1.007 1.007 0 0 0-1.454.001c-.193.2-.301.47-.301.752l-.014 4.669a3.507 3.507 0 0 1-.56 1.902 3.338 3.338 0 0 1-1.487 1.26 3.214 3.214 0 0 1-1.914.195 3.276 3.276 0 0 1-1.696-.937 3.412 3.412 0 0 1-.721-1.111A3.513 3.513 0 0 1 0 14.333v-3.707c0-.313.121-.613.335-.835.214-.221.505-.346.808-.346.303 0 .594.125.808.346a1.2 1.2 0 0 1 .335.835v3.707c0 .282.108.552.301.751.193.2.455.312.728.312.272 0 .534-.112.727-.312.193-.199.301-.469.301-.751l.015-4.669c0-.908.349-1.779.971-2.422A3.259 3.259 0 0 1 7.673 6.24c.879 0 1.722.361 2.343 1.004s.97 1.514.97 2.423l-.014 4.667c0 .282.109.552.302.752.193.199.454.311.727.311.273 0 .534-.113.727-.312.193-.2.301-.47.301-.752l.014-4.668c.001-.909.35-1.78.972-2.422a3.26 3.26 0 0 1 2.344-1.003c.879 0 1.721.362 2.343 1.004.621.643.97 1.514.97 2.423l-.014 4.668c0 .282.108.552.301.751.194.199.455.311.728.311.273 0 .534-.112.727-.312.193-.2.301-.47.301-.752v-3.706c0-.313.12-.613.334-.835.215-.221.505-.346.809-.346.303 0 .593.124.808.346.214.222.334.522.334.835v3.706c0 .908-.349 1.78-.97 2.422a3.26 3.26 0 0 1-2.344 1.004Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: kununu
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for kununu (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-kununu {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-kununu {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-kununu 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-kununu 3s ease-in-out infinite alternate;
}
</style>