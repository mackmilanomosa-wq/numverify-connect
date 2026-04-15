import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Video, MessageCircle, Phone, ArrowRight, ShieldCheck, Moon, Sun, Search, MoreVertical, CheckCheck, Mic, Plus, Smile, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_LIGHT_BG = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/2d59d185-9fc2-47ee-8fba-51ae63e26595/whatsapp-light-bg-824911bf-1776292214433.webp";
const WHATSAPP_DARK_BG = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/2d59d185-9fc2-47ee-8fba-51ae63e26595/whatsapp-dark-bg-acfb8188-1776292219300.webp";

export default function App() {
  const [step, setStep] = useState<"welcome" | "phone" | "otp">("welcome");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync theme with document class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleNext = () => {
    if (step === "welcome") setStep("phone");
    else if (step === "phone") {
      toast.success("OTP sent to your phone!", {
        description: "A 6-digit code has been sent to +1 (555) 000-0000",
      });
      setStep("otp");
    } else {
      toast.success("Welcome to Mack C!", {
        description: "Your account has been successfully verified.",
      });
      setStep("welcome");
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans transition-colors duration-300">
      <Toaster position="top-center" richColors />
      
      {/* WhatsApp Inspired Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-header-bg text-header-foreground shadow-md transition-colors">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight">Mack C</span>
              <p className="text-[10px] opacity-80 leading-none">Private & Secure</p>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full text-header-foreground hover:bg-white/10">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-header-foreground hover:bg-white/10">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-header-foreground hover:bg-white/10">
              <MoreVertical className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24 pb-12 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <AnimatePresence mode="wait">
          {step === "welcome" && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-5xl w-full grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  End-to-end encrypted
                </div>
                <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl text-foreground">
                  Simple. Secure. <br />
                  <span className="text-primary">Reliable messaging.</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  With Mack C, you'll get fast, simple, secure messaging and calling for free*, available on phones all over the world.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" onClick={handleNext} className="h-14 px-10 rounded-full text-lg font-bold shadow-xl bg-primary hover:bg-primary/90 transition-all transform hover:scale-105">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <p className="w-full text-xs text-muted-foreground">*Data charges may apply. Contact your provider for details.</p>
                </div>

                <div className="flex items-center gap-8 pt-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-2">
                       <MessageCircle className="text-primary w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium">Chat</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-2">
                       <Video className="text-primary w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium">Video</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-2">
                       <Phone className="text-primary w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium">Voice</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                {/* Mock Chat Interface Preview */}
                <div className="relative mx-auto max-w-[320px] aspect-[9/18.5] bg-card rounded-[2.5rem] border-[8px] border-foreground/5 shadow-2xl overflow-hidden">
                  {/* Chat Wallpaper Background */}
                  <div 
                    className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none"
                    style={{ 
                      backgroundImage: `url(${isDarkMode ? WHATSAPP_DARK_BG : WHATSAPP_LIGHT_BG})`,
                      backgroundSize: "cover"
                    }}
                  />
                  
                  {/* Mock Chat Header */}
                  <div className="relative h-14 bg-secondary flex items-center px-4 gap-2 border-b">
                    <div className="w-8 h-8 rounded-full bg-muted overflow-hidden">
                       <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold truncate text-foreground">Felix K.</p>
                      <p className="text-[10px] text-primary font-medium">Online</p>
                    </div>
                    <Video className="w-4 h-4 text-primary" />
                    <Phone className="w-4 h-4 text-primary" />
                  </div>

                  {/* Mock Messages */}
                  <div className="relative flex-1 p-4 space-y-4 h-[calc(100%-100px)] overflow-y-auto">
                    <div className="flex justify-start">
                      <div className="bg-bubble-received text-bubble-received-foreground p-2 px-3 rounded-2xl rounded-tl-none text-xs max-w-[80%] shadow-sm">
                        Hey! Have you seen the new Mack C theme? It looks just like WhatsApp!
                        <div className="text-[10px] opacity-60 text-right mt-1">09:41</div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-bubble-sent text-bubble-sent-foreground p-2 px-3 rounded-2xl rounded-tr-none text-xs max-w-[80%] shadow-sm">
                        Wow, it really does! The green accents and the chat bubbles are spot on. 🔥
                        <div className="flex items-center justify-end gap-1 text-[10px] opacity-60 mt-1">
                          09:42 <CheckCheck className="w-3 h-3 text-sky-500" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-bubble-received text-bubble-received-foreground p-2 px-3 rounded-2xl rounded-tl-none text-xs max-w-[80%] shadow-sm">
                        I love the dark mode version too. It's very easy on the eyes.
                        <div className="text-[10px] opacity-60 text-right mt-1">09:43</div>
                      </div>
                    </div>
                  </div>

                  {/* Mock Input Bar */}
                  <div className="relative h-14 bg-secondary/80 backdrop-blur-sm flex items-center px-2 gap-2">
                    <div className="flex-1 bg-card h-9 rounded-full flex items-center px-3 gap-2 border shadow-sm">
                      <Smile className="w-4 h-4 text-muted-foreground" />
                      <span className="text-[10px] text-muted-foreground flex-1">Message</span>
                      <Plus className="w-4 h-4 text-primary" />
                      <Camera className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-md">
                      <Mic className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Decorative floating elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-3xl animate-pulse" />
              </div>
            </motion.div>
          )}

          {(step === "phone" || step === "otp") && (
            <motion.div
              key="auth"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-md w-full"
            >
              <Card className="border-none shadow-2xl bg-card transition-all">
                <CardHeader className="space-y-2 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 ring-8 ring-primary/5">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      {step === "phone" ? <Phone className="w-5 h-5 text-primary-foreground" /> : <ShieldCheck className="w-5 h-5 text-primary-foreground" />}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {step === "phone" ? "Enter your number" : "Verify number"}
                  </CardTitle>
                  <CardDescription className="text-balance">
                    {step === "phone" 
                      ? "Mack C will send an SMS message to verify your phone number." 
                      : "Wait for the SMS to arrive and enter the 6-digit code below."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {step === "phone" ? (
                      <div className="flex gap-3">
                        <div className="w-24 shrink-0">
                          <Label htmlFor="country-code">Country</Label>
                          <Input id="country-code" value="+1" readOnly className="bg-muted font-bold text-center h-12" />
                        </div>
                        <div className="flex-1">
                          <Label htmlFor="phone-input">Phone Number</Label>
                          <Input 
                            id="phone-input"
                            type="tel" 
                            placeholder="555 000 0000" 
                            className="h-12 text-lg"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Label htmlFor="otp-input">6-Digit Code</Label>
                        <Input 
                          id="otp-input"
                          placeholder="- - - - - -" 
                          className="h-14 text-center text-3xl font-bold tracking-[0.5em]"
                          maxLength={6}
                        />
                        <p className="text-center text-xs text-muted-foreground pt-2">
                          Didn't receive the code? <Button variant="link" className="p-0 h-auto text-primary">Resend</Button>
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <Button className="w-full h-12 rounded-lg text-lg font-bold bg-primary hover:bg-primary/90 transition-colors" onClick={handleNext}>
                    {step === "phone" ? "Next" : "Verify"}
                  </Button>
                  <Button variant="ghost" className="w-full text-muted-foreground" onClick={() => setStep(step === "otp" ? "phone" : "welcome")}>
                    Back
                  </Button>
                </CardFooter>
              </Card>
              <p className="text-center text-[10px] text-muted-foreground mt-8">
                BY CONTINUING, YOU AGREE TO OUR TERMS OF SERVICE AND PRIVACY POLICY
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* WhatsApp Inspired Bottom FAB (Only on Mobile-like view or decoration) */}
      <div className="fixed bottom-6 right-6 md:hidden">
        <Button size="icon" className="w-14 h-14 rounded-full shadow-2xl bg-primary text-primary-foreground">
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}