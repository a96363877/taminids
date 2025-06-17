"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
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
  Lock,
  AlertCircle,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { offerData } from "@/lib/data"
import InsurancePurpose from "@/components/insurance"
import VehicleRegistration from "@/components/vic-form"

export default function QuotePage() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const headerRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const stepContentRef = useRef<HTMLDivElement>(null)

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
              <img src="/placeholder.svg?height=80&width=80" alt="logo" width={80} />
            </div>
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <a href="/" className="text-gray-700 hover:text-[#109cd4]  transition-colors">
                الرئيسية
              </a>
              <a href="/#services" className="text-gray-700 hover:text-[#109cd4]  transition-colors">
                الخدمات
              </a>
              <a href="/#about" className="text-gray-700 hover:text-[#109cd4]  transition-colors">
                عن الشركة
              </a>
              <a href="/#contact" className="text-gray-700 hover:text-[#109cd4]  transition-colors">
                اتصل بنا
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:flex text-gray-600 hover:text-[#109cd4] ">
              English
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:flex border-gray-300 text-xs lg:text-sm">
              تسجيل الدخول
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-[#109cd4] to-blue-500 hover:from-[#109cd4] hover:to-[#109cd4] shadow-lg text-xs lg:text-sm px-3 lg:px-4"
            >
              ابدأ الآن{" "}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              data-mobile-menu-toggle
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen)
                // Maintain focus on the button after toggle
                setTimeout(() => {
                  const button = document.querySelector("[data-mobile-menu-toggle]") as HTMLButtonElement
                  if (button) button.focus()
                }, 100)
              }}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4 pt-4">
              <a href="/" className="text-gray-700 hover:text-[#109cd4]  transition-colors">
                الرئيسية
              </a>
              <a href="/#services" className="text-gray-700 hover:text-[#109cd4]  transition-colors">
                الخدمات
              </a>
              <a href="/#about" className="text-gray-700 hover:text-[#109cd4]  transition-colors">
                عن الشركة
              </a>
              <a href="/#contact" className="text-gray-700 hover:text-[#109cd4]  transition-colors">
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
      <section className="bg-gradient-to-r from-[#109cd4]  to-blue-500 text-white py-12 lg:py-16">
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
                color: "from-blue-500 to-[#109cd4] ",
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
                <img src="/placeholder.svg?height=120&width=120" alt="logo" width={120} />
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
  const [paymentProcessing, setPaymentProcessing] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)
  const [otpAttempts, setOtpAttempts] = useState(0)
  const [otpTimer, setOtpTimer] = useState(0)
  const [formData, setFormData] = useState({
    // Basic Information - Updated fields
    insurance_purpose: "renewal",
    documment_owner_full_name: "",
    owner_identity_number: "",
    buyer_identity_number: "",
    seller_identity_number: "",
    vehicle_type: "serial",
    sequenceNumber: "",
    // Insurance Data
    policyStartDate: "",
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

    cardNumber:"",
    expiryYear:"",
    expiryMonth:"",
    cvv:""

  })

  const stepHeaderRef = useRef<HTMLHeadingElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)
  const errorSummaryRef = useRef<HTMLDivElement>(null)

  const steps = [
    { number: 1, title: "البيانات الأساسية", subtitle: "معلومات أساسية" },
    { number: 2, title: "بيانات التأمين", subtitle: "تفاصيل التأمين" },
    { number: 3, title: "قائمة الأسعار", subtitle: "مقارنة العروض" },
    { number: 4, title: "الإضافات", subtitle: "خدمات إضافية" },
    { number: 5, title: "الملخص", subtitle: "مراجعة الطلب" },
    { number: 6, title: "الدفع", subtitle: "بيانات الدفع" },
    { number: 7, title: "التحقق", subtitle: "رمز التحقق" },
  ]
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer((prev) => prev - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [otpTimer])
  useEffect(() => {
    // Focus management when step changes
    if (stepHeaderRef.current) {
      stepHeaderRef.current.focus()
      stepHeaderRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [currentStep])

  useEffect(() => {
    // Focus on first error when validation fails
    if (Object.keys(errors).length > 0 && errorSummaryRef.current) {
      errorSummaryRef.current.focus()
    }
  }, [errors])

  // Validation rules
  const validationRules = {
    documment_owner_full_name: {
      required: true,
      message: "يرجى إدخال اسم مالك الوثيقة بالكامل",
    },
    owner_identity_number: {
      required: true,
      pattern: /^[0-9]{10}$/,
      message: "يرجى إدخال رقم هوية صحيح (10 أرقام)",
    },
    buyer_identity_number: {
      required: true,
      pattern: /^[0-9]{10}$/,
      message: "يرجى إدخال رقم هوية المشتري صحيح (10 أرقام)",
    },
    seller_identity_number: {
      required: true,
      pattern: /^[0-9]{10}$/,
      message: "يرجى إدخال رقم هوية البائع صحيح (10 أرقام)",
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
        const ownerNameError = validateField("documment_owner_full_name", formData.documment_owner_full_name)

        if (ownerNameError) {
          stepErrors.documment_owner_full_name = ownerNameError
          isValid = false
        }

        if (formData.insurance_purpose === "renewal") {
          const ownerIdError = validateField("owner_identity_number", formData.owner_identity_number)
          if (ownerIdError) {
            stepErrors.owner_identity_number = ownerIdError
            isValid = false
          }
        } else if (formData.insurance_purpose === "property-transfer") {
          const buyerIdError = validateField("buyer_identity_number", formData.buyer_identity_number)
          const sellerIdError = validateField("seller_identity_number", formData.seller_identity_number)

          if (buyerIdError) {
            stepErrors.buyer_identity_number = buyerIdError
            isValid = false
          }
          if (sellerIdError) {
            stepErrors.seller_identity_number = sellerIdError
            isValid = false
          }
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
    if (!validateStep(7)) {
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

  // Input field component with validation
  const ValidatedInput = ({
    label,
    fieldName,
    type = "text",
    placeholder,
    required = false,
    className = "",
    autoFocus = false,
    ...props
  }: {
    label: string
    fieldName: string
    type?: string
    placeholder?: string
    required?: boolean
    className?: string
    autoFocus?: boolean
    [key: string]: any
  }) => {
    const hasError = errors[fieldName] && touched[fieldName]
    return (
      <div className={className}>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <Input
          type={type}
          placeholder={placeholder}
          value={formData[fieldName as keyof typeof formData] as string}
          onChange={(e) => {
            let value = e.target.value
            handleFieldChange(fieldName, value)
          }}
          className={hasError ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""}
        />
        {hasError && (
          <div id={`${fieldName}-error`} className="flex items-center gap-2 mt-1 text-red-600 text-sm" role="alert">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span>{errors[fieldName]}</span>
          </div>
        )}
      </div>
    )
  }

  function handlePayment(event:any): void {
  }

  function verifyOTP(event:any): void {
  }

  function sendOTP(event:any): void {
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
                        ? "bg-[#109cd4]  text-white shadow-lg"
                        : step.number < currentStep
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step.number < currentStep ? <CheckCircle className="w-4 h-4" /> : step.number}
                  </div>
                  <p
                    className={`text-xs mt-1 text-center w-16 ${
                      step.number === currentStep ? "text-[#109cd4]  font-medium" : "text-gray-600"
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
                      ? "bg-[#109cd4]  text-white shadow-lg"
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
                      step.number === currentStep ? "text-[#109cd4] " : "text-gray-600"
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
            <InsurancePurpose formData={formData as any} setFormData={setFormData  as any} errors={errors as any} />
            <VehicleRegistration formData={formData as any} setFormData={setFormData  as any} errors={errors as any}  />
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4 lg:space-y-6">
            <h3
              ref={stepHeaderRef}
              tabIndex={-1}
              className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            >
              بيانات التأمين
            </h3>

          

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ValidatedInput
                label="تاريخ بداية الوثيقة"
                fieldName="policyStartDate"
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
                autoFocus={true}
              />

<label>القيمة التقديرية للمركبة</label>
              <Input maxLength={6}  name="vehicleValue" placeholder="54,715" required />
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
                      ? "border-blue-500 bg-blue-50 text-blue-500"
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
                      ? "border-blue-500 bg-blue-50 text-blue-500"
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
                  <Users className="w-5 h-5 text-[#109cd4] " />
                  <span className="font-medium text-sm lg:text-base">إضافة سائقين</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <button
                    type="button"
                    className="w-8 h-8 rounded-full bg-[#109cd4]  text-white flex items-center justify-center hover:bg-blue-500 transition-colors"
                    onClick={() => handleFieldChange("additionalDrivers", Math.max(0, formData.additionalDrivers - 1))}
                  >
                    -
                  </button>
                  <span className="text-xl font-bold">{formData.additionalDrivers}</span>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-full bg-[#109cd4]  text-white flex items-center justify-center hover:bg-blue-500 transition-colors"
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
            <h3
              ref={stepHeaderRef}
              tabIndex={-1}
              className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            >
              قائمة الأسعار
            </h3>

          

            {/* Filter Toggle - Responsive */}
            <div className="flex justify-center mb-6">
              <div className="flex bg-gray-100 rounded-lg p-1 w-full sm:w-auto">
                <button
                  type="button"
                  className={`flex-1 sm:flex-none px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    formData.insuranceTypeSelected === "against-others"
                      ? "bg-[#109cd4]  text-white shadow-sm"
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
                      ? "bg-[#109cd4]  text-white shadow-sm"
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
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault()
                          handleFieldChange("selectedInsuranceOffer", offer.id)
                        }
                      }}
                      tabIndex={0}
                      role="radio"
                      aria-checked={formData.selectedInsuranceOffer === offer.id}
                      aria-labelledby={`offer-${offer.id}-label`}
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
                              className="w-4 h-4 text-[#109cd4]  flex-shrink-0"
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
                                <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-[#109cd4] " />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4
                                id={`offer-${offer.id}-label`}
                                className="font-semibold text-gray-900 capitalize text-sm lg:text-base truncate"
                              >
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
                            <p className="text-sm lg:text-sm font-bold text-gray-900">{finalPrice.toFixed(2)}</p>
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
                                .slice(0, 2)
                                .map((feature, idx) => (
                                  <span key={idx} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                                    ✓{" "}
                                    {feature.content.length > 30
                                      ? feature.content.substring(0, 30) + "..."
                                      : feature.content}
                                  </span>
                                ))}
                              {offer.extra_features.filter((f) => f.price === 0).length > 2 && (
                                <span className="text-xs text-gray-500 px-2 py-1">
                                  +{offer.extra_features.filter((f) => f.price === 0).length - 2} مزايا أخرى
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
            <h3
              ref={stepHeaderRef}
              tabIndex={-1}
              className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            >
              الإضافات والخدمات
            </h3>
          

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
                              className="w-4 h-4 text-[#109cd4]  mt-1 flex-shrink-0"
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
            <h3
              ref={stepHeaderRef}
              tabIndex={-1}
              className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            >
              ملخص الطلب
            </h3>
          

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            
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
                          <span className="font-semibold">{basePrice} ر.س</span>
                        </div>

                        {addonsTotal > 0 && (
                          <div className="flex justify-between items-center text-sm lg:text-base">
                            <span className="text-gray-600">الإضافات المختارة</span>
                            <span className="font-semibold">{addonsTotal} ر.س</span>
                          </div>
                        )}

                        {selectedOffer.extra_expenses.map((expense) => (
                          <div key={expense.id} className="flex justify-between items-center text-xs lg:text-sm">
                            <span className="text-gray-600 truncate">{expense.reason}</span>
                            <span className="font-medium flex-shrink-0 ml-2">
                              {expense.reason.includes("خصم") ? "-" : "+"}
                              {expense.price} ر.س
                            </span>
                          </div>
                        ))}

                        <hr className="border-gray-200" />
                        <div className="flex justify-between items-center text-base lg:text-lg">
                          <span className="font-bold text-gray-900">المجموع الكلي</span>
                          <span className="font-bold text-green-600">{total} ر.س</span>
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
                <CheckCircle className="w-5 h-5 text-[#109cd4]  flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800">بإتمام عملية الدفع، أوافق على الشروط والأحكام وسياسة الخصوصية</p>
              </div>
            </div>
          </div>
        )}
    {currentStep === 5 && (
          <div className="space-y-4 lg:space-y-6">
            <h3
              ref={stepHeaderRef}
              tabIndex={-1}
              className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            >
              ملخص الطلب ومعلومات التواصل
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">معلومات التواصل</h4>
                <ValidatedInput
                  label="البريد الإلكتروني"
                  fieldName="email"
                  type="email"
                  placeholder="example@email.com"
                  required
                  autoFocus={true}
                />
                <ValidatedInput
                  label="رقم الهاتف"
                  fieldName="phone"
                  type="tel"
                  placeholder="05xxxxxxxx"
                  required
                  maxLength={10}
                />
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mt-1 flex-shrink-0"
                    checked={formData.agreeToTerms}
                    onChange={(e) => handleFieldChange("agreeToTerms", e.target.checked)}
                  />
                  <span className="text-sm text-gray-700">
                    أوافق على{" "}
                    <a href="#" className="text-[#109cd4] hover:underline">
                      الشروط والأحكام
                    </a>{" "}
                    و{" "}
                    <a href="#" className="text-[#109cd4] hover:underline">
                      سياسة الخصوصية
                    </a>
                  </span>
                </div>
                {errors.agreeToTerms && (
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errors.agreeToTerms}</span>
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <Card className="border border-gray-200">
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
                    const total = basePrice + addonsTotal + expenses

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
                          <span className="font-semibold">{basePrice} ر.س</span>
                        </div>

                        {addonsTotal > 0 && (
                          <div className="flex justify-between items-center text-sm lg:text-base">
                            <span className="text-gray-600">الإضافات المختارة</span>
                            <span className="font-semibold">{addonsTotal} ر.س</span>
                          </div>
                        )}

                        {selectedOffer.extra_expenses.map((expense) => (
                          <div key={expense.id} className="flex justify-between items-center text-xs lg:text-sm">
                            <span className="text-gray-600 truncate">{expense.reason}</span>
                            <span className="font-medium flex-shrink-0 ml-2">
                              {expense.reason.includes("خصم") ? "-" : "+"}
                              {expense.price} ر.س
                            </span>
                          </div>
                        ))}

                        <hr className="border-gray-200" />
                        <div className="flex justify-between items-center text-base lg:text-lg">
                          <span className="font-bold text-gray-900">المجموع الكلي</span>
                          <span className="font-bold text-green-600">{total} ر.س</span>
                        </div>
                      </div>
                    )
                  })()}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {currentStep === 6 && (
          <div className="space-y-4 lg:space-y-6">
            <h3
              ref={stepHeaderRef}
              tabIndex={-1}
              className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg: mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            >
              بيانات الدفع
            </h3>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-[#109cd4] flex-shrink-0" />
                <div>
                  <p className="font-medium text-blue-900">دفع آمن ومحمي</p>
                  <p className="text-sm text-blue-700">جميع بياناتك محمية بتشفير SSL 256-bit</p>
                </div>
              </div>
            </div>

          

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <label>
                رقم البطاقة
                </label>
                <Input
                  name="cardNumber"
                  type="tel"
                  placeholder="1234 5678 9012 3456"
                  required
                  maxLength={16}
                  autoFocus={true}
                />
 <label>
 الاسم                </label>
                <Input
                  name="cardName"
                  type="text"
                  placeholder="الاسم كما هو مكتوب على البطاقة"
                  required
                />

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الشهر <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.expiryMonth}
                      onChange={(e) => handleFieldChange("expiryMonth", e.target.value)}
                      onBlur={() => handleFieldBlur("expiryMonth")}
                    >
                      <option value="">الشهر</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                          {String(i + 1).padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                   
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      السنة <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.expiryYear}
                      onChange={(e) => handleFieldChange("expiryYear", e.target.value)}
                      onBlur={() => handleFieldBlur("expiryYear")}
                    >
                      <option value="">السنة</option>
                      {Array.from({ length: 10 }, (_, i) => {
                        const year = new Date().getFullYear() + i
                        return (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        )
                      })}
                    </select>
                  </div>
<label>
CVV

</label>
                  <Input
                    name="cvv"
                    type="password"
                    placeholder="123"
                    required
                    maxLength={3}
                  />
                </div>
              </div>

              {/* Payment Summary */}
              <Card className="border border-gray-200 h-fit">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-4">ملخص الدفع</h4>
                  {(() => {
                    const selectedOffer = offerData.find((offer) => offer.id === formData.selectedInsuranceOffer)
                    if (!selectedOffer) return null

                    const basePrice = Number.parseFloat(selectedOffer.main_price)
                    const selectedFeatures = selectedOffer.extra_features.filter((f) =>
                      formData.selectedAddons.includes(f.id),
                    )
                    const addonsTotal = selectedFeatures.reduce((sum, f) => sum + f.price, 0)
                    const expenses = selectedOffer.extra_expenses.reduce((sum, e) => sum + e.price, 0)
                    const total = basePrice + addonsTotal + expenses

                    return (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>قسط التأمين</span>
                          <span>{basePrice} ر.س</span>
                        </div>
                        {addonsTotal > 0 && (
                          <div className="flex justify-between text-sm">
                            <span>الإضافات</span>
                            <span>{addonsTotal} ر.س</span>
                          </div>
                        )}
                        <div className="flex justify-between text-sm">
                          <span>الرسوم والضرائب</span>
                          <span>{expenses} ر.س</span>
                        </div>
                        <hr />
                        <div className="flex justify-between font-bold">
                          <span>المجموع</span>
                          <span className="text-green-600">{total} ر.س</span>
                        </div>
                      </div>
                    )
                  })()}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {currentStep === 7 && (
          <div className="space-y-4 lg:space-y-6">
            <h3
              ref={stepHeaderRef}
              tabIndex={-1}
              className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            >
              التحقق من الهوية
            </h3>

            <div className="max-w-md mx-auto text-center space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-[#109cd4]" />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">تم إرسال رمز التحقق</h4>
                <p className="text-gray-600">
                  تم إرسال رمز التحقق المكون من 6 أرقام إلى رقم الهاتف
                  <br />
                  <span className="font-medium">{formData.phone}</span>
                </p>
              </div>
<label>
رمز التحقق *
</label>
              <Input
                name="otp"
                type="text"
                placeholder="123456"
                required
                maxLength={6}
                autoFocus={true}
                className="text-center"
              />

              {otpTimer > 0 ? (
                <p className="text-sm text-gray-500">
                  يمكنك طلب رمز جديد خلال {Math.floor(otpTimer / 60)}:{(otpTimer % 60).toString().padStart(2, "0")}
                </p>
              ) : (
                <Button
                  variant="link"
                  onClick={sendOTP}
                  className="text-[#109cd4] border-[#109cd4] hover:bg-blue-50"
                >
                  إرسال رمز جديد
                </Button>
              )}

              {otpAttempts > 0 && <p className="text-sm text-orange-600">عدد المحاولات المتبقية: {3 - otpAttempts}</p>}

             
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons - Responsive */}
  <div className="flex flex-col sm:flex-row justify-between items-center mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-200 gap-4 sm:gap-0">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1 || paymentProcessing || isSubmitting}
          className="px-4 lg:px-6 w-full sm:w-auto order-2 sm:order-1"
        >
          السابق
        </Button>

        <div className="text-sm text-gray-500 order-1 sm:order-2">
          {currentStep} من {steps.length}
        </div>

        {currentStep < 7 ? (
          <Button
            onClick={nextStep}
            className="bg-[#109cd4] hover:bg-blue-500 px-4 lg:px-6 w-full sm:w-auto order-3"
            disabled={isSubmitting}
          >
            التالي
          </Button>
        ) : currentStep === 6 ? (
          <Button
            onClick={handlePayment}
            disabled={paymentProcessing}
            className="bg-green-600 hover:bg-green-700 px-6 lg:px-8 w-full sm:w-auto order-3"
          >
            {paymentProcessing ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                جاري معالجة الدفع...
              </div>
            ) : (
              <>
                <CreditCard className="w-4 h-4 ml-2" />
                تأكيد الدفع
              </>
            )}
          </Button>
        ) : (
          <Button
            onClick={verifyOTP}
            disabled={isSubmitting}
            className="bg-green-600 hover:bg-green-700 px-6 lg:px-8 w-full sm:w-auto order-3"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                جاري التحقق...
              </div>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 ml-2" />
                تأكيد الرمز
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  )
}

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
