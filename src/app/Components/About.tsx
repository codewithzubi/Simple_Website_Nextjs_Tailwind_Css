import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="about-page bg-gray-900">
      <section className="about py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
          <p className="text-white mb-8">
            I am a web developer with a passion for creating beautiful and
            functional websites. With years of experience in the industry, I
            have honed my skills in various technologies and frameworks.
          </p>

          <div className="team grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="team-member bg-white p-6 rounded-lg shadow-md hover:bg-yellow-400 cursor-pointer transition ease-in-out delay-300">
              <Image
                src="/pr-1.jpeg" // Path ko slash se start karna hoga
                alt="Your Image Description"
                width={500}
                height={300}
              />

              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>

            <div className="team-member bg-white p-6 rounded-lg shadow-md hover:bg-yellow-400 cursor-pointer transition ease-in-out delay-300">
            <Image
                src="/pr-2.jpeg" // Path ko slash se start karna hoga
                alt="Your Image Description"
                width={500}
                height={300}
              />
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="team-member bg-white p-6 rounded-lg shadow-md hover:bg-yellow-400 cursor-pointer transition ease-in-out delay-300">
            <Image
                src="/pr-3.jpeg" // Path ko slash se start karna hoga
                alt="Your Image Description"
                width={500}
                height={300}
              />
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
