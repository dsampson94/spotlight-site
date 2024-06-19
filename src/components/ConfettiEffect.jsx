'use client'

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const ConfettiEffect = () => {
    useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.8 }
        });
    }, []);

    return null;
};

export default ConfettiEffect;
