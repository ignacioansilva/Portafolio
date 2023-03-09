import graffiti from "../imagenes/Section1.avif"

export default function SectionGetInTouch () {
    return (
        <div>
        <section>
        <div className="lg:bg-transparent text-white lg:min-h-0
    lg:bg-home-bg bg-cover overflow-hidden bg-no-repeat bg-center bg-home-responsive min-h-screen w-full">
        
        </div>
  <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div class="relative z-10 lg:py-16">
        <div class="relative h-64 sm:h-80 lg:h-full">
          <img
            alt="Graffiti"
            src={graffiti}
            class="absolute inset-0 h-2/3 w-full object-cover"
          />
        </div>
      </div>

      <div class="relative flex items-center bg-gray-100">
        <span
          class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div class="p-8 sm:p-16 lg:p-24">
          <h2 class="text-2xl font-bold sm:text-3xl">
            If you are looking for a Full Stack Developer, Contact Me!
          </h2>

          <p class="mt-4 text-gray-600">
          My name is Ignacio. I'm 20 years old and I'm a Full Stack Developer, passionate about technology and web development. I´ve studied at Soy Henry from the beginning of 2022, and I also completed some programming courses with which I learned to use JavaScript, TypeScript, React, Node.js, Express, MySQL, Git, GitHub. Currently I'm looking for my first job as a Developer.
          </p>

          <a
            href="https://www.linkedin.com/in/ignacio-silva-54824723b/"
            target="_blank"
            rel="noreferrer"
            class="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}