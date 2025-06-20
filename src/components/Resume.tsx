
import { Download, Calendar, MapPin, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Resume = () => {
  const experiences = [
    {
      company: 'TechCorp Solutions',
      position: 'Senior Frontend Developer',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      achievements: [
        'Led a team of 4 developers in building a new customer portal that increased user engagement by 40%',
        'Architected and implemented a component library used across 5+ products',
        'Reduced page load times by 60% through performance optimization techniques',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      company: 'StartupXYZ',
      position: 'Frontend Developer',
      period: '2020 - 2022',
      location: 'New York, NY',
      achievements: [
        'Built responsive web applications serving 50K+ monthly active users',
        'Collaborated with design team to implement pixel-perfect UI components',
        'Integrated third-party APIs and payment systems (Stripe, PayPal)',
        'Improved code coverage from 45% to 85% through comprehensive testing'
      ]
    },
    {
      company: 'Digital Agency Pro',
      position: 'Junior Frontend Developer',
      period: '2019 - 2020',
      location: 'Austin, TX',
      achievements: [
        'Developed client websites using React, HTML5, CSS3, and JavaScript',
        'Worked closely with designers to translate mockups into functional interfaces',
        'Optimized websites for SEO and accessibility standards',
        'Maintained and updated existing client projects'
      ]
    }
  ];

  const education = [
    {
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science in Computer Science',
      period: '2015 - 2019',
      achievements: [
        'Magna Cum Laude Graduate',
        'President of Computer Science Club',
        'Dean\'s List for 6 semesters'
      ]
    }
  ];

  const certifications = [
    'AWS Certified Developer - Associate',
    'Google Analytics Certified',
    'React Developer Certification',
    'Agile Development Certification'
  ];

  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 mb-8">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Work Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-blue-500/30">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-2"></div>
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">Education</CardTitle>
              </CardHeader>
              <CardContent>
                {education.map((edu, index) => (
                  <div key={index} className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-white">{edu.degree}</h3>
                      <p className="text-blue-400">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.period}</p>
                    </div>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
