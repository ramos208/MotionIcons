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
      <path d="M14.714 14.8735c.296 0 .58.102.807.288l.014.012-.149.238c-.184-.168-.421-.26-.671-.26-.549 0-.995.446-.995.995 0 .549.446.995.995.995.497 0 .91-.366.983-.842l.002-.014h-.852l.173-.277h.966v.139c0 .702-.571 1.273-1.272 1.273-.702 0-1.272-.571-1.272-1.273-.002-.703.569-1.274 1.271-1.274zm-13.442 0c.347 0 .68.144.918.392l.012.013-.157.242c-.19-.235-.47-.37-.774-.37-.549 0-.995.446-.995.995 0 .549.446.995.995.995.287 0 .559-.123.748-.339l.01-.012.211.18c-.24.285-.594.448-.968.448-.701 0-1.272-.57-1.272-1.272 0-.701.571-1.272 1.272-1.272zm2.44.015c.639 0 .894.3.894.733 0 .363-.184.619-.621.706l-.014.003.702 1.075h-.336l-.663-1.058h-.478v1.058h-.273v-2.517zm5.88 2.273v.244H7.87v-.244zm-4.018-2.273l.691 1.149c.024.042.038.087.045.115.01-.029.019-.067.043-.109l.006-.01.688-1.145h.297l-1.564 2.518h-.271l.647-1.05-.882-1.468zm17.522 2.273v.244h-1.722v-.244zm-4.561-2.273l1.512 2.085c-.013-.059-.02-.081-.021-.127v-1.958h.272v2.518h-.258l-1.515-2.092c.01.033.023.078.024.142v1.95h-.272v-2.518zm-1.361 0v2.518h-.272v-2.518zm-6.395 0l1.512 2.085c-.013-.059-.02-.081-.021-.127v-1.958h.272v2.518h-.258l-1.515-2.092c.01.033.023.078.024.142v1.95h-.272v-2.518zm12.317 1.065v.248h-1.722v-.248zm-13.504 0v.248H7.87v-.248zm-5.876-.821h-.52v.967h.517c.384 0 .615-.112.615-.478-.001-.367-.232-.489-.612-.489zm19.991-.567c.162 0 .293.13.293.292 0 .162-.131.292-.293.292-.162 0-.293-.13-.293-.292.001-.162.132-.292.293-.292zm-.611.323v.244h-1.722v-.244zm-13.504 0v.244h-1.47l.151-.244zm14.115-.274c-.134 0-.242.108-.242.242s.108.242.242.242.243-.108.243-.242c0-.133-.109-.242-.243-.242zm.002.091c.075 0 .108.038.108.091 0 .04-.018.07-.059.084l-.006.002.08.123h-.058l-.067-.104c-.002-.002-.003-.007-.004-.011v-.003h-.058v.118h-.048v-.301h.112zm.001.046h-.065v.091h.064c.041 0 .06-.011.06-.045 0-.033-.019-.046-.059-.046zm-12.801-8.153l.088-.007c-2.36.549-3.761 2.332-3.761 2.564v.001c0 .001.001-.009.002.036v.006h.001c.048.253.745 1.475 3.441 2.201-3.09-.245-4.494-1.748-4.563-2.188l-.001-.014h-.001c0-.046-.001-.037-.001-.034l.001-.013c.037-.452 1.928-2.312 4.794-2.552l.088-.007zm.981-.019c3.209.167 5.076 2.075 5.093 2.609v-.001c0-.002-.001 0-.001.033v.006h-.002c-.025.268-1.045 1.358-2.571 1.86-1.865.613-4.866.39-4.866-1.948 0-1.097.894-1.99 1.992-1.99 1.108 0 1.997.897 1.997 1.995 0 .535-.231 1.053-.581 1.419.327-.006 1.517-.093 2.638-1.017.124-.121.203-.222.236-.284.009-.016.022-.045.02-.072.001-.24-1.288-2.084-3.955-2.61zm-.357 1.427c-.625 0-1.131.506-1.131 1.131s.506 1.131 1.131 1.131c.624 0 1.131-.506 1.131-1.131 0-.624-.506-1.131-1.131-1.131zm5.449 1.182z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cryengine
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cryengine (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cryengine {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cryengine {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cryengine 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cryengine 3s ease-in-out infinite alternate;
}
</style>