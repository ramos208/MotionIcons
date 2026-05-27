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
      <path d="M4.794 11.772c-.104-.443-.546-1.492-.786-1.796-.04-.031-.062-.046-.078-.068l-.718 1.748s.375.091.796.148c.271.03.558.03.786-.032zm17-1.593v3.536c0 .7-.282.59-.385.613l1.209 1.018L24 14.236c-.014-.086-.063-.171-.124-.195-.475.294-.443-.302-.443-.302V9.527c0-.528-.933-1.097-1.285-.986l-1.304 1.297c.015.054.06.162.203.186.61-.56.747 0 .747.155zm-5.576 2.184v1.5c0 .528-.2.428-.348.488.412.218.972.668 1.454 1.011l1.446-.916 1.073.94 1.266-1.236s-.016-.18-.17-.171c-.444.436-.575-.288-.575-.288v-1.833c0-.801-1.028-.98-1.244-.972l-1.035 1.01a.4.4 0 00.194.165c.484-.382.567.17.567.17v1.5c-.014.62-1.14.847-1.14.008v-2.09c-.095-.576-.912-.895-1.028-.794l-1.181.972c.055.093.06.204.207.187.523-.367.514.349.514.349zm-7.805-.287v1.632c0 .45-.334.442-.44.465l1.274 1.104 1.227-1.08a.487.487 0 00-.115-.178c-.203.107-.357.046-.357-.22v-1.654c.108-.512.838-.397.838-.047v1.696c-.018.34-.156.488-.31.535l1.156.956 1.243-1.043c-.02-.085-.02-.16-.129-.2-.124.008-.357.25-.357-.288v-1.617c.256-.653.885-.31.91.055v1.516c-.009.357-.074.583-.366.683l1.204.94 1.276-1.15c0-.077-.11-.157-.15-.178-.419.364-.396-.095-.402-.165v-2.09c-.017-.365-.7-1.125-1.61-.783l-.91.668c-.484-.824-1.19-.847-1.378-.8-.308.044-.962.838-1.038.713-.288-.713-1.053-.728-1.209-.706l-1.07.924c.054.117.141.132.2.155.289-.17.485-.132.513.157zm-5.571.491l-.334.906.79.506c.112.071.253.024.476-.18l.157.157c-.357.41-.73.8-1.096 1.212-.482-.442-1.05-.877-1.594-.877-.628.013-1.213.62-.606 1.717.017.022-.094.138-.156.09-.465-.395-.652-1.482-.286-2.095.256-.397.72-.785 1.513-.693l.313-.85c-.287-.113-.598 0-.988.308.132-.67.551-1.136 1.412-1.252l.882-2.114c-.467-.187-.903.04-1.12.436-.132-.017-.225-.063-.25-.147l.903-1.68c.44-.153.817-.153 1.151-.048 1.376.436 2.067 2.76 3.098 5.325.095.248.221.271.516-.046l.21.186-1.86 1.85-.856-2.558c0 .022-.417.125-1.107.063a5.65 5.65 0 01-1.168-.216z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: amul
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for amul (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-amul {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-amul {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-amul 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-amul 3s ease-in-out infinite alternate;
}
</style>