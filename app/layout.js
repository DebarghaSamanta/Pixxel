import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import { Toaster } from "sonner";
import FloatingShapes from "@/components/FloatingShapes";
import Header from "@/components/ui/Header";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";import { shadesOfPurple } from "@clerk/themes";
;
const inter = Inter({subsets:['latin']});

export const metadata = {
  title: "ImageNet",
  description: "Ai image editor",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning={true}>
        <head />
        <body
          className={inter.className} suppressHydrationWarning={true}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ClerkProvider appearance={{baseTheme:shadesOfPurple}}>
            <ConvexClientProvider>
            <Header />
            <main className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
              <FloatingShapes/>
              <Toaster richColors/>
              {children}
            </main>
            </ConvexClientProvider>
            </ClerkProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
