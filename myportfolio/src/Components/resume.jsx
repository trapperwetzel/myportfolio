

export default function Resume() {
    return (
        <section className="bg-gradient-to-br min-h-screen from-green-900 to-gray-800 p-8 text-white">
            <h1 className="mb-4 font-mono text-4xl font-bold text-green-400">My Resume</h1>

            <a
                href="/resume.pdf"
                download
                className="mt-4 inline-block rounded-lg bg-green-600 px-6 py-3 font-mono font-semibold text-white shadow-lg transition hover:bg-green-700"
            >
                Download Resume
            </a>

            <iframe
                src="/resume.pdf"
                className="mt-8 h-[750px] w-full rounded-xl shadow-lg"
                title="Resume PDF"
            />
        </section>
    )
}
