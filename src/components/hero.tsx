import heroImage from '../assets/banner-stack.png'
export function Hero() {
  return (<>
  <section className="flex flex-col md:flex-row items-center justify-between px-8 py-5 bg-white">
        <div className="md:w-1/2 mb-8 md:mb-0 space-y-10">
          <h2 className="text-5xl font-bold mb-4">Build Your Ideal <br></br><span className="bg-linear-to-r from-orange-400 via-pink-500 to-purple-800 inline-block text-transparent bg-clip-text"> Development Stack</span></h2>
          <p>Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.</p>
          <div>
            <button className="btn bg-linear-to-r from-orange-400 via-pink-500 to-purple-800 text-white">Explore technologies</button>
      <button className="btn btn-ghost">Learn More</button>
          </div>
        </div>
        <img src={heroImage} alt="Developer working on a laptop" />
      </section>
  </>)}