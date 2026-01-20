import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowUpRight, Wind, Plane, AlarmClock, Music, Cat, Bell, Bomb, Disc, Ghost, MessageSquare, Squirrel, Users, CircleDot, Smartphone, DoorOpen, Zap, Trees, Flame, Keyboard, Coffee, Footprints, Laugh, Gamepad2, Skull, HeartPulse, User, IceCream , HandMetal, Settings, Cog, Bike, Drum, Bot, Anchor, Rocket, MousePointer2, Leaf, Car, Mic2, Droplets, Sword, CloudRain, ShieldAlert, FastForward } from 'lucide-react';

const allCategories = [
    { name: "Air", icon: Wind },
    { name: "Aircraft", icon: Plane },
    { name: "Alarm", icon: AlarmClock },
    { name: "Ambience", icon: Music },
    { name: "Animal", icon: Cat },
    { name: "Bullet", icon: Disc },
    { name: "Cartoon", icon: Ghost },
    { name: "Communication", icon: MessageSquare },
    { name: "Creature", icon: Squirrel },
    { name: "Crowd", icon: Users },
    { name: "Cymbals", icon: CircleDot },
    { name: "Devices", icon: Smartphone },
    { name: "Door", icon: DoorOpen },
    { name: "Electricity", icon: Zap },
    { name: "Environment", icon: Trees },
    { name: "Fire", icon: Flame },
    { name: "Foley", icon: Keyboard },
    { name: "Food & Drink", icon: Coffee },
    { name: "Footstep", icon: Footprints },
    { name: "Funny", icon: Laugh },
    { name: "Game", icon: Gamepad2 },
    { name: "Gore", icon: Skull },
    { name: "Horror", icon: HeartPulse },
    { name: "Human", icon: User },
    { name: "Ice", icon: IceCream },
    { name: "Leather", icon: HandMetal },
    { name: "Machinery", icon: Settings },
    { name: "Mechanical Object", icon: Cog },
    { name: "Motor", icon: Bike },
    { name: "Object", icon: Cog },
    { name: "Office", icon: Smartphone },
    { name: "Percussion", icon: Drum },
    { name: "Robot", icon: Bot },
    { name: "Rope", icon: Anchor },
    { name: "Sci-fi", icon: Rocket },
    { name: "Sport", icon: Gamepad2 },
    { name: "Transport", icon: MousePointer2 },
    { name: "UI element", icon: MousePointer2 },
    { name: "Vegetation", icon: Leaf },
    { name: "Vehicle", icon: Car },
    { name: "Voice", icon: Mic2 },
    { name: "Water", icon: Droplets },
    { name: "Weapon", icon: Sword },
    { name: "Weather", icon: CloudRain },
    { name: "Whistle", icon: ShieldAlert },
    { name: "Whoosh", icon: FastForward },
];

const SFXTrendingGrid = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCategories = allCategories.filter(cat =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section className="py-24 bg-white font-sans border-t border-black/5">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header Area */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 gap-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1B] tracking-tight">
                        Trending and popular sound effect categories
                    </h2>

                    <div className="relative w-full lg:w-[400px]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/20" />
                        <input
                            type="text"
                            placeholder="Search thousands of sound effects..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white border border-black/10 rounded-full text-sm font-medium focus:outline-none focus:ring-1 focus:ring-black/20 transition-all"
                        />
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-16">
                    {filteredCategories.map((cat, i) => (
                        <motion.button
                            key={cat.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.01 }}
                            className="flex items-center justify-between px-5 py-4 bg-white border border-black/5 rounded-2xl hover:bg-black/5 hover:border-black/10 transition-all group"
                        >
                            <div className="flex items-center gap-3">
                                <cat.icon className="w-4 h-4 text-black/40 group-hover:text-black transition-colors" />
                                <span className="text-sm font-bold text-black/60 group-hover:text-black transition-colors">{cat.name}</span>
                            </div>
                            <ArrowUpRight className="w-3 h-3 text-black/10 group-hover:text-black/40 transition-colors" />
                        </motion.button>
                    ))}
                </div>

                {/* Footer Text */}
                <div className="text-center max-w-4xl mx-auto">
                    <p className="text-black/40 text-sm font-bold leading-relaxed tracking-tight">
                        Generate high quality sound effects for free. Create then download sounds and noises –
                        perfect for creating a sound effects board or any audio project
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 mt-24">
                <div className="border-t border-dashed border-black/10 pt-8">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-black/20">Create custom collections of sound effects</p>
                </div>
            </div>
        </section>
    );
};

export default SFXTrendingGrid;
