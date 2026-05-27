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
      <path d="M5.3877 8.88a15.8031 15.8031 0 0 0-1.5366.1053c-1.1437.1457-1.5395.6461-1.5395 1.8724 0 .9713.2576 1.44.9035 1.661.3132.1092.8498.155 1.7434.155h1.6998a8.7053 8.7053 0 0 1 .923.0194c.3787.0365.5629.2113.5629.5246 0 .5463-.2429.6-2.4283.6a8.499 8.499 0 0 1-1.1724-.0631c-.2768-.0656-.34-.1751-.3595-.6365H2.3386v.3595c0 .8766.2959 1.3186.988 1.4935.4516.1214 1.0785.1579 2.4723.1579a23.1753 23.1753 0 0 0 2.5834-.0925c1.1704-.1263 1.6125-.6312 1.6125-1.8672 0-.6386-.129-1.1-.3766-1.3768-.2865-.3302-.6651-.442-1.5879-.4856-.4978-.0195-.8668-.0294-.9713-.0294H5.308a3.181 3.181 0 0 1-.7284-.036.471.471 0 0 1-.4127-.4857c0-.34.1652-.4716.6265-.508.2866-.017 1.117-.046 1.6998-.046 1.2652 0 1.44.0752 1.44.6095h1.804c0-1.0612-.2037-1.4862-.8204-1.717-.4711-.1748-.9595-.211-2.7589-.211a15.8031 15.8031 0 0 0-.7702-.0033Zm11.2217.0446-3.4603 6.1508h2.1224l.59-1.0975h3.9677l.6071 1.0975h2.0493l-3.3678-6.1508Zm1.236 1.3185 1.3379 2.4553H16.534ZM0 12.0012a6.1532 6.1532 0 0 1 11.998-1.928 6.1556 6.1556 0 1 1 0 3.8536A6.1532 6.1532 0 0 1 0 12.0012Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: sabanci
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for sabanci (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-sabanci {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-sabanci {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-sabanci 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-sabanci 3s ease-in-out infinite alternate;
}
</style>