import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hi, I'm Sailesh Risal
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300">Computer Engineering Student</h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg">
              2nd semester student passionate about full-stack development, building innovative solutions with modern
              technologies.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            <Button variant="outline" size="lg">
              View Projects
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-slate-400" />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                <Image
                  src="https://photos.app.goo.gl/5XgZqRAdxC1spzCb8"
                  alt="Profile"
                  width={300}
                  height={300}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
