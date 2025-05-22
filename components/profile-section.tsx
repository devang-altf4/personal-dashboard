import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProfileProps {
  user: {
    name: string
    title: string
    avatar: string
    bio: string
    location: string
    email: string
    phone: string
    github: string
    linkedin: string
  }
}

export default function ProfileSection({ user }: ProfileProps) {
  return (
    <div className="space-y-8">
      <Card className="overflow-hidden hover-lift animate-fade-in">
        <div className="h-40 bg-gradient-to-r from-rose-500 to-purple-500 hover-bright transition-all duration-500"></div>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="-mt-16 flex-shrink-0 animate-fade-in">
              <Avatar className="h-24 w-24 border-4 border-white hover-rotate transition-all duration-300">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} className="object-cover" />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-4 animate-slide-up delay-100">
              <div>
                <h2 className="text-2xl font-bold hover-scale inline-block">{user.name}</h2>
                <p className="text-gray-500 dark:text-gray-400 animate-fade-in delay-200">{user.title}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover-scale">
                  <MapPin className="mr-1 h-4 w-4 animate-bounce-subtle" />
                  {user.location}
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover-scale">
                  <Mail className="mr-1 h-4 w-4 animate-bounce-subtle delay-100" />
                  {user.email}
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover-scale">
                  <Phone className="mr-1 h-4 w-4 animate-bounce-subtle delay-200" />
                  {user.phone}
                </div>
              </div>
              <div className="flex gap-2 animate-fade-in delay-300">
                <Button variant="outline" size="sm" asChild className="hover-lift transition-all duration-300">
                  <a href={user.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="hover-lift transition-all duration-300">
                  <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="hover-lift animate-fade-in delay-200">
        <CardHeader>
          <CardTitle className="hover-scale inline-block">About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed animate-slide-in-right">{user.bio}</p>
        </CardContent>
      </Card>
    </div>
  )
}
