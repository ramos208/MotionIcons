<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="M12.2656.168c-.4273 0-.7676.3551-.7676.7773 0 .4222.3513.7676.7735.7676.0268-.0144.062-.004.0918-.0059 3.9749 0 7.3782 2.9452 7.9394 6.879.0567.3861.3859.664.7618.664.4676 0 .8328-.4084.7636-.8809C21.1588 3.6786 17.0963.168 12.3594.168Zm-.3027 3.0566c-1.7538 0-3.5063.6678-4.8399 2.004-1.3747 1.3747-2.0765 3.2193-1.994 5.1347-1.1431.2935-2.2292.8795-3.125 1.7754-2.6723 2.6722-2.6723 7.0184 0 9.6855 1.3335 1.3336 3.0899 2.002 4.8456 2.002 1.7558 0 3.505-.6684 4.8438-2.002.108-.1081.2075-.2266.3105-.3398 1.2563 1.4365 3.094 2.3476 5.1484 2.3476 3.7793 0 6.8477-3.0735 6.8477-6.8476 0-3.1511-2.1943-5.9-5.2012-6.6465.0721-1.8433-.5865-3.7089-1.9922-5.1094-1.336-1.3361-3.0899-2.0039-4.8437-2.0039Zm3.752 3.1074c2.0698 2.0699 2.0698 5.4354 0 7.5-.3038.3038-.3038.7932 0 1.0918.2973.2974.7873.3045 1.0918 0 .8753-.8753 1.4572-1.925 1.7558-3.037 2.2552.628 3.8926 2.7183 3.8926 5.1073 0 2.9246-2.3782 5.3028-5.3027 5.3008-2.9245-.002-5.3027-2.382-5.3027-5.3066 0-.4274-.3461-.7715-.7735-.7715a.7699.7699 0 0 0-.7715.7715c0 1.1482.2877 2.231.7871 3.1836-.1493.2008-.308.39-.4882.5703-2.0699 2.0698-5.4373 2.0698-7.502 0-2.0698-2.0698-2.0698-5.4321 0-7.502 2.0698-2.0698 5.4321-2.0698 7.502 0 .3037.3038.7912.3038 1.0898 0 .2986-.3037.3038-.7931 0-1.0918-1.385-1.385-3.2177-2.0436-5.0352-1.9922-.0206-1.4313.525-2.7996 1.5547-3.8242 1.035-1.0349 2.394-1.5527 3.752-1.5527 1.358 0 2.715.5178 3.75 1.5527zm-3.5566.0508c-.4274 0-.7676.3552-.7676.7774 0 .4388.3555.7675.7988.7675 1.0452 0 1.9038.8494 1.914 1.8946 0 .4222.3513.7675.778.7675s.767-.3551.767-.7773c-.0103-.9216-.3761-1.792-1.0352-2.441-.659-.6492-1.5231-.999-2.455-.9887Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: sonarqubecloud
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for sonarqubecloud (simpleicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-sonarqubecloud {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-sonarqubecloud {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-sonarqubecloud 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-sonarqubecloud 3s ease-in-out infinite alternate;
}
</style>