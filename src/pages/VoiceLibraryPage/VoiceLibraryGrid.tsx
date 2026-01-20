import React, { useState } from 'react';
import { Search, Play, Volume2, Filter, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["All", "Narrator", "Character", "Social Media", "Video Games", "News", "Meditation"];

const voices = [
    { id: 1, name: "Burt Reynolds", category: "Narrator", tags: ["Iconic", "Deep", "Narrative"], gradient: "from-blue-400 to-indigo-600" },
    { id: 2, name: "Hope", category: "Character", tags: ["Warm", "Soothing", "Captivating"], gradient: "from-red-400 to-orange-500" },
    { id: 3, name: "Finn", category: "Narrator", tags: ["Young", "Conversational", "Male"], gradient: "from-purple-400 to-indigo-500" },
    { id: 4, name: "Magic Jack", category: "Character", tags: ["Friendly", "Heart-felt", "Casual"], gradient: "from-orange-400 to-red-600" },
    { id: 5, name: "Enrique", category: "Social Media", tags: ["Spanish", "Middle-aged", "Vibrant"], gradient: "from-blue-700 to-blue-900" },
    { id: 6, name: "Serena", category: "News", tags: ["Professional", "Clear", "Serious"], gradient: "from-emerald-400 to-teal-600" },
    { id: 7, name: "Jasper", category: "Video Games", tags: ["Intense", "Warrior", "Heroic"], gradient: "from-amber-600 to-orange-700" },
    { id: 8, name: "Willow", category: "Meditation", tags: ["Gentle", "Soft-spoken", "Calm"], gradient: "from-sky-300 to-blue-400" },
    { id: 9, name: "Marcus", category: "Narrator", tags: ["Authoritative", "Old-school", "Bass"], gradient: "from-stone-500 to-zinc-700" },
    { id: 10, name: "Chloe", category: "Social Media", tags: ["Upbeat", "Trendy", "Gen-Z"], gradient: "from-pink-400 to-rose-500" },
    { id: 11, name: "Viktor", category: "Character", tags: ["Gritty", "Antagonist", "Russian"], gradient: "from-red-800 to-rose-900" },
    { id: 12, name: "Nara", category: "Narrator", tags: ["Intelligent", "Academic", "Clear"], gradient: "from-indigo-600 to-violet-800" },
];

const VoiceLibraryGrid = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredVoices = voices.filter(voice => {
        const matchesSearch = voice.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            voice.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesCategory = activeCategory === "All" || voice.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <section className="py-12 bg-background font-sans min-h-[800px]">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Search and Filter Bar */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 items-start md:items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                        <input
                            type="text"
                            placeholder="Search by name or keyword..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3.5 bg-background border border-border rounded-2xl text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? "bg-primary text-primary-foreground shadow-sm" : "bg-secondary text-foreground/60 hover:text-foreground hover:bg-secondary/70"}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Voice Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <AnimatePresence mode='popLayout'>
                        {filteredVoices.map(voice => (
                            <motion.div
                                layout
                                key={voice.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="bg-background rounded-[2rem] p-6 border border-border shadow-sm hover:shadow-elevated hover:border-border/50 transition-all group cursor-pointer"
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${voice.gradient} shadow-inner flex-shrink-0`}></div>
                                    <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/40 group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-sm">
                                        <Play className="w-4 h-4 fill-current ml-0.5" />
                                    </button>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{voice.name}</h3>
                                    <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest">{voice.category}</span>
                                </div>

                                <div className="flex flex-wrap gap-1.5 mt-auto">
                                    {voice.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-secondary/50 text-foreground/60 rounded-full text-[10px] font-bold">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-[11px] font-bold text-foreground/30 group-hover:text-foreground/60 transition-colors">
                                    <div className="flex items-center gap-1.5">
                                        <Volume2 className="w-3 h-3" />
                                        <span>Preview Voice</span>
                                    </div>
                                    <ChevronRight className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
                {filteredVoices.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-40"
                    >
                        <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                            <Filter className="w-8 h-8 text-foreground/20" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">No voices found</h3>
                        <p className="text-foreground/40 font-medium">Try adjusting your filters or search query.</p>
                        <button
                            onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                            className="mt-8 text-primary font-bold hover:underline"
                        >
                            Reset filters
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default VoiceLibraryGrid;
