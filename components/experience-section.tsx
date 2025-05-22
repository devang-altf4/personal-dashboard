import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CalendarDays } from "lucide-react"

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string
  technologies: string[]
}

interface EducationItem {
  degree: string
  institution: string
  location: string
  period: string
  description: string
  achievements: string[]
}

interface ExperienceSectionProps {
  experience: ExperienceItem[]
  education: EducationItem[]
}

export default function ExperienceSection({ experience, education }: ExperienceSectionProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <Tabs defaultValue="work" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="work" className="hover-scale">
            Work Experience
          </TabsTrigger>
          <TabsTrigger value="education" className="hover-scale">
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent value="work" className="mt-6 space-y-6">
          {experience.map((job, index) => (
            <Card key={index} className={`hover-lift animate-fade-in delay-${index * 100}`}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl hover-scale inline-block">{job.title}</CardTitle>
                    <p className="text-gray-500 dark:text-gray-400 mt-1 animate-fade-in">
                      {job.company} • {job.location}
                    </p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover-scale">
                    <CalendarDays className="mr-1 h-4 w-4 animate-pulse" />
                    {job.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4 animate-slide-in-right">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className={`hover-scale animate-fade-in delay-${techIndex * 50 + 200}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="education" className="mt-6 space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className={`hover-lift animate-fade-in delay-${index * 100}`}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl hover-scale inline-block">{edu.degree}</CardTitle>
                    <p className="text-gray-500 dark:text-gray-400 mt-1 animate-fade-in">
                      {edu.institution} • {edu.location}
                    </p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover-scale">
                    <CalendarDays className="mr-1 h-4 w-4 animate-pulse" />
                    {edu.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4 animate-slide-in-right">{edu.description}</p>
                <div className="space-y-2 animate-fade-in delay-200">
                  <p className="font-medium hover-scale inline-block">Achievements:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {edu.achievements.map((achievement, achieveIndex) => (
                      <li
                        key={achieveIndex}
                        className={`text-gray-700 dark:text-gray-300 hover-scale animate-fade-in delay-${achieveIndex * 100 + 300}`}
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
