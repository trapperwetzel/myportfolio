export default function Home() {
    return (
        <div className="custom-slideInUp bg-black text-white">

            {/* Hero + Card‑Nav Section */}
            <section className="relative w-full overflow-hidden py-32 text-center">
                {/* Foreground: title, subtitle, then nav‑cards */}
                <div className="relative z-10 mx-auto max-w-3xl px-4">
                    <h1 className="text-5xl font-bold drop-shadow-lg md:text-6xl">
                        Trapper's Portfolio
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 italic md:text-2xl">
                        yes... it is my real name.
                    </p>

                    {/* NAV‑CARDS GRID */}
                    <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 justify-items-center gap-6 px-4 sm:grid-cols-3">

                        {/* Projects Card */}
                        <a
                            href="/projects"
                            className="flex w-60 flex-col rounded-lg border border-purple-500/30 bg-zinc-900 p-6 shadow-lg transition-shadow duration-300 hover:shadow-purple-500/40"
                        >
                            <h3 className="mb-2 text-2xl font-semibold text-white">
                                Projects
                            </h3>
                            <p className="text-gray-400">Check out my work.</p>
                        </a>

                        {/* About Me Card */}
                        <a
                            href="/about"
                            className="flex w-60 flex-col rounded-lg border border-purple-500/30 bg-zinc-900 p-6 shadow-lg transition-shadow duration-300 hover:shadow-purple-500/40"
                        >
                            <h3 className="mb-2 text-2xl font-semibold text-white">
                                About Me
                            </h3>
                            <p className="text-gray-400">Learn more about me.</p>
                        </a>

                        {/* Resume Card */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="flex w-60 flex-col rounded-lg border border-purple-500/30 bg-zinc-900 p-6 shadow-lg transition-shadow duration-300 hover:shadow-purple-500/40"
                        >
                            <h3 className="mb-2 text-2xl font-semibold text-white">
                                Resume
                            </h3>
                            <p className="text-gray-400">Download my CV.</p>
                        </a>

                    </div>
                </div>
            </section>
        </div>
    );
}
