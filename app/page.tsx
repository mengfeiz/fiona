import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Calendar,
  Linkedin,
  MessageCircle,
  ExternalLink,
  Zap,
  Globe,
  Briefcase,
  Brain,
  GraduationCap,
  Mic,
  Award,
  Users,
  TrendingUp,
  Building,
  Heart,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#1F1F1F] to-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F14E4E]/10 via-[#006C9A]/10 to-[#93C9E9]/10" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-[#F14E4E] via-[#006C9A] to-[#93C9E9] bg-clip-text text-transparent">
                Fiona Zhang
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-[#93C9E9] mb-4 font-medium">
              Bridging AI, E-commerce, Education, and Global Innovation
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="outline" className="border-[#F14E4E] text-[#F14E4E] bg-[#F14E4E]/10">
                Entrepreneur
              </Badge>
              <Badge variant="outline" className="border-[#006C9A] text-[#006C9A] bg-[#006C9A]/10">
                Investor
              </Badge>
              <Badge variant="outline" className="border-[#93C9E9] text-[#93C9E9] bg-[#93C9E9]/10">
                Youth Advocate
              </Badge>
            </div>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Cofounder of Bay Area Innovest North America | Founder of Visionlist Commons | CEO of CapMate |
              Ex-Microsoft
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[#F14E4E] to-[#006C9A] hover:opacity-90 text-white" asChild>
                <a href="https://calendly.com/mengfeizhang888/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Call
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-[#93C9E9] text-[#93C9E9] hover:bg-[#93C9E9]/10" asChild>
                <a href="mailto:mengfeizhang888@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#1F1F1F]/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              About <span className="text-[#F14E4E]">Fiona</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Column */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F14E4E]/20 via-[#006C9A]/20 to-[#93C9E9]/20 rounded-2xl blur-xl transform rotate-3"></div>
                  <img
                    src="/images/fiona-headshot.jpg"
                    alt="Fiona Zhang - Professional headshot"
                    className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>

              {/* Content Column */}
              <div className="order-1 lg:order-2">
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed mb-6">
                  Fiona Zhang is a globally oriented entrepreneur, investor, and youth advocate committed to fostering cross-border innovation. She is the cofounder of Bay Area Innovest North America, and the founder of Visionlist Commons, a U.S.-based 501(c)(3) nonprofit that supports Gen Z founders worldwide, and the CEO of CapMate, a founder-investor matchmaking platform. Through these platforms, Fiona incubates ventures at the intersection of artificial intelligence, mentorship, digital commerce, and cross-cultural collaboration.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    Her tech journey began at Microsoft, and she has since been recognized as an AACYF U25 Leader and an APEA Young Leader. Today, Fiona continues to champion the next generation of innovators across Silicon Valley and Asia by advancing entrepreneurship, education, and equitable access to capital.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="https://lapost.us/?p=72065" target="_blank" rel="noopener noreferrer">
                    <Badge className="bg-[#F14E4E]/20 text-[#F14E4E] border-[#F14E4E]/30 cursor-pointer hover:bg-[#F14E4E]/30 transition-colors">
                      <Award className="mr-1 h-3 w-3" />
                      AACYF U25 Leader
                    </Badge>
                  </a>
                  <Badge className="bg-[#006C9A]/20 text-[#006C9A] border-[#006C9A]/30">
                    <Award className="mr-1 h-3 w-3" />
                    APEA Young Leader
                  </Badge>
                  <Badge className="bg-[#93C9E9]/20 text-[#93C9E9] border-[#93C9E9]/30">
                    <Building className="mr-1 h-3 w-3" />
                    Ex-Microsoft
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies & Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Companies & <span className="text-[#006C9A]">Projects</span>
          </h2>

          <div className="grid gap-8 max-w-6xl mx-auto">
            
            {/* Bay Area Innovest */}
            <Card className="bg-[#1F1F1F] border-[#F14E4E]/30 hover:border-[#F14E4E]/50 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#F14E4E]/20 rounded-lg">
                    <Briefcase className="h-6 w-6 text-[#F14E4E]" />
                  </div>
                  <div>
                    <a href="https://www.bayareainnovest.com/" target="_blank" rel="noopener noreferrer" className="block">
                      <CardTitle className="text-white text-2xl hover:text-[#F14E4E] transition-colors">Bay Area Innovest (BAI) 💼</CardTitle>
                      <CardDescription className="text-gray-400">
                        Global platform for tech innovation and investment
                      </CardDescription>
                    </a>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Bay Area Innovest (BAI) is a global platform for tech innovation and cross-border industrial
                  investment, empowering enterprises through integrated incubation, capital, and industry services
                  across AI, consumer products, healthtech, and global commerce.
                </p>
                <div className="flex gap-2">
                  <Badge className="bg-[#F14E4E]/20 text-[#F14E4E]">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    Investment
                  </Badge>
                  <Badge className="bg-[#F14E4E]/20 text-[#F14E4E]">Incubation</Badge>
                  <Badge className="bg-[#F14E4E]/20 text-[#F14E4E]">Cross-border</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Visionlist Commons */}
            <Card className="bg-[#1F1F1F] border-[#006C9A]/30 hover:border-[#006C9A]/50 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#006C9A]/20 rounded-lg">
                    <Globe className="h-6 w-6 text-[#006C9A]" />
                  </div>
                  <div>
                    <a href="https://www.visionlistcommons.org/" target="_blank" rel="noopener noreferrer" className="block">
                      <CardTitle className="text-white text-2xl hover:text-[#006C9A] transition-colors">Visionlist Commons 🌍</CardTitle>
                      <CardDescription className="text-gray-400">
                        501(c)(3) nonprofit supporting Gen Z founders
                      </CardDescription>
                    </a>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  A 501(c)(3) nonprofit supporting Gen Z founders through grants, connections, and knowledge sharing.
                  Backed by 100+ VC communities and university innovation clubs worldwide.
                </p>
                <div className="flex gap-2">
                  <Badge className="bg-[#006C9A]/20 text-[#006C9A]">
                    <Heart className="mr-1 h-3 w-3" />
                    Nonprofit
                  </Badge>
                  <Badge className="bg-[#006C9A]/20 text-[#006C9A]">
                    <Users className="mr-1 h-3 w-3" />
                    Gen Z Support
                  </Badge>
                  <Badge className="bg-[#006C9A]/20 text-[#006C9A]">Global</Badge>
                </div>
              </CardContent>
            </Card>

            {/* CapMate */}
            <Card className="bg-[#1F1F1F] border-[#FF6B6B]/30 hover:border-[#FF6B6B]/50 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#FF6B6B]/20 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-[#FF6B6B]" />
                  </div>
                  <div>
                    <a href="https://capmate.pro" target="_blank" rel="noopener noreferrer" className="block">
                      <CardTitle className="text-white text-2xl hover:text-[#FF6B6B] transition-colors">CapMate 🚀</CardTitle>
                      <CardDescription className="text-gray-400">
                        Your CMB for founder & investor
                      </CardDescription>
                    </a>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  CapMate is your CMB (Chief Matchmaking Business) for founder & investor connections. 
                  Swipe right to your next unicorn - connecting innovative founders with visionary investors 
                  to build the future together.
                </p>
                <div className="flex gap-2">
                  <Badge className="bg-[#FF6B6B]/20 text-[#FF6B6B]">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    Matchmaking
                  </Badge>
                  <Badge className="bg-[#FF6B6B]/20 text-[#FF6B6B]">Founder-Investor</Badge>
                  <Badge className="bg-[#FF6B6B]/20 text-[#FF6B6B]">Networking</Badge>
                </div>
              </CardContent>
            </Card>

            {/* FMAE School */}
            <Card className="bg-[#1F1F1F] border-[#93C9E9]/30 hover:border-[#93C9E9]/50 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#93C9E9]/20 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-[#93C9E9]" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl">FMAE School 🎓</CardTitle>
                    <CardDescription className="text-gray-400">
                      Global AI + Business Master's Degree (3 Years)
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 font-medium">
                  Where elite education meets entrepreneurial acceleration
                </p>
                <div className="space-y-2 mb-4">
                  <h4 className="text-[#93C9E9] font-semibold">Program Highlights:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>🎓 3-year U.S. master's degree with dual track: AI + Digital Business or Education Psychology</li>
                    <li>📚 Accredited by the U.S. Department of Education and SEVP; includes F-1 visa and legal U.S. residency for up to 3 years</li>
                    <li>💼 Includes CPT/OPT work authorization—average salary $50K+ during study</li>
                    <li>🌐 Joint delivery across California and online; monthly start dates, flexible for international students</li>
                    <li>🧑‍🏫 Open to college diploma holders; includes optional Montessori + California Early Childhood Teaching Credentials</li>
                    <li>💰 Cost-effective tuition ranging from $14K–$23K depending on the program</li>
                  </ul>
                </div>
                <div className="flex gap-2">
                  <Badge className="bg-[#93C9E9]/20 text-[#93C9E9]">Education</Badge>
                  <Badge className="bg-[#93C9E9]/20 text-[#93C9E9]">AI Curriculum</Badge>
                  <Badge className="bg-[#93C9E9]/20 text-[#93C9E9]">Global</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Speaking & Events */}
      <section className="py-20 bg-[#1F1F1F]/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Speaking & <span className="text-[#F14E4E]">Events</span>
            </h2>
            <p className="text-gray-300 mb-8">Fiona has spoken at and judged global forums such as:</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-[#1F1F1F] border-[#006C9A]/30">
                <CardContent className="p-6">
                  <a href="http://english.pudong.gov.cn/chinashftz/2024-08/22/c_1019839.htm" target="_blank" rel="noopener noreferrer" className="block">
                    <div className="flex items-center gap-3 mb-2">
                      <Mic className="h-5 w-5 text-[#006C9A]" />
                      <h3 className="text-white font-semibold hover:text-[#006C9A] transition-colors">ZLead Global Tech Entrepreneurship Conference</h3>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-[#1F1F1F] border-[#006C9A]/30">
                <CardContent className="p-6">
                  <a href="https://nyweekly.com/business/visionlist-commons-successfully-hosts-the-socal-entrepreneurship-annual-summit-focusing-on-innovation-and-capital-integration/" target="_blank" rel="noopener noreferrer" className="block">
                    <div className="flex items-center gap-3 mb-2">
                      <Mic className="h-5 w-5 text-[#006C9A]" />
                      <h3 className="text-white font-semibold hover:text-[#006C9A] transition-colors">SoCal Entrepreneurship Annual Summit</h3>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-[#1F1F1F] border-[#F14E4E]/30">
                <CardContent className="p-6">
                  <a href="https://news.mit.edu/2023/students-pitch-transformative-ideas-generative-ai-mit-ignite-competition-1121" target="_blank" rel="noopener noreferrer" className="block">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="h-5 w-5 text-[#F14E4E]" />
                      <h3 className="text-white font-semibold hover:text-[#F14E4E] transition-colors">MIT GenAI Pitch Competition</h3>
                    </div>
                    <Badge className="bg-[#F14E4E]/20 text-[#F14E4E]">🏆 1st Place</Badge>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-[#1F1F1F] border-[#006C9A]/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Mic className="h-5 w-5 text-[#006C9A]" />
                    <h3 className="text-white font-semibold">Global Youth Entrepreneurship AI Summit, Dubai</h3>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" className="bg-gradient-to-r from-[#F14E4E] to-[#006C9A] hover:opacity-90 text-white" asChild>
              <a href="https://calendly.com/mengfeizhang888/30min" target="_blank" rel="noopener noreferrer">
                <Mic className="mr-2 h-5 w-5" />
                Invite Fiona to Speak
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">
              Connect with <span className="text-[#93C9E9]">Fiona</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Dialog>
                <DialogTrigger asChild>
                  <Card className="bg-[#1F1F1F] border-[#93C9E9]/30 hover:border-[#93C9E9]/50 transition-colors cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <MessageCircle className="h-8 w-8 text-[#93C9E9] mx-auto mb-3" />
                      <h3 className="text-white font-semibold mb-2">WeChat</h3>
                      <p className="text-gray-400 text-sm">Click to view QR Code</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="bg-[#1F1F1F] border-[#93C9E9]/30 max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-white text-center">Connect on WeChat</DialogTitle>
                    <DialogDescription className="text-gray-400 text-center">
                      Scan the QR code below to add Fiona as a friend on WeChat
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col items-center space-y-4 p-4">
                    <div className="bg-white p-4 rounded-lg">
                      <img
                        src="/images/wechat-qr.jpg"
                        alt="Fiona's WeChat QR Code"
                        className="w-full max-w-xs mx-auto"
                      />
                    </div>
                    <p className="text-gray-300 text-sm text-center">
                      Open WeChat and use "Scan QR Code" to add me as a friend
                    </p>
                  </div>
                </DialogContent>
              </Dialog>

              <Card className="bg-[#1F1F1F] border-[#006C9A]/30 hover:border-[#006C9A]/50 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <a href="https://www.linkedin.com/in/mengfei-219822183/" target="_blank" rel="noopener noreferrer" className="block">
                    <Linkedin className="h-8 w-8 text-[#006C9A] mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                    <p className="text-gray-400 text-sm">Professional Network</p>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-[#1F1F1F] border-[#F14E4E]/30 hover:border-[#F14E4E]/50 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-[#F14E4E] mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-gray-400 text-sm">mengfeizhang888@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="bg-[#1F1F1F] border-[#93C9E9]/30 hover:border-[#93C9E9]/50 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <a href="https://calendly.com/mengfeizhang888/30min" target="_blank" rel="noopener noreferrer" className="block">
                    <Calendar className="h-8 w-8 text-[#93C9E9] mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-2">Book a Call</h3>
                    <p className="text-gray-400 text-sm">Calendly Link</p>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0A0A0A] border-t border-[#1F1F1F]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400 mb-2">"Innovate across Shanghai, LA, and the Mars"</p>
            <Separator className="my-4 bg-[#1F1F1F]" />
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-500">
              <p>© 2025 Fiona Zhang | All rights reserved</p>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="hover:text-[#93C9E9] transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
