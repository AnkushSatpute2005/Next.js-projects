"use client"
import React from 'react'
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";


const dashboard = () => {
  const { data: session } = useSession();
  if(!session) {
      const router = useRouter()
      router.push("/login")
    }
  return (
    <div>
      dashboard
    </div>
  )
}

export default dashboard
