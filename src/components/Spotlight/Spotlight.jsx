import { useEffect, useRef } from 'react';
import './Spotlight.scss';

function Spotlight() {
    const spotlightRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (spotlightRef.current) {
                spotlightRef.current.style.setProperty('--x', `${e.clientX}px`);
                spotlightRef.current.style.setProperty('--y', `${e.clientY}px`);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div ref={spotlightRef} className="spotlight"></div>;
}

export default Spotlight;