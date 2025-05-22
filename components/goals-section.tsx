import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Target, Heart } from "lucide-react"

interface GoalsSectionProps {
  goals: {
    shortTerm: string[]
    longTerm: string[]
  }
  hobbies: string[]
}

export default function GoalsSection({ goals, hobbies }: GoalsSectionProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 animate-fade-in">
      <div className="space-y-6">
        <Card className="hover-lift transition-all duration-300 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center hover-scale">
              <Target className="mr-2 h-5 w-5 text-rose-500 animate-pulse" />
              Short-term Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {goals.shortTerm.map((goal, index) => (
                <li key={index} className={`flex items-start hover-scale animate-slide-in-right delay-${index * 100}`}>
                  <CheckCircle2 className="mr-2 h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors duration-300" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="hover-lift transition-all duration-300 animate-fade-in delay-200">
          <CardHeader>
            <CardTitle className="flex items-center hover-scale">
              <Target className="mr-2 h-5 w-5 text-purple-500 animate-pulse" />
              Long-term Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {goals.longTerm.map((goal, index) => (
                <li
                  key={index}
                  className={`flex items-start hover-scale animate-slide-in-right delay-${index * 100 + 300}`}
                >
                  <CheckCircle2 className="mr-2 h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors duration-300" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="hover-lift transition-all duration-300 animate-fade-in delay-400">
        <CardHeader>
          <CardTitle className="flex items-center hover-scale">
            <Heart className="mr-2 h-5 w-5 text-rose-500 animate-bounce-subtle" />
            Hobbies & Interests
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className={`flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover-scale hover-bright transition-all duration-300 animate-fade-in delay-${index * 50 + 500}`}
              >
                <span>{hobby}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
