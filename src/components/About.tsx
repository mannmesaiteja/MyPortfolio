
import { Code, Award, Film, Music } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Python', level: 95 },
    { name: 'Flask', level: 70 },
    { name: 'Django', level: 40 },
    { name: 'DSA', level: 40 },
    { name: 'NLP', level: 37 },
    { name: 'Elasticsearch', level: 70 },
  ];

  const interests = [
    { icon: Code, label: 'Open Source' },
    { icon: Award, label: 'Cricket Enthusiast' },
    { icon: Music, label: 'Listening Music' },
    { icon: Film, label: 'Watching Movies' },
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
                  I'm a Backend Software Engineer with 8 months of experience, focused on Python-based 
                  development, API integration, and automation.
                </p>
                <p>
                  I've worked with Flask, Django, MongoDB, Sql, and implemented JWT-based authentication.I also 
                  have hands-on experience with Elasticsearch for search functionality and NLP projects 
                  involving text analysis.
                </p>
                <p>
                  I continuously strive to improve my skills in Python, system design, and emerging technologies
                  like Generative AI.
                </p>
                <p>
                  Currently, I am looking for challenging opportunities where I can contribute to impactful 
                  projects, enhance my development skills and grow as a software engineer.
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
