"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Users,
  Star,
  Download,
  Smartphone,
  CheckCircle,
  Globe,
  Phone,
  Mail,
  Award,
  TrendingUp,
  FileText,
  HeadphonesIcon,
  Zap,
  Lock,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function TameeniProfessional() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const stats = [
    { number: "500,000+", label: "عميل راضي", icon: Users },
    { number: "25+", label: "شركة تأمين", icon: Award },
    { number: "4.9/5", label: "تقييم العملاء", icon: Star },
    { number: "24/7", label: "دعم العملاء", icon: HeadphonesIcon },
  ]

  const features = [
    {
      icon: Shield,
      title: "حماية شاملة",
      description: "تغطية شاملة لسيارتك ضد جميع المخاطر والحوادث",
      color: "bg-blue-500",
    },
    {
      icon: Zap,
      title: "سرعة فائقة",
      description: "احصل على وثيقة التأمين في أقل من 5 دقائق",
      color: "bg-green-500",
    },
    {
      icon: TrendingUp,
      title: "أفضل الأسعار",
      description: "مقارنة فورية للحصول على أفضل العروض",
      color: "bg-purple-500",
    },
    {
      icon: Lock,
      title: "أمان وثقة",
      description: "بياناتك محمية بأعلى معايير الأمان",
      color: "bg-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-white" style={{ direction: "rtl" }}>
      {/* Header */}
      <header className="bg-white backdrop-blur-md border-b border-gray-100 px-4 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">ت</span>
              </div>
              <span className="text-xl font-bold text-gray-900">تأميني</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                الرئيسية
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                تأمين السيارات
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                التأمين الصحي
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                عن الشركة
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
              English
            </Button>
            <Button variant="outline" size="sm" className="border-gray-300">
              تسجيل الدخول
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg"
            >
              إنشاء حساب
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 text-sm font-medium">
                  🚗 المنصة الرائدة في السعودية
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  أول منصة ذكية لـ
                  <span className="text-blue-600"> تأمين السيارات</span> في السعودية
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  احصل على أفضل عروض تأمين السيارات من أكثر من 25 شركة تأمين معتمدة. مقارنة ذكية، أسعار شفافة، وخدمة
                  استثنائية.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg"
                >
                  <Zap className="w-5 h-5 ml-2" />
                  احصل على عرض سعر مجاني
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 hover:border-blue-300 px-8 py-4 text-lg"
                >
                  <FileText className="w-5 h-5 ml-2" />
                  شاهد كيف يعمل
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"
                      ></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-medium">+500,000 عميل راضي</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 font-medium mr-1">4.9 من 5</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="رجل يقف بجانب سيارة فاخرة"
                  width={600}
                  height={500}
                  className="relative rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">تم التأمين بنجاح</p>
                      <p className="text-sm text-gray-600">في أقل من 3 دقائق</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 mb-4 px-4 py-2">✨ مميزات استثنائية</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">لماذا يختار العملاء تأميني؟</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم تجربة تأمين متطورة تجمع بين التكنولوجيا المتقدمة والخدمة الاستثنائية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white bg-opacity-20 text-white border-white border-opacity-30 px-4 py-2">
                  📱 تطبيق متطور
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  حمل تطبيق تأميني
                  <br />
                  واستمتع بتجربة فريدة
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed">
                  تطبيق ذكي يوفر لك جميع خدمات التأمين في مكان واحد. مقارنة سريعة، عروض حصرية، ومتابعة مستمرة لوثائقك.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span className="text-lg">مقارنة فورية بين جميع الشركات</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span className="text-lg">إشعارات ذكية لتجديد التأمين</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span className="text-lg">دعم عملاء مباشر عبر التطبيق</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-6 py-3">
                  <Download className="w-5 h-5 ml-2" />
                  App Store
                </Button>
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-6 py-3">
                  <Download className="w-5 h-5 ml-2" />
                  Google Play
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <div className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-4 shadow-xl">
                      <Smartphone className="w-8 h-8 text-blue-600 mb-2" />
                      <p className="text-sm font-semibold text-gray-900">تطبيق iOS</p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-xl">
                      <Smartphone className="w-8 h-8 text-green-600 mb-2" />
                      <p className="text-sm font-semibold text-gray-900">تطبيق Android</p>
                    </div>
                  </div>
                  <div className="mt-6 bg-white rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-gray-900">تقييم التطبيق</span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">4.9/5</p>
                    <p className="text-sm text-gray-600">من أكثر من 50,000 تقييم</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">جاهز للحصول على أفضل عرض تأمين؟</h2>
              <p className="text-xl text-gray-600">ابدأ الآن واحصل على عرض سعر مخصص في أقل من دقيقتين</p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">أدخل بياناتك</h3>
                  <p className="text-sm text-gray-600">معلومات السيارة والسائق</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">قارن العروض</h3>
                  <p className="text-sm text-gray-600">من أكثر من 25 شركة</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">اختر واشتري</h3>
                  <p className="text-sm text-gray-600">وثيقة فورية ومعتمدة</p>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transition-all duration-300 px-12 py-4 text-lg"
              >
                <Zap className="w-5 h-5 ml-2" />
                ابدأ المقارنة الآن - مجاناً
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ت</span>
                </div>
                <span className="text-xl font-bold">تأميني</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                منصة التأمين الرقمية الرائدة في السعودية. نقدم حلول تأمين ذكية ومبتكرة لحماية ما يهمك.
              </p>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">الخدمات</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    تأمين السيارات
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    التأمين الصحي
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    تأمين السفر
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    تأمين المنازل
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">الشركة</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    من نحن
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    فريق العمل
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    الوظائف
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    الأخبار
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">الدعم</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    مركز المساعدة
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    اتصل بنا
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    الأسئلة الشائعة
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    سياسة الخصوصية
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 تأميني. جميع الحقوق محفوظة. مرخص من البنك المركزي السعودي.</p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                الشروط والأحكام
              </a>
              <a href="#" className="hover:text-white transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-white transition-colors">
                ملفات تعريف الارتباط
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
