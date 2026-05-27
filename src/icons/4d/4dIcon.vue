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
      <path d="M20.64 0v24H3.36V0h17.28zM10.49 11.827c-.115.138-5.882 6.789-5.983 6.9-.058.07-.187.194-.187.36 0 .153.187.208.36.208h4.4v-1.067H5.83c.49-.61 3.38-3.824 3.696-4.226v5.34c0 .194-.005.965-.043 1.602-.029.43-.13.637-.661.693-.23.027-.533.041-.662.041-.072 0-.115.083-.115.18 0 .097.072.167.23.167.777 0 1.539-.042 1.942-.042 1.236 0 2.646.097 3.178.097 2.618 0 4.099-.97 4.746-1.607.791-.776 1.539-2.093 1.539-3.81 0-1.622-.662-2.758-1.38-3.465-1.54-1.565-3.913-1.565-5.682-1.565-.56 0-1.035.027-1.064.027-.388.042-.345-.124-.59-.138-.158-.014-.258.055-.474.305zm1.898.443c1.108 0 2.719.166 4.027 1.372.604.554 1.367 1.676 1.367 3.408 0 1.414-.288 2.66-1.194 3.409-.849.706-1.812.984-3.265.984-1.122 0-1.683-.291-1.87-.54-.115-.153-.172-.694-.186-1.04 0-.097-.015-.29-.015-.568h1.021c.245 0 .317-.055.389-.18.1-.18.244-.735.244-.86 0-.11-.057-.166-.13-.166-.086 0-.273.139-.647.139h-.877v-5.584c0-.152.058-.222.173-.277.115-.056.676-.097.963-.097z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: 4d
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for 4d (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-4d {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-4d {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-4d 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-4d 3s ease-in-out infinite alternate;
}
</style>