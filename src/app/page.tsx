import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-slate-800 mb-6">
            Welcome to Auth System
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            A comprehensive authentication system built with Next.js, NextAuth, 
            Prisma, and MySQL featuring role-based access control.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link href="/auth/signin">
              <Button size="lg" className="bg-slate-800 hover:bg-slate-700">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="lg" variant="outline">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Secure Authentication
            </h3>
            <p className="text-slate-600">
              Email/password login with OAuth support for Google and GitHub
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Role-Based Access
            </h3>
            <p className="text-slate-600">
              Granular permissions with user and admin roles
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Admin Dashboard
            </h3>
            <p className="text-slate-600">
              Complete user management system for administrators
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}