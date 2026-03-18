'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lock,
  Eye,
  EyeOff,
  Users,
  TrendingUp,
  MapPin,
  Globe,
  X,
  LogOut,
  RefreshCw,
  ChevronDown,
} from 'lucide-react';
import { PIPELINE_STAGES, STAGE_COLORS, formatDate } from '@/lib/utils';

interface Inquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  province: string;
  wedding_date: string;
  guest_count: number;
  destinations: string;
  budget_range: string;
  events: string;
  travel_support: number;
  notes: string;
  status: string;
  created_at: string;
}

interface Stats {
  totalLeads: number;
  byStage: Record<string, number>;
  byDestination: Record<string, number>;
  byProvince: Record<string, number>;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [filterStage, setFilterStage] = useState('All');
  const [loading, setLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin');
      if (response.ok) {
        const data = await response.json();
        setInquiries(data.inquiries);
        setStats(data.stats);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setLoginError('');

    try {
      const response = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'login', password }),
      });

      if (response.ok) {
        await fetchData();
      } else {
        setLoginError('Incorrect password. Please try again.');
      }
    } catch {
      setLoginError('An error occurred. Please try again.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'logout' }),
    });
    setIsAuthenticated(false);
    setInquiries([]);
    setStats(null);
  };

  const updateStatus = async (id: number, status: string) => {
    try {
      const response = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'update_status', id, status }),
      });

      if (response.ok) {
        setInquiries((prev) =>
          prev.map((inq) => (inq.id === id ? { ...inq, status } : inq))
        );
        if (selectedInquiry?.id === id) {
          setSelectedInquiry((prev) => prev ? { ...prev, status } : null);
        }
        if (stats) {
          // Recalculate stats locally
          await fetchData();
        }
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const filteredInquiries =
    filterStage === 'All'
      ? inquiries
      : inquiries.filter((inq) => inq.status === filterStage);

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center p-4">
        <motion.div
          className="w-full max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="font-playfair text-2xl font-bold text-ivory">Shaadi Abroad</div>
            <div className="font-inter text-xs text-gold tracking-widest uppercase mt-1">
              Admin Portal
            </div>
          </div>

          {/* Login card */}
          <div className="bg-white rounded-sm p-8 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-champagne rounded-full flex items-center justify-center">
                <Lock className="w-6 h-6 text-maroon" />
              </div>
            </div>
            <h1 className="font-playfair text-xl font-semibold text-charcoal text-center mb-6">
              Admin Access
            </h1>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input pr-10"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-charcoal transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {loginError && (
                <p className="font-inter text-sm text-red-600 text-center">{loginError}</p>
              )}

              <button
                type="submit"
                disabled={authLoading || !password}
                className="w-full py-3.5 bg-maroon text-ivory font-inter font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-maroon-dark transition-colors disabled:opacity-70"
              >
                {authLoading ? 'Verifying...' : 'Access Dashboard'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-0">
      {/* Admin navbar */}
      <header className="bg-charcoal border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <span className="font-playfair text-lg font-bold text-ivory">Shaadi Abroad</span>
            <span className="font-inter text-xs text-gold tracking-widest uppercase px-2 py-1 bg-white/10 rounded-sm">
              Admin
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={fetchData}
              className="flex items-center gap-1.5 text-ivory/60 hover:text-ivory text-xs font-inter transition-colors"
              disabled={loading}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-ivory/60 hover:text-red-400 text-xs font-inter transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats overview */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-sm p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-champagne rounded-sm flex items-center justify-center">
                  <Users className="w-4 h-4 text-maroon" />
                </div>
                <div>
                  <div className="font-playfair text-2xl font-bold text-charcoal">{stats.totalLeads}</div>
                  <div className="font-inter text-xs text-gray-500">Total Inquiries</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-sm p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-green-100 rounded-sm flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="font-playfair text-2xl font-bold text-charcoal">
                    {(stats.byStage['Won'] || 0) + (stats.byStage['Active Client'] || 0)}
                  </div>
                  <div className="font-inter text-xs text-gray-500">Won / Active</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-sm p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-100 rounded-sm flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-playfair text-2xl font-bold text-charcoal">
                    {Object.keys(stats.byDestination).length}
                  </div>
                  <div className="font-inter text-xs text-gray-500">Destinations</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-sm p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-purple-100 rounded-sm flex items-center justify-center">
                  <Globe className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="font-playfair text-2xl font-bold text-charcoal">
                    {Object.keys(stats.byProvince).length}
                  </div>
                  <div className="font-inter text-xs text-gray-500">Provinces</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pipeline and breakdowns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Pipeline overview */}
          <div className="lg:col-span-2 bg-white rounded-sm p-6 shadow-sm border border-gray-100">
            <h2 className="font-playfair text-lg font-semibold text-charcoal mb-5">Pipeline Overview</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PIPELINE_STAGES.map((stage) => (
                <div
                  key={stage}
                  className={`p-3 rounded-sm cursor-pointer border-2 transition-all ${
                    filterStage === stage ? 'border-maroon' : 'border-transparent'
                  } ${STAGE_COLORS[stage]}`}
                  onClick={() => setFilterStage(filterStage === stage ? 'All' : stage)}
                >
                  <div className="font-playfair text-xl font-bold">
                    {stats?.byStage[stage] || 0}
                  </div>
                  <div className="font-inter text-xs mt-0.5 opacity-80">{stage}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Top destinations */}
          <div className="bg-white rounded-sm p-6 shadow-sm border border-gray-100">
            <h2 className="font-playfair text-lg font-semibold text-charcoal mb-5">
              Top Destinations
            </h2>
            {stats && Object.entries(stats.byDestination)
              .sort(([, a], [, b]) => b - a)
              .slice(0, 5)
              .map(([dest, count]) => (
                <div key={dest} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <span className="font-inter text-sm text-charcoal truncate mr-2">{dest}</span>
                  <span className="font-inter text-sm font-semibold text-maroon flex-shrink-0">{count}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Inquiries table */}
        <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="font-playfair text-lg font-semibold text-charcoal">Inquiries</h2>
              <span className="font-inter text-xs bg-champagne text-charcoal px-2 py-1 rounded-sm">
                {filteredInquiries.length}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <select
                className="form-input text-xs py-2 px-3 w-auto"
                value={filterStage}
                onChange={(e) => setFilterStage(e.target.value)}
              >
                <option value="All">All Stages</option>
                {PIPELINE_STAGES.map((stage) => (
                  <option key={stage} value={stage}>{stage}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left py-3 px-4 font-inter text-xs text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="text-left py-3 px-4 font-inter text-xs text-gray-500 uppercase tracking-wider hidden md:table-cell">Destination</th>
                  <th className="text-left py-3 px-4 font-inter text-xs text-gray-500 uppercase tracking-wider hidden lg:table-cell">Date</th>
                  <th className="text-left py-3 px-4 font-inter text-xs text-gray-500 uppercase tracking-wider hidden lg:table-cell">Guests</th>
                  <th className="text-left py-3 px-4 font-inter text-xs text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="text-left py-3 px-4 font-inter text-xs text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInquiries.map((inquiry) => (
                  <tr
                    key={inquiry.id}
                    className="border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => setSelectedInquiry(inquiry)}
                  >
                    <td className="py-3.5 px-4">
                      <div className="font-inter text-sm font-semibold text-charcoal">{inquiry.name}</div>
                      <div className="font-inter text-xs text-gray-400">{inquiry.email}</div>
                    </td>
                    <td className="py-3.5 px-4 hidden md:table-cell">
                      <span className="font-inter text-sm text-charcoal truncate max-w-[150px] block">
                        {inquiry.destinations || '—'}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 hidden lg:table-cell">
                      <span className="font-inter text-sm text-charcoal">
                        {inquiry.wedding_date ? new Date(inquiry.wedding_date).toLocaleDateString('en-CA', { month: 'short', year: 'numeric' }) : '—'}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 hidden lg:table-cell">
                      <span className="font-inter text-sm text-charcoal">{inquiry.guest_count || '—'}</span>
                    </td>
                    <td className="py-3.5 px-4" onClick={(e) => e.stopPropagation()}>
                      <select
                        className={`text-xs px-2 py-1.5 rounded-sm font-inter font-semibold border-0 cursor-pointer ${STAGE_COLORS[inquiry.status] || 'bg-gray-100 text-gray-600'}`}
                        value={inquiry.status}
                        onChange={(e) => updateStatus(inquiry.id, e.target.value)}
                      >
                        {PIPELINE_STAGES.map((stage) => (
                          <option key={stage} value={stage}>{stage}</option>
                        ))}
                      </select>
                    </td>
                    <td className="py-3.5 px-4">
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelectedInquiry(inquiry); }}
                        className="font-inter text-xs text-maroon hover:text-maroon-dark font-semibold transition-colors"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredInquiries.length === 0 && (
              <div className="text-center py-12 text-gray-400 font-inter text-sm">
                No inquiries found
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Inquiry detail modal */}
      <AnimatePresence>
        {selectedInquiry && (
          <motion.div
            className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-50 flex items-center justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedInquiry(null)}
          >
            <motion.div
              className="bg-white h-full w-full max-w-lg overflow-y-auto shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer header */}
              <div className="sticky top-0 bg-charcoal px-6 py-4 flex items-center justify-between z-10">
                <div>
                  <h3 className="font-playfair text-lg font-semibold text-ivory">{selectedInquiry.name}</h3>
                  <p className="font-inter text-xs text-ivory/60">{selectedInquiry.email}</p>
                </div>
                <button
                  onClick={() => setSelectedInquiry(null)}
                  className="text-ivory/60 hover:text-ivory transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer content */}
              <div className="p-6 space-y-6">
                {/* Status update */}
                <div>
                  <label className="font-inter text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
                    Pipeline Stage
                  </label>
                  <select
                    className={`w-full px-4 py-3 rounded-sm font-inter text-sm font-semibold border-0 cursor-pointer ${STAGE_COLORS[selectedInquiry.status] || 'bg-gray-100 text-gray-600'}`}
                    value={selectedInquiry.status}
                    onChange={(e) => updateStatus(selectedInquiry.id, e.target.value)}
                  >
                    {PIPELINE_STAGES.map((stage) => (
                      <option key={stage} value={stage}>{stage}</option>
                    ))}
                  </select>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  {[
                    { label: 'Phone', value: selectedInquiry.phone },
                    { label: 'Province', value: selectedInquiry.province },
                    { label: 'Wedding Date', value: selectedInquiry.wedding_date ? new Date(selectedInquiry.wedding_date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' }) : null },
                    { label: 'Guest Count', value: selectedInquiry.guest_count?.toString() },
                    { label: 'Destinations', value: selectedInquiry.destinations },
                    { label: 'Budget Range', value: selectedInquiry.budget_range },
                    { label: 'Events Needed', value: selectedInquiry.events?.replace(/,/g, ', ') },
                    { label: 'Travel Support', value: selectedInquiry.travel_support ? 'Yes' : 'No' },
                    { label: 'Inquiry Date', value: new Date(selectedInquiry.created_at).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }) },
                  ].map((item) => (
                    item.value ? (
                      <div key={item.label}>
                        <div className="font-inter text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                          {item.label}
                        </div>
                        <div className="font-inter text-sm text-charcoal">{item.value}</div>
                      </div>
                    ) : null
                  ))}

                  {selectedInquiry.notes && (
                    <div>
                      <div className="font-inter text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Notes
                      </div>
                      <div className="bg-beige rounded-sm p-4 font-inter text-sm text-charcoal leading-relaxed">
                        {selectedInquiry.notes}
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick actions */}
                <div className="space-y-2 pt-4 border-t border-beige">
                  <a
                    href={`mailto:${selectedInquiry.email}?subject=Your%20Shaadi%20Abroad%20Inquiry&body=Hi%20${encodeURIComponent(selectedInquiry.name.split(' ')[0])}%2C%0A%0AThank%20you%20for%20your%20inquiry...`}
                    className="block w-full text-center py-3 bg-maroon text-ivory font-inter font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-maroon-dark transition-colors"
                  >
                    Send Email
                  </a>
                  {selectedInquiry.phone && (
                    <a
                      href={`tel:${selectedInquiry.phone}`}
                      className="block w-full text-center py-3 border border-maroon text-maroon font-inter font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-maroon hover:text-ivory transition-all"
                    >
                      Call {selectedInquiry.phone}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
