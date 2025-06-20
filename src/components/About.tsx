
import { Code, Coffee, Gamepad2, Music } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React/Next.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Database Design', level: 70 },
  ];

  const interests = [
    { icon: Code, label: 'Open Source' },
    { icon: Coffee, label: 'Coffee Enthusiast' },
    { icon: Music, label: 'Music Production' },
    { icon: Gamepad2, label: 'Gaming' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-6">My Story</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hi! I'm Alex, a passionate frontend developer with over 5 years of experience 
                  creating digital experiences that matter. I specialize in React, TypeScript, 
                  and modern web technologies.
                </p>
                <p>
                  My journey started with a curiosity about how websites work, which quickly 
                  evolved into a love for crafting intuitive user interfaces. I believe in 
                  writing clean, maintainable code and creating accessible experiences for all users.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open-source projects, 
                  experimenting with new technologies, or exploring the great outdoors with my camera.
                </p>
                <p>
                  I'm always excited to take on new challenges and collaborate with teams 
                  that share my passion for excellence and innovation.
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-6">Interests & Hobbies</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-300">
                    <interest.icon className="w-5 h-5 text-blue-400" />
                    <span>{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <div className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-6">Fun Facts</h3>
              <div className="space-y-3 text-gray-300">
                <p>☕ Coffee consumed while coding: 2,847+ cups</p>
                <p>🚀 Lines of code written: 500,000+</p>
                <p>🌟 Open source contributions: 150+</p>
                <p>🎮 Favorite debugging method: Rubber duck</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
