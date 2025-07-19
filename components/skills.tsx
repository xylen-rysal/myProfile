import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skills = {
    "Programming Languages": ["JavaScript", "Python", "TypeScript", "HTML", "CSS"],
    Frontend: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
    Backend: ["Node.js", "Express.js", "RESTful APIs", "Server-side Rendering"],
    Databases: ["MongoDB", "PostgreSQL", "Database Design"],
    "Tools & Others": ["Git", "GitHub", "VS Code", "Vercel", "npm/yarn"],
  }

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Technologies I work with and continuously learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category} className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
