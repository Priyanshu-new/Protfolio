import React, { useState, useRef } from "react"; // Imported useRef
import { Download, X, ExternalLink, Code, Mail, Phone, MapPin, Github, Linkedin, GraduationCap, Users, FileWarning, Trophy } from 'lucide-react'; // Added Trophy icon

// Techy single-file React portfolio (TailwindCSS)
// Dark, code-style aesthetic with embedded resume preview modal

export default function App() {
  const [showResumeModal, setShowResumeModal] = useState(false);
  
  // Ref to control the native HTML <dialog> element
  const imageModalRef = useRef(null);

  // Define both image URLs:
  // 1. The full image shown when the modal is opened (original)
  const fullModalImageUrl = "https://eiulzukwfulgkhzs.public.blob.vercel-storage.com/Screenshot%202025-11-19%20062134.png"; 
  // 2. The cropped image shown on the main page (new link)
  const mainDisplayImageUrl = "https://eiulzukwfulgkhzs.public.blob.vercel-storage.com/portfolio%20image%20croped.png";
  
  // Download Link (User-specified Google Drive URL) - Used for the explicit download button
  const resumeDownloadPath = "https://drive.google.com/uc?export=download&id=1_PKMhOowenviaPdzpyxRKPuFoCbMDhcX"; 
  
  // Embed/Preview Link (Uses the Google Drive 'view' link for embedding, which is more reliable than local file path)
  const resumeEmbedPath = "https://drive.google.com/file/d/1_PKMhOowenviaPdzpyxRKPuFoCbMDhcX/preview"; 

  // Function to open the dialog
  const openImageModal = () => {
    if (imageModalRef.current) {
      imageModalRef.current.showModal();
    }
  };

  // Function to close the dialog
  const closeImageModal = () => {
    if (imageModalRef.current) {
      imageModalRef.current.close();
    }
  };

  // Data for Achievements and Certifications
  const achievements = [
    {
      id: 1,
      title: "Google AI/ML Webinar Certificate",
      issuer: "Google",
      date: "November 30, 2025", 
      description: "Participation in a focused webinar by Google covering advanced topics in Artificial Intelligence and Machine Learning, demonstrating commitment to continuous learning in the domain.",
      icon: <Trophy size={20} className="text-emerald-400" />,
      link: "https://eiulzukwfulgkhzs.public.blob.vercel-storage.com/google%20.jpg",
    },
    {
      id: 2,
      title: "Advanced Data Science Webinar",
      issuer: "Simplilearn | SkillUp", // <-- UPDATED ISSUER
      date: "November 29, 2025",
      description: "Completed an in-depth webinar focused on cutting-edge techniques and best practices in data science, enhancing skills in data analysis and predictive modeling.",
      icon: <Code size={20} className="text-teal-400" />,
      link: "https://eiulzukwfulgkhzs.public.blob.vercel-storage.com/not%20google.jpg",
    },
    {
      id: 3,
      title: "HCL Technologies Webinar Attendance",
      issuer: "HCL Technologies",
      date: "November 8, 2025",
      description: "Attended a professional webinar hosted by HCL Technologies, focusing on industry trends, digital transformation, and enterprise technology solutions.",
      icon: <Users size={20} className="text-sky-400" />,
      link: "https://eiulzukwfulgkhzs.public.blob.vercel-storage.com/hcl%20webinar.jpg",
    },
    {
      id: 4,
      title: "HP LIFE Data Science & Analytics Course",
      issuer: "HP Foundation",
      date: "November 25, 2025",
      description: "Successfully completed the HP LIFE online course covering leading data science practices, methodologies, and tools, reinforcing knowledge in data-driven approaches for business.",
      icon: <Code size={20} className="text-teal-400" />,
      link: "https://eiulzukwfulgkhzs.public.blob.vercel-storage.com/hp%20basic%20certification.jpeg",
    },
    {
      id: 5,
      title: "Deloitte Technology Job Simulation",
      issuer: "Deloitte (Issued by Forage)",
      date: "November 16, 2025",
      description: "Completed practical tasks in Coding and Development, simulating a real-world technology role within Deloitte, demonstrating readiness for professional tech challenges.",
      icon: <GraduationCap size={20} className="text-sky-400" />,
      link: "https://eiulzukwfulgkhzs.public.blob.vercel-storage.com/Deloitte%20certification.jpeg",
    },
  ];


  return (
    <div className="min-h-screen bg-[#0b1020] text-gray-200 font-sans relative overflow-hidden scanline-overlay">
      {/* Custom CSS for a pervasive 'techy' scanline effect */}
      <style>{`
        .scanline-overlay::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            background: repeating-linear-gradient(
                to bottom,
                transparent 0%,
                rgba(15, 25, 40, 0.4) 1px,
                transparent 2px
            );
            opacity: 0.3;
            z-index: 50;
        }
        .digital-glow {
            box-shadow: 0 0 10px rgba(6, 182, 212, 0.5), 0 0 20px rgba(6, 182, 212, 0.3);
        }
        /* Style for the native <dialog> backdrop */
        dialog::backdrop {
            background-color: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(5px);
        }
      `}</style>
      
      {/* animated grid background */}
      <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#0ea5a4" stopOpacity={0.07} />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.06} />
          </linearGradient>
        </defs>
        <rect width="1200" height="800" fill="url(#g1)" />
        <g stroke="#0ea5a4" strokeOpacity={0.06} strokeWidth="1">
          {/* Vertical lines */}
          {Array.from({ length: 30 }).map((_, i) => (
            <line key={i} x1={i * 40} y1={0} x2={i * 40} y2={800} />
          ))}
          {/* Horizontal lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={"h" + i} x1={0} y1={i * 40} x2={1200} y2={i * 40} />
          ))}
        </g>
      </svg>

      <header className="relative z-10 sticky top-0 backdrop-blur-sm bg-[#0b1020]/80 border-b border-sky-800/30">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* The initial logo PK is still here */}
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-teal-400 flex items-center justify-center text-gray-900 font-extrabold tracking-wider text-lg digital-glow">PK</div>
            <div>
              <h1 className="text-xl font-mono font-semibold">Priyanshu K.</h1>
              <p className="text-xs text-gray-400 hidden sm:block font-mono tracking-wide">B.Tech (AI & Data Science) · Python · ML · Web</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-300 font-mono">
            <a href="#projects" className="hover:text-teal-300 transition duration-200">/projects</a>
            <a href="#skills" className="hover:text-teal-300 transition duration-200 hidden sm:inline">/stack</a>
            <a href="#contact" className="hover:text-teal-300 transition duration-200">/contact</a>
            <button 
              onClick={() => setShowResumeModal(true)}
              className="px-3 py-1 border border-sky-600/50 rounded text-xs hover:bg-sky-900/40 transition duration-200 hidden sm:inline-flex items-center gap-1 text-sky-400 font-bold"
            >
              <Download size={12} /> RESUME
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 relative z-10">
        {/* HERO - terminal + headline */}
        <section id="hero" className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            
            {/* --- PROFILE IMAGE: Now wrapped in a clickable button --- */}
            <div className="mb-6 flex justify-center sm:justify-start">
              <button 
                onClick={openImageModal} // Opens the dialog using the ref function
                className="block cursor-pointer focus:outline-none focus:ring-4 focus:ring-teal-500/50 rounded-xl"
              >
                <img
                  src={mainDisplayImageUrl} // <--- Displaying the new, cropped image
                  alt="Priyanshu Kesharwani Professional Portrait"
                  // Removed crossOrigin="anonymous" as the CDN handles this
                  // Styling for larger size (w-48 h-48), rounded square look (rounded-xl), and glowing effect
                  // Using fixed pixel values here for demonstration, but keeping w-48 h-48 for responsiveness
                  className="w-48 h-48 md:w-[12rem] md:h-[12rem] rounded-xl digital-glow object-cover transition-all duration-300 transform shadow-2xl shadow-teal-500/60 hover:scale-[1.03] hover:-translate-y-1"
                  onError={(e) => {
                      // Fallback in case the provided image URL fails to load.
                      e.target.onerror = null;
                      // Fallback to a placeholder image with P K initials
                      e.target.src = "https://placehold.co/192x192/1a4768/00bcd4?text=P+K"; 
                  }}
                />
              </button>
            </div>
            {/* ------------------------- */}

            <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-200 font-mono tracking-tight">
              &gt; Priyanshu Kesharwani
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl font-mono">
              AI & Data Science Undergraduate // Specializing in Python, Machine Learning, and deploying innovative, full-stack web solutions.
            </p>
            <div className="mt-6 reorganize_contact_info text-sm text-gray-400 space-y-2 font-mono">
              <div className="flex items-center gap-2"><MapPin size={16} className="text-teal-400"/> Location: Bhopal, India</div>
              <div className="flex items-center gap-2"><Phone size={16} className="text-teal-400"/> Phone: +91 79742 98624</div>
              <div className="flex items-center gap-2"><Mail size={16} className="text-teal-400"/> Email: <a href="mailto:priyanshukesharwani.offical@gmail.com" className="text-sky-400 hover:underline">priyanshukesharwani.offical@gmail.com</a></div>
              {/* --- NEW KAGGLE LINK --- */}
              <div className="flex items-center gap-2"><Trophy size={16} className="text-teal-400"/> Kaggle: <a href="https://www.kaggle.com/priyanshulovedata" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">/priyanshulovedata</a></div>
              {/* ----------------------- */}
              <div className="flex items-center gap-2"><Linkedin size={16} className="text-teal-400"/> Link: <a href="https://linkedin.com/in/priyanshu-keshrawani-7" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">/in/priyanshu-keshrawani-7</a></div>
              <div className="flex items-center gap-2"><Github size={16} className="text-teal-400"/> Repo: <a href="https://github.com/Priyanshu-new" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">/Priyanshu-new</a></div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 font-mono">
              <a href="#projects" className="inline-block px-5 py-3 rounded-lg bg-teal-500 text-black font-bold hover:bg-teal-400 transition duration-300 shadow-lg shadow-teal-900/50">
                Execute &gt; Projects
              </a>

              {/* Download button: opens preview modal. The element target for navbar link has id "download-resume-button" */}
              <button
                id="download-resume-button"
                onClick={() => setShowResumeModal(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-sky-600 text-sky-400 font-bold hover:bg-sky-900/30 transition duration-300 shadow-md shadow-sky-900/40"
                aria-haspopup="dialog"
              >
                <Download size={20} /> View Resume.pdf
              </button>
            </div>
          </div>

          <aside className="bg-[#040810] border border-sky-900/50 rounded-lg p-4 font-mono text-sm text-green-400 shadow-xl self-stretch h-full">
            <div className="flex items-center gap-2 mb-3 border-b border-green-400/30 pb-2">
                <Code size={16} className="text-green-400"/> <span className="text-white font-bold">~/.terminal_status</span>
            </div>
            <pre className="whitespace-pre-wrap leading-relaxed">{`
$ cd /usr/pkesh/core
$ ./initialize_portfolio.sh
  [STATUS] Core user initialized.
  [SCAN] Dependencies:
    Python: 3.10.x // OK
    Node/React: 18.x // OK
    Database: SQL/NoSQL // OK
  [SYNC] Global data sync complete.
  [INFO] Ready for connection @ 127.0.0.1:8080
$ execute --open-to-work
`}</pre>
          </aside>
        </section>

        {/* STACK */}
        <section id="skills" className="mt-16 pt-8 border-t border-sky-800/30">
          <h3 className="text-3xl font-semibold text-white font-mono mb-6">/ Stack & Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkillCard 
                title="AI & ML Engineering"
                icon={<Code size={20} className="text-teal-400" />}
                skills={["Python (Pandas, NumPy)", "TensorFlow, PyTorch", "Scikit-learn", "Data Preprocessing", "Predictive Modeling"]}
                className="col-span-1"
            />
            <SkillCard 
                title="Full-Stack Development"
                icon={<ExternalLink size={20} className="text-sky-400" />}
                skills={["React, JavaScript", "Tailwind CSS", "HTML5/CSS3", "RESTful APIs", "Git/GitHub"]}
                className="col-span-1"
            />
            <SkillCard 
                title="Project Leadership"
                icon={<Users size={20} className="text-emerald-400" />}
                skills={["Team Coordination", "Hackathon Innovation", "Rapid Prototyping", "System Architecture", "Time Management"]}
                className="col-span-1"
            />
          </div>
        </section>

        {/* PROJECTS - techy cards */}
        <section id="projects" className="mt-16 pt-8 border-t border-sky-800/30">
          <h3 className="text-3xl font-semibold text-white font-mono mb-6">/ Projects & Experience</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
                title="Samadhan 2.0 — National Hackathon"
                time="Sep 2025 – Present"
                role="Team Lead & Full Stack Developer"
                description="Spearheaded a cross-functional team to build a hybrid Web + AI solution addressing logistics challenges. Architected system design and integrated predictive AI models with a responsive UI. Delivered a functional prototype under strict deadlines."
                tags={["Full-Stack", "AI/ML", "System Design", "React", "Python"]} // Added tags
                link={null}
            />

            <ProjectCard
                title="Smart India Hackathon — Team CROP.AI"
                time="Aug 2025"
                role="AI Researcher & Developer"
                description="Developed CROP.AI, an AI-driven agriculture optimization model forecasting crop suitability and disease risks. Streamlined preprocessing pipelines and integrated predictive workflows into the product."
                tags={["Python", "AI/ML", "Data Science", "Forecasting", "Scikit-learn"]} // Added tags
                link="https://fabulous-dusk-645ff2.netlify.app/#home" 
            />

            <ProjectCard
                title="AbleForAll — Accessible Communication Website"
                time="Sep 2025"
                role="Frontend Developer"
                description="Pioneered the development of an assistive platform for speech & hearing‑impaired users. Built a fully responsive UI ensuring accessibility compliance. Improved navigation & engagement metrics."
                tags={["Frontend", "Accessibility", "HTML/CSS/JS", "Responsive Design", "Vercel"]} // Added tags
                link="https://ableforall.vercel.app"
            />
          </div>
        </section>

        {/* ACHIEVEMENTS & CERTIFICATIONS (New Section) */}
        <section id="achievements" className="mt-16 pt-8 border-t border-sky-800/30">
          <h3 className="text-3xl font-semibold text-white font-mono mb-6">/ Achievements & Certifications</h3>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sorting the achievements to show the newest (estimated date) at the top */}
            {achievements.sort((a, b) => new Date(b.date) - new Date(a.date)).map(item => (
                <AchievementCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </main>
      
      {/* NEW FOOTER replacing the old #contact section and the old footer */}
      <footer id="contact" className="bg-[#040810] border-t border-sky-800/30 relative z-10">
          <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 font-mono">
              
              {/* Column 1: Identity & Summary */}
              <div>
                  <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-teal-400 flex items-center justify-center text-gray-900 font-extrabold tracking-wider text-lg digital-glow">PK</div>
                      <h3 className="text-xl font-semibold text-white">Priyanshu K.</h3>
                  </div>
                  <p className="mt-4 text-sm text-gray-400 max-w-sm">
                      AI & Data Science undergraduate, specializing in Python, ML, and building robust, innovative full-stack solutions.
                  </p>
              </div>

              {/* Column 2: Quick Links / Site Map */}
              <div>
                  <h4 className="text-lg font-bold text-teal-300 mb-4">Site Map</h4>
                  <ul className="space-y-2 text-sm">
                      <li><a href="#projects" className="text-gray-400 hover:text-sky-400 transition duration-200">/projects</a></li>
                      <li><a href="#skills" className="text-gray-400 hover:text-sky-400 transition duration-200">/stack</a></li>
                      {/* Updated link to point to the new achievements section */}
                      <li><a href="#achievements" className="text-gray-400 hover:text-sky-400 transition duration-200">/achievements</a></li>
                      <li>
                        <button 
                          onClick={() => setShowResumeModal(true)} 
                          className="text-gray-400 hover:text-sky-400 transition duration-200 text-left"
                        >
                          /resume.pdf
                        </button>
                      </li>
                  </ul>
              </div>

              {/* Column 3: Connect (The original selected content) */}
              <div>
                  <h4 className="text-lg font-bold text-teal-300 mb-4">Initiate Connection &gt;</h4>
                  <div className="text-sm text-gray-300 space-y-3">
                      <ContactLink icon={<Phone size={18} />} label="Phone" value="+91 79742 98624" href="tel:+917974298624" />
                      <ContactLink icon={<Mail size={18} />} label="Email" value="priyanshukesharwani.offical@gmail.com" href="mailto:priyanshukesharwani.offical@gmail.com" />
                      {/* --- KAGGLE CONTACT LINK --- */}
                      <ContactLink icon={<Trophy size={18} />} label="Kaggle" value="/priyanshulovedata" href="https://www.kaggle.com/priyanshulovedata" />
                      {/* ------------------------------- */}
                      <ContactLink icon={<Github size={18} />} label="GitHub" value="/Priyanshu-new" href="https://github.com/Priyanshu-new" />
                      <ContactLink icon={<Linkedin size={18} />} label="LinkedIn" value="/priyanshu-keshrawani-7" href="https://linkedin.com/in/priyanshu-keshrawani-7" />
                  </div>
              </div>
          </div>
          
          {/* Copyright & System Status - Moved from old footer */}
          <div className="max-w-6xl mx-auto px-6 py-4 text-center border-t border-sky-900/50">
              <p className="text-xs text-gray-600 font-mono">
                  [INIT] &copy; {new Date().getFullYear()} Priyanshu Kesharwani. All rights reserved.
                  <span className="ml-4">[SYSTEM] Status: ONLINE. Built with <Code size={12} className="inline-block text-gray-600"/> React + Tailwind.</span>
              </p>
          </div>
      </footer>
      
        {/* IMAGE PREVIEW MODAL - Using NATIVE <DIALOG> */}
        <dialog 
            ref={imageModalRef} 
            className="p-0 border-none bg-transparent w-full max-w-lg lg:max-w-xl rounded-xl shadow-2xl overflow-visible"
            aria-labelledby="image-modal-title"
        >
          <div className="bg-[#071018] border border-sky-500/50 rounded-xl flex flex-col digital-glow">
            <div className="flex items-center justify-between p-3 border-b border-sky-500/50 bg-[#040810] rounded-t-xl flex-shrink-0">
              <h2 id="image-modal-title" className="font-mono text-sm text-teal-300 font-bold">PROFILE IMAGE VIEW</h2>
              <button 
                onClick={closeImageModal} // Closes the dialog using the ref function
                className="text-sm px-3 py-1 rounded-lg border border-sky-600/50 text-sky-400 inline-flex items-center gap-1 hover:bg-sky-900/30 transition duration-200 font-mono"
              >
                <X size={16} /> Close
              </button>
            </div>

            {/* Image Display */}
            <div className="p-4 flex justify-center items-center overflow-auto max-h-[80vh]">
              <img
                src={fullModalImageUrl} // <--- Displaying the full image when clicked
                alt="Professional Profile Portrait" 
                // Removed crossOrigin="anonymous"
                className="max-w-full h-auto rounded-lg"
                onError={(e) => {
                    // Fallback for the modal in case the main URL fails (like a GDrive link)
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/400x400/333333/ff0000?text=Error:+Image+Failed+to+Load+(CORS)"; 
                }}
              />
            </div>
          </div>
        </dialog>

        {/* RESUME PREVIEW MODAL (Existing) */}
        {showResumeModal && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="w-full max-w-5xl h-[90vh] bg-[#071018] border border-sky-500/50 rounded-xl flex flex-col shadow-2xl digital-glow">
              <div className="flex items-center justify-between p-4 border-b border-sky-500/50 bg-[#040810] rounded-t-xl flex-shrink-0">
                <h2 id="modal-title" className="font-mono text-base text-teal-300 font-bold">LOADED: Resume_Priyanshu.pdf</h2>
                <div className="flex items-center gap-3">
                  {/* Download button uses the Google Drive download link, opens in a new tab */}
                  <a 
                    href={resumeDownloadPath} 
                    download="Priyanshu_Kesharwani_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm px-4 py-2 rounded-lg bg-teal-500 text-black font-bold inline-flex items-center gap-2 hover:bg-teal-400 transition duration-200"
                  >
                    <Download size={18} /> Download PDF
                  </a>
                  <button onClick={() => setShowResumeModal(false)} className="text-sm px-4 py-2 rounded-lg border border-sky-600/50 text-sky-400 inline-flex items-center gap-2 hover:bg-sky-900/30 transition duration-200 font-mono">
                    <X size={18} /> Close
                  </button>
                </div>
              </div>

              {/* PDF Viewer - Using IFRAME with Google Drive link for reliable embedding */}
              <div className="relative w-full h-full flex-grow">
                <iframe
                    key={showResumeModal ? 'pdf-renderer-active' : 'pdf-renderer-inactive'} 
                    src={resumeEmbedPath} 
                    title="Priyanshu Kesharwani Resume Preview"
                    className="w-full h-full border-none"
                    aria-label="Embedded PDF document of Priyanshu Kesharwani's Resume"
                    allowFullScreen
                    loading="lazy"
                >
                    {/* Fallback for browsers that don't support iframes (rare, but good practice) */}
                    <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-[#071018] text-gray-400 font-mono">
                        <FileWarning size={36} className="text-red-500 mb-4" />
                        <p className="text-xl font-mono text-white mb-3">
                            ERROR 403: PREVIEW BLOCKED
                        </p>
                        <p className="max-w-lg mx-auto">
                            If the resume does not appear, please use the **Download PDF** button above to view the file directly in your browser.
                        </p>
                    </div>
                </iframe>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

// Sub-component for skill cards
const SkillCard = ({ title, icon, skills, className = '' }) => (
    <div className={`p-6 rounded-xl bg-[#040810] border border-sky-900/50 shadow-lg hover:border-sky-500/80 hover:shadow-sky-500/30 transition duration-300 ${className}`}>
        <div className="flex items-center gap-3 mb-3">
            {icon}
            <h4 className="font-mono font-bold text-teal-300 text-xl">{title}</h4>
        </div>
        <ul className="text-sm text-gray-300 space-y-2 list-none font-mono">
            {skills.map((skill, index) => (
                <li key={index} className="flex items-center gap-2"><span className="text-teal-400">#</span> {skill}</li>
            ))}
        </ul>
    </div>
);

// Sub-component for project cards
// UPDATED: Now accepts a 'tags' prop
const ProjectCard = ({ title, time, role, description, tags, link }) => (
    <article className="p-6 rounded-xl bg-[#040810] border border-sky-900/50 shadow-md hover:border-teal-500/80 hover:shadow-teal-500/30 transition duration-300">
        <h4 className="font-mono font-bold text-sky-400 text-lg">{title}</h4>
        <p className="text-xs text-gray-500 mt-1 font-mono">{role} @ {time}</p>
        <p className="mt-3 text-gray-300 text-sm font-sans">{description}</p>
        
        {/* NEW TAGS DISPLAY */}
        {tags && tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-sky-900/50">
                {tags.map((tag, index) => (
                    <span 
                        key={index} 
                        className="text-xs font-mono px-3 py-1 bg-sky-800/30 text-sky-300 rounded-full border border-sky-700/50 shadow-inner"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        )}
        
        {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-teal-400 text-sm mt-3 inline-flex items-center gap-1 hover:underline font-mono">
                [ View Project ] <ExternalLink size={14} />
            </a>
        )}
    </article>
);

// Sub-component for contact links
const ContactLink = ({ icon, label, value, href }) => (
    <div className="flex items-center gap-3">
        {React.cloneElement(icon, { size: 18, className: "text-teal-400 flex-shrink-0" })}
        <div>
            <span className="text-gray-500 mr-2 font-mono">{label}:</span>
            <a 
                href={href} 
                className="font-mono text-gray-300 hover:text-sky-400 transition duration-200"
                target={href.startsWith('http') ? "_blank" : "_self"}
                rel={href.startsWith('http') ? "noopener noreferrer" : ""}
            >
                {value}
            </a>
        </div>
    </div>
);

// NEW Sub-component for Achievement Cards - MODIFIED to handle 'link' prop
const AchievementCard = ({ title, issuer, date, description, icon, link }) => (
    <div className="p-0 rounded-xl bg-[#040810] border border-sky-900/50 shadow-md flex flex-col hover:border-sky-500/80 hover:shadow-sky-500/30 transition duration-300 group">
        
        {/* Wrapping content in <a> if link exists, otherwise use <div> */}
        {link ? (
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-6 flex flex-col flex-grow relative" // Added relative for link icon
            >
                {/* External Link Icon Overlay */}
                <span className="absolute top-3 right-3 text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={18} />
                </span>

                <div className="flex items-center gap-3 mb-3">
                    {React.cloneElement(icon, { size: 24, className: "flex-shrink-0" })}
                    <h4 className="font-mono font-bold text-sky-400 text-xl group-hover:underline">{title}</h4>
                </div>
                <div className="font-mono text-sm text-gray-400 space-y-1">
                    <p><span className="text-teal-300">Issuer:</span> {issuer}</p>
                    <p><span className="text-teal-300">Date:</span> {date}</p>
                </div>
                <p className="mt-3 text-gray-300 text-sm font-sans">{description}</p>
                <span className="mt-2 text-xs text-teal-400 font-mono">Click to view certificate &gt;</span>
            </a>
        ) : (
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                    {React.cloneElement(icon, { size: 24, className: "flex-shrink-0" })}
                    <h4 className="font-mono font-bold text-sky-400 text-xl">{title}</h4>
                </div>
                <div className="font-mono text-sm text-gray-400 space-y-1">
                    <p><span className="text-teal-300">Issuer:</span> {issuer}</p>
                    <p><span className="text-teal-300">Date:</span> {date}</p>
                </div>
                <p className="mt-3 text-gray-300 text-sm font-sans">{description}</p>
            </div>
        )}
    </div>
);

