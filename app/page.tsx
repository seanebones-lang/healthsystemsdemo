'use client'

import Link from 'next/link'
import { 
  Shield, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Stethoscope,
  Users,
  ExternalLink
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-medical-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">DocBox Healthcare System</h1>
                <p className="text-sm text-gray-600">Professional Demo Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <Shield className="w-4 h-4 mr-1" />
                HIPAA Compliant
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <CheckCircle className="w-4 h-4 mr-1" />
                Production Ready
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center py-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Enterprise Healthcare Management Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            DocBox is a comprehensive, HIPAA-compliant healthcare system featuring AI-powered RAG, 
            graph database analytics, self-check-in kiosks, and enterprise-grade security. 
            Built with cutting-edge October 2025 technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/medical-dashboard"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
            >
              Medical Dashboard <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/patient-kiosk"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center"
            >
              Patient Kiosk <Users className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/documents"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors flex items-center"
            >
              Documentation <FileText className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* System Statistics */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white">
          <h3 className="text-3xl font-bold text-center mb-8">System Capabilities</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Clinic Locations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Concurrent Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">HIPAA Compliant</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">DocBox Healthcare System</h3>
              <p className="text-gray-400">
                Enterprise-grade healthcare management platform with AI-powered features 
                and HIPAA compliance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Business Inquiries</h3>
              <p className="text-gray-400 mb-2">
                To evaluate, purchase, or license this software:
              </p>
              <a 
                href="https://www.bizbot.store" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center"
              >
                www.bizbot.store <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <div className="space-y-2 text-gray-400">
                <p>© 2025 Sean McDonnell</p>
                <p>All Rights Reserved</p>
                <p>Proprietary Software</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>Built with cutting-edge October 2025 technology stack for the future of healthcare.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
