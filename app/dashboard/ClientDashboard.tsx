'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Users,
  MapPin,
  CheckSquare,
  DollarSign,
  Clock,
  FileText,
  Phone,
  CheckCircle,
  Circle,
  TrendingUp,
  Star,
} from 'lucide-react';

const initialTasks = [
  { id: 1, task: 'Complete initial consultation with Shaadi Abroad team', completed: true, category: 'Planning', due: 'Done' },
  { id: 2, task: 'Confirm destination and venue preference', completed: true, category: 'Planning', due: 'Done' },
  { id: 3, task: 'Sign planning agreement and submit deposit', completed: false, category: 'Admin', due: '2 weeks' },
  { id: 4, task: 'Gather passports for all immediate family members', completed: false, category: 'Travel', due: '1 month' },
  { id: 5, task: 'Share preliminary guest list with planner', completed: false, category: 'Guests', due: '3 weeks' },
  { id: 6, task: 'Review and approve venue contract', completed: false, category: 'Venue', due: '6 weeks' },
  { id: 7, task: 'Select wedding date and lock resort room block', completed: false, category: 'Booking', due: '6 weeks' },
  { id: 8, task: 'Begin bridal outfit consultations', completed: false, category: 'Attire', due: '2 months' },
  { id: 9, task: 'Confirm pandit / officiant availability', completed: false, category: 'Ceremony', due: '3 months' },
  { id: 10, task: 'Send save-the-dates to all guests', completed: false, category: 'Guests', due: '4 months' },
];

const budgetItems = [
  { category: 'Venue & Resort', budgeted: 45000, spent: 15000 },
  { category: 'Catering & Bar', budgeted: 25000, spent: 0 },
  { category: 'Décor & Flowers', budgeted: 18000, spent: 0 },
  { category: 'Photography & Film', budgeted: 12000, spent: 8000 },
  { category: 'Entertainment', budgeted: 8000, spent: 0 },
  { category: 'Planning Fee', budgeted: 18000, spent: 18000 },
];

const events = [
  {
    name: 'Mehndi Night',
    date: 'Day 1 — Evening',
    time: '6:00 PM – 11:00 PM',
    location: 'Rooftop Terrace',
    status: 'Confirmed',
    guests: 80,
  },
  {
    name: 'Sangeet',
    date: 'Day 2 — Evening',
    time: '7:00 PM – 1:00 AM',
    location: 'Grand Ballroom',
    status: 'Confirmed',
    guests: 120,
  },
  {
    name: 'Wedding Ceremony',
    date: 'Day 3 — Afternoon',
    time: '4:30 PM – 7:00 PM',
    location: 'Beachfront Terrace',
    status: 'Tentative',
    guests: 120,
  },
  {
    name: 'Reception',
    date: 'Day 3 — Evening',
    time: '8:00 PM – 1:00 AM',
    location: 'Grand Ballroom',
    status: 'Confirmed',
    guests: 120,
  },
];

export default function ClientDashboard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeTab, setActiveTab] = useState<'tasks' | 'budget' | 'events' | 'docs'>('tasks');

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const completedTasks = tasks.filter((t) => t.completed).length;
  const totalBudgeted = budgetItems.reduce((sum, item) => sum + item.budgeted, 0);
  const totalSpent = budgetItems.reduce((sum, item) => sum + item.spent, 0);

  const tabs = [
    { id: 'tasks', label: 'Task Checklist', icon: <CheckSquare className="w-4 h-4" /> },
    { id: 'budget', label: 'Budget Tracker', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'events', label: 'Event Itinerary', icon: <Calendar className="w-4 h-4" /> },
    { id: 'docs', label: 'Documents', icon: <FileText className="w-4 h-4" /> },
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container-custom">
        {/* Welcome header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-inter text-sm text-gray-500 mb-1">Welcome back</p>
          <h1 className="font-playfair text-3xl font-bold text-charcoal">
            Priya & Arjun's Wedding
          </h1>
        </motion.div>

        {/* Wedding overview cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            {
              icon: <Calendar className="w-5 h-5 text-maroon" />,
              label: 'Wedding Date',
              value: 'Nov 15, 2025',
              sub: '243 days away',
              bg: 'bg-champagne',
            },
            {
              icon: <MapPin className="w-5 h-5 text-blue-600" />,
              label: 'Destination',
              value: 'Riviera Maya',
              sub: 'Mexico',
              bg: 'bg-blue-50',
            },
            {
              icon: <Users className="w-5 h-5 text-purple-600" />,
              label: 'Guest Count',
              value: '120',
              sub: 'Confirmed guests',
              bg: 'bg-purple-50',
            },
            {
              icon: <Star className="w-5 h-5 text-gold" />,
              label: 'Package',
              value: 'Luxe',
              sub: 'Full service',
              bg: 'bg-gold/10',
            },
          ].map((card) => (
            <div key={card.label} className="bg-white rounded-sm p-5 shadow-sm border border-gray-100">
              <div className={`w-9 h-9 rounded-sm ${card.bg} flex items-center justify-center mb-3`}>
                {card.icon}
              </div>
              <div className="font-inter text-xs text-gray-400 mb-0.5">{card.label}</div>
              <div className="font-playfair text-lg font-bold text-charcoal">{card.value}</div>
              <div className="font-inter text-xs text-gray-500">{card.sub}</div>
            </div>
          ))}
        </div>

        {/* Quick progress */}
        <div className="bg-white rounded-sm p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-playfair text-lg font-semibold text-charcoal">Planning Progress</h2>
            <span className="font-inter text-sm font-semibold text-maroon">
              {completedTasks}/{tasks.length} tasks complete
            </span>
          </div>
          <div className="w-full h-2 bg-beige rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-maroon to-gold rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(completedTasks / tasks.length) * 100}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="font-inter text-xs text-gray-400">Just getting started</span>
            <span className="font-inter text-xs text-gray-400">
              {Math.round((completedTasks / tasks.length) * 100)}% complete
            </span>
          </div>
        </div>

        {/* Main content tabs */}
        <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden">
          {/* Tab navigation */}
          <div className="border-b border-gray-100 flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-4 font-inter text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                  activeTab === tab.id
                    ? 'border-maroon text-maroon'
                    : 'border-transparent text-gray-500 hover:text-charcoal'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-6">
            {/* Tasks tab */}
            {activeTab === 'tasks' && (
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-playfair text-lg font-semibold text-charcoal">
                    Planning Checklist
                  </h3>
                  <span className="font-inter text-xs text-gray-500">
                    {tasks.filter((t) => !t.completed).length} remaining
                  </span>
                </div>
                <div className="space-y-2">
                  {tasks.map((task, index) => (
                    <motion.div
                      key={task.id}
                      className={`flex items-start gap-4 p-4 rounded-sm border transition-all cursor-pointer ${
                        task.completed
                          ? 'bg-gray-50 border-gray-100 opacity-70'
                          : 'bg-white border-beige hover:border-gold'
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04 }}
                      onClick={() => toggleTask(task.id)}
                    >
                      {task.completed ? (
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className={`font-inter text-sm ${task.completed ? 'line-through text-gray-400' : 'text-charcoal'}`}>
                          {task.task}
                        </p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="font-inter text-xs text-gray-400 bg-beige px-2 py-0.5 rounded-sm">
                            {task.category}
                          </span>
                          <span className="font-inter text-xs text-gray-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {task.due}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Budget tab */}
            {activeTab === 'budget' && (
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-playfair text-lg font-semibold text-charcoal">Budget Tracker</h3>
                  <div className="text-right">
                    <div className="font-inter text-xs text-gray-400">Total Budget</div>
                    <div className="font-playfair text-lg font-bold text-charcoal">
                      ${totalBudgeted.toLocaleString()} CAD
                    </div>
                  </div>
                </div>

                {/* Overall spend bar */}
                <div className="bg-beige rounded-sm p-5 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-inter text-sm text-charcoal font-medium">Total Committed</span>
                    <span className="font-playfair text-lg font-bold text-maroon">
                      ${totalSpent.toLocaleString()} / ${totalBudgeted.toLocaleString()} CAD
                    </span>
                  </div>
                  <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-maroon rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(totalSpent / totalBudgeted) * 100}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <div className="font-inter text-xs text-gray-500 mt-2">
                    {Math.round((totalSpent / totalBudgeted) * 100)}% committed — {((totalBudgeted - totalSpent) / 1000).toFixed(0)}k remaining
                  </div>
                </div>

                <div className="space-y-4">
                  {budgetItems.map((item, index) => {
                    const percent = item.budgeted > 0 ? (item.spent / item.budgeted) * 100 : 0;
                    return (
                      <motion.div
                        key={item.category}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.06 }}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-inter text-sm text-charcoal">{item.category}</span>
                          <div className="text-right">
                            <span className="font-inter text-sm font-semibold text-charcoal">
                              ${item.spent.toLocaleString()}
                            </span>
                            <span className="font-inter text-xs text-gray-400">
                              {' '}/ ${item.budgeted.toLocaleString()}
                            </span>
                          </div>
                        </div>
                        <div className="w-full h-2 bg-beige rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${percent > 90 ? 'bg-red-400' : percent > 60 ? 'bg-gold' : 'bg-maroon'}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${percent}%` }}
                            transition={{ duration: 0.8, delay: index * 0.06 }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Events tab */}
            {activeTab === 'events' && (
              <div>
                <h3 className="font-playfair text-lg font-semibold text-charcoal mb-5">
                  Event Itinerary
                </h3>
                <div className="space-y-4">
                  {events.map((event, index) => (
                    <motion.div
                      key={event.name}
                      className="flex gap-4 p-5 border border-beige rounded-sm hover:border-gold transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-1 bg-maroon rounded-full flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="font-playfair text-lg font-semibold text-charcoal">{event.name}</h4>
                            <p className="font-inter text-sm text-gray-500 mt-0.5">{event.date}</p>
                          </div>
                          <span className={`text-xs font-inter font-semibold px-2.5 py-1 rounded-sm flex-shrink-0 ${
                            event.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {event.status}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-500 font-inter">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {event.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {event.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3.5 h-3.5" />
                            {event.guests} guests
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Documents tab */}
            {activeTab === 'docs' && (
              <div>
                <h3 className="font-playfair text-lg font-semibold text-charcoal mb-5">
                  Documents
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    { name: 'Venue Contract', status: 'Pending Review', type: 'PDF' },
                    { name: 'Planning Agreement', status: 'Signed', type: 'PDF' },
                    { name: 'Event Timeline v1', status: 'Draft', type: 'PDF' },
                    { name: 'Guest Information Guide', status: 'Ready to Share', type: 'PDF' },
                  ].map((doc) => (
                    <div key={doc.name} className="flex items-center gap-4 p-4 border border-beige rounded-sm hover:border-gold transition-colors cursor-pointer">
                      <div className="w-10 h-12 bg-champagne rounded-sm flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-maroon" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-inter text-sm font-semibold text-charcoal truncate">{doc.name}</p>
                        <p className="font-inter text-xs text-gray-400">{doc.type}</p>
                      </div>
                      <span className={`text-xs font-inter font-semibold px-2 py-1 rounded-sm flex-shrink-0 ${
                        doc.status === 'Signed' ? 'bg-green-100 text-green-700' :
                        doc.status === 'Draft' ? 'bg-gray-100 text-gray-600' :
                        doc.status === 'Ready to Share' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {doc.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Upload placeholder */}
                <div className="border-2 border-dashed border-beige rounded-sm p-8 text-center hover:border-gold transition-colors cursor-pointer">
                  <FileText className="w-8 h-8 text-gray-300 mx-auto mb-3" />
                  <p className="font-inter text-sm text-gray-500 mb-1">
                    Upload documents here
                  </p>
                  <p className="font-inter text-xs text-gray-400">
                    PDF, DOC, JPG up to 20MB
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact planner CTA */}
        <div className="mt-8 bg-maroon rounded-sm p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-playfair text-xl font-semibold text-ivory mb-1">
              Questions? Your Planner is Here.
            </h3>
            <p className="font-inter text-sm text-ivory/70">
              Reach your dedicated planner directly. Available Monday–Saturday, 9AM–7PM EST.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="mailto:hello@shaadiabroad.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ivory text-maroon font-inter font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-champagne transition-colors"
            >
              Email Planner
            </a>
            <a
              href="tel:+14165550100"
              className="inline-flex items-center gap-2 px-6 py-3 border border-ivory text-ivory font-inter font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-ivory hover:text-maroon transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
