export interface PhysicsProfile {
  tension: number;
  friction: number;
  mass: number;
  damping: number;
  stiffness: number;
}

export class Physics {
  /**
   * Generates custom physical variables (spring constant, stiffness, damping) matching the icon category.
   */
  static generatePhysicsProfile(category: string): PhysicsProfile {
    switch (category) {
      case 'notification':
        return { tension: 120, friction: 14, mass: 1.5, damping: 10, stiffness: 400 };
      case 'weather':
        return { tension: 40, friction: 22, mass: 0.8, damping: 15, stiffness: 100 };
      case 'loading':
        return { tension: 200, friction: 30, mass: 1.0, damping: 25, stiffness: 500 };
      case 'mechanical':
        return { tension: 90, friction: 40, mass: 5.0, damping: 30, stiffness: 200 };
      case 'search':
        return { tension: 150, friction: 18, mass: 1.1, damping: 12, stiffness: 350 };
      case 'directional':
        return { tension: 180, friction: 12, mass: 0.9, damping: 8, stiffness: 450 };
      case 'ai':
        return { tension: 80, friction: 25, mass: 2.0, damping: 18, stiffness: 150 };
      default:
        return { tension: 100, friction: 20, mass: 1.0, damping: 15, stiffness: 250 };
    }
  }
}
