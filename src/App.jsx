import React from "react";

export default function PortfolioSite() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* NAVBAR */}
      <header className="w-full border-b bg-white/70 backdrop-blur sticky top-0 z-50">
        <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
          <div className="font-semibold text-lg">Julian David Osorio</div>
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            <li><a href="#about" className="hover:text-gray-700">About</a></li>
            <li><a href="#projects" className="hover:text-gray-700">Projects</a></li>
            <li><a href="#gallery" className="hover:text-gray-700">Gallery</a></li>
            <li><a href="#life" className="hover:text-gray-700">Life</a></li>
            <li><a href="#skills" className="hover:text-gray-700">Skills</a></li>
            <li><a href="#experience" className="hover:text-gray-700">Experience</a></li>
            <li><a href="#contact" className="hover:text-gray-700">Contact</a></li>
          </ul>
          <a
            href="#contact"
            className="text-xs font-medium border border-gray-300 rounded-xl px-3 py-1 hover:bg-gray-100"
          >
            Get in touch
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="about" className="mx-auto max-w-6xl w-full px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
            Julian David Osorio
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-gray-800 leading-snug">
            Mechanical Engineering student at Brown University '28
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Mechanical engineering student focused on aerospace systems, sensing, and fast physical prototyping. I work across MATLAB (ODE45 / Simulink), Python (pandas data dashboards), SOLIDWORKS CAD, and hands-on hardware.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href="#projects" className="rounded-xl px-4 py-2 bg-black text-white font-medium shadow">See my work</a>
            <a href="#contact" className="rounded-xl px-4 py-2 border border-gray-300 font-medium text-gray-800 hover:bg-gray-100">Let's talk</a>
          </div>
          <div className="text-xs text-gray-500">
            • Brown University '28 • GPA 3.7 • Fluent in English & Spanish • Colombian-American, First Gen
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white shadow p-4 border border-gray-100">
            <div className="text-xs uppercase tracking-wide text-gray-500 font-medium">Focus</div>
            <div className="text-base font-semibold text-gray-900">Aerospace / Mechanical Systems</div>
            <div className="text-xs text-gray-600 leading-relaxed mt-2">Airfoil simulation, structural design, real-time sensor data.</div>
          </div>
          <div className="rounded-2xl bg-white shadow p-4 border border-gray-100">
            <div className="text-xs uppercase tracking-wide text-gray-500 font-medium">Tools</div>
            <div className="text-base font-semibold text-gray-900">SOLIDWORKS · MATLAB · Python</div>
            <div className="text-xs text-gray-600 leading-relaxed mt-2">CAD & drawings, ODE45 modeling, pandas dashboards.</div>
          </div>
          <div className="rounded-2xl bg-white shadow p-4 border border-gray-100">
            <div className="text-xs uppercase tracking-wide text-gray-500 font-medium">Experience</div>
            <div className="text-base font-semibold text-gray-900">TA & Airport Ops</div>
            <div className="text-xs text-gray-600 leading-relaxed mt-2">ENGN 0030 teaching assistant • Tampa Intl Airport Fellowship.</div>
          </div>
          <div className="rounded-2xl bg-white shadow p-4 border border-gray-100">
            <div className="text-xs uppercase tracking-wide text-gray-500 font-medium">Looking For</div>
            <div className="text-base font-semibold text-gray-900">Aerospace / Mechanical Roles</div>
            <div className="text-xs text-gray-600 leading-relaxed mt-2">Open to prototyping, test, and systems work.</div>
          </div>
        </div>
      </section>

      {/* PROJECTS (Resume Only) */}
      <section id="projects" className="w-full bg-white border-t border-b">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-baseline justify-between">
            <span>Projects</span>
            <span className="text-xs font-normal text-gray-500">From my resume</span>
          </h2>

          {/* NOTE FOR JULIAN:
             Only include projects that are currently on your resume.
             Duplicate / extra concepts have been removed.
             Each card below = one resume project.
             You can duplicate/remove cards directly.
          */}

          <div className="grid gap-6 md:grid-cols-2">
            {/* PROJECT CARD TEMPLATE */}
            <article className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[10px] uppercase tracking-wide text-gray-500 font-medium">Category (ex: MATLAB Simulation)</div>
              <div className="text-lg font-semibold text-gray-900 mt-1">Project Title (matches resume)</div>
              <p className="text-sm text-gray-700 leading-relaxed mt-3">
                Short 2-3 line impact statement. Talk about what the thing does, what problem it solves, and why it matters.
              </p>
              <ul className="text-xs text-gray-600 leading-relaxed mt-4 list-disc pl-4 space-y-1">
                <li>Strong bullet 1 from your resume</li>
                <li>Strong bullet 2 from your resume</li>
                <li>Strong bullet 3 from your resume</li>
              </ul>
              <div className="text-[11px] text-gray-500 font-mono mt-4">Tech stack / tools</div>
            </article>

            {/* Duplicate the card above for each real resume project */}
          </div>
        </div>
      </section>

      {/* GALLERY: SolidWorks / Hardware */}
      <section id="gallery" className="mx-auto max-w-6xl w-full px-4 py-14">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Design Gallery</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-xl">
          Selected SOLIDWORKS parts and assemblies. Brackets, mounts, and rotating components designed for manufacturability and fast prototype iteration.
        </p>

        {/* Image grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Assembly: axle / frame / linkage */}
          <figure className="rounded-2xl border bg-white shadow-sm overflow-hidden flex flex-col">
            <div className="bg-gray-100 aspect-square flex items-center justify-center text-[11px] text-gray-400">
              {/* TODO: replace div below with <img src="/img/assembly_axle.png" className="w-full h-full object-cover" /> */}
              Assembly – axles, linkages, housing
            </div>
            <figcaption className="p-3 text-[11px] text-gray-600 leading-relaxed">
              Multi-part assembly with axle, spacers, and central housing. Designed for alignment and load transfer.
            </figcaption>
          </figure>

          {/* Bracket / mount */}
          <figure className="rounded-2xl border bg-white shadow-sm overflow-hidden flex flex-col">
            <div className="bg-gray-100 aspect-square flex items-center justify-center text-[11px] text-gray-400">
              {/* TODO: replace div below with <img src="/img/bracket_mount.png" className="w-full h-full object-cover" /> */}
              Sheet metal style bracket / mount
            </div>
            <figcaption className="p-3 text-[11px] text-gray-600 leading-relaxed">
              Compact bracket / mount with slotted adjustability and pass-through holes for fastener routing.
            </figcaption>
          </figure>

          {/* Rotor / wheel */}
          <figure className="rounded-2xl border bg-white shadow-sm overflow-hidden flex flex-col">
            <div className="bg-gray-100 aspect-square flex items-center justify-center text-[11px] text-gray-400">
              {/* TODO: replace div below with <img src="/img/rotor_disc.png" className="w-full h-full object-cover" /> */}
              Slotted rotating component
            </div>
            <figcaption className="p-3 text-[11px] text-gray-600 leading-relaxed">
              Radial slotted disk component. Weight-relieved, symmetric, keyed hub for torque transfer.
            </figcaption>
          </figure>
        </div>

        <p className="text-[10px] text-gray-400 mt-4">
          (These will render as real images on deploy. Swap each gray box with the actual screenshots you sent.)
        </p>
      </section>

      {/* PERSONAL / LIFE SECTION */}
      <section id="life" className="w-full bg-gray-50 border-t">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Outside the Lab</h2>
          <p className="text-sm text-gray-700 leading-relaxed max-w-2xl">
            Family, training, travel, and the stuff that keeps me grounded. Engineering matters to me, but this is why I’m doing it.
          </p>

          <div className="grid gap-6 md:grid-cols-3 mt-8">
            {/* personal card 1 */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm flex flex-col gap-3">
              <div className="rounded-xl overflow-hidden border aspect-video">
              <img
                src="/img/family_photo.jpg"
                alt="Julian with parents"
                className="w-full h-full object-cover"
              />
            </div>
              <div className="text-sm font-semibold text-gray-900">Family</div>
              <div className="text-xs text-gray-700 leading-relaxed">
                As the son of two Colombian-American immigrants, I was raised in a loving family with a supportive community of friends, neighbors, and teachers that allowed me to become the student-athlete I am today. What I understand today about the topics of resilience, hard work, and sacrifice I learned from them.
              </div>
            </div>

            {/* personal card 2 */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm flex flex-col gap-3">
              <div className="rounded-xl overflow-hidden border aspect-video">
              <img
                src="/img/rugby_photo.jpg"
                alt="Julian with teammates after match"
                className="w-full h-full object-cover"
              />
            </div>
              <div className="text-sm font-semibold text-gray-900">Athletics</div>
              <div className="text-xs text-gray-700 leading-relaxed">
                Brown Men's Club Rugby (wing/back). Rugby, lifting, and conditioning taught me discipline, communication, and how to show up for a team.
              </div>
            </div>

            {/* personal card 3 */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm flex flex-col gap-3">
              <div className="flex flex-col gap-3">
              <div className="rounded-xl overflow-hidden border aspect-video">
                <img
                  src="/img/travel1.jpg"
                  alt="Julian with friends celebrating"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border aspect-video">
                <img
                  src="/img/travel2.jpg"
                  alt="Friends and celebration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border aspect-video">
                <img
                  src="/img/travel3.jpg"
                  alt="Milestone moment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
              <div className="text-sm font-semibold text-gray-900">Travel / Life</div>
              <div className="text-xs text-gray-700 leading-relaxed">
                Moments with the people I’m grateful for. Celebrating progress and keeping perspective outside the classroom.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl w-full px-4 py-14">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Technical Skills</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="font-semibold text-gray-900">Software & Coding</div>
            <ul className="text-gray-700 mt-3 space-y-1 text-xs leading-relaxed">
              <li>MATLAB / Simulink</li>
              <li>Python (pandas, data viz, Streamlit)</li>
              <li>Arduino / C++ for sensors & control</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="font-semibold text-gray-900">Mechanical / Aero</div>
            <ul className="text-gray-700 mt-3 space-y-1 text-xs leading-relaxed">
              <li>SolidWorks CAD & drawings</li>
              <li>Statics, Dynamics, Materials</li>
              <li>Prototype test & iteration</li>
              <li>Basic GD&T, tolerance reasoning</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="font-semibold text-gray-900">Other</div>
            <ul className="text-gray-700 mt-3 space-y-1 text-xs leading-relaxed">
              <li>Hardware bring-up & wiring</li>
              <li>Data cleaning and visualization</li>
              <li>Technical communication & demos</li>
              <li>Leadership & mentoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERIENCE / EDUCATION */}
      <section id="experience" className="w-full bg-gray-50 border-t">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Experience</h2>
          <div className="space-y-6">
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <div>
                  <div className="text-sm font-semibold text-gray-900">Teaching Assistant – ENGN 0030: Introduction to Engineering</div>
                  <div className="text-xs text-gray-600">Brown University</div>
                </div>
                <div className="text-[11px] text-gray-500 font-mono mt-2 md:mt-0">Aug 2025 – Present</div>
              </div>
              <ul className="text-xs text-gray-700 leading-relaxed mt-3 space-y-1">
                <li>Collaborate with professors and course developers to review class material and develop curricular content.</li>
                <li>Support 50+ students weekly in MATLAB and SOLIDWORKS fundamentals.</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <div>
                  <div className="text-sm font-semibold text-gray-900">Fellow – Tampa International Airport Fellowship Program</div>
                  <div className="text-xs text-gray-600">Tampa International Airport</div>
                </div>
                <div className="text-[11px] text-gray-500 font-mono mt-2 md:mt-0">July 2025</div>
              </div>
              <ul className="text-xs text-gray-700 leading-relaxed mt-3 space-y-1">
                <li>Previewed airport operations including airport security, terminal management, and aircraft maintenance.</li>
                <li>Delivered closing presentation to Tampa Bay officials on Cessna maintenance practices at Tampa Executive Airport.</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <div>
                  <div className="text-sm font-semibold text-gray-900">Event Coordinator – Latinx Student Union (LSU)</div>
                  <div className="text-xs text-gray-600">Brown University</div>
                </div>
                <div className="text-[11px] text-gray-500 font-mono mt-2 md:mt-0">Jan 2025 – Present</div>
              </div>
              <ul className="text-xs text-gray-700 leading-relaxed mt-3 space-y-1">
                <li>Coordinate with Brown's Office of Student Affairs to plan community and cultural events.</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <div>
                  <div className="text-sm font-semibold text-gray-900">Executive Coordinator & Tutor – English as a Second Language Program</div>
                  <div className="text-xs text-gray-600">Delbarton School</div>
                </div>
                <div className="text-[11px] text-gray-500 font-mono mt-2 md:mt-0">2022 – 2024</div>
              </div>
              <ul className="text-xs text-gray-700 leading-relaxed mt-3 space-y-1">
                <li>Scheduled and led English/Spanish tutoring for janitorial staff and faculty with different English comfort levels.</li>
                <li>Worked 1-on-1 with advanced learners to prep for the U.S. Citizenship Exam.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl w-full px-4 py-16">
        <div className="rounded-2xl border bg-white p-8 shadow-sm max-w-xl">
          <h2 className="text-xl font-bold text-gray-900">Get in touch</h2>
          <p className="text-sm text-gray-700 leading-relaxed mt-2">
            If you're working on aerospace / mechanical systems and need someone who will build, test, and iterate fast, let's talk.
          </p>
          <div className="mt-6 text-sm">
            <div className="font-semibold text-gray-900">Julian David Osorio</div>
            <div className="text-gray-700">Mechanical Engineering student at Brown University '28</div>
            <div className="text-gray-700">Phone: (973) 460-0977</div>
            <div className="text-gray-700">Email: julian_osorio@brown.edu</div>
            <div className="text-gray-700">GitHub: julianosorio06.github.io • github.com/julianosorio06</div>
            <div className="text-gray-700">LinkedIn: linkedin.com/in/julian-d-osorio • linkedin.com/in/julianosorio06</div>
          </div>
        </div>
      </div>
            <div className="text-gray-700">Brown University '28 – Mechanical Engineering (Aerospace)</div>
            <div className="text-gray-700">Email: julianosorio06@gmail.com</div>
            <div className="text-gray-700">GitHub: github.com/julianosorio06</div>
            <div className="text-gray-700">LinkedIn: linkedin.com/in/julianosorio06</div>
          </div>
        </div>
        <footer className="text-[10px] text-gray-500 mt-10 text-center">
          Built by Julian Osorio • Last updated Oct 25, 2025
        </footer>
      </section>
    </main>
  );
}
@tailwind base;
@tailwind components;
@tailwind utilities;
