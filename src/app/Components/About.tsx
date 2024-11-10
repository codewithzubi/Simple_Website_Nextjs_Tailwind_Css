import React from "react";

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
              <img
                alt="Portrait of team member one"
                className="w-24 h-24 rounded-full mx-auto mb-4"
                height="150"
                src="https://storage.googleapis.com/a1aa/image/oXfhAEyQe3mR40w66qgAI4IjNu84kPRIs79hoK9e1bffPz6dC.jpg"
                width="150"
              />
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>

            <div className="team-member bg-white p-6 rounded-lg shadow-md hover:bg-yellow-400 cursor-pointer transition ease-in-out delay-300">
              <img
                alt="Portrait of team member one"
                className="w-24 h-24 rounded-full mx-auto mb-4"
                height="150"
                src="https://storage.googleapis.com/a1aa/image/oXfhAEyQe3mR40w66qgAI4IjNu84kPRIs79hoK9e1bffPz6dC.jpg"
                width="150"
              />
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="team-member bg-white p-6 rounded-lg shadow-md hover:bg-yellow-400 cursor-pointer transition ease-in-out delay-300">
              <img
                alt="Portrait of team member one"
                className="w-24 h-24 rounded-full mx-auto mb-4"
                height="150"
                src="https://storage.googleapis.com/a1aa/image/oXfhAEyQe3mR40w66qgAI4IjNu84kPRIs79hoK9e1bffPz6dC.jpg"
                width="150"
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
