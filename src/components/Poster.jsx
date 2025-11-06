import { motion } from "framer-motion";

export default function Poster() {
    return (
        <section
        id="poster"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        >
            <motion.img
                src="poster.jpg" // lägg din film-poster här
                alt="Film Poster"
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="rounded 
                    shadow-[0_0_60px_#c084fc55] 
                    w-[85%] sm:w-[70%] md:w-[55%] lg:w-[45%] xl:w-[40%]
                    max-w-2xl 
                    object-contain 
                    transition-all duration-500"
            />
        </section>
    );
}
