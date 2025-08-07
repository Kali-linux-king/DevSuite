export function initQuantumBackground() {
    const bg = document.getElementById('quantum-bg');
    if (!bg) return;
    
    // Create floating quantum particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'quantum-particle';
        Object.assign(particle.style, {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            opacity: Math.random() * 0.5 + 0.1,
            animationDuration: `${Math.random() * 20 + 10}s`
        });
        bg.appendChild(particle);
    }
}