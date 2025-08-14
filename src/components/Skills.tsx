import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    { name: "Email Writing", sub: "Copywriting", category: "Content & Marketing" },
    { name: "Landing Pages Writing", sub: "Copywriting", category: "Content & Marketing" },
    { name: "Web Copies", sub: "Copywriting", category: "Content & Marketing" },
    { name: "Meta Ads Copies", sub: "Copywriting", category: "Content & Marketing", description: "An art of making wallets whisper, 'Open me.'" },
    { name: "Onpage SEO", sub: "Blog Writing", category: "Content & Marketing" },
    { name: "Keyword Research", sub: "Blog Writing", category: "Content & Marketing" },
    { name: "Guest Post Writing", sub: "Blog Writing", category: "Content & Marketing" },
    { name: "Brand Storytelling", sub: "Blog Writing", category: "Content & Marketing", description: "Trick Google's spiders. Throw keywords like grenades. Rank above the noise." },
    { name: "LinkedIn Content", sub: "LinkedIn Ghostwriting & Personal Branding", category: "Content & Marketing" },
    { name: "Company Branding", sub: "LinkedIn Ghostwriting & Personal Branding", category: "Content & Marketing" },
    { name: "Engagement Strategy", sub: "LinkedIn Ghostwriting & Personal Branding", category: "Content & Marketing" },
    { name: "Business Development", sub: "LinkedIn Ghostwriting & Personal Branding", category: "Content & Marketing", description: "Making your name echo in empty rooms." },
  ];

  const subCategories = ["Copywriting", "Blog Writing", "LinkedIn Ghostwriting & Personal Branding"];

  const subCategoryColors = {
    "Copywriting": {
      bg: "bg-purple-100 dark:bg-purple-900/30",
      text: "text-purple-600 dark:text-purple-400",
      border: "border-purple-200 dark:border-purple-700/50",
    },
    "Blog Writing": {
      bg: "bg-green-100 dark:bg-green-900/30",
      text: "text-green-600 dark:text-green-400",
      border: "border-green-200 dark:border-green-700/50",
    },
    "LinkedIn Ghostwriting & Personal Branding": {
      bg: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-600 dark:text-blue-400",
      border: "border-blue-200 dark:border-blue-700/50",
    },
  };

  // Aggregate descriptions for each subcategory
  const getCategoryDescription = (sub: string) => {
    const descriptions = skills
      .filter((skill) => skill.sub === sub && skill.description)
      .map((skill) => skill.description);
    return descriptions.length > 0 ? descriptions.join(" ") : "";
  };

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center"
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
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
            >
              {/* Subheading */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
                {sub}
              </h3>

              {/* Category Description */}
              {getCategoryDescription(sub) && (
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 text-center">
                  {getCategoryDescription(sub)}
                </p>
              )}

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-3">
                {skills
                  .filter((skill) => skill.sub === sub)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-block px-4 py-2 ${subCategoryColors[sub].bg} ${subCategoryColors[sub].text} rounded-full text-sm font-medium cursor-default`}
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