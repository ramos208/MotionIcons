<template>
  <template v-if="is3d">
    <ThreeSvgIcon 
      v-if="parsedSvg"
      :svgString="parsedSvg"
      :color="color"
      :animation="animation"
      :cameraPosition="cameraPosition"
    />
    <div v-show="false" ref="hiddenContainer">
      <component :is="icon" :size="size" :stroke-width="strokeWidth" aria-hidden="true" />
    </div>
  </template>
  <div 
    v-else
    class="animated-provider-wrapper"
    :class="[
      `anim-${animation}`,
      { 'is-hovering': isHovering, 'has-glow': glow },
      color ? `text-[${color}]` : 'text-current'
    ]"
    :style="{ width: `${size}px`, height: `${size}px`, color: color }"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <component 
      :is="icon" 
      :size="size" 
      :class="['provider-svg', `library-${library}`]" 
      :stroke-width="strokeWidth"
      aria-hidden="true" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue';
import ThreeSvgIcon from './ThreeSvgIcon.vue';

const props = defineProps({
  icon: { type: [Object, Function], required: true },
  library: { type: String, default: 'lucide' }, // 'lucide' | 'hero' | 'iconoir'
  animation: { type: String, default: 'pulse' }, // 'pulse' | 'bounce' | 'spin' | 'shake' | 'jiggle' | 'flip'
  size: { type: Number, default: 24 },
  color: { type: String, default: '' },
  strokeWidth: { type: Number, default: 2 },
  glow: { type: Boolean, default: false },
  is3d: { type: Boolean, default: false },
  cameraPosition: { type: Array as () => number[], default: () => [0, 0, 7] }
});

const isHovering = ref(false);
const hiddenContainer = ref<HTMLElement | null>(null);
const parsedSvg = ref('');

const updateSvg = async () => {
  if (props.is3d) {
    await nextTick();
    if (hiddenContainer.value) {
      const svgEl = hiddenContainer.value.querySelector('svg');
      if (svgEl) {
        parsedSvg.value = svgEl.outerHTML;
      }
    }
  }
};

onMounted(updateSvg);
watch(() => props.icon, updateSvg);
</script>

<style scoped>
.animated-provider-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: filter 0.3s ease;
}

.animated-provider-wrapper.has-glow {
  filter: drop-shadow(0 0 8px currentColor);
}

.provider-svg {
  width: 100%;
  height: 100%;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Animations */
.anim-pulse.is-hovering .provider-svg, .anim-pulse:hover .provider-svg, .group:hover .anim-pulse .provider-svg { animation: provider-pulse 0.6s ease-in-out infinite alternate; }
.anim-bounce.is-hovering .provider-svg, .anim-bounce:hover .provider-svg, .group:hover .anim-bounce .provider-svg { animation: provider-bounce 0.5s cubic-bezier(0.28, 0.84, 0.42, 1) infinite alternate; }
.anim-spin.is-hovering .provider-svg, .anim-spin:hover .provider-svg, .group:hover .anim-spin .provider-svg { animation: provider-spin 1.5s linear infinite; }
.anim-shake.is-hovering .provider-svg, .anim-shake:hover .provider-svg, .group:hover .anim-shake .provider-svg { animation: provider-shake 0.4s ease-in-out infinite; }
.anim-jiggle.is-hovering .provider-svg, .anim-jiggle:hover .provider-svg, .group:hover .anim-jiggle .provider-svg { animation: provider-jiggle 0.4s ease-in-out infinite; }
.anim-flip.is-hovering .provider-svg, .anim-flip:hover .provider-svg, .group:hover .anim-flip .provider-svg { animation: provider-flip 1s ease-in-out infinite alternate; }
.anim-float.is-hovering .provider-svg, .anim-float:hover .provider-svg, .group:hover .anim-float .provider-svg { animation: provider-float 2s ease-in-out infinite alternate; }
.anim-heartbeat.is-hovering .provider-svg, .anim-heartbeat:hover .provider-svg, .group:hover .anim-heartbeat .provider-svg { animation: provider-heartbeat 1.2s ease-in-out infinite; }
.anim-swing.is-hovering .provider-svg, .anim-swing:hover .provider-svg, .group:hover .anim-swing .provider-svg { transform-origin: top center; animation: provider-swing 1.5s ease-in-out infinite alternate; }
.anim-wobble.is-hovering .provider-svg, .anim-wobble:hover .provider-svg, .group:hover .anim-wobble .provider-svg { animation: provider-wobble 0.8s ease-in-out infinite; }
.anim-tada.is-hovering .provider-svg, .anim-tada:hover .provider-svg, .group:hover .anim-tada .provider-svg { animation: provider-tada 1s ease-in-out infinite; }
.anim-zoom-in.is-hovering .provider-svg, .anim-zoom-in:hover .provider-svg, .group:hover .anim-zoom-in .provider-svg { transform: scale(1.2); }
.anim-zoom-out.is-hovering .provider-svg, .anim-zoom-out:hover .provider-svg, .group:hover .anim-zoom-out .provider-svg { transform: scale(0.8); }
.anim-rubber-band.is-hovering .provider-svg, .anim-rubber-band:hover .provider-svg, .group:hover .anim-rubber-band .provider-svg { animation: provider-rubber-band 1s ease-in-out infinite; }
.anim-spin-pulse.is-hovering .provider-svg, .anim-spin-pulse:hover .provider-svg, .group:hover .anim-spin-pulse .provider-svg { animation: provider-spin 1.5s linear infinite, provider-pulse 0.6s ease-in-out infinite alternate; }
.anim-glitch.is-hovering .provider-svg, .anim-glitch:hover .provider-svg, .group:hover .anim-glitch .provider-svg { animation: provider-glitch 0.3s linear infinite; }

/* 76 NEW HIGH-FIDELITY ANIMATIONS */
.anim-drift.is-hovering .provider-svg, .anim-drift:hover .provider-svg, .group:hover .anim-drift .provider-svg { animation: provider-drift 1.2s ease-in-out infinite alternate; }
.anim-flicker.is-hovering .provider-svg, .anim-flicker:hover .provider-svg, .group:hover .anim-flicker .provider-svg { animation: provider-flicker 0.4s linear infinite; }
.anim-blink.is-hovering .provider-svg, .anim-blink:hover .provider-svg, .group:hover .anim-blink .provider-svg { animation: provider-blink 0.8s ease-in-out infinite; }
.anim-pop.is-hovering .provider-svg, .anim-pop:hover .provider-svg, .group:hover .anim-pop .provider-svg { animation: provider-pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite alternate; }
.anim-snap.is-hovering .provider-svg, .anim-snap:hover .provider-svg, .group:hover .anim-snap .provider-svg { animation: provider-snap 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite; }
.anim-flash.is-hovering .provider-svg, .anim-flash:hover .provider-svg, .group:hover .anim-flash .provider-svg { animation: provider-flash 0.8s ease-in-out infinite alternate; }
.anim-ripple.is-hovering .provider-svg, .anim-ripple:hover .provider-svg, .group:hover .anim-ripple .provider-svg { animation: provider-ripple 1.2s cubic-bezier(0.1, 0.8, 0.3, 1) infinite; }
.anim-glow-pulse.is-hovering .provider-svg, .anim-glow-pulse:hover .provider-svg, .group:hover .anim-glow-pulse .provider-svg { animation: provider-glow-pulse 1.2s ease-in-out infinite alternate; }
.anim-neon-flicker.is-hovering .provider-svg, .anim-neon-flicker:hover .provider-svg, .group:hover .anim-neon-flicker .provider-svg { animation: provider-neon-flicker 0.8s linear infinite; }
.anim-breathing.is-hovering .provider-svg, .anim-breathing:hover .provider-svg, .group:hover .anim-breathing .provider-svg { animation: provider-pulse 2s ease-in-out infinite alternate; }
.anim-magnetic.is-hovering .provider-svg, .anim-magnetic:hover .provider-svg, .group:hover .anim-magnetic .provider-svg { animation: provider-magnetic 0.5s ease-out infinite alternate; }
.anim-hover-lift.is-hovering .provider-svg, .anim-hover-lift:hover .provider-svg, .group:hover .anim-hover-lift .provider-svg { transform: translateY(-6px); }
.anim-tilt.is-hovering .provider-svg, .anim-tilt:hover .provider-svg, .group:hover .anim-tilt .provider-svg { transform: rotate(-8deg) scale(1.05); }
.anim-elastic.is-hovering .provider-svg, .anim-elastic:hover .provider-svg, .group:hover .anim-elastic .provider-svg { animation: provider-elastic 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite; }
.anim-warp.is-hovering .provider-svg, .anim-warp:hover .provider-svg, .group:hover .anim-warp .provider-svg { animation: provider-warp 1.2s ease-in-out infinite alternate; }
.anim-stretch.is-hovering .provider-svg, .anim-stretch:hover .provider-svg, .group:hover .anim-stretch .provider-svg { animation: provider-stretch 0.6s ease-in-out infinite alternate; }
.anim-compress.is-hovering .provider-svg, .anim-compress:hover .provider-svg, .group:hover .anim-compress .provider-svg { animation: provider-compress 0.6s ease-in-out infinite alternate; }
.anim-slide-left.is-hovering .provider-svg, .anim-slide-left:hover .provider-svg, .group:hover .anim-slide-left .provider-svg { animation: provider-slide-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite alternate; }
.anim-slide-right.is-hovering .provider-svg, .anim-slide-right:hover .provider-svg, .group:hover .anim-slide-right .provider-svg { animation: provider-slide-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite alternate; }
.anim-slide-up.is-hovering .provider-svg, .anim-slide-up:hover .provider-svg, .group:hover .anim-slide-up .provider-svg { animation: provider-slide-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite alternate; }
.anim-slide-down.is-hovering .provider-svg, .anim-slide-down:hover .provider-svg, .group:hover .anim-slide-down .provider-svg { animation: provider-slide-down 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite alternate; }
.anim-drift-float.is-hovering .provider-svg, .anim-drift-float:hover .provider-svg, .group:hover .anim-drift-float .provider-svg { animation: provider-drift-float 2.5s ease-in-out infinite; }
.anim-orbit.is-hovering .provider-svg, .anim-orbit:hover .provider-svg, .group:hover .anim-orbit .provider-svg { animation: provider-orbit 2.5s ease-in-out infinite; }
.anim-rotate-3d.is-hovering .provider-svg, .anim-rotate-3d:hover .provider-svg, .group:hover .anim-rotate-3d .provider-svg { animation: provider-rotate-3d 2s linear infinite; }
.anim-spiral.is-hovering .provider-svg, .anim-spiral:hover .provider-svg, .group:hover .anim-spiral .provider-svg { animation: provider-spiral 2s ease-in-out infinite; }
.anim-wave.is-hovering .provider-svg, .anim-wave:hover .provider-svg, .group:hover .anim-wave .provider-svg { animation: provider-wave 1s ease-in-out infinite alternate; }
.anim-pendulum.is-hovering .provider-svg, .anim-pendulum:hover .provider-svg, .group:hover .anim-pendulum .provider-svg { transform-origin: top center; animation: provider-pendulum 1.5s ease-in-out infinite; }
.anim-roll.is-hovering .provider-svg, .anim-roll:hover .provider-svg, .group:hover .anim-roll .provider-svg { animation: provider-roll 1.5s ease-in-out infinite; }
.anim-swing-3d.is-hovering .provider-svg, .anim-swing-3d:hover .provider-svg, .group:hover .anim-swing-3d .provider-svg { animation: provider-swing-3d 1.8s ease-in-out infinite; }
.anim-boomerang.is-hovering .provider-svg, .anim-boomerang:hover .provider-svg, .group:hover .anim-boomerang .provider-svg { animation: provider-boomerang 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite; }
.anim-drift-spin.is-hovering .provider-svg, .anim-drift-spin:hover .provider-svg, .group:hover .anim-drift-spin .provider-svg { animation: provider-drift 1.5s ease-in-out infinite alternate, provider-spin 3s linear infinite; }
.anim-liquid.is-hovering .provider-svg, .anim-liquid:hover .provider-svg, .group:hover .anim-liquid .provider-svg { animation: provider-liquid 1.2s ease-in-out infinite; }
.anim-morph.is-hovering .provider-svg, .anim-morph:hover .provider-svg, .group:hover .anim-morph .provider-svg { animation: provider-morph 2s ease-in-out infinite; }
.anim-gooey.is-hovering .provider-svg, .anim-gooey:hover .provider-svg, .group:hover .anim-gooey .provider-svg { animation: provider-gooey 1.5s ease-in-out infinite; }
.anim-blur-in.is-hovering .provider-svg, .anim-blur-in:hover .provider-svg, .group:hover .anim-blur-in .provider-svg { animation: provider-blur-in 0.6s ease-out forwards; }
.anim-blur-out.is-hovering .provider-svg, .anim-blur-out:hover .provider-svg, .group:hover .anim-blur-out .provider-svg { animation: provider-blur-out 0.6s ease-in forwards; }
.anim-frost.is-hovering .provider-svg, .anim-frost:hover .provider-svg, .group:hover .anim-frost .provider-svg { animation: provider-frost 1s ease-in-out infinite alternate; }
.anim-hologram.is-hovering .provider-svg, .anim-hologram:hover .provider-svg, .group:hover .anim-hologram .provider-svg { animation: provider-hologram 1.5s linear infinite; }
.anim-matrix.is-hovering .provider-svg, .anim-matrix:hover .provider-svg, .group:hover .anim-matrix .provider-svg { animation: provider-matrix 1.2s ease-in-out infinite alternate; }
.anim-cyber-pulse.is-hovering .provider-svg, .anim-cyber-pulse:hover .provider-svg, .group:hover .anim-cyber-pulse .provider-svg { animation: provider-cyber-pulse 1.2s ease-in-out infinite; }
.anim-vhs.is-hovering .provider-svg, .anim-vhs:hover .provider-svg, .group:hover .anim-vhs .provider-svg { animation: provider-vhs 0.5s steps(2) infinite; }
.anim-rgb-split.is-hovering .provider-svg, .anim-rgb-split:hover .provider-svg, .group:hover .anim-rgb-split .provider-svg { animation: provider-rgb-split 0.4s ease-out infinite alternate; }
.anim-static-noise.is-hovering .provider-svg, .anim-static-noise:hover .provider-svg, .group:hover .anim-static-noise .provider-svg { animation: provider-static-noise 0.2s steps(2) infinite; }
.anim-scanline.is-hovering .provider-svg, .anim-scanline:hover .provider-svg, .group:hover .anim-scanline .provider-svg { animation: provider-scanline 2s linear infinite; }
.anim-pixelate.is-hovering .provider-svg, .anim-pixelate:hover .provider-svg, .group:hover .anim-pixelate .provider-svg { animation: provider-pixelate 1s steps(4) infinite alternate; }
.anim-distort.is-hovering .provider-svg, .anim-distort:hover .provider-svg, .group:hover .anim-distort .provider-svg { animation: provider-distort 0.6s ease-in-out infinite alternate; }
.anim-power-up.is-hovering .provider-svg, .anim-power-up:hover .provider-svg, .group:hover .anim-power-up .provider-svg { animation: provider-power-up 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite; }
.anim-energy-burst.is-hovering .provider-svg, .anim-energy-burst:hover .provider-svg, .group:hover .anim-energy-burst .provider-svg { animation: provider-energy-burst 0.8s cubic-bezier(0.19, 1, 0.22, 1) infinite; }
.anim-charge.is-hovering .provider-svg, .anim-charge:hover .provider-svg, .group:hover .anim-charge .provider-svg { animation: provider-charge 1s ease-in-out infinite; }
.anim-explosion-pop.is-hovering .provider-svg, .anim-explosion-pop:hover .provider-svg, .group:hover .anim-explosion-pop .provider-svg { animation: provider-explosion-pop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.5) infinite alternate; }
.anim-shockwave.is-hovering .provider-svg, .anim-shockwave:hover .provider-svg, .group:hover .anim-shockwave .provider-svg { animation: provider-shockwave 1.2s cubic-bezier(0.1, 0.8, 0.3, 1) infinite; }
.anim-turbo-spin.is-hovering .provider-svg, .anim-turbo-spin:hover .provider-svg, .group:hover .anim-turbo-spin .provider-svg { animation: provider-spin 0.4s linear infinite; }
.anim-combo-bounce.is-hovering .provider-svg, .anim-combo-bounce:hover .provider-svg, .group:hover .anim-combo-bounce .provider-svg { animation: provider-bounce 0.5s cubic-bezier(0.28, 0.84, 0.42, 1) infinite alternate, provider-pulse 0.4s ease-in-out infinite alternate; }
.anim-dash.is-hovering .provider-svg, .anim-dash:hover .provider-svg, .group:hover .anim-dash .provider-svg { animation: provider-dash 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite; }
.anim-impact.is-hovering .provider-svg, .anim-impact:hover .provider-svg, .group:hover .anim-impact .provider-svg { animation: provider-impact 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) infinite; }
.anim-slam.is-hovering .provider-svg, .anim-slam:hover .provider-svg, .group:hover .anim-slam .provider-svg { animation: provider-slam 0.8s cubic-bezier(0.23, 1, 0.32, 1) infinite; }
.anim-recoil.is-hovering .provider-svg, .anim-recoil:hover .provider-svg, .group:hover .anim-recoil .provider-svg { animation: provider-recoil 0.8s ease-in-out infinite; }
.anim-jelly.is-hovering .provider-svg, .anim-jelly:hover .provider-svg, .group:hover .anim-jelly .provider-svg { animation: provider-jelly 0.8s cubic-bezier(0.28, 0.84, 0.42, 1) infinite; }
.anim-squish.is-hovering .provider-svg, .anim-squish:hover .provider-svg, .group:hover .anim-squish .provider-svg { animation: provider-squish 0.6s ease-in-out infinite alternate; }
.anim-blob.is-hovering .provider-svg, .anim-blob:hover .provider-svg, .group:hover .anim-blob .provider-svg { animation: provider-blob 1.5s ease-in-out infinite; }
.anim-wiggle.is-hovering .provider-svg, .anim-wiggle:hover .provider-svg, .group:hover .anim-wiggle .provider-svg { animation: provider-wiggle 0.3s ease-in-out infinite; }
.anim-peek.is-hovering .provider-svg, .anim-peek:hover .provider-svg, .group:hover .anim-peek .provider-svg { animation: provider-peek 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite alternate; }
.anim-hop.is-hovering .provider-svg, .anim-hop:hover .provider-svg, .group:hover .anim-hop .provider-svg { animation: provider-hop 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite; }
.anim-flutter.is-hovering .provider-svg, .anim-flutter:hover .provider-svg, .group:hover .anim-flutter .provider-svg { animation: provider-flutter 0.4s ease-in-out infinite; }
.anim-bubble.is-hovering .provider-svg, .anim-bubble:hover .provider-svg, .group:hover .anim-bubble .provider-svg { animation: provider-bubble 2s ease-in-out infinite; }
.anim-bounce-wave.is-hovering .provider-svg, .anim-bounce-wave:hover .provider-svg, .group:hover .anim-bounce-wave .provider-svg { animation: provider-bounce-wave 1s ease-in-out infinite; }
.anim-cartoon-shake.is-hovering .provider-svg, .anim-cartoon-shake:hover .provider-svg, .group:hover .anim-cartoon-shake .provider-svg { animation: provider-cartoon-shake 0.3s ease-in-out infinite; }
.anim-aurora.is-hovering .provider-svg, .anim-aurora:hover .provider-svg, .group:hover .anim-aurora .provider-svg { animation: provider-aurora 2.5s linear infinite; }
.anim-silk-float.is-hovering .provider-svg, .anim-silk-float:hover .provider-svg, .group:hover .anim-silk-float .provider-svg { animation: provider-silk-float 3s ease-in-out infinite alternate; }
.anim-glass-shine.is-hovering .provider-svg, .anim-glass-shine:hover .provider-svg, .group:hover .anim-glass-shine .provider-svg { animation: provider-glass-shine 1.5s ease-in-out infinite; }
.anim-light-sweep.is-hovering .provider-svg, .anim-light-sweep:hover .provider-svg, .group:hover .anim-light-sweep .provider-svg { animation: provider-light-sweep 1.8s ease-in-out infinite; }
.anim-smooth-orbit.is-hovering .provider-svg, .anim-smooth-orbit:hover .provider-svg, .group:hover .anim-smooth-orbit .provider-svg { animation: provider-smooth-orbit 3s linear infinite; }
.anim-fade-drift.is-hovering .provider-svg, .anim-fade-drift:hover .provider-svg, .group:hover .anim-fade-drift .provider-svg { animation: provider-fade-drift 1.5s ease-in-out infinite; }
.anim-soft-pulse.is-hovering .provider-svg, .anim-soft-pulse:hover .provider-svg, .group:hover .anim-soft-pulse .provider-svg { animation: provider-soft-pulse 1.5s ease-in-out infinite alternate; }
.anim-cinematic-zoom.is-hovering .provider-svg, .anim-cinematic-zoom:hover .provider-svg, .group:hover .anim-cinematic-zoom .provider-svg { animation: provider-cinematic-zoom 2.5s cubic-bezier(0.25, 1, 0.5, 1) infinite alternate; }
.anim-elegant-swing.is-hovering .provider-svg, .anim-elegant-swing:hover .provider-svg, .group:hover .anim-elegant-swing .provider-svg { transform-origin: top center; animation: provider-elegant-swing 2s ease-in-out infinite alternate; }

/* KEYFRAMES */
@keyframes provider-pulse { 0% { transform: scale(1); } 100% { transform: scale(1.15); } }
@keyframes provider-bounce { 0% { transform: translateY(0); } 100% { transform: translateY(-5px); } }
@keyframes provider-spin { 100% { transform: rotate(360deg); } }
@keyframes provider-shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-3px) rotate(-3deg); } 75% { transform: translateX(3px) rotate(3deg); } }
@keyframes provider-jiggle { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(-10deg); } 75% { transform: rotate(10deg); } }
@keyframes provider-flip { 0% { transform: perspective(400px) rotateY(0); } 100% { transform: perspective(400px) rotateY(180deg); } }
@keyframes provider-float { 0% { transform: translateY(0px); } 100% { transform: translateY(-8px); } }
@keyframes provider-heartbeat { 0%, 100% { transform: scale(1); } 14% { transform: scale(1.2); } 28% { transform: scale(1); } 42% { transform: scale(1.2); } 70% { transform: scale(1); } }
@keyframes provider-swing { 0% { transform: rotate(15deg); } 100% { transform: rotate(-15deg); } }
@keyframes provider-wobble { 0%, 100% { transform: translateX(0%) rotate(0deg); } 15% { transform: translateX(-15%) rotate(-5deg); } 30% { transform: translateX(10%) rotate(3deg); } 45% { transform: translateX(-10%) rotate(-3deg); } 60% { transform: translateX(5%) rotate(2deg); } 75% { transform: translateX(-2%) rotate(-1deg); } }
@keyframes provider-tada { 0% { transform: scale(1); } 10%, 20% { transform: scale(0.9) rotate(-3deg); } 30%, 50%, 70%, 90% { transform: scale(1.2) rotate(3deg); } 40%, 60%, 80% { transform: scale(1.2) rotate(-3deg); } 100% { transform: scale(1); } }
@keyframes provider-rubber-band { 0%, 100% { transform: scale(1, 1); } 30% { transform: scale(1.25, 0.75); } 40% { transform: scale(0.75, 1.25); } 50% { transform: scale(1.15, 0.85); } 65% { transform: scale(0.95, 1.05); } 75% { transform: scale(1.05, 0.95); } }
@keyframes provider-glitch { 0% { transform: translate(0, 0) skew(0deg); } 20% { transform: translate(-2px, 1px) skew(-5deg); } 40% { transform: translate(2px, -1px) skew(5deg); } 60% { transform: translate(-1px, 2px) skew(-2deg); } 80% { transform: translate(1px, -2px) skew(2deg); } 100% { transform: translate(0, 0) skew(0deg); } }

/* NEW 76 KEYFRAMES */
@keyframes provider-drift { 0% { transform: translateX(-4px); } 100% { transform: translateX(4px); } }
@keyframes provider-flicker { 0%, 100% { opacity: 1; } 25% { opacity: 0.35; } 50% { opacity: 0.85; } 75% { opacity: 0.2; } }
@keyframes provider-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
@keyframes provider-pop { 0% { transform: scale(0.92); } 100% { transform: scale(1.1); } }
@keyframes provider-snap { 0%, 100% { transform: rotate(0deg); } 20% { transform: rotate(-8deg) scale(0.95); } 40% { transform: rotate(8deg) scale(1.05); } 60% { transform: rotate(-4deg); } 80% { transform: rotate(4deg); } }
@keyframes provider-flash { 0%, 100% { filter: brightness(1); } 50% { filter: brightness(1.8) drop-shadow(0 0 10px currentColor); } }
@keyframes provider-ripple { 0% { transform: scale(0.95); opacity: 1; } 50% { transform: scale(1.08); opacity: 0.85; } 100% { transform: scale(1); opacity: 1; } }
@keyframes provider-glow-pulse { 0% { filter: drop-shadow(0 0 2px currentColor); } 100% { filter: drop-shadow(0 0 12px currentColor); } }
@keyframes provider-neon-flicker { 0%, 100% { filter: drop-shadow(0 0 10px currentColor); opacity: 1; } 45% { opacity: 0.3; filter: none; } 50% { opacity: 0.95; } 85% { opacity: 0.25; } }
@keyframes provider-magnetic { 0% { transform: translate(0, 0); } 100% { transform: translate(4px, -3px); } }
@keyframes provider-elastic { 0% { transform: scale(1); } 30% { transform: scale(1.25, 0.75); } 55% { transform: scale(0.85, 1.15); } 75% { transform: scale(1.05, 0.95); } 100% { transform: scale(1); } }
@keyframes provider-warp { 0% { transform: skewX(-6deg) skewY(-3deg); } 100% { transform: skewX(6deg) skewY(3deg); } }
@keyframes provider-stretch { 0% { transform: scaleX(0.8); } 100% { transform: scaleX(1.25); } }
@keyframes provider-compress { 0% { transform: scaleY(0.8); } 100% { transform: scaleY(1.25); } }
@keyframes provider-slide-left { 0% { transform: translateX(0); } 100% { transform: translateX(-8px); } }
@keyframes provider-slide-right { 0% { transform: translateX(0); } 100% { transform: translateX(8px); } }
@keyframes provider-slide-up { 0% { transform: translateY(0); } 100% { transform: translateY(-8px); } }
@keyframes provider-slide-down { 0% { transform: translateY(0); } 100% { transform: translateY(8px); } }
@keyframes provider-drift-float { 0% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-6px) translateX(4px); } 100% { transform: translateY(0) translateX(0); } }
@keyframes provider-orbit { 0% { transform: rotate(0deg) translateX(5px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(5px) rotate(-360deg); } }
@keyframes provider-rotate-3d { 0% { transform: rotateY(0deg) rotateX(0deg); } 100% { transform: rotateY(360deg) rotateX(360deg); } }
@keyframes provider-spiral { 0% { transform: rotate(0deg) scale(0.8); } 50% { transform: rotate(180deg) scale(1.15); } 100% { transform: rotate(360deg) scale(0.8); } }
@keyframes provider-wave { 0% { transform: rotate(-5deg) translateY(-2px); } 100% { transform: rotate(5deg) translateY(2px); } }
@keyframes provider-pendulum { 0%, 100% { transform: rotate(-12deg); } 50% { transform: rotate(12deg); } }
@keyframes provider-roll { 0% { transform: translateX(-10px) rotate(-120deg); } 50% { transform: translateX(10px) rotate(120deg); } 100% { transform: translateX(-10px) rotate(-120deg); } }
@keyframes provider-swing-3d { 0%, 100% { transform: perspective(100px) rotateX(-15deg); } 50% { transform: perspective(100px) rotateX(15deg); } }
@keyframes provider-boomerang { 0%, 100% { transform: translate(0, 0) scale(1); } 40% { transform: translate(12px, -8px) scale(0.8) rotate(45deg); } 60% { transform: translate(6px, -4px) scale(0.9); } }
@keyframes provider-liquid { 0%, 100% { transform: scale(1); } 33% { transform: scale(1.15, 0.85) skewX(-3deg); } 66% { transform: scale(0.85, 1.15) skewX(3deg); } }
@keyframes provider-morph { 0%, 100% { transform: scale(1) rotate(0deg); border-radius: 0%; } 50% { transform: scale(1.1) rotate(180deg); } }
@keyframes provider-gooey { 0%, 100% { filter: blur(0px); transform: scale(1); } 50% { filter: blur(1px); transform: scale(1.08) skewY(2deg); } }
@keyframes provider-blur-in { 0% { filter: blur(5px); opacity: 0.3; } 100% { filter: blur(0px); opacity: 1; } }
@keyframes provider-blur-out { 0% { filter: blur(0px); opacity: 1; } 100% { filter: blur(5px); opacity: 0.3; } }
@keyframes provider-frost { 0% { backdrop-filter: blur(0px); opacity: 0.9; } 100% { backdrop-filter: blur(4px); opacity: 1; filter: drop-shadow(0 0 5px rgba(255,255,255,0.3)); } }
@keyframes provider-hologram { 0%, 100% { opacity: 0.9; filter: hue-rotate(0deg) saturate(1.5); } 30% { opacity: 0.55; } 70% { opacity: 0.85; filter: hue-rotate(90deg) saturate(2); } }
@keyframes provider-matrix { 0% { filter: drop-shadow(0 0 2px #10B981); opacity: 0.9; } 100% { filter: drop-shadow(0 0 10px #10B981); opacity: 1; } }
@keyframes provider-cyber-pulse { 0%, 100% { filter: drop-shadow(0 0 1px #8B5CF6); } 50% { filter: drop-shadow(0 0 10px #EC4899); } }
@keyframes provider-vhs { 0% { transform: translate(1px, -1px) skew(-2deg); filter: hue-rotate(0deg); } 50% { transform: translate(-1px, 1px) skew(2deg); filter: hue-rotate(180deg); } 100% { transform: translate(1px, -1px); } }
@keyframes provider-rgb-split { 0% { filter: drop-shadow(-1.5px 0 0 rgba(239,68,68,0.8)) drop-shadow(1.5px 0 0 rgba(59,130,246,0.8)); } 100% { filter: drop-shadow(1.5px -0.5px 0 rgba(239,68,68,0.8)) drop-shadow(-1.5px 0.5px 0 rgba(59,130,246,0.8)); } }
@keyframes provider-static-noise { 0% { transform: scale(0.98) translate(-1px, 1px); opacity: 0.95; } 50% { transform: scale(1.02) translate(1px, -1px); opacity: 1; } 100% { transform: scale(1); } }
@keyframes provider-scanline { 0% { filter: drop-shadow(0 -8px 2px currentColor); } 50% { filter: drop-shadow(0 0px 4px currentColor); } 100% { filter: drop-shadow(0 8px 2px currentColor); } }
@keyframes provider-pixelate { 0% { transform: scale(1); filter: contrast(1); } 50% { transform: scale(1.1) skewX(2deg); filter: contrast(1.5); } }
@keyframes provider-distort { 0% { transform: scaleY(0.9) skewX(-4deg); } 100% { transform: scaleY(1.1) skewX(4deg); } }
@keyframes provider-power-up { 0% { transform: translateY(0) scale(0.9); opacity: 0.8; } 50% { transform: translateY(-4px) scale(1.12); opacity: 1; } 100% { transform: translateY(-8px) scale(1); opacity: 0; } }
@keyframes provider-energy-burst { 0% { transform: scale(0.9); filter: brightness(1); } 30% { transform: scale(1.2); filter: brightness(1.8) drop-shadow(0 0 10px currentColor); } 100% { transform: scale(1); filter: brightness(1); } }
@keyframes provider-charge { 0%, 100% { transform: translate(0,0) scale(1); } 10%, 30%, 50%, 70%, 90% { transform: translate(-1.5px, 1px) scale(1.02); } 20%, 40%, 60%, 80% { transform: translate(1.5px, -1px) scale(1.02); } }
@keyframes provider-explosion-pop { 0% { transform: scale(0.8); } 40% { transform: scale(1.22); filter: drop-shadow(0 0 8px currentColor); } 100% { transform: scale(1); } }
@keyframes provider-shockwave { 0% { transform: scale(0.95); filter: drop-shadow(0 0 0 rgba(129, 140, 248, 0.7)); } 50% { filter: drop-shadow(0 0 12px rgba(129, 140, 248, 0)); } 100% { transform: scale(1); } }
@keyframes provider-dash { 0% { transform: translateX(0); } 30% { transform: translateX(-12px) skewX(10deg); } 70% { transform: translateX(12px) skewX(-10deg); } 100% { transform: translateX(0); } }
@keyframes provider-impact { 0% { transform: scale(1) translateY(-6px); } 40% { transform: scale(1.15, 0.85) translateY(2px); } 100% { transform: scale(1) translateY(0); } }
@keyframes provider-slam { 0% { transform: translateY(-10px) scale(1); } 50% { transform: translateY(3px) scale(1.15, 0.85); } 100% { transform: translateY(0); } }
@keyframes provider-recoil { 0% { transform: translateY(0); } 30% { transform: translateY(4px) scale(1.05, 0.95); } 100% { transform: translateY(-8px) scale(0.95, 1.05); } }
@keyframes provider-jelly { 0%, 100% { transform: scale(1, 1); } 25% { transform: scale(1.2, 0.8); } 50% { transform: scale(0.85, 1.15); } 75% { transform: scale(1.1, 0.9); } }
@keyframes provider-squish { 0% { transform: scale(1.2, 0.8); } 100% { transform: scale(0.8, 1.2); } }
@keyframes provider-blob { 0%, 100% { transform: scale(1) rotate(0deg); } 33% { transform: scale(1.1, 0.9) skewX(2deg); } 66% { transform: scale(0.9, 1.1) skewY(-2deg); } }
@keyframes provider-wiggle { 0%, 100% { transform: rotate(0); } 25% { transform: rotate(-5deg); } 75% { transform: rotate(5deg); } }
@keyframes provider-peek { 0% { transform: translateY(8px); } 100% { transform: translateY(0); } }
@keyframes provider-hop { 0%, 100% { transform: translateY(0) scale(1); } 40% { transform: translateY(-6px) scale(1.05, 0.95); } 60% { transform: translateY(-8px); } 80% { transform: translateY(2px) scale(1.1, 0.9); } }
@keyframes provider-flutter { 0%, 100% { transform: rotateX(0deg) scale(1); } 50% { transform: rotateX(30deg) scale(0.95); } }
@keyframes provider-bubble { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-6px) scale(1.06); } }
@keyframes provider-bounce-wave { 0%, 100% { transform: translateY(0); } 25% { transform: translateY(-4px); } 75% { transform: translateY(4px); } }
@keyframes provider-cartoon-shake { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 20% { transform: translate(-2px, 2px) rotate(-4deg); } 40% { transform: translate(2px, -2px) rotate(4deg); } 60% { transform: translate(-2px, -2px) rotate(-2deg); } 80% { transform: translate(2px, 2px) rotate(2deg); } }
@keyframes provider-aurora { 0% { filter: drop-shadow(0 0 3px #3B82F6); } 33% { filter: drop-shadow(0 0 6px #EC4899); } 66% { filter: drop-shadow(0 0 6px #10B981); } 100% { filter: drop-shadow(0 0 3px #3B82F6); } }
@keyframes provider-silk-float { 0% { transform: translateY(0) rotate(0deg) scale(1); } 50% { transform: translateY(-4px) rotate(2deg) scale(1.02); } 100% { transform: translateY(-6px) rotate(4deg) scale(1); } }
@keyframes provider-glass-shine { 0% { opacity: 0.85; filter: brightness(1) drop-shadow(0 0 0 currentColor); } 50% { opacity: 1; filter: brightness(1.5) drop-shadow(0 0 8px currentColor); transform: scale(1.05); } 100% { opacity: 0.85; filter: brightness(1) drop-shadow(0 0 0 currentColor); } }
@keyframes provider-light-sweep { 0% { filter: brightness(1); transform: skewX(0deg); } 50% { filter: brightness(1.6) drop-shadow(0 0 6px currentColor); transform: skewX(-6deg); } 100% { filter: brightness(1); transform: skewX(0deg); } }
@keyframes provider-smooth-orbit { 0% { transform: rotate(0deg) translate(4px) rotate(0deg); } 100% { transform: rotate(360deg) translate(4px) rotate(-360deg); } }
@keyframes provider-fade-drift { 0% { transform: translateX(-4px); opacity: 0.5; } 100% { transform: translateX(4px); opacity: 1; } }
@keyframes provider-soft-pulse { 0% { transform: scale(0.97); } 100% { transform: scale(1.05); } }
@keyframes provider-cinematic-zoom { 0% { transform: scale(0.96); } 100% { transform: scale(1.08); } }
@keyframes provider-elegant-swing { 0% { transform: rotate(8deg); } 100% { transform: rotate(-8deg); } }

@media (prefers-reduced-motion: reduce) {
  .animated-provider-wrapper .provider-svg {
    animation: none !important;
  }
}
</style>
