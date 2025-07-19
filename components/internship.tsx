import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin, Star } from "lucide-react"

export function Internship() {
  const preferences = [
    "Full-Stack Development",
    "Frontend Development",
    "Backend Development",
    "Software Engineering",
    "Web Development",
  ]

  const availability = {
    duration: "3-6 months",
    startDate: "Summer 2024",
    location: "Remote / On-site",
    commitment: "Full-time",
  }

  return (
    <section
      id="internship"
      className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Available for Internship</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Seeking internship opportunities to apply my skills and gain real-world experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-blue-600" />
                Internship Preferences
              </CardTitle>
              <CardDescription>Areas of interest and preferred roles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-6">
                {preferences.map((pref) => (
                  <Badge key={pref} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                    {pref}
                  </Badge>
                ))}
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <Calendar className="h-4 w-4" />
                  <span>Duration: {availability.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <Star className="h-4 w-4" />
                  <span>Start Date: {availability.startDate}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <MapPin className="h-4 w-4" />
                  <span>Location: {availability.location}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Why Hire Me?</CardTitle>
              <CardDescription>What I bring to your team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">Quick Learner</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Passionate about learning new technologies and adapting to different environments
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">Strong Foundation</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Solid understanding of computer science fundamentals and modern web technologies
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">Team Player</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Excellent communication skills and ability to work collaboratively
                    </p>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Contact Me for Opportunities
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
