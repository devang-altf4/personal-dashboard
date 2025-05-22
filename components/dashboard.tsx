"use client"

import { useState, useEffect } from "react"
import ProfileSection from "./profile-section"
import ExperienceSection from "./experience-section"
import SkillsSection from "./skills-section"
import GoalsSection from "./goals-section"
import { usersData } from "@/data/user-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MobileNav } from "./mobile-nav"
import { UserSelector } from "./user-selector"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("profile")
  const [selectedUserId, setSelectedUserId] = useState(usersData[0].id)
  const [isLoaded, setIsLoaded] = useState(false)

  const selectedUser = usersData.find((user) => user.id === selectedUserId) || usersData[0]

  // Set isLoaded to true after initial render for animations
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-sm transition-all duration-300 animate-slide-down">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white hover-scale">Personal Dashboard</h1>

          <div className="w-full md:w-auto animate-fade-in">
            <UserSelector selectedUserId={selectedUserId} onUserChange={setSelectedUserId} />
          </div>

          <div className="md:hidden">
            <MobileNav />
          </div>
          <nav className="hidden md:block animate-fade-in delay-200">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-4 w-[400px]">
                <TabsTrigger value="profile" className="hover-scale">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="experience" className="hover-scale">
                  Experience
                </TabsTrigger>
                <TabsTrigger value="skills" className="hover-scale">
                  Skills
                </TabsTrigger>
                <TabsTrigger value="goals" className="hover-scale">
                  Goals
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </nav>
        </div>
      </header>

      <main className={`container mx-auto px-4 py-8 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsContent value="profile" className="mt-0">
            <ProfileSection user={selectedUser} />
          </TabsContent>
          <TabsContent value="experience" className="mt-0">
            <ExperienceSection experience={selectedUser.experience} education={selectedUser.education} />
          </TabsContent>
          <TabsContent value="skills" className="mt-0">
            <SkillsSection skills={selectedUser.skills} />
          </TabsContent>
          <TabsContent value="goals" className="mt-0">
            <GoalsSection goals={selectedUser.goals} hobbies={selectedUser.hobbies} />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow-inner py-6 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
          <p className="hover-scale inline-block">
            © {new Date().getFullYear()} Personal Dashboard • View multiple profiles
          </p>
        </div>
      </footer>
    </div>
  )
}
