import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CalendarGrid from './CalendarGrid';
import TimeSlotPicker from './TimeSlotPicker';
import ContactForm from './ContactForm';
import BookingConfirmation from './BookingConfirmation';

type SchedulerStep = 'datetime' | 'contact' | 'confirmation';

interface MeetingData {
  selectedDate: Date | null;
  selectedTime: string | null;
  contactInfo: {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    phone: string;
  } | null;
}

const CustomMeetingScheduler = () => {
  const [currentStep, setCurrentStep] = useState<SchedulerStep>('datetime');
  const [meetingData, setMeetingData] = useState<MeetingData>({
    selectedDate: null,
    selectedTime: null,
    contactInfo: null
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const steps = [
    { id: 'datetime', label: 'Datum & tijd', number: 1 },
    { id: 'contact', label: 'Contact gegevens', number: 2 },
    { id: 'confirmation', label: 'Bevestiging', number: 3 }
  ];

  const handleDateSelect = (date: Date) => {
    setMeetingData(prev => ({ ...prev, selectedDate: date }));
    // Stay on same step, just update date
  };

  const handleTimeSelect = (time: string) => {
    setMeetingData(prev => ({ ...prev, selectedTime: time }));
    setCurrentStep('contact');
  };

  const handleContactSubmit = async (contactInfo: any) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Get UTM tracking data
      const getTrackingData = () => {
        if (typeof window === 'undefined') return {};
        try {
          const stored = localStorage.getItem('buildrs_tracking_data');
          return stored ? JSON.parse(stored) : {};
        } catch {
          return {};
        }
      };

      const trackingData = getTrackingData();

      // Book the meeting via API with tracking data
      const payload = {
        // Meeting data
        startTime: new Date(`${meetingData.selectedDate?.toISOString().split('T')[0]}T${meetingData.selectedTime}:00.000Z`).toISOString(),
        endTime: new Date(new Date(`${meetingData.selectedDate?.toISOString().split('T')[0]}T${meetingData.selectedTime}:00.000Z`).getTime() + 30 * 60000).toISOString(),
        // Contact info
        ...contactInfo,
        // UTM tracking data
        tracking: trackingData
      };

      const response = await fetch('/api/meetings/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Failed to book meeting');
      }

      setMeetingData(prev => ({ ...prev, contactInfo }));
      setCurrentStep('confirmation');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    const stepOrder: SchedulerStep[] = ['datetime', 'contact', 'confirmation'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  const getCurrentStepNumber = () => {
    return steps.find(step => step.id === currentStep)?.number || 1;
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main central glow */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.08) 50%, transparent 100%)'
          }}
        ></div>
        
        {/* Floating ambient glows */}
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-400/20 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-tr from-pink-500/15 to-purple-600/15 rounded-full blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '5s' }}></div>
        
        {/* Corner glows */}
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-2xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-600/20 to-transparent rounded-full blur-2xl opacity-45"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight mb-4"
            style={{ 
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              fontWeight: '200',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(168, 85, 247, 0.8) 50%, rgba(236, 72, 153, 0.8) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Plan een Meeting
          </h1>
          
          <p 
            className="text-lg text-white/80 max-w-2xl mx-auto"
            style={{ 
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              fontWeight: '300'
            }}
          >
            Ontdek hoe AI automatisering jouw bedrijf kan transformeren.<br/>
            <span style={{ color: 'rgba(168, 85, 247, 0.9)' }}>Gratis strategisch gesprek van 30 minuten.</span>
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                    getCurrentStepNumber() >= step.number
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-white/10 text-white/60 backdrop-blur-sm'
                  }`}
                >
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div 
                    className={`w-12 h-0.5 mx-2 transition-all duration-300 ${
                      getCurrentStepNumber() > step.number
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                        : 'bg-white/20'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-white/80 font-medium">
              {steps.find(step => step.id === currentStep)?.label}
            </p>
          </div>
        </motion.div>

        {/* Error Display */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-center"
          >
            {error}
          </motion.div>
        )}

        {/* Main Content */}
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {currentStep === 'datetime' && (
              <motion.div
                key="datetime"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
              >
                {/* Left: Date Selection */}
                <div>
                  <h3 className="text-xl font-medium text-white mb-6 text-center lg:text-left">
                    Selecteer een datum
                  </h3>
                  <CalendarGrid onDateSelect={handleDateSelect} />
                </div>

                {/* Right: Time Selection */}
                <div>
                  {meetingData.selectedDate ? (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <TimeSlotPicker 
                        selectedDate={meetingData.selectedDate}
                        onTimeSelect={handleTimeSelect}
                        showBackButton={false}
                      />
                    </motion.div>
                  ) : (
                    <div className="flex items-center justify-center h-full min-h-[300px]">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
                          <svg className="w-8 h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p 
                          className="text-white/60"
                          style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}
                        >
                          Kies eerst een datum om beschikbare tijdsloten te zien
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {currentStep === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ContactForm 
                  onSubmit={handleContactSubmit}
                  onBack={handleBack}
                  isLoading={isLoading}
                />
              </motion.div>
            )}

            {currentStep === 'confirmation' && (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <BookingConfirmation meetingData={meetingData} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CustomMeetingScheduler;