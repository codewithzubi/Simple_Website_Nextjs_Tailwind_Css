import React from "react"

const Hero = () => {
  return (
    <div className="home-page">
   <div className="bg-gray-800 text-white py-16 px-8 font-sans">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-x-6 gap-y-8">
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl font-semibold mb-4">Well Come Our Website✨</h2>
      <p className="text-base text-gray-300">
        Upgrade your skills with our premium courses. Enroll now and access exclusive content.
      </p>
    </div>

    <div className="md:w-1/2 flex justify-center space-x-2">
      <button type="button" className="bg-yellow-400 text-gray-800 py-3 px-6 font-semibold rounded-full">
       Learn More..
      </button>
      <button type="button" className="bg-yellow-400 text-gray-800 py-3 px-6 font-semibold  rounded-full">
        Contact Me
      </button>
    </div>
  </div>
</div>








  </div>
  )
}

export default Hero
