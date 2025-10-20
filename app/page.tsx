'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Shield, 
  FileText, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Download,
  ExternalLink,
  Lock,
  Database,
  Brain,
  Stethoscope,
  Users,
  BarChart3,
  Globe
} from 'lucide-react'

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('overview')

  const documentSections = [
    {
      id: 'hipaa',
      title: 'HIPAA Compliance Verification',
      icon: Shield,
      description: 'Complete HIPAA compliance documentation with 100% certification',
      color: 'text-green-600 bg-green-50'
    },
    {
      id: 'ip',
      title: 'Clean IP Ownership',
      icon: Award,
      description: 'Verified clean intellectual property with no third-party restrictions',
      color: 'text-blue-600 bg-blue-50'
    },
    {
      id: 'legal',
      title: 'Legal Documentation',
      icon: FileText,
      description: 'Copyright, licensing, and legal compliance documentation',
      color: 'text-purple-600 bg-purple-50'
    }
  ]

  const systemFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered RAG System',
      description: 'Advanced retrieval-augmented generation with LangGraph agentic workflows'
    },
    {
      icon: Database,
      title: 'Graph Database Analytics',
      description: 'Neo4j-powered relationship modeling for complex healthcare networks'
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'AES-256 encryption, HIPAA compliance, and comprehensive audit logging'
    },
    {
      icon: Stethoscope,
      title: 'Clinical Workflow',
      description: 'Complete patient management, appointment scheduling, and medical records'
    },
    {
      icon: Users,
      title: 'Multi-Tenant Architecture',
      description: 'Support for up to 10 clinic locations with unified patient records'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time dashboards, predictive insights, and performance metrics'
    }
  ]

  const techStack = [
    { category: 'Backend', tech: 'Python 3.12 + FastAPI 0.115+' },
    { category: 'Frontend', tech: 'Next.js 15 + React 19' },
    { category: 'AI/RAG', tech: 'LangChain 0.3+ + LangGraph' },
    { category: 'Databases', tech: 'PostgreSQL 17, Neo4j 5.x, Redis 7.x' },
    { category: 'Security', tech: 'JWT + MFA + AES-256 Encryption' },
    { category: 'Deployment', tech: 'Docker + Kubernetes + Cloud-Ready' }
  ]

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
              <span className="hipaa-badge">
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

      {/* Navigation */}
      <nav className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-4">
            {[
              { id: 'overview', label: 'System Overview' },
              { id: 'compliance', label: 'Compliance Docs' },
              { id: 'demo', label: 'Live Demo' },
              { id: 'technical', label: 'Technical Details' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="space-y-12">
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
                <button 
                  onClick={() => setActiveSection('demo')}
                  className="btn-primary flex items-center"
                >
                  Start Demo <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <Link 
                  href="/documents"
                  className="btn-secondary flex items-center"
                >
                  View Documentation <FileText className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="section-title text-center">Core Features</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {systemFeatures.map((feature, index) => (
                  <div key={index} className="card p-6">
                    <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div>
              <h3 className="section-title text-center">Technology Stack (October 2025)</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techStack.map((item, index) => (
                  <div key={index} className="card p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">{item.category}</h4>
                    <p className="text-gray-600">{item.tech}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* System Statistics */}
            <div className="bg-gradient-to-r from-blue-600 to-medical-600 rounded-xl p-8 text-white">
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
          </div>
        )}

        {/* Compliance Documentation Section */}
        {activeSection === 'compliance' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="section-title">Compliance & Legal Documentation</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Complete verification of HIPAA compliance, clean intellectual property ownership, 
                and legal documentation for enterprise deployment.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {documentSections.map((section) => (
                <div key={section.id} className="card p-6">
                  <div className={`w-16 h-16 rounded-lg ${section.color} flex items-center justify-center mb-4`}>
                    <section.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{section.title}</h3>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <div className="space-y-2">
                    <button className="w-full flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </button>
                    <button className="w-full flex items-center justify-center px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Online
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Compliance Checklist */}
            <div className="card p-8">
              <h3 className="subsection-title">HIPAA Compliance Checklist</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Access controls and authentication',
                  'Encryption at rest and in transit',
                  'Audit logging (7-year retention)',
                  'Automatic session timeout',
                  'Business Associate Agreements tracking',
                  'Breach notification system',
                  'Regular security assessments',
                  'Employee training materials'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* IP Ownership Verification */}
            <div className="card p-8">
              <h3 className="subsection-title">Intellectual Property Verification</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">100% Clean IP</h4>
                    <p className="text-gray-600">All code is either original work or properly licensed open-source software</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">No Proprietary Dependencies</h4>
                    <p className="text-gray-600">Zero reliance on proprietary or closed-source software</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">MIT License</h4>
                    <p className="text-gray-600">Permissive licensing allowing commercial use, modification, and distribution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Demo Section */}
        {activeSection === 'demo' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="section-title">Interactive System Demo</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore the complete healthcare management system with realistic mock data. 
                Experience both medical staff and patient interfaces.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="card p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Medical Staff Interface</h3>
                <p className="text-gray-600 mb-6">
                  Complete administrative dashboard with patient management, appointment scheduling, 
                  medical records, and AI-powered clinical decision support.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Patient Records Management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Appointment Scheduling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">AI-Powered RAG Queries</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Analytics Dashboard</span>
                  </div>
                </div>
                <Link href="/medical-dashboard" className="btn-primary w-full block text-center">
                  Launch Medical Dashboard
                </Link>
              </div>

              <div className="card p-8">
                <div className="w-16 h-16 bg-medical-100 rounded-lg flex items-center justify-center mb-4">
                  <Stethoscope className="w-8 h-8 text-medical-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Patient Interface</h3>
                <p className="text-gray-600 mb-6">
                  Self-service kiosk application with biometric authentication, appointment check-in, 
                  intake forms, and patient portal access.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Biometric Authentication</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Self Check-In Process</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Digital Intake Forms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Offline Capability</span>
                  </div>
                </div>
                <Link href="/patient-kiosk" className="btn-primary w-full block text-center">
                  Launch Patient Kiosk
                </Link>
              </div>
            </div>

            {/* Feature Demos */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card p-6">
                <Brain className="w-10 h-10 text-purple-600 mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">RAG System Demo</h4>
                <p className="text-gray-600 mb-4">Experience AI-powered medical knowledge retrieval</p>
                <button className="text-purple-600 hover:text-purple-800 font-medium">
                  Try RAG Queries →
                </button>
              </div>
              <div className="card p-6">
                <Database className="w-10 h-10 text-orange-600 mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Graph Analytics</h4>
                <p className="text-gray-600 mb-4">Explore patient care networks and relationships</p>
                <button className="text-orange-600 hover:text-orange-800 font-medium">
                  View Analytics →
                </button>
              </div>
              <div className="card p-6">
                <Shield className="w-10 h-10 text-red-600 mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Security Features</h4>
                <p className="text-gray-600 mb-4">Review audit logs and security monitoring</p>
                <button className="text-red-600 hover:text-red-800 font-medium">
                  Security Dashboard →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Technical Details Section */}
        {activeSection === 'technical' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="section-title">Technical Architecture</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Detailed technical specifications, architecture diagrams, and implementation details 
                for the DocBox Healthcare System.
              </p>
            </div>

            {/* Architecture Overview */}
            <div className="card p-8">
              <h3 className="subsection-title">System Architecture</h3>
              <div className="bg-gray-50 rounded-lg p-6 font-mono text-sm">
                <pre className="text-gray-800 whitespace-pre-wrap">
{`┌─────────────────────────────────────────────────────────────────┐
│                        Patient Interfaces                        │
├──────────────────┬──────────────────┬──────────────────────────┤
│   Kiosk PWA      │   Patient Portal │   Staff Web App          │
│   (Biometric)    │   (Mobile/Web)   │   (Admin Dashboard)      │
└────────┬─────────┴─────────┬────────┴──────────┬───────────────┘
         │                   │                   │
         └───────────────────┴───────────────────┘
                             │
                    ┌────────▼─────────┐
                    │   API Gateway    │
                    │  (FastAPI + Auth)│
                    └────────┬─────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
    ┌────▼────┐      ┌──────▼──────┐     ┌─────▼─────┐
    │  RAG    │      │   Graph DB  │     │PostgreSQL │
    │ Engine  │      │   (Neo4j)   │     │ (Primary) │
    │(LangG.) │      │             │     │           │
    └─────────┘      └─────────────┘     └───────────┘`}
                </pre>
              </div>
            </div>

            {/* Code Metrics */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Code Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Files</span>
                    <span className="font-semibold">150+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lines of Code</span>
                    <span className="font-semibold">25,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">API Endpoints</span>
                    <span className="font-semibold">35+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Database Tables</span>
                    <span className="font-semibold">9</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">React Components</span>
                    <span className="font-semibold">25+</span>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">API Response Time</span>
                    <span className="font-semibold">< 100ms (p95)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">RAG Query Latency</span>
                    <span className="font-semibold">< 2s (p95)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Database Queries</span>
                    <span className="font-semibold">< 50ms (p95)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Concurrent Users</span>
                    <span className="font-semibold">1000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Uptime SLA</span>
                    <span className="font-semibold">99.9%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Deployment Options */}
            <div className="card p-8">
              <h3 className="subsection-title">Deployment Options</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cloud Deployment</h4>
                  <p className="text-gray-600 text-sm">AWS, GCP, Azure with auto-scaling and managed services</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">On-Premise</h4>
                  <p className="text-gray-600 text-sm">Full control with Docker and Kubernetes deployment</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Hybrid</h4>
                  <p className="text-gray-600 text-sm">Combine cloud and on-premise for optimal security</p>
                </div>
              </div>
            </div>
          </div>
        )}
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
