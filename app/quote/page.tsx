"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Users,
  Star,
  CheckCircle,
  Phone,
  Mail,
  FileText,
  CreditCard,
  Menu,
  X,
  ArrowLeft,
  Zap,
} from "lucide-react"
import { useState, useEffect } from "react"
import { offerData } from "@/lib/data"
// Add import for the offer data at the top of the file

export default function QuotePage() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 lg:px-6 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm lg:text-lg">ت</span>
              </div>
              <span className="text-lg lg:text-xl font-bold text-gray-900">تأميني</span>
            </div>
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                الرئيسية
              </a>
              <a href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                الخدمات
              </a>
              <a href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                عن الشركة
              </a>
              <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                اتصل بنا
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:flex text-gray-600 hover:text-blue-600">
              English
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:flex border-gray-300 text-xs lg:text-sm">
              تسجيل الدخول
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg text-xs lg:text-sm px-3 lg:px-4"
            >
              إنشاء حساب
            </Button>
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4 pt-4">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                الرئيسية
              </a>
              <a href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                الخدمات
              </a>
              <a href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                عن الشركة
              </a>
              <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                اتصل بنا
              </a>
              <div className="flex gap-2 pt-2">
                <Button variant="ghost" size="sm" className="text-gray-600">
                  English
                </Button>
                <Button variant="outline" size="sm" className="border-gray-300">
                  تسجيل الدخول
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-100 hover:text-white hover:bg-white/10"
                onClick={() => (window.location.href = "/")}
              >
                <ArrowLeft className="w-4 h-4 ml-2" />
                العودة للرئيسية
              </Button>
            </div>

            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">🚗 عرض سعر مجاني</Badge>
              <h1 className="text-3xl lg:text-4xl font-bold">احصل على أفضل عروض تأمين السيارات</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                قارن بين أكثر من 25 شركة تأمين واحصل على أفضل الأسعار في أقل من 3 دقائق
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-blue-100">25+ شركة</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-blue-100">3 دقائق</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-blue-100">مجاني 100%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <ProfessionalQuoteForm />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">لماذا يثق بنا أكثر من 500,000 عميل؟</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "أمان وثقة",
                description: "بياناتك محمية بأعلى معايير الأمان",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Star,
                title: "تقييم ممتاز",
                description: "4.9/5 من تقييمات العملاء",
                color: "from-yellow-500 to-yellow-600",
              },
              {
                icon: Users,
                title: "خبرة واسعة",
                description: "أكثر من 500,000 عميل راضي",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Phone,
                title: "دعم مستمر",
                description: "خدمة عملاء 24/7",
                color: "from-purple-500 to-purple-600",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">هل تحتاج مساعدة؟</h2>
              <p className="text-gray-600">فريق الخبراء متاح لمساعدتك في اختيار أفضل تأمين لسيارتك</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Phone className="w-5 h-5 ml-2" />
                اتصل بنا: 920000000
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300">
                <Mail className="w-5 h-5 ml-2" />
                راسلنا عبر البريد
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ت</span>
                </div>
                <span className="text-lg font-bold">تأميني</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">منصة التأمين الرقمية الرائدة في السعودية</p>
            </div>

            <div>
              <h3 className="font-bold mb-4">الخدمات</h3>
              <ul className="space-y-2 text-sm text-gray-400">
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
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">الشركة</h3>
              <ul className="space-y-2 text-sm text-gray-400">
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
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">الدعم</h3>
              <ul className="space-y-2 text-sm text-gray-400">
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
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-sm text-gray-400">© 2024 تأميني. جميع الحقوق محفوظة. مرخص من البنك المركزي السعودي.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProfessionalQuoteForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    // Basic Information
    purpose: "",
    insuranceType: "new",
    vehicleRegistrationType: "serial",
    nationalId: "",
    sequenceNumber: "",
    // Insurance Data
    policyStartDate: "",
    vehicleValue: "",
    insuranceTypeSelected: "comprehensive",
    additionalDrivers: 0,
    specialDiscounts: false,
    agreeToTerms: false,
    // Selected options
    selectedInsuranceOffer: "",
    selectedAddons: [] as string[],
    // Contact info for final step
    email: "",
    phone: "",
  })

  const steps = [
    { number: 1, title: "البيانات الأساسية", subtitle: "معلومات أساسية" },
    { number: 2, title: "بيانات التأمين", subtitle: "تفاصيل التأمين" },
    { number: 3, title: "قائمة الأسعار", subtitle: "مقارنة العروض" },
    { number: 4, title: "الإضافات", subtitle: "خدمات إضافية" },
    { number: 5, title: "الملخص والدفع", subtitle: "إتمام العملية" },
  ]

  // Validation rules
  const validationRules = {
    purpose: {
      required: true,
      message: "يرجى اختيار الغرض من الاستخدام",
    },
    nationalId: {
      required: true,
      pattern: /^[0-9]{10}$/,
      message: "يرجى إدخال رقم هوية صحيح (10 أرقام)",
    },
    sequenceNumber: {
      required: true,
      pattern: /^[0-9A-Za-z]{8,}$/,
      message: "يرجى إدخال رقم تسلسلي صحيح (8 أحرف أو أرقام على الأقل)",
    },
    policyStartDate: {
      required: true,
      validate: (value: string) => {
        const selectedDate = new Date(value)
        const today = new Date()
        const maxDate = new Date()
        maxDate.setMonth(maxDate.getMonth() + 3)

        if (selectedDate < today) {
          return "لا يمكن أن يكون تاريخ بداية الوثيقة في الماضي"
        }
        if (selectedDate > maxDate) {
          return "لا يمكن أن يكون تاريخ بداية الوثيقة أكثر من 3 أشهر من اليوم"
        }
        return null
      },
      message: "يرجى اختيار تاريخ بداية الوثيقة",
    },
    vehicleValue: {
      required: true,
      validate: (value: string) => {
        const numValue = Number.parseFloat(value.replace(/,/g, ""))
        if (isNaN(numValue) || numValue < 10000) {
          return "يجب أن تكون قيمة المركبة 10,000 ريال على الأقل"
        }
        if (numValue > 1000000) {
          return "قيمة المركبة لا يمكن أن تتجاوز 1,000,000 ريال"
        }
        return null
      },
      message: "يرجى إدخال قيمة المركبة",
    },
    agreeToTerms: {
      required: true,
      message: "يجب الموافقة على الشروط والأحكام للمتابعة",
    },
    selectedInsuranceOffer: {
      required: true,
      message: "يرجى اختيار عرض التأمين المناسب",
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "يرجى إدخال بريد إلكتروني صحيح",
    },
    phone: {
      required: true,
      pattern: /^(05|5)[0-9]{8}$/,
      message: "يرجى إدخال رقم هاتف سعودي صحيح (05xxxxxxxx)",
    },
  }

  // Validate single field
  const validateField = (fieldName: string, value: any): string | null => {
    const rule = validationRules[fieldName as keyof typeof validationRules] as any
    if (!rule) return null

    // Check required
    if (rule.required && (!value || value === "" || (Array.isArray(value) && value.length === 0))) {
      return rule.message
    }

    // Check pattern
    if (value && rule.pattern && !rule.pattern.test(value)) {
      return rule.message
    }

    // Check custom validation
    if (value && rule.validate) {
      const customError = rule.validate(value)
      if (customError) return customError
    }

    return null
  }

  // Validate current step
  const validateStep = (step: number): boolean => {
    const stepErrors: Record<string, string> = {}
    let isValid = true

    switch (step) {
      case 1:
        // Validate basic information
        const purposeError = validateField("purpose", formData.purpose)
        const nationalIdError = validateField("nationalId", formData.nationalId)
        const sequenceNumberError = validateField("sequenceNumber", formData.sequenceNumber)
        const agreeToTermsError = validateField("agreeToTerms", formData.agreeToTerms)

        if (purposeError) {
          stepErrors.purpose = purposeError
          isValid = false
        }
        if (nationalIdError) {
          stepErrors.nationalId = nationalIdError
          isValid = false
        }
        if (sequenceNumberError) {
          stepErrors.sequenceNumber = sequenceNumberError
          isValid = false
        }
        if (agreeToTermsError) {
          stepErrors.agreeToTerms = agreeToTermsError
          isValid = false
        }
        break

      case 2:
        // Validate insurance data
        const policyStartDateError = validateField("policyStartDate", formData.policyStartDate)
        const vehicleValueError = validateField("vehicleValue", formData.vehicleValue)

        if (policyStartDateError) {
          stepErrors.policyStartDate = policyStartDateError
          isValid = false
        }
        if (vehicleValueError) {
          stepErrors.vehicleValue = vehicleValueError
          isValid = false
        }
        break

      case 3:
        // Validate insurance offer selection
        const selectedOfferError = validateField("selectedInsuranceOffer", formData.selectedInsuranceOffer)
        if (selectedOfferError) {
          stepErrors.selectedInsuranceOffer = selectedOfferError
          isValid = false
        }
        break

      case 5:
        // Validate contact information
        const emailError = validateField("email", formData.email)
        const phoneError = validateField("phone", formData.phone)

        if (emailError) {
          stepErrors.email = emailError
          isValid = false
        }
        if (phoneError) {
          stepErrors.phone = phoneError
          isValid = false
        }
        break
    }

    setErrors((prev) => ({ ...prev, ...stepErrors }))
    return isValid
  }

  // Handle field change
  const handleFieldChange = (fieldName: string, value: any) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }))

    // Clear error when user starts typing
    if (errors[fieldName]) {
      setErrors((prev) => ({ ...prev, [fieldName]: "" }))
    }
  }

  // Handle field blur
  const handleFieldBlur = (fieldName: string) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }))

    const error = validateField(fieldName, formData[fieldName as keyof typeof formData])
    if (error) {
      setErrors((prev) => ({ ...prev, [fieldName]: error }))
    }
  }

  // Format currency input
  const formatCurrency = (value: string): string => {
    const numericValue = value.replace(/[^\d]/g, "")
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1)
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    if (!validateStep(5)) {
      return
    }

    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Handle successful submission
      alert("تم إرسال طلبك بنجاح! سيتم التواصل معك قريباً.")
    } catch (error) {
      alert("حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Error message component
  const ErrorMessage = ({ error }: { error?: string }) => {
    if (!error) return null
    return (
      <div className="flex items-center gap-2 mt-1 text-red-600 text-sm">
        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <span>{error}</span>
      </div>
    )
  }

  // Input field component with validation
  const ValidatedInput = ({
    label,
    fieldName,
    type = "text",
    placeholder,
    required = false,
    className = "",
    ...props
  }: {
    label: string
    fieldName: string
    type?: string
    placeholder?: string
    required?: boolean
    className?: string
    [key: string]: any
  }) => {
    const hasError = errors[fieldName] && touched[fieldName]

    return (
      <div className={className}>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          value={formData[fieldName as keyof typeof formData] as string}
          onChange={(e) => {
            let value = e.target.value
            if (fieldName === "vehicleValue") {
              value = formatCurrency(value)
            }
            handleFieldChange(fieldName, value)
          }}
          onBlur={() => handleFieldBlur(fieldName)}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
            hasError
              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:border-blue-500"
          }`}
          {...props}
        />
        <ErrorMessage error={touched[fieldName] ? errors[fieldName] : undefined} />
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
      {/* Progress Steps - Responsive */}
      <div className="mb-6 lg:mb-8">
        {/* Mobile Progress - Horizontal Scroll */}
        <div className="block sm:hidden">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-shrink-0">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      step.number === currentStep
                        ? "bg-blue-600 text-white shadow-lg"
                        : step.number < currentStep
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step.number < currentStep ? <CheckCircle className="w-4 h-4" /> : step.number}
                  </div>
                  <p
                    className={`text-xs mt-1 text-center w-16 ${
                      step.number === currentStep ? "text-blue-600 font-medium" : "text-gray-600"
                    }`}
                  >
                    {step.title.split(" ")[0]}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-8 h-0.5 mx-2 transition-all duration-300 ${
                      step.number < currentStep ? "bg-green-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Progress */}
        <div className="hidden sm:flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-sm lg:text-base font-bold transition-all duration-300 ${
                    step.number === currentStep
                      ? "bg-blue-600 text-white shadow-lg"
                      : step.number < currentStep
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step.number < currentStep ? <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5" /> : step.number}
                </div>
                <div className="text-center mt-2">
                  <p
                    className={`text-xs lg:text-sm font-medium ${
                      step.number === currentStep ? "text-blue-600" : "text-gray-600"
                    }`}
                  >
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-500 hidden lg:block">{step.subtitle}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-2 lg:mx-4 transition-all duration-300 ${
                    step.number < currentStep ? "bg-green-500" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="min-h-[400px] lg:min-h-[500px]">
        {currentStep === 1 && (
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6">البيانات الأساسية</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الغرض من الاستخدام <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.purpose}
                  onChange={(e) => handleFieldChange("purpose", e.target.value)}
                  onBlur={() => handleFieldBlur("purpose")}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                    errors.purpose && touched.purpose ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">اختر الغرض</option>
                  <option value="personal">شخصي</option>
                  <option value="commercial">تجاري</option>
                </select>
                <ErrorMessage error={touched.purpose ? errors.purpose : undefined} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  نوع التأمين <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm lg:text-base ${
                      formData.insuranceType === "new"
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    onClick={() => handleFieldChange("insuranceType", "new")}
                  >
                    تأمين جديد
                  </button>
                  <button
                    type="button"
                    className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm lg:text-base ${
                      formData.insuranceType === "transfer"
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    onClick={() => handleFieldChange("insuranceType", "transfer")}
                  >
                    نقل الملكية
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                نوع لتسجيل المركبة <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm lg:text-base ${
                    formData.vehicleRegistrationType === "serial"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-300 hover:border-blue-500"
                  }`}
                  onClick={() => handleFieldChange("vehicleRegistrationType", "serial")}
                >
                  الرقم التسلسلي
                </button>
                <button
                  type="button"
                  className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm lg:text-base ${
                    formData.vehicleRegistrationType === "customs"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-300 hover:border-blue-500"
                  }`}
                  onClick={() => handleFieldChange("vehicleRegistrationType", "customs")}
                >
                  بطاقة جمركية (استيراد)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ValidatedInput
                label="رقم الهوية القومية"
                fieldName="nationalId"
                placeholder="رقم الهوية الوطنية أو الإقامة أو الشركة"
                required
              />

              <ValidatedInput label="الرقم التسلسلي" fieldName="sequenceNumber" placeholder="الرقم التسلسلي" required />
            </div>

            <div
              className={`border rounded-lg p-4 ${
                errors.agreeToTerms && touched.agreeToTerms ? "border-red-500 bg-red-50" : "bg-blue-50 border-blue-200"
              }`}
            >
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 flex-shrink-0"
                  checked={formData.agreeToTerms}
                  onChange={(e) => handleFieldChange("agreeToTerms", e.target.checked)}
                  onBlur={() => handleFieldBlur("agreeToTerms")}
                />
                <p
                  className={`text-sm ${
                    errors.agreeToTerms && touched.agreeToTerms ? "text-red-800" : "text-blue-800"
                  }`}
                >
                  بالضغط على التالي، أوافق على منح تأميني الحق في الاستعلام عن بياناتي وبيانات مركبتي من الجهات المعنية
                  لأجل إصدار التسعيرة
                </p>
              </div>
              <ErrorMessage error={touched.agreeToTerms ? errors.agreeToTerms : undefined} />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6">بيانات التأمين</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ValidatedInput
                label="تاريخ بداية الوثيقة"
                fieldName="policyStartDate"
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
              />

              <ValidatedInput label="القيمة التقديرية للمركبة" fieldName="vehicleValue" placeholder="54,715" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                نوع التأمين <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm lg:text-base ${
                    formData.insuranceTypeSelected === "comprehensive"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-300 hover:border-blue-500"
                  }`}
                  onClick={() => handleFieldChange("insuranceTypeSelected", "comprehensive")}
                >
                  شامل
                </button>
                <button
                  type="button"
                  className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm lg:text-base ${
                    formData.insuranceTypeSelected === "third-party"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-300 hover:border-blue-500"
                  }`}
                  onClick={() => handleFieldChange("insuranceTypeSelected", "third-party")}
                >
                  ضد الغير
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-sm lg:text-base">إضافة سائقين</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <button
                    type="button"
                    className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                    onClick={() => handleFieldChange("additionalDrivers", Math.max(0, formData.additionalDrivers - 1))}
                  >
                    -
                  </button>
                  <span className="text-xl font-bold">{formData.additionalDrivers}</span>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                    onClick={() => handleFieldChange("additionalDrivers", Math.min(5, formData.additionalDrivers + 1))}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-sm lg:text-base">تفاصيل أخرى</span>
                </div>
                <button className="text-green-600 hover:text-green-700 font-medium text-sm lg:text-base">
                  عرض التفاصيل
                </button>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mt-1 flex-shrink-0"
                    checked={formData.specialDiscounts}
                    onChange={(e) => handleFieldChange("specialDiscounts", e.target.checked)}
                  />
                  <span className="font-medium text-green-800 text-sm lg:text-base">
                    اختر هنا إذا كنت تريد الحصول على خصومات خاصة على وثيقة التأمين
                  </span>
                </div>
                <Button className="bg-green-600 hover:bg-green-700 text-white px-4 lg:px-6 text-sm lg:text-base w-full sm:w-auto">
                  خصومات خاصة %
                </Button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6">قائمة الأسعار</h3>

            {errors.selectedInsuranceOffer && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <ErrorMessage error={errors.selectedInsuranceOffer} />
              </div>
            )}

            {/* Filter Toggle - Responsive */}
            <div className="flex justify-center mb-6">
              <div className="flex bg-gray-100 rounded-lg p-1 w-full sm:w-auto">
                <button
                  type="button"
                  className={`flex-1 sm:flex-none px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    formData.insuranceTypeSelected === "against-others"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => handleFieldChange("insuranceTypeSelected", "against-others")}
                >
                  ضد الغير
                </button>
                <button
                  type="button"
                  className={`flex-1 sm:flex-none px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    formData.insuranceTypeSelected === "comprehensive"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => handleFieldChange("insuranceTypeSelected", "comprehensive")}
                >
                  شامل
                </button>
              </div>
            </div>

            <div className="space-y-3 lg:space-y-4 max-h-80 lg:max-h-96 overflow-y-auto">
              {offerData
                .filter((offer) => {
                  if (formData.insuranceTypeSelected === "comprehensive") {
                    return offer.type === "comprehensive" || offer.type === "special"
                  }
                  return offer.type === "against-others"
                })
                .sort((a, b) => Number.parseFloat(a.main_price) - Number.parseFloat(b.main_price))
                .slice(0, 8)
                .map((offer, index) => {
                  const totalExpenses = offer.extra_expenses.reduce((sum, expense) => sum + expense.price, 0)
                  const finalPrice = Number.parseFloat(offer.main_price) + totalExpenses

                  return (
                    <Card
                      key={offer.id}
                      className={`border-2 transition-all duration-200 cursor-pointer hover:shadow-lg ${
                        formData.selectedInsuranceOffer === offer.id
                          ? "border-blue-500 bg-blue-50 shadow-md"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                      onClick={() => handleFieldChange("selectedInsuranceOffer", offer.id)}
                    >
                      <CardContent className="p-3 lg:p-4">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                          <div className="flex items-center gap-3 sm:gap-4 w-full sm:flex-1">
                            <input
                              type="radio"
                              name="insuranceOffer"
                              checked={formData.selectedInsuranceOffer === offer.id}
                              onChange={() => handleFieldChange("selectedInsuranceOffer", offer.id)}
                              className="w-4 h-4 text-blue-600 flex-shrink-0"
                            />
                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                              {offer.company.image_url ? (
                                <img
                                  src={offer.company.image_url || "/placeholder.svg"}
                                  alt={offer.company.name}
                                  className="w-full h-full object-contain"
                                  onError={(e) => {
                                    e.currentTarget.style.display = "none"
                                  }}
                                />
                              ) : null}
                              <div
                                className="w-full h-full bg-blue-100 flex items-center justify-center"
                                style={{ display: offer.company.image_url ? "none" : "flex" }}
                              >
                                <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 capitalize text-sm lg:text-base truncate">
                                {offer.name.replace(/insurance/g, "").trim()}
                              </h4>
                              <div className="flex flex-wrap items-center gap-1 lg:gap-2 mt-1">
                                <Badge variant="secondary" className="text-xs">
                                  {offer.type === "against-others"
                                    ? "ضد الغير"
                                    : offer.type === "comprehensive"
                                      ? "شامل"
                                      : "خاص"}
                                </Badge>
                                {index < 3 && (
                                  <Badge className="bg-green-100 text-green-700 text-xs">
                                    {index === 0 ? "الأفضل سعراً" : index === 1 ? "موصى به" : "خيار جيد"}
                                  </Badge>
                                )}
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                {offer.extra_features.filter((f) => f.price === 0).length} مزايا مجانية
                              </div>
                            </div>
                          </div>
                          <div className="text-left sm:text-right w-full sm:w-auto">
                            <p className="text-sm lg:text-sm font-bold text-gray-900">
                              {finalPrice.toFixed(2)}
                            </p>
                            <p className="text-xs lg:text-sm text-gray-600">ر.س / سنوياً</p>
                            {totalExpenses > 0 && <p className="text-xs text-gray-500">شامل الرسوم والضرائب</p>}
                          </div>
                        </div>

                        {/* Show free features - Responsive */}
                        {offer.extra_features.filter((f) => f.price === 0).length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <div className="flex flex-wrap gap-1">
                              {offer.extra_features
                                .filter((f) => f.price === 0)
                                .slice(0, window.innerWidth < 640 ? 1 : 2)
                                .map((feature, idx) => (
                                  <span key={idx} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                                    ✓{" "}
                                    {feature.content.length > (window.innerWidth < 640 ? 20 : 30)
                                      ? feature.content.substring(0, window.innerWidth < 640 ? 20 : 30) + "..."
                                      : feature.content}
                                  </span>
                                ))}
                              {offer.extra_features.filter((f) => f.price === 0).length >
                                (window.innerWidth < 640 ? 1 : 2) && (
                                <span className="text-xs text-gray-500 px-2 py-1">
                                  +
                                  {offer.extra_features.filter((f) => f.price === 0).length -
                                    (window.innerWidth < 640 ? 1 : 2)}{" "}
                                  مزايا أخرى
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
            </div>

            <div className="text-center text-sm text-gray-500">
              عرض{" "}
              {Math.min(
                8,
                offerData.filter((offer) => {
                  if (formData.insuranceTypeSelected === "comprehensive") {
                    return offer.type === "comprehensive" || offer.type === "special"
                  }
                  return offer.type === "against-others"
                }).length,
              )}{" "}
              من{" "}
              {
                offerData.filter((offer) => {
                  if (formData.insuranceTypeSelected === "comprehensive") {
                    return offer.type === "comprehensive" || offer.type === "special"
                  }
                  return offer.type === "against-others"
                }).length
              }{" "}
              عرض متاح
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6">الإضافات والخدمات</h3>

            {(() => {
              const selectedOffer = offerData.find((offer) => offer.id === formData.selectedInsuranceOffer)
              const paidFeatures = selectedOffer?.extra_features.filter((f) => f.price > 0) || []

              if (paidFeatures.length === 0) {
                return (
                  <div className="text-center py-6 lg:py-8">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 lg:w-8 lg:h-8 text-green-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">جميع المزايا مشمولة!</h4>
                    <p className="text-gray-600 text-sm lg:text-base">
                      العرض المختار يشمل جميع المزايا الأساسية بدون رسوم إضافية
                    </p>
                  </div>
                )
              }

              return (
                <div className="space-y-3 lg:space-y-4">
                  {paidFeatures.map((feature) => (
                    <Card key={feature.id} className="border border-gray-200 hover:shadow-md transition-shadow">
                      <CardContent className="p-3 lg:p-4">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                          <div className="flex items-start gap-3 flex-1">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0"
                              checked={formData.selectedAddons.includes(feature.id)}
                              onChange={(e) => {
                                const newAddons = e.target.checked
                                  ? [...formData.selectedAddons, feature.id]
                                  : formData.selectedAddons.filter((id) => id !== feature.id)
                                handleFieldChange("selectedAddons", newAddons)
                              }}
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 text-sm lg:text-base">{feature.content}</h4>
                              <p className="text-xs lg:text-sm text-gray-600">خدمة إضافية اختيارية</p>
                            </div>
                          </div>
                          <div className="text-left w-full sm:w-auto">
                            <p className="font-bold text-gray-900 text-sm lg:text-base">+{feature.price} ر.س</p>
                            <p className="text-xs text-gray-500">سنوياً</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )
            })()}
          </div>
        )}

        {currentStep === 5 && (
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6">ملخص الطلب</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <div className="space-y-4 order-2 lg:order-1">
                <ValidatedInput
                  label="البريد الإلكتروني"
                  fieldName="email"
                  type="email"
                  placeholder="example@email.com"
                  required
                />

                <ValidatedInput label="رقم الهاتف" fieldName="phone" type="tel" placeholder="05xxxxxxxx" required />
              </div>

              <Card className="border border-gray-200 order-1 lg:order-2">
                <CardContent className="p-4 lg:p-6">
                  {(() => {
                    const selectedOffer = offerData.find((offer) => offer.id === formData.selectedInsuranceOffer)
                    if (!selectedOffer) {
                      return <div className="text-center text-gray-500">لم يتم اختيار عرض</div>
                    }

                    const basePrice = Number.parseFloat(selectedOffer.main_price)
                    const selectedFeatures = selectedOffer.extra_features.filter((f) =>
                      formData.selectedAddons.includes(f.id),
                    )
                    const addonsTotal = selectedFeatures.reduce((sum, f) => sum + f.price, 0)
                    const expenses = selectedOffer.extra_expenses.reduce((sum, e) => sum + e.price, 0)
                    const subtotal = basePrice + addonsTotal
                    const total = subtotal + expenses

                    return (
                      <div className="space-y-3 lg:space-y-4">
                        <div className="text-center mb-4">
                          <h4 className="font-semibold text-gray-900 capitalize text-sm lg:text-base">
                            {selectedOffer.name.replace(/insurance/g, "").trim()}
                          </h4>
                          <p className="text-xs lg:text-sm text-gray-600">
                            {selectedOffer.type === "against-others"
                              ? "تأمين ضد الغير"
                              : selectedOffer.type === "comprehensive"
                                ? "تأمين شامل"
                                : "تأمين خاص"}
                          </p>
                        </div>

                        <div className="flex justify-between items-center text-sm lg:text-base">
                          <span className="text-gray-600">قسط التأمين الأساسي</span>
                          <span className="font-semibold">{basePrice.toLocaleString("ar-SA")} ر.س</span>
                        </div>

                        {addonsTotal > 0 && (
                          <div className="flex justify-between items-center text-sm lg:text-base">
                            <span className="text-gray-600">الإضافات المختارة</span>
                            <span className="font-semibold">{addonsTotal.toLocaleString("ar-SA")} ر.س</span>
                          </div>
                        )}

                        {selectedOffer.extra_expenses.map((expense) => (
                          <div key={expense.id} className="flex justify-between items-center text-xs lg:text-sm">
                            <span className="text-gray-600 truncate">{expense.reason}</span>
                            <span className="font-medium flex-shrink-0 ml-2">
                              {expense.reason.includes("خصم") ? "-" : "+"}
                              {expense.price.toLocaleString("ar-SA")} ر.س
                            </span>
                          </div>
                        ))}

                        <hr className="border-gray-200" />
                        <div className="flex justify-between items-center text-base lg:text-lg">
                          <span className="font-bold text-gray-900">المجموع الكلي</span>
                          <span className="font-bold text-green-600">{total.toLocaleString("ar-SA")} ر.س</span>
                        </div>

                        {selectedFeatures.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-sm font-medium text-gray-700 mb-2">الإضافات المختارة:</p>
                            <ul className="text-xs text-gray-600 space-y-1">
                              {selectedFeatures.map((feature) => (
                                <li key={feature.id} className="truncate">
                                  • {feature.content}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )
                  })()}
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800">بإتمام عملية الدفع، أوافق على الشروط والأحكام وسياسة الخصوصية</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons - Responsive */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-200 gap-4 sm:gap-0">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="px-4 lg:px-6 w-full sm:w-auto order-2 sm:order-1"
        >
          السابق
        </Button>

        <div className="text-sm text-gray-500 order-1 sm:order-2">
          {currentStep} من {steps.length}
        </div>

        {currentStep < steps.length ? (
          <Button
            onClick={nextStep}
            className="bg-blue-600 hover:bg-blue-700 px-4 lg:px-6 w-full sm:w-auto order-3"
            disabled={isSubmitting}
          >
            التالي
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-green-600 hover:bg-green-700 px-6 lg:px-8 w-full sm:w-auto order-3"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                جاري المعالجة...
              </div>
            ) : (
              <>
                <CreditCard className="w-4 h-4 ml-2" />
                إتمام الدفع
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  )
}
