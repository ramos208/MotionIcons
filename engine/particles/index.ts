export interface ParticleConfig {
  count: number;
  color: string;
  size: number;
  speed: number;
  life: number;
}

export class Particles {
  /**
   * Generates custom particle properties that map semantic meaning to canvas dynamics.
   */
  static generateParticles(category: string): ParticleConfig {
    switch (category) {
      case 'notification':
        return { count: 15, color: '#f59e0b', size: 1.5, speed: 2.0, life: 0.8 };
      case 'weather':
        return { count: 40, color: '#a5b4fc', size: 2.0, speed: 0.8, life: 3.0 };
      case 'loading':
        return { count: 25, color: '#10b981', size: 1.0, speed: 4.0, life: 1.2 };
      case 'directional':
        return { count: 30, color: '#6366f1', size: 1.2, speed: 6.0, life: 0.5 };
      case 'ai':
        return { count: 50, color: '#06b6d4', size: 1.8, speed: 1.5, life: 2.0 };
      default:
        return { count: 0, color: '#ffffff', size: 0.0, speed: 0.0, life: 0.0 };
    }
  }
}
