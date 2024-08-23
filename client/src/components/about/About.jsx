export default function About() {
  return (
    <section className="bg-[#17252a]">
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-screen-lg mx-auto py-16 px-4 gap-10">
        {/* Left section with text */}
        <div className="text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Be heard
          </h1>
          <p className="mb-5 text-sm sm:text-base lg:text-lg text-white">
            Trustpilot is a review platform that’s open to everyone. Share your
            experiences to help others make better choices and encourage
            companies to up their game.
          </p>
          <button className="border-2 bg-transparent font-extrabold text-white border-white px-6 sm:px-8 py-3 rounded-full">
            What we do
          </button>
        </div>

        {/* Right section with report information */}
        <div className="bg-[var(--main-color)] sm:-mt-20 rounded-xl">
          <div className="p-8 sm:p-10 lg:p-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5">
              Our 2024 Transparency Report has landed
            </h1>
            <p className="mb-6 sm:mb-8 lg:mb-10 text-sm sm:text-base lg:text-lg">
              We’re looking back on a year unlike any other. Read about how we
              ensure our platform’s integrity.
            </p>
            <button className="font-extrabold text-white bg-[var(--nav-bg)] px-6 sm:px-8 py-3 rounded-full">
              Take a look
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
