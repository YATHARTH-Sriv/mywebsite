export function About() {
  return (
    <section id="about-me" className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),black)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-black sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
        <p className="text-white text-md font-semibold mb-10">About Me</p>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
            <p>
              Hi I am Yatharth A Full Stack Developer trying to build products and figuring out a way to make you pay for it. With Keen interest in AI technologies, I have built projects using LLM Langchain and AI APIs. So If you are building something I would love to talk about it. 
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="/my.jpg"
              className="mx-auto h-24 w-24 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base text-white">
              <div className="font-semibold text-white">Yatharth Srivastava</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-white">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-400">Full Stack Developer</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
