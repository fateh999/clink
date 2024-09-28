import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Scissors,
  Edit,
  BarChart3,
  QrCode,
  Zap,
  Globe,
  Clock,
  Share2,
} from "lucide-react";
import CreateLinkForm from "./components/create-link-form";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white dark:bg-gray-800">
        <Link href="/" className="flex items-center justify-center">
          <Scissors className="h-6 w-6 mr-2 text-blue-500" />
          <span className="font-bold text-xl text-blue-600 dark:text-blue-400">
            Clink
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" className="text-sm font-medium">
            Features
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            Pricing
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            About
          </Button>
          <Link href="/dashboard" passHref>
            <Button variant="ghost" className="text-sm font-medium">
              Dashboard
            </Button>
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Make Your Links{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    Clink
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Shorten, share, and track your links with a simple clink.
                  Boost your online presence with our powerful URL shortener.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <CreateLinkForm />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 border border-blue-200 dark:border-blue-800 p-6 rounded-lg bg-white dark:bg-gray-700">
                <Scissors className="h-12 w-12 mb-2 text-blue-500" />
                <h2 className="text-xl font-bold">Clink and Shrink</h2>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Create short, branded links that make your URLs more
                  shareable.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-blue-200 dark:border-blue-800 p-6 rounded-lg bg-white dark:bg-gray-700">
                <Edit className="h-12 w-12 mb-2 text-blue-500" />
                <h2 className="text-xl font-bold">Edit Redirects</h2>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Change the destination of your short links anytime, keeping
                  your content fresh.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-blue-200 dark:border-blue-800 p-6 rounded-lg bg-white dark:bg-gray-700">
                <BarChart3 className="h-12 w-12 mb-2 text-blue-500" />
                <h2 className="text-xl font-bold">Clink Analytics</h2>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Track clicks and analyze your audience with detailed insights.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-blue-200 dark:border-blue-800 p-6 rounded-lg bg-white dark:bg-gray-700">
                <QrCode className="h-12 w-12 mb-2 text-blue-500" />
                <h2 className="text-xl font-bold">QR Code Generator</h2>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Create QR codes for your short links, perfect for print and
                  offline marketing.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              More Powerful Features
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-start space-x-4">
                <Zap className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-bold">Lightning Fast</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our links are optimized for speed, ensuring quick redirects.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Globe className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-bold">Global CDN</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Links are served from locations worldwide for minimal
                    latency.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-bold">Link Expiration</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Set expiration dates for your links for temporary campaigns.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Share2 className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-bold">Easy Sharing</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Share your shortened links directly to social media
                    platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Start Clinking Today
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Sign up with your Google account and start shortening links in
                  seconds. No credit card required.
                </p>
              </div>
              <Link href="/dashboard" passHref>
                <Button
                  className="inline-flex items-center justify-center rounded text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4"
                  style={{
                    backgroundColor: "#4285F4",
                    color: "#ffffff",
                    boxShadow: "0 2px 4px 0 rgba(0,0,0,.25)",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                  Continue with Google
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white dark:bg-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Clink. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
