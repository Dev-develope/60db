
import { motion } from "framer-motion";
import { Upload, Wand2, Download, ArrowRight } from "lucide-react";

const steps = [
    {
        icon: Upload,
        title: "Upload or Record Audio",
        description: "Start by uploading an audio file or recording directly in the browser."
    },
    {
        icon: Wand2,
        title: "Choose Your New Voice",
        description: "Select from our extensive library of high-quality AI voices."
    },
    {
        icon: Download,
        title: "Generate and Download",
        description: "Get your transformed audio instantly, ready for use in your projects."
    }
];

const VoiceChangerSteps = () => {
    return (
        <section className="py-24 bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        How to Change Your Voice in 3 Simple Steps
                    </h2>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative relative z-10 flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 rounded-2xl bg-white border-4 border-gray-50 shadow-xl flex items-center justify-center mb-8 relative z-10">
                                <step.icon className="w-10 h-10 text-gray-900" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold border-4 border-white">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                            <p className="text-gray-500 max-w-sm">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VoiceChangerSteps;
