import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './ProjectsPage/Projects';
import Resume from './Resume';

function App() {
    return (
        <div className="flex flex-col">
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;