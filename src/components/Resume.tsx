
import { Download, Calendar, MapPin, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Resume = () => {
  const experiences = [
    {
      company: 'MapRecruit',
      position: 'Associate Software Engineer',
      period: '2024 - 2025',
      location: 'Hyderabad, Telangana, India',
      projects: [
      {
        title: 'Data Indexing and Search with Elasticsearch',
        achievements: [
          "Developed data pipelines to extract, transform, and load (ETL) data from MongoDB into Elasticsearch",
          "Optimized Elasticsearch indexing and query performance for fast and relevant search results",
          "Designed REST APIs to interact with Elasticsearch for various search functionalities",
          "Implemented search-related features, including full-text search, filtering, and ranking",
          "Monitored and maintained Elasticsearch clusters for scalability and stability"
        ]
      },
      {
        title: 'NLP-based Model Training with spaCy',
        achievements: [
          "Developed custom NLP models for entity recognition, text classification, and parsing using spaCy",
          "Created and annotated training datasets for improving model accuracy",
          "Designed and optimized preprocessing pipelines for text normalization, tokenization, and stemming",
          "Integrated trained models into Flask-based APIs for deployment in real-world applications",
          "Conducted model evaluations and fine-tuning for better performance."
        ]
      }
    ]
    }
    // {
    //   company: 'StartupXYZ',
    //   position: 'Frontend Developer',
    //   period: '2020 - 2022',
    //   location: 'New York, NY',
    //   achievements: [
    //     'Built responsive web applications serving 50K+ monthly active users',
    //     'Collaborated with design team to implement pixel-perfect UI components',
    //     'Integrated third-party APIs and payment systems (Stripe, PayPal)',
    //     'Improved code coverage from 45% to 85% through comprehensive testing'
    //   ]
    // },
    // {
    //   company: 'Digital Agency Pro',
    //   position: 'Junior Frontend Developer',
    //   period: '2019 - 2020',
    //   location: 'Austin, TX',
    //   achievements: [
    //     'Developed client websites using React, HTML5, CSS3, and JavaScript',
    //     'Worked closely with designers to translate mockups into functional interfaces',
    //     'Optimized websites for SEO and accessibility standards',
    //     'Maintained and updated existing client projects'
    //   ]
    // }
  ];

  const education = [
    {
      institution: 'Khammam Institute Of Technology and Sciences',
      degree: "B.Tech in Computer Science and Engineering",
      period: '2019 - 2023',
      achievements: [
        'President of Computer Science Club'
      ]
    }
  ];

  const certifications = [
    'Problem Solving(Python Basic) - HackerRank',
    'Google Analytics Certified',
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
                        {exp.projects.map((project, projectIndex) => (
        <div key={projectIndex} className="space-y-2">
          <h4 className="text-white font-medium">
            Project {projectIndex + 1}: {project.title}
          </h4>
          <ul className="space-y-2">
            {project.achievements.map((achievement, i) => (
              <li key={i} className="text-gray-300 text-sm flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
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
