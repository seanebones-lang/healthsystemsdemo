'use client'

import { useState, useRef, useCallback } from 'react'
import { 
  Camera, 
  User, 
  Calendar, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Phone,
  CreditCard,
  FileText,
  Clock,
  MapPin,
  AlertCircle,
  Fingerprint,
  Shield,
  Heart
} from 'lucide-react'
import Link from 'next/link'

export default function PatientKiosk() {
  const [currentStep, setCurrentStep] = useState('welcome')
  const [patientData, setPatientData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phone: '',
    mrn: '',
    appointmentFound: false,
    biometricVerified: false,
    formsCompleted: false,
    checkedIn: false
  })
  const [isLoading, setIsLoading] = useState(false)
  const [cameraActive, setCameraActive] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const steps = [
    { id: 'welcome', title: 'Welcome', icon: Heart },
    { id: 'lookup', title: 'Find Appointment', icon: Calendar },
    { id: 'verify', title: 'Verify Identity', icon: Fingerprint },
    { id: 'forms', title: 'Complete Forms', icon: FileText },
    { id: 'confirmation', title: 'Check-In Complete', icon: CheckCircle }
  ]

  const getCurrentStepIndex = () => {
    return steps.findIndex(step => step.id === currentStep)
  }

  const handleLookupAppointment = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mock successful lookup
    setPatientData(prev => ({
      ...prev,
      appointmentFound: true,
      firstName: 'Sarah',
      lastName: 'Johnson',
      mrn: 'MRN-20251020-CLINIC01-A1B2C3D4'
    }))
    setIsLoading(false)
    setCurrentStep('verify')
  }

  const startBiometricVerification = async () => {
    setCameraActive(true)
    setIsLoading(true)
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
      
      // Simulate biometric verification
      setTimeout(() => {
        setPatientData(prev => ({ ...prev, biometricVerified: true }))
        setIsLoading(false)
        setCameraActive(false)
        if (videoRef.current?.srcObject) {
          const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
          tracks.forEach(track => track.stop())
        }
        setCurrentStep('forms')
      }, 3000)
    } catch (error) {
      console.error('Camera access denied:', error)
      // Fallback to manual verification
      setPatientData(prev => ({ ...prev, biometricVerified: true }))
      setIsLoading(false)
      setCameraActive(false)
      setCurrentStep('forms')
    }
  }

  const completeCheckIn = () => {
    setPatientData(prev => ({ 
      ...prev, 
      formsCompleted: true, 
      checkedIn: true 
    }))
    setCurrentStep('confirmation')
  }

  const restartProcess = () => {
    setCurrentStep('welcome')
    setPatientData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      phone: '',
      mrn: '',
      appointmentFound: false,
      biometricVerified: false,
      formsCompleted: false,
      checkedIn: false
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Demo Home
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">Patient Check-In Kiosk</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm text-green-600 font-medium">Secure & Private</span>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  index <= getCurrentStepIndex() 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'border-gray-300 text-gray-400'
                }`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${
                    index <= getCurrentStepIndex() ? 'text-blue-600' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    index < getCurrentStepIndex() ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Step */}
        {currentStep === 'welcome' && (
          <div className="text-center space-y-8">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-12 h-12 text-blue-600" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Welcome to Main Street Clinic
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Please use this kiosk to check in for your appointment. 
                The process is quick, secure, and HIPAA-compliant.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="card p-6 text-center">
                <Calendar className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Find Your Appointment</h3>
                <p className="text-sm text-gray-600">Locate your scheduled appointment using your information</p>
              </div>
              <div className="card p-6 text-center">
                <Fingerprint className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Verify Identity</h3>
                <p className="text-sm text-gray-600">Secure biometric verification for your privacy</p>
              </div>
              <div className="card p-6 text-center">
                <CheckCircle className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Complete Check-In</h3>
                <p className="text-sm text-gray-600">Update forms and confirm your appointment</p>
              </div>
            </div>

            <button 
              onClick={() => setCurrentStep('lookup')}
              className="btn-primary text-xl px-8 py-4 flex items-center mx-auto"
            >
              Start Check-In Process
              <ArrowRight className="w-6 h-6 ml-3" />
            </button>

            <div className="text-sm text-gray-500 max-w-lg mx-auto">
              <p className="flex items-center justify-center">
                <Shield className="w-4 h-4 mr-2" />
                Your information is protected by HIPAA and encrypted end-to-end
              </p>
            </div>
          </div>
        )}

        {/* Appointment Lookup Step */}
        {currentStep === 'lookup' && (
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center">
              <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Appointment</h2>
              <p className="text-gray-600">
                Please provide your information to locate your scheduled appointment.
              </p>
            </div>

            <div className="card p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={patientData.firstName}
                      onChange={(e) => setPatientData(prev => ({ ...prev, firstName: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={patientData.lastName}
                      onChange={(e) => setPatientData(prev => ({ ...prev, lastName: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={patientData.dateOfBirth}
                    onChange={(e) => setPatientData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={patientData.phone}
                    onChange={(e) => setPatientData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="text-center text-sm text-gray-500">
                  <p>Or enter your Medical Record Number if you have it:</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Medical Record Number (Optional)
                  </label>
                  <input
                    type="text"
                    value={patientData.mrn}
                    onChange={(e) => setPatientData(prev => ({ ...prev, mrn: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    placeholder="MRN-XXXXXXXX-XXXXXXXX"
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <button 
                    onClick={() => setCurrentStep('welcome')}
                    className="btn-secondary flex items-center"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back
                  </button>
                  <button 
                    onClick={handleLookupAppointment}
                    disabled={isLoading || (!patientData.firstName && !patientData.mrn)}
                    className="btn-primary flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Searching...
                      </>
                    ) : (
                      <>
                        Find Appointment
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {patientData.appointmentFound && (
              <div className="card p-6 bg-green-50 border-green-200">
                <div className="flex items-center">
                  <CheckCircle className="w-8 h-8 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-green-900">Appointment Found!</h3>
                    <p className="text-green-700">
                      Welcome back, {patientData.firstName} {patientData.lastName}
                    </p>
                    <div className="mt-2 text-sm text-green-600">
                      <p>Today at 2:30 PM with Dr. Emily Chen</p>
                      <p>Reason: Follow-up appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Biometric Verification Step */}
        {currentStep === 'verify' && (
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center">
              <Fingerprint className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Verify Your Identity</h2>
              <p className="text-gray-600">
                For your security and privacy, please verify your identity using biometric authentication.
              </p>
            </div>

            <div className="card p-8">
              {!cameraActive && !patientData.biometricVerified && (
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Camera className="w-16 h-16 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Facial Recognition</h3>
                    <p className="text-gray-600 mb-4">
                      We'll use your camera to verify your identity. This process is secure and 
                      your biometric data is encrypted and never stored.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-green-600">
                      <Shield className="w-4 h-4" />
                      <span>HIPAA Compliant • End-to-End Encrypted</span>
                    </div>
                  </div>
                  <button 
                    onClick={startBiometricVerification}
                    className="btn-primary flex items-center mx-auto"
                  >
                    <Camera className="w-5 h-5 mr-2" />
                    Start Verification
                  </button>
                </div>
              )}

              {cameraActive && !patientData.biometricVerified && (
                <div className="text-center space-y-6">
                  <div className="relative">
                    <video 
                      ref={videoRef}
                      autoPlay 
                      muted 
                      className="w-64 h-48 bg-gray-200 rounded-lg mx-auto"
                    />
                    <div className="absolute inset-0 border-4 border-green-500 rounded-lg animate-pulse"></div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-2">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600 mr-2"></div>
                      <span className="text-lg font-medium text-gray-900">Verifying...</span>
                    </div>
                    <p className="text-gray-600">Please look directly at the camera</p>
                  </div>
                </div>
              )}

              {patientData.biometricVerified && (
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-16 h-16 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-900 mb-2">Identity Verified!</h3>
                    <p className="text-green-700">
                      Welcome, {patientData.firstName} {patientData.lastName}. Your identity has been confirmed.
                    </p>
                  </div>
                  <button 
                    onClick={() => setCurrentStep('forms')}
                    className="btn-primary flex items-center mx-auto"
                  >
                    Continue to Forms
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between">
                  <button 
                    onClick={() => setCurrentStep('lookup')}
                    className="btn-secondary flex items-center"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back
                  </button>
                  {!cameraActive && (
                    <button 
                      onClick={() => {
                        setPatientData(prev => ({ ...prev, biometricVerified: true }))
                        setCurrentStep('forms')
                      }}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Skip Biometric Verification →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Forms Step */}
        {currentStep === 'forms' && (
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center">
              <FileText className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Your Forms</h2>
              <p className="text-gray-600">
                Please review and update your information before your appointment.
              </p>
            </div>

            <div className="space-y-6">
              {/* Insurance Information */}
              <div className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Insurance Information
                  </h3>
                  <span className="text-sm text-green-600 font-medium">✓ On File</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Provider:</span>
                    <span className="font-medium">Blue Cross Blue Shield</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Policy Number:</span>
                    <span className="font-medium">****-****-1234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Group Number:</span>
                    <span className="font-medium">GRP-5678</span>
                  </div>
                </div>
                <button className="mt-3 text-blue-600 hover:text-blue-800 text-sm">
                  Update Insurance Information →
                </button>
              </div>

              {/* Emergency Contact */}
              <div className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency Contact
                  </h3>
                  <span className="text-sm text-green-600 font-medium">✓ On File</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-medium">John Johnson (Spouse)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <span className="font-medium">(555) 987-6543</span>
                  </div>
                </div>
                <button className="mt-3 text-blue-600 hover:text-blue-800 text-sm">
                  Update Emergency Contact →
                </button>
              </div>

              {/* Symptoms Check */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Pre-Visit Screening
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-3">
                      Are you experiencing any of the following symptoms today?
                    </p>
                    <div className="space-y-2">
                      {[
                        'Fever or chills',
                        'Cough or shortness of breath',
                        'Loss of taste or smell',
                        'Nausea or vomiting',
                        'Severe headache'
                      ].map((symptom, index) => (
                        <label key={index} className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-blue-600 mr-3" />
                          <span className="text-sm text-gray-700">{symptom}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional notes for your provider:
                    </label>
                    <textarea 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={3}
                      placeholder="Any additional symptoms or concerns..."
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button 
                  onClick={() => setCurrentStep('verify')}
                  className="btn-secondary flex items-center"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back
                </button>
                <button 
                  onClick={completeCheckIn}
                  className="btn-primary flex items-center"
                >
                  Complete Check-In
                  <CheckCircle className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Confirmation Step */}
        {currentStep === 'confirmation' && (
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-green-900 mb-4">Check-In Complete!</h2>
              <p className="text-xl text-gray-600">
                Thank you, {patientData.firstName}. You're all set for your appointment.
              </p>
            </div>

            <div className="card p-8 bg-green-50 border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Appointment Details</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-green-600 mr-3" />
                  <span>Today at 2:30 PM</span>
                </div>
                <div className="flex items-center">
                  <User className="w-5 h-5 text-green-600 mr-3" />
                  <span>Dr. Emily Chen - Internal Medicine</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-600 mr-3" />
                  <span>Room 205, Second Floor</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-green-600 mr-3" />
                  <span>Estimated wait time: 8 minutes</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 font-medium">What happens next?</p>
                <p className="text-blue-700 text-sm mt-1">
                  Please take a seat in the waiting area. A nurse will call your name when 
                  Dr. Chen is ready to see you.
                </p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="text-yellow-800 font-medium">Need assistance?</p>
                <p className="text-yellow-700 text-sm mt-1">
                  Our front desk staff is available to help with any questions or concerns.
                </p>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button 
                onClick={restartProcess}
                className="btn-secondary"
              >
                Check In Another Patient
              </button>
              <Link href="/" className="btn-primary">
                Return to Demo Home
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-1" />
              HIPAA Compliant
            </div>
            <div>•</div>
            <div>End-to-End Encrypted</div>
            <div>•</div>
            <div>© 2025 DocBox Healthcare System</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
