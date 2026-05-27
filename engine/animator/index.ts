export interface MotionProfile {
  idleAnimation: string;
  hoverAnimation: string;
  clickAnimation: string;
  duration: number;
  easing: string;
}

export class Animator {
  /**
   * Generates a completely custom motion design profile based on its structural shape and category.
   */
  static generateMotionProfile(category: string, curves: number, lines: number): MotionProfile {
    switch (category) {
      case 'notification':
        return {
          idleAnimation: 'breathing',
          hoverAnimation: 'pendulum-swing',
          clickAnimation: 'elastic-rebound',
          duration: 0.6,
          easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        };
      case 'weather':
        return {
          idleAnimation: 'atmospheric-floating',
          hoverAnimation: 'turbulence',
          clickAnimation: 'particle-burst',
          duration: 1.2,
          easing: 'ease-in-out'
        };
      case 'loading':
        return {
          idleAnimation: 'magnetic-rotation',
          hoverAnimation: 'acceleration',
          clickAnimation: 'energy-pulse',
          duration: 2.0,
          easing: 'linear'
        };
      case 'mechanical':
        return {
          idleAnimation: 'gear-synchronization',
          hoverAnimation: 'mechanical-inertia',
          clickAnimation: 'friction-slowdown',
          duration: 0.8,
          easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)'
        };
      case 'search':
        return {
          idleAnimation: 'lens-focus',
          hoverAnimation: 'radar-scanning',
          clickAnimation: 'pulse-sweep',
          duration: 0.5,
          easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
        };
      case 'directional':
        return {
          idleAnimation: 'subtle-drift',
          hoverAnimation: 'anticipation-spring',
          clickAnimation: 'velocity-burst',
          duration: 0.6,
          easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        };
      case 'ai':
        return {
          idleAnimation: 'neural-pulse',
          hoverAnimation: 'flowing-nodes',
          clickAnimation: 'holographic-distortion',
          duration: 1.5,
          easing: 'ease-in-out'
        };
      default:
        // Adjust default pop parameters based on number of curve vs line nodes
        const dynamicDuration = curves > lines ? 0.35 : 0.25;
        const dynamicEasing = curves > lines ? 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 'cubic-bezier(0.25, 0.8, 0.25, 1)';
        return {
          idleAnimation: 'ambient-floating',
          hoverAnimation: 'elastic-scale',
          clickAnimation: 'ripple',
          duration: dynamicDuration,
          easing: dynamicEasing
        };
    }
  }
}
