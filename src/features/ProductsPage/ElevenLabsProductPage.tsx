import React, { useState } from 'react';
import { Play, Share2, Download, MoreHorizontal, Maximize2, Mic, Music, Layout, Settings, FileText, Languages, ChevronRight, Volume2 } from 'lucide-react';

const ElevenLabsProductPage = () => {
  const [activeTab, setActiveTab] = useState<"Create" | "Edit" | "Localize">("Create");

  const renderCreateContent = () => (
    <div className="flex flex-col md:flex-row gap-6 animate-fade-in-up">
      {/* Left Sidebar */}
      <div className="md:w-48 space-y-4">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">ElevenLabs</div>
        <div className="space-y-2">
          {[
            { icon: <Layout className="w-4 h-4" />, label: "Home" },
            { icon: <Play className="w-4 h-4" />, label: "Videos" },
            { icon: <Mic className="w-4 h-4" />, label: "Music" },
            { icon: <FileText className="w-4 h-4" />, label: "Image & Video" },
            { icon: <Settings className="w-4 h-4" />, label: "Templates" },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm cursor-pointer ${item.label === "Home"
                ? "bg-white shadow-sm text-gray-900 font-medium border border-gray-100"
                : "text-gray-600 hover:bg-white"
                }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-700 mb-4">What would you like to create?</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { title: "Welcome for a Video", desc: "Add an AI voiceover to a video with Studio.", icon: "🎥" },
            { title: "Audiobook with AI voices", desc: "Create an audiobook using multiple AI voices.", icon: "📖" },
            { title: "AI voice for a project", desc: "Clone your voice or make a new one.", icon: "🗣️" },
          ].map((option, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 hover:border-indigo-200 hover:shadow-sm transition-all cursor-pointer group">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{option.icon}</div>
              <h4 className="font-semibold text-gray-800 mb-1 text-sm">{option.title}</h4>
              <p className="text-[10px] text-gray-500">{option.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {["Search", "Music", "Voice", "Sound Effect", "More Tools"].map((tag, i) => (
            <button key={i} className="bg-white border border-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] hover:bg-gray-50 transition-colors">
              {tag}
            </button>
          ))}
        </div>

        <h4 className="text-sm font-medium text-gray-700 mb-3">Recents</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: "Scientific Lawn Club Promo", duration: "2h 15m", img: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=200&auto=format&fit=crop&q=60" },
            { title: "Perfume UGC Ad", duration: "1h 30m", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&auto=format&fit=crop&q=60" },
            { title: "The First Principles", duration: "1h 10m", img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=200&auto=format&fit=crop&q=60" },
          ].map((project, i) => (
            <div key={i} className="bg-white p-2 rounded-lg border border-gray-50 hover:border-indigo-100 cursor-pointer transition-all">
              <img src={project.img} alt={project.title} className="w-full h-24 object-cover rounded-md mb-2" />
              <h5 className="text-[10px] font-medium text-gray-800 truncate">{project.title}</h5>
              <p className="text-[9px] text-gray-400 mt-1">{project.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderEditContent = () => (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden animate-fade-in-up">
      {/* Studio Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-50 bg-gray-50/30">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-gray-800">Belmont Lawn Club Promo</span>
          <div className="flex items-center gap-1.5 opacity-40">
            <Share2 className="w-3 h-3" />
            <Maximize2 className="w-3 h-3" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-[10px] text-gray-500 hover:text-gray-700">Share</button>
          <button className="bg-black text-white text-[10px] px-3 py-1 rounded-md font-medium">Export</button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-[450px]">
        {/* Controls Sidebar */}
        <div className="w-full lg:w-48 border-r border-gray-50 p-4 space-y-6">
          <div>
            <div className="text-[10px] font-bold text-gray-800 mb-3 flex items-center gap-1">
              <span className="w-1 h-3 bg-indigo-500 rounded-full"></span> TEXT
            </div>
            <div className="p-2 border border-gray-100 rounded-lg text-[10px] text-gray-400">T Text</div>
          </div>
          <div>
            <div className="text-[10px] font-bold text-gray-800 mb-3 flex items-center gap-1">
              <span className="w-1 h-3 bg-indigo-500 rounded-full"></span> VOICE
            </div>
            <div className="flex items-center gap-2 p-2 border border-indigo-100 bg-indigo-50/30 rounded-lg">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <span className="text-[10px] font-medium text-indigo-700">Rachel</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-[10px] font-bold text-gray-800 mb-3">AI TOOLS</div>
            {["Remove background", "Voice changer", "Record audio"].map(tool => (
              <div key={tool} className="flex items-center gap-2 text-[10px] text-gray-500 hover:text-indigo-600 cursor-pointer">
                <span className="p-1 bg-gray-50 rounded">✨</span>
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* Script Area */}
        <div className="flex-1 p-6 border-r border-gray-50 overflow-y-auto">
          <p className="text-sm leading-relaxed text-gray-700 font-serif italic mb-4">
            In the stillness of the court, a new standard is set. Precision meets legacy, and every movement carries the confidence of those who know they belong here. This is where discipline becomes artistry, and tradition steps into the present.
          </p>
          <p className="text-sm leading-relaxed text-gray-700 font-serif italic">
            Out here, the game is elevated. Grass underfoot, silence between points, excellence without compromise. Every rally is deliberate. Every shot, intentional. Belmont is not about playing more — it's about playing better.
          </p>
        </div>

        {/* Preview Canvas */}
        <div className="w-full lg:w-72 bg-gray-50/50 p-6 flex flex-col justify-center items-center relative">
          <div className="w-full aspect-[4/5] bg-gray-200 rounded-xl overflow-hidden shadow-lg border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1595435063076-793540d58814?w=500&auto=format&fit=crop&q=60"
              alt="Tennis Preview"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Controls */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Play className="w-4 h-4 text-white fill-white" />
            <div className="w-20 h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-white"></div>
            </div>
            <Volume2 className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Timeline Area */}
      <div className="border-t border-gray-50 p-4 bg-gray-50/30">
        <div className="flex gap-1 overflow-hidden h-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} className="flex-1 h-full bg-gray-100 rounded-sm"></div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-[9px] text-gray-400">0:00</span>
          <div className="flex gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            <span className="text-[9px] text-gray-400">0:15</span>
          </div>
          <span className="text-[9px] text-gray-400">0:24</span>
        </div>
      </div>
    </div>
  );

  const renderLocalizeContent = () => (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden animate-fade-in-up">
      <div className="flex flex-col lg:flex-row h-[500px]">
        {/* Localization Columns */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 grid md:grid-cols-2 gap-0 border-b border-gray-50">
            {/* English Side */}
            <div className="p-6 border-r border-gray-50">
              <button className="text-[10px] text-gray-400 border border-gray-100 px-3 py-1 rounded-full mb-4 hover:border-indigo-100 hover:text-indigo-500">Transcribe Audio</button>
              <p className="text-xs leading-relaxed text-gray-600 font-medium mb-4">
                In the stillness of the court, a new standard is set. Precision meets legacy, and every movement carries the confidence of those who know they belong here. This is where discipline becomes artistry, and tradition steps into the present.
              </p>
            </div>
            {/* Spanish Side */}
            <div className="p-6 bg-indigo-50/5">
              <button className="text-[10px] text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full mb-4 border border-indigo-100 font-medium">Generate Spanish</button>
              <p className="text-xs leading-relaxed text-gray-600 font-medium mb-4 opacity-80">
                En la quietud de la cancha, se establece un nuevo estándar. La precisión se encuentra con el legado, y cada movimiento transmite la confianza de quienes saben que pertenecen aquí. Aquí es donde la disciplina se convierte en arte, y la tradición da un paso al presente.
              </p>
            </div>
          </div>
          <div className="p-6 bg-gray-50/30">
            <div className="w-full h-24 bg-indigo-100/20 rounded-lg flex items-end px-4 pb-4 gap-0.5">
              {[1, 1, 2, 1, 3, 2, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1].map((h, i) => (
                <div key={i} className="flex-1 bg-indigo-300 rounded-full" style={{ height: `${h * 20}%` }}></div>
              ))}
            </div>
            <div className="flex justify-between mt-2 px-2">
              <span className="text-[8px] text-gray-400 uppercase tracking-widest font-bold">Original (EN)</span>
              <span className="text-[8px] text-gray-400 uppercase tracking-widest font-bold">Localize (ES)</span>
            </div>
          </div>
        </div>

        {/* Preview Canvas */}
        <div className="w-full lg:w-72 bg-gray-50/50 p-6 flex flex-col justify-center items-center">
          <div className="w-full aspect-[4/5] bg-gray-200 rounded-xl overflow-hidden shadow-lg border-4 border-white mb-6">
            <img
              src="https://images.unsplash.com/photo-1595435063076-793540d58814?w=500&auto=format&fit=crop&q=60"
              alt="Tennis Preview"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-4">
            <Play className="w-5 h-5 text-gray-800" />
            <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-indigo-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Timeline */}
      <div className="bg-gray-900 h-10 flex items-center px-4 justify-between">
        <div className="flex items-center gap-4">
          <Play className="w-3 h-3 text-white fill-white" />
          <span className="text-[9px] text-white/60 font-mono">0:00 / 0:24</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-4 h-4 rounded-sm bg-white/10"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#F5F5F3] rounded-3xl p-8 md:p-12 relative overflow-hidden border border-gray-100 shadow-xl">
          {/* Decorative Elements */}
          <div className="absolute top-8 left-8 w-1.5 h-1.5 bg-indigo-200 rounded-full"></div>
          <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-indigo-200 rounded-full"></div>

          {/* Logos Row */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16 opacity-30 grayscale hover:opacity-80 transition-opacity">
            {["Disney", "NVIDIA", "Duolingo", "Aston Martin", "JioStar"].map((name) => (
              <span key={name} className="text-sm font-bold tracking-tighter text-gray-800">{name}</span>
            ))}
          </div>

          {/* Headline & Subtext */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.1]">
              Create, edit, and localize with <br />
              <span className="text-indigo-600">ElevenLabs Creative Platform</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed px-4">
              Produce multi-format audio and video, shape it precisely in Studio, and localize effortlessly into 70+ languages for worldwide reach.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/50 backdrop-blur-sm p-1.5 rounded-full flex items-center shadow-inner border border-gray-100">
              {["Create", "Edit", "Localize"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-6 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${activeTab === tab
                    ? "bg-white text-indigo-600 shadow-md transform scale-105"
                    : "text-gray-400 hover:text-gray-600"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Content Container */}
          <div className="min-h-[500px]">
            {activeTab === "Create" && renderCreateContent()}
            {activeTab === "Edit" && renderEditContent()}
            {activeTab === "Localize" && renderLocalizeContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElevenLabsProductPage;