'use client'

import { useState } from 'react'
import { 
  Users, 
  Calendar, 
  Activity, 
  TrendingUp, 
  Search, 
  Filter,
  Plus,
  Eye,
  Edit,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  BarChart3,
  PieChart,
  Brain,
  Database,
  ArrowLeft
} from 'lucide-react'
import Link from 'next/link'
import { mockPatients, mockAppointments, mockDoctors, mockAnalytics, mockRAGResults } from '@/lib/mockData'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from 'recharts'

export default function MedicalDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPatient, setSelectedPatient] = useState<any>(null)
  const [ragQuery, setRagQuery] = useState('')
  const [showRAGResults, setShowRAGResults] = useState(false)

  const tabs = [
    { id: 'overview', label: 'Dashboard Overview', icon: BarChart3 },
    { id: 'patients', label: 'Patient Management', icon: Users },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'rag', label: 'AI Assistant (RAG)', icon: Brain },
    { id: 'analytics', label: 'Analytics', icon: PieChart }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'status-pending'
      case 'checked-in': return 'text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm font-medium'
      case 'in-progress': return 'text-orange-600 bg-orange-50 px-3 py-1 rounded-full text-sm font-medium'
      case 'completed': return 'status-active'
      case 'cancelled': return 'status-cancelled'
      default: return 'status-pending'
    }
  }

  const filteredPatients = mockPatients.filter(patient =>
    patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.mrn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const todayAppointments = mockAppointments.filter(apt => 
    new Date(apt.date).toDateString() === new Date().toDateString()
  )

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Demo Home
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">Medical Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Dr. Emily Chen</span>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">EC</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Patients</p>
                    <p className="text-3xl font-bold text-gray-900">{mockAnalytics.totalPatients.toLocaleString()}</p>
                  </div>
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
                <p className="text-sm text-green-600 mt-2">+{mockAnalytics.monthlyGrowth}% from last month</p>
              </div>

              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Today's Appointments</p>
                    <p className="text-3xl font-bold text-gray-900">{mockAnalytics.appointmentsToday}</p>
                  </div>
                  <Calendar className="w-12 h-12 text-green-600" />
                </div>
                <p className="text-sm text-blue-600 mt-2">{mockAnalytics.patientsCheckedIn} checked in</p>
              </div>

              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Avg Wait Time</p>
                    <p className="text-3xl font-bold text-gray-900">{mockAnalytics.averageWaitTime}m</p>
                  </div>
                  <Clock className="w-12 h-12 text-orange-600" />
                </div>
                <p className="text-sm text-green-600 mt-2">-3m from yesterday</p>
              </div>

              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Patient Satisfaction</p>
                    <p className="text-3xl font-bold text-gray-900">{mockAnalytics.patientSatisfaction}</p>
                  </div>
                  <TrendingUp className="w-12 h-12 text-purple-600" />
                </div>
                <p className="text-sm text-green-600 mt-2">+0.2 from last week</p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Appointments</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={mockAnalytics.appointmentsByMonth}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="appointments" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Patients by Age Group</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsPieChart>
                    <Pie
                      data={mockAnalytics.patientsByAge}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ ageGroup, count }) => `${ageGroup}: ${count}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {mockAnalytics.patientsByAge.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Schedule</h3>
              <div className="space-y-4">
                {todayAppointments.slice(0, 5).map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="text-sm font-medium text-gray-900">{appointment.time}</div>
                      <div>
                        <div className="font-medium text-gray-900">{appointment.patientName}</div>
                        <div className="text-sm text-gray-600">{appointment.reason}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={getStatusColor(appointment.status)}>{appointment.status}</span>
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Patient Management */}
        {activeTab === 'patients' && (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search patients..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </button>
              </div>
              <button className="btn-primary flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                Add Patient
              </button>
            </div>

            {/* Patient List */}
            <div className="card">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Patient
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        MRN
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Age
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Visit
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredPatients.map((patient) => (
                      <tr key={patient.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {patient.firstName} {patient.lastName}
                            </div>
                            <div className="text-sm text-gray-500">{patient.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {patient.mrn}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date().getFullYear() - new Date(patient.dateOfBirth).getFullYear()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(patient.lastVisit).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={patient.status === 'active' ? 'status-active' : 'status-cancelled'}>
                            {patient.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button 
                              onClick={() => setSelectedPatient(patient)}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="text-gray-600 hover:text-gray-900">
                              <Edit className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Patient Detail Modal */}
            {selectedPatient && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">
                        {selectedPatient.firstName} {selectedPatient.lastName}
                      </h2>
                      <button 
                        onClick={() => setSelectedPatient(null)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <XCircle className="w-6 h-6" />
                      </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Demographics</h3>
                        <div className="space-y-3">
                          <div>
                            <label className="text-sm font-medium text-gray-600">MRN</label>
                            <p className="text-gray-900">{selectedPatient.mrn}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Date of Birth</label>
                            <p className="text-gray-900">{new Date(selectedPatient.dateOfBirth).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Gender</label>
                            <p className="text-gray-900 capitalize">{selectedPatient.gender}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Phone</label>
                            <p className="text-gray-900">{selectedPatient.phone}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Address</label>
                            <p className="text-gray-900">{selectedPatient.address}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Medical Information</h3>
                        <div className="space-y-3">
                          <div>
                            <label className="text-sm font-medium text-gray-600">Primary Doctor</label>
                            <p className="text-gray-900">{selectedPatient.primaryDoctor}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Insurance</label>
                            <p className="text-gray-900">{selectedPatient.insuranceProvider}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Allergies</label>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {selectedPatient.allergies.length > 0 ? (
                                selectedPatient.allergies.map((allergy: string, index: number) => (
                                  <span key={index} className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">
                                    {allergy}
                                  </span>
                                ))
                              ) : (
                                <span className="text-gray-500">No known allergies</span>
                              )}
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Conditions</label>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {selectedPatient.conditions.length > 0 ? (
                                selectedPatient.conditions.map((condition: string, index: number) => (
                                  <span key={index} className="px-2 py-1 bg-yellow-100 text-yellow-800 text-sm rounded">
                                    {condition}
                                  </span>
                                ))
                              ) : (
                                <span className="text-gray-500">No active conditions</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end space-x-4">
                      <button 
                        onClick={() => setSelectedPatient(null)}
                        className="btn-secondary"
                      >
                        Close
                      </button>
                      <button className="btn-primary">
                        Edit Patient
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Appointments */}
        {activeTab === 'appointments' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
              <button className="btn-primary flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                Schedule Appointment
              </button>
            </div>

            <div className="card">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Patient
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date & Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockAppointments.map((appointment) => (
                      <tr key={appointment.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{appointment.patientName}</div>
                          <div className="text-sm text-gray-500">{appointment.reason}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {new Date(appointment.date).toLocaleDateString()}
                          </div>
                          <div className="text-sm text-gray-500">{appointment.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {appointment.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={getStatusColor(appointment.status)}>
                            {appointment.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="text-gray-600 hover:text-gray-900">
                              <Edit className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* RAG Assistant */}
        {activeTab === 'rag' && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Medical Assistant (RAG)</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ask questions about medical conditions, drug interactions, treatment protocols, 
                or patient-specific queries. The AI will provide evidence-based responses with citations.
              </p>
            </div>

            <div className="card p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Medical Query
                  </label>
                  <textarea
                    value={ragQuery}
                    onChange={(e) => setRagQuery(e.target.value)}
                    placeholder="e.g., What are the contraindications for prescribing metformin to diabetic patients?"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setRagQuery("What are the contraindications for prescribing metformin to diabetic patients?")}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                    >
                      Sample Query 1
                    </button>
                    <button 
                      onClick={() => setRagQuery("What are the latest guidelines for hypertension management in elderly patients?")}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                    >
                      Sample Query 2
                    </button>
                  </div>
                  <button 
                    onClick={() => setShowRAGResults(true)}
                    className="btn-primary flex items-center"
                    disabled={!ragQuery.trim()}
                  >
                    <Brain className="w-4 h-4 mr-2" />
                    Ask AI Assistant
                  </button>
                </div>
              </div>
            </div>

            {/* RAG Results */}
            {showRAGResults && (
              <div className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">AI Response</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Confidence:</span>
                    <span className="text-sm font-semibold text-green-600">
                      {(mockRAGResults.confidence * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Query:</h4>
                    <p className="text-gray-700">{mockRAGResults.query}</p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Response:</h4>
                    <p className="text-gray-700">{mockRAGResults.response}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Sources & Citations:</h4>
                    <div className="space-y-3">
                      {mockRAGResults.sources.map((source, index) => (
                        <div key={index} className="p-3 border border-gray-200 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <h5 className="font-medium text-gray-900">{source.title}</h5>
                              <p className="text-sm text-gray-600">{source.citation}</p>
                            </div>
                            <span className="text-sm font-medium text-blue-600">
                              {(source.relevance * 100).toFixed(0)}% relevant
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Related Patients:</h4>
                    <div className="space-y-2">
                      {mockRAGResults.relatedPatients.map((patient, index) => (
                        <div key={index} className="p-3 bg-yellow-50 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <h5 className="font-medium text-gray-900">{patient.name}</h5>
                              <p className="text-sm text-gray-600">MRN: {patient.mrn}</p>
                              <p className="text-sm text-gray-600">
                                Conditions: {patient.relevantConditions.join(', ')}
                              </p>
                            </div>
                            <button className="text-blue-600 hover:text-blue-800 text-sm">
                              View Patient →
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Analytics */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Healthcare Analytics</h2>

            {/* Top Conditions */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Most Common Conditions</h3>
              <div className="space-y-3">
                {mockAnalytics.topConditions.map((condition, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-900">{condition.condition}</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(condition.count / mockAnalytics.topConditions[0].count) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-600 w-12 text-right">
                        {condition.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Performance */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card p-6">
                <h4 className="font-semibold text-gray-900 mb-4">System Health</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Uptime</span>
                    <span className="font-semibold text-green-600">99.97%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Response Time</span>
                    <span className="font-semibold">45ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Active Users</span>
                    <span className="font-semibold">234</span>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Security Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Failed Logins</span>
                    <span className="font-semibold text-yellow-600">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Suspicious Activity</span>
                    <span className="font-semibold text-green-600">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Compliance Score</span>
                    <span className="font-semibold text-green-600">100%</span>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Revenue</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">This Month</span>
                    <span className="font-semibold">${mockAnalytics.revenueThisMonth.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Growth</span>
                    <span className="font-semibold text-green-600">+{mockAnalytics.monthlyGrowth}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg per Patient</span>
                    <span className="font-semibold">$163</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
