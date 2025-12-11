import { Section } from './Section'

export const Overlay = () => {
    return (
        <div className="w-full text-white">
            {/* Hero Section */}
            <Section mobileTop>
                <h1 className="text-6xl md:text-8xl font-bold font-serif leading-none tracking-tighter">
                    SOMNATH <br />
                    PAUL
                </h1>
                <p className="mt-4 text-xl md:text-2xl font-light opacity-80 max-w-2xl text-slate-200">
                    Software Engineer & Technical Coordinator <br />
                    <span className="text-lg opacity-60">Frontend Developer • AI/ML Engineer</span>
                </p>
                <div className="mt-8 flex gap-4">
                    <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all text-sm font-bold tracking-widest uppercase">
                        Explore
                    </button>
                    <a href="mailto:somnathpaul818@gmail.com" className="px-8 py-4 bg-white text-black rounded-full hover:bg-slate-200 transition-all text-sm font-bold tracking-widest uppercase">
                        Contact Me
                    </a>
                </div>
            </Section>

            {/* Featured Projects */}
            <Section>
                <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight text-white">SELECTED WORKS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {/* Project 1 */}
                    <div className="group bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all cursor-pointer">
                        <div className="aspect-video bg-gradient-to-br from-red-900 to-orange-900 rounded-xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-4xl">🛸</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white">Drone Neutralization System</h3>
                        <p className="opacity-80 mt-2 text-slate-300">AI-driven detection pipeline using motion tracking and custom CNN in real-time.</p>
                        <p className="opacity-60 mt-2 font-mono text-sm text-blue-200">PYTHON • OPENCV • CNN • ARDUINO</p>
                    </div>
                    {/* Project 2 */}
                    <div className="group bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all cursor-pointer">
                        <div className="aspect-video bg-gradient-to-br from-blue-900 to-cyan-900 rounded-xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-4xl">🚰</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white">Pipeline Leakage Detection</h3>
                        <p className="opacity-80 mt-2 text-slate-300">Fuzzy Neural Network model achieving 80-85% accuracy with engineered sensor features.</p>
                        <p className="opacity-60 mt-2 font-mono text-sm text-emerald-200">PYTHON • ML • DATA ANALYSIS</p>
                    </div>
                </div>
            </Section>

            {/* Experience & Skills */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-white">EXPERIENCE</h2>
                        <div className="space-y-8">
                            <div className="border-l-2 border-white/20 pl-6">
                                <h4 className="text-xl font-bold">Front-End Intern</h4>
                                <p className="text-sm opacity-60">Skoolsaver • Jan 2025 - Mar 2025</p>
                                <p className="mt-2 text-slate-300">Collaborated with design teams to align product expectations and deliver functional UI components.</p>
                            </div>
                            <div className="border-l-2 border-white/20 pl-6">
                                <h4 className="text-xl font-bold">Event Coordinator</h4>
                                <p className="text-sm opacity-60">IEEE Student Chapter</p>
                                <p className="mt-2 text-slate-300">Organized technical sessions and managed event logistics and volunteer teams.</p>
                            </div>
                            <div className="border-l-2 border-white/20 pl-6">
                                <h4 className="text-xl font-bold">Student Onboarding Volunteer</h4>
                                <p className="text-sm opacity-60">Alliance University</p>
                                <p className="mt-2 text-slate-300">Supported incoming students during academic onboarding and streamlining workflows.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-white">SKILLS</h2>
                        <div className="flex flex-wrap gap-3">
                            {['Python', 'React', 'OpenCV', 'Machine Learning', 'CNN', 'Data Analysis', 'Git/GitHub', 'Power BI', 'Linux', 'Troubleshooting'].map((skill, i) => (
                                <span key={i} className="px-4 py-2 bg-white/10 rounded-lg text-white/90 border border-white/5 hover:bg-white hover:text-black transition-colors cursor-default text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-8 mt-12 tracking-tight text-white">EDUCATION</h2>
                        <div>
                            <h4 className="text-xl font-bold">B.Tech in Information Technology</h4>
                            <p className="text-sm opacity-60">Alliance University (2022-2026)</p>
                            <p className="text-slate-300">CGPA: 8.0</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Contact */}
            <Section>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white">CONTACT</h2>
                <p className="text-xl opacity-80 mb-8 max-w-xl text-slate-200">
                    Feel free to reach out for collaborations or opportunities.
                </p>
                <a href="mailto:somnathpaul818@gmail.com" className="text-2xl md:text-4xl font-serif underline decoration-1 underline-offset-8 hover:opacity-50 transition-opacity text-white">
                    somnathpaul818@gmail.com
                </a>
                <div className="mt-12 flex gap-8">
                    <a href="https://github.com/The-Nitrozeus" target="_blank" rel="noreferrer" className="text-white hover:text-purple-400 transition-colors">GITHUB</a>
                    <a href="https://linkedin.com/in/somnath-paul01" target="_blank" rel="noreferrer" className="text-white hover:text-blue-400 transition-colors">LINKEDIN</a>
                </div>
            </Section>
        </div>
    )
}
