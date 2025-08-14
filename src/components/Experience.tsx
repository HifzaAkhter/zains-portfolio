import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    // --- CV Experiences ---
    {
      type: "work",
      title: "SEO Content Writer",
      company: "Tangent Technologies, Pakistan",
      period: "December 2024 – Present",
      description:
        "Specializing in writing SEO-optimized content for websites, blogs, and digital marketing campaigns.",
      achievements: [
        "Developed high-ranking SEO content strategies",
        "Collaborated with marketing teams to align content with branding",
        "Conducted keyword research to improve search engine performance",
      ],
    },
    {
      type: "work",
      title: "SEO Content Writer",
      company: "Rabt Marketing, Islamabad, Pakistan",
      period: "September 2023 – January 2025",
      description:
        "Created optimized articles and marketing content to boost brand visibility.",
      achievements: [
        "Managed SEO content for multiple clients",
        "Applied on-page SEO techniques for better rankings",
        "Increased website traffic through targeted content",
      ],
    },
    {
      type: "work",
      title: "Copywriter",
      company: "Operations PRO (Pvt) Ltd, Pakistan",
      period: "September 2022 – December 2023",
      description:
        "Crafted compelling copy for advertisements, campaigns, and branding.",
      achievements: [
        "Delivered persuasive content for marketing campaigns",
        "Collaborated with designers to create engaging materials",
        "Maintained brand voice across different media",
      ],
    },
   
   
    // --- CV Education ---
    {
      type: "education",
      title: "Masters in Engineering Management – Project Management",
      company: "Bahria University",
      period: "Ongoing",
      description:
        "Pursuing advanced studies in engineering management with focus on project leadership and planning.",
      achievements: [
        "Studying leadership in technical environments",
        "Exploring risk and quality management techniques",
        "Gaining advanced project planning skills",
      ],
    },
    {
      type: "education",
      title: "Bachelor of Science in Software Engineering",
      company: "COMSATS University Islamabad, Wah Cantt Campus",
      period: "September 2021 - May 2025",
      description:
        "Pursuing comprehensive education in software engineering with focus on modern development practices and emerging technologies.",
      achievements: [
        "Relevant Coursework: Data Structures, Algorithms, Databases",
        "Strong academic performance in core subjects",
        "Active participation in coding projects and software development",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            My academic journey and professional experience in content writing, engineering, and project management.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-3 rounded-full ${
                      exp.type === "work" ? "bg-blue-100" : "bg-green-100"
                    }`}
                  >
                    {exp.type === "work" ? (
                      <Briefcase
                        className={`${
                          exp.type === "work" ? "text-blue-600" : "text-green-600"
                        }`}
                        size={24}
                      />
                    ) : (
                      <GraduationCap className="text-green-600" size={24} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 font-medium text-lg">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <Calendar size={16} className="text-gray-500 mr-2" />
                  <span
                    className={`px-3 py-1 rounded text-sm font-medium ${
                      exp.type === "work"
                        ? "text-blue-600 bg-blue-50"
                        : "text-green-600 bg-green-50"
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                {exp.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-gray-800 font-semibold mb-3">
                  Key Highlights:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600 flex items-start">
                      <span
                        className={`mr-3 mt-1.5 w-2 h-2 rounded-full ${
                          exp.type === "work" ? "bg-blue-500" : "bg-green-500"
                        }`}
                      ></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
