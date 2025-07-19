import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Facebook, Instagram, Twitter, Mail } from "lucide-react"

export function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/xylen-rysal",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/saileshRisal",
      color: "hover:text-blue-600",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/sailesh.risal/",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/xylen_rysal/",
      color: "hover:text-pink-500",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/HDynamax",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:saileshrisal5@gmail.com",
      color: "hover:text-red-500",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
          Follow me on social media and let's build something amazing together
        </p>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="lg"
                    className={`flex items-center gap-2 transition-colors ${social.color}`}
                    asChild
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      <IconComponent className="h-5 w-5" />
                      {social.name}
                    </a>
                  </Button>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
