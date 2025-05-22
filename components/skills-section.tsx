"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from "react"

interface SkillCategory {
  category: string
  items: {
    name: string
    level: number
  }[]
}

interface SkillsSectionProps {
  skills: SkillCategory[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const [showProgress, setShowProgress] = useState(false)

  useEffect(() => {
    // Delay showing progress bars for animation
    const timer = setTimeout(() => {
      setShowProgress(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="grid gap-6 md:grid-cols-2 animate-fade-in">
      {skills.map((category, index) => (
        <Card key={index} className={`hover-lift transition-all duration-300 animate-fade-in delay-${index * 100}`}>
          <CardHeader>
            <CardTitle className="hover-scale inline-block">{category.category}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {category.items.map((skill, skillIndex) => (
                <div key={skillIndex} className={`space-y-2 animate-fade-in delay-${skillIndex * 100 + 200}`}>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium hover-scale">{skill.name}</span>
                    <span className="text-sm text-gray-500 hover-scale">{skill.level}%</span>
                  </div>
                  <Progress
                    value={showProgress ? skill.level : 0}
                    className="h-2 transition-all duration-1000 ease-out hover-bright"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
