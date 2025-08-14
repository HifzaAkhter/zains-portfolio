import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    { name: "On-Page SEO", sub: "SEO & Meta Ads", category: "Content & Marketing" },
    { name: "SEO Content Writing", sub: "SEO & Meta Ads", category: "Content & Marketing" },
    { name: "Copywriting", sub: "SEO & Meta Ads", category: "Content & Marketing" },
    { name: "Keyword Research", sub: "SEO & Meta Ads", category: "Content & Marketing" },
    { name: "Ghostwriting", sub: "Blog & Ghostwriting", category: "Content & Marketing" },
    { name: "Brand Storytelling", sub: "Blog & Ghostwriting", category: "Content & Marketing" },
    { name: "Blog Writing", sub: "Blog & Ghostwriting", category: "Content & Marketing" },
    { name: "LinkedIn Content", sub: "LinkedIn & Personal Branding", category: "Content & Marketing" },
    { name: "Company Branding and Ghost Writing", sub: "LinkedIn & Personal Branding", category: "Content & Marketing" },
    { name: "Social Media Marketing", sub: "LinkedIn & Personal Branding", category: "Content & Marketing" },
  ];

  const subCategories = ["SEO & Meta Ads", "Blog & Ghostwriting", "LinkedIn & Personal Branding"];

  const subCategoryColors = {
    "SEO & Meta Ads": {
      bg: "bg-purple-100 dark:bg-purple-900/30",
      text: "text-purple-600 dark:text-purple-400",
      border: "border-purple-200 dark:border-purple-700/50",
    },
    "Blog & Ghostwriting": {
      bg: "bg-green-100 dark:bg-green-900/30",
      text: "text-green-600 dark:text-green-400",
      border: "border-green-200 dark:border-green-700/50",
    },
    "LinkedIn & Personal Branding": {
      bg: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-600 dark:text-blue-400",
      border: "border-blue-200 dark:border-blue-700/50",
    },
  };

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen flex flex-col items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            A professional set of skills for SEO, blogging, Ghostwriting, Meta Ads, and LinkedIn content.
          </p>
        </div>

        {/* Skills Cards Row */}
        <div className="grid md:grid-cols-3 gap-8">
          {subCategories.map((sub) => (
            <Card
              key={sub}
              className="p-8 bg-gradient-to-br from-white/70 via-gray-50/50 to-white/60 dark:from-gray-800/70 dark:via-gray-700/50 dark:to-gray-800/60 backdrop-blur-md border border-gray-100/50 dark:border-gray-700/50 shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Subheading */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
                {sub}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3 justify-center">
                {skills
                  .filter((skill) => skill.sub === sub)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-block px-4 py-2 ${subCategoryColors[sub].bg} ${subCategoryColors[sub].text} ${subCategoryColors[sub].border} border rounded-full text-sm font-medium hover:scale-105 hover:shadow-md transition-all duration-300 cursor-default`}
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
