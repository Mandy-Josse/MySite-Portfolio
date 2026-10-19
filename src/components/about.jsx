
export default function About() {
  return (
    <section
      id="about"
      className="border-t border-neutral-900 px-8 py-32 md:px-12"
    >
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-widest text-neutral-500">
            About
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Designer,
            <br />
            creator,
            <br />
            <span className="text-neutral-600">problem solver.</span>
          </h2>
        </div>

        <div className="max-w-xl text-lg leading-relaxed text-neutral-400">
          <p>
            I'm a third-year Multimedia and Internet student interested in
            creating visual identities, interfaces and websites.
          </p>

          <p className="mt-6">
            I enjoy working where graphic design and technology meet, turning
            ideas into visual and interactive experiences.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="mb-2 text-neutral-600">Design</p>
              <p className="text-white">
                Illustrator
                <br />
                Photoshop
                <br />
                Figma
              </p>
            </div>

            <div>
              <p className="mb-2 text-neutral-600">Web</p>
              <p className="text-white">
                HTML / CSS
                <br />
                JavaScript
                <br />
                WordPress
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
