"use client"

import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useState } from "react"
import { usersData } from "@/data/user-data"

interface UserSelectorProps {
  selectedUserId: string
  onUserChange: (userId: string) => void
}

export function UserSelector({ selectedUserId, onUserChange }: UserSelectorProps) {
  const [open, setOpen] = useState(false)

  const selectedUser = usersData.find((user) => user.id === selectedUserId)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full md:w-[200px] justify-between hover-lift transition-all duration-300"
        >
          {selectedUser ? selectedUser.name : "Select user..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full md:w-[200px] p-0 animate-scale">
        <Command>
          <CommandInput placeholder="Search users..." className="hover-bright" />
          <CommandList>
            <CommandEmpty>No user found.</CommandEmpty>
            <CommandGroup>
              {usersData.map((user) => (
                <CommandItem
                  key={user.id}
                  value={user.id}
                  onSelect={() => {
                    onUserChange(user.id)
                    setOpen(false)
                  }}
                  className="hover-scale transition-all duration-200"
                >
                  <Check className={cn("mr-2 h-4 w-4", selectedUserId === user.id ? "opacity-100" : "opacity-0")} />
                  {user.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
