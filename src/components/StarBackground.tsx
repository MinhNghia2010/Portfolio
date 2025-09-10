import { useEffect, useState } from "react";

interface Star {
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    animationDuration: number;
}

interface Meteor {
    id: number;
    size: number;
    x: number;
    y: number;
    delay: number;
    animationDuration: number;
}

function StarBackground() {
    const [stars, setStars] = useState<Star[]>([]);
    const [meteors, setMeteors] = useState<Meteor[]>([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const resizeHandler = () => {
            generateStars();
        }
        
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        }

    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 5000);
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteor = 10;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteor; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15 + 0.5,
                animationDuration: Math.random() * 6 + 3
            });
        }
        setMeteors(newMeteors);
    };


    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map(star => (
                <div key={star.id} className="star animated-pulse-subtle" style={{
                    width: star.size + 'px',
                    height: star.size + 'px',
                    left: star.x + '%',
                    top: star.y + '%',
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + 's'
                }}></div>
            ))}
            {meteors.map(meteor => (
                <div key={meteor.id} className="meteor animate-meteor" style={{
                    width: meteor.size * 50 + 'px',
                    height: meteor.size * 2 + 'px',
                    left: meteor.x + '%',
                    top: meteor.y + '%',
                    animationDelay: meteor.delay + 'ms',
                    animationDuration: meteor.animationDuration + 's'
                }}></div>
            ))}
        </div>

    );
}

export default StarBackground;