import { useTransform, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Intro from '../components/Intro';
import Poster from '../components/Poster';
import About from '../components/About';
import World from '../components/World';
import Glasses from '../components/Glasses';
import Character from '../components/Character';
import Location from '../components/Location';
import StartSimulation from '../components/StartSimulation';
import Team from '../components/Team';


export default function Start() {
    const { scrollYProgress } = useScroll();
    const [activeSection, setActiveSection] = useState('intro');

    //Parallax
    const titleY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-50%']);
    const subtitleY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-30%']);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const handleScroll = () => {
            let current = '';
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='w-full text-white overflow-x-hidden'>
            <Navigation activeSection={activeSection} />
            <Intro />
            <Poster />
            <About />
            <World />
            <Glasses />
            <Character />
            <Location />
            <StartSimulation />
            <Team />
        </div>
    );
}