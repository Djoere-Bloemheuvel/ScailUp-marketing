import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Mail, Building2, Phone, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TimeSlot {
  startTime: string;
  endTime: string;
  available: boolean;
}

interface MeetingAvailability {
  date: string;
  slots: TimeSlot[];
}

interface Contact {
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
  phone?: string;
}

interface TimeSlotPickerProps {
  calendarId?: string;
}

type BookingStep = 'auth' | 'date' | 'time' | 'contact' | 'confirmation';
type BookingStatus = 'idle' | 'loading' | 'success' | 'error';

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({ 
  calendarId = 'djoere@buildrs.ai' 
}) => {
  const [currentStep, setCurrentStep] = useState<BookingStep>('auth');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [availability, setAvailability] = useState<MeetingAvailability | null>(null);
  const [contact, setContact] = useState<Contact>({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    phone: ''
  });
  const [message, setMessage] = useState('');
  const [bookingStatus, setBookingStatus] = useState<BookingStatus>('idle');
  const [error, setError] = useState<string>('');
  const [eventId, setEventId] = useState<string>('');
  const [meetLink, setMeetLink] = useState<string>('');
  const [accessToken, setAccessToken] = useState<string>('');

  // Generate date options (next 14 days)
  const getDateOptions = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date);
      }
    }
    
    return dates;
  };

  const dateOptions = getDateOptions();

  // Fetch availability when date is selected
  useEffect(() => {
    if (selectedDate) {
      fetchAvailability(selectedDate);
    }
  }, [selectedDate]);

  const fetchAvailability = async (date: string) => {
    try {
      setBookingStatus('loading');
      setError('');
      
      const response = await fetch(`/api/meetings/availability?meetingLink=${meetingLink}&date=${date}`);
      const data = await response.json();
      
      if (data.success) {
        setAvailability(data.data);
        if (data.data.slots.length > 0) {
          setCurrentStep('time');
        } else {
          setError('Geen beschikbare tijdsloten voor deze datum');
        }
      } else {
        setError(data.error || 'Kon beschikbaarheid niet ophalen');
      }
    } catch (err) {
      setError('Netwerkfout bij ophalen beschikbaarheid');
    } finally {
      setBookingStatus('idle');
    }
  };

  const handleDateSelect = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    setSelectedDate(dateString);
    setSelectedSlot(null);
    setError('');
  };

  const handleSlotSelect = (slot: TimeSlot) => {
    setSelectedSlot(slot);
    setCurrentStep('contact');
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedSlot || !selectedDate) {
      setError('Selecteer eerst een datum en tijd');
      return;
    }

    setBookingStatus('loading');
    setError('');

    try {
      const response = await fetch('/api/meetings/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          meetingLink,
          startTime: selectedSlot.startTime,
          endTime: selectedSlot.endTime,
          contact,
          message
        })
      });

      const data = await response.json();

      if (data.success) {
        setMeetingId(data.data.meetingId);
        setBookingStatus('success');
        setCurrentStep('confirmation');
      } else {
        setError(data.error || 'Booking mislukt');
        setBookingStatus('error');
      }
    } catch (err) {
      setError('Netwerkfout bij booking');
      setBookingStatus('error');
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('nl-NL', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const resetBooking = () => {
    setCurrentStep('date');
    setSelectedDate('');
    setSelectedSlot(null);
    setContact({
      email: '',
      firstName: '',
      lastName: '',
      company: '',
      phone: ''
    });
    setMessage('');
    setBookingStatus('idle');
    setError('');
    setMeetingId('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-black/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light text-white mb-4">
            Plan een gesprek met Buildrs
          </h2>
          <p className="text-gray-400 text-lg">
            Ontdek hoe wij jouw business kunnen versterken met AI
          </p>
        </div>

        {/* Error Display */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-red-900/30 border border-red-700/50 rounded-lg p-4 mb-6"
            >
              <div className="flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          {currentStep === 'date' && (
            <motion.div
              key="date"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl text-white font-medium">Kies een datum</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dateOptions.map((date) => (
                  <button
                    key={date.toISOString()}
                    onClick={() => handleDateSelect(date)}
                    className="p-4 bg-gray-900/50 hover:bg-gray-800/50 border border-gray-700 rounded-xl transition-all duration-200 text-left group"
                  >
                    <div className="text-white font-medium text-lg">
                      {date.toLocaleDateString('nl-NL', { weekday: 'short' })}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {date.toLocaleDateString('nl-NL', { month: 'short', day: 'numeric' })}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === 'time' && availability && (
            <motion.div
              key="time"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl text-white font-medium">
                  Kies een tijd voor {formatDate(selectedDate)}
                </h3>
              </div>
              
              {bookingStatus === 'loading' ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-6 h-6 text-blue-400 animate-spin" />
                  <span className="ml-3 text-gray-400">Beschikbaarheid ophalen...</span>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {availability.slots.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlotSelect(slot)}
                      className="p-3 bg-gray-900/50 hover:bg-blue-900/30 border border-gray-700 hover:border-blue-500/50 rounded-lg transition-all duration-200 text-center"
                    >
                      <div className="text-white text-sm font-medium">
                        {formatTime(slot.startTime)}
                      </div>
                      <div className="text-gray-400 text-xs">
                        30 min
                      </div>
                    </button>
                  ))}
                </div>
              )}
              
              <button
                onClick={() => setCurrentStep('date')}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                ← Andere datum kiezen
              </button>
            </motion.div>
          )}

          {currentStep === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <User className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl text-white font-medium">Je gegevens</h3>
              </div>

              {/* Selected meeting summary */}
              <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4 mb-6">
                <div className="text-blue-300 text-sm font-medium mb-2">Geselecteerd:</div>
                <div className="text-white">
                  {formatDate(selectedDate)} om {selectedSlot && formatTime(selectedSlot.startTime)}
                </div>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Voornaam *
                    </label>
                    <input
                      type="text"
                      required
                      value={contact.firstName}
                      onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Je voornaam"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Achternaam *
                    </label>
                    <input
                      type="text"
                      required
                      value={contact.lastName}
                      onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Je achternaam"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    required
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="naam@bedrijf.nl"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Bedrijf
                    </label>
                    <input
                      type="text"
                      value={contact.company || ''}
                      onChange={(e) => setContact({ ...contact, company: e.target.value })}
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Je bedrijf"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      value={contact.phone || ''}
                      onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="(020) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Bericht (optioneel)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Vertel ons over je uitdagingen en doelen..."
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep('time')}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    ← Andere tijd kiezen
                  </button>
                  
                  <Button
                    type="submit"
                    disabled={bookingStatus === 'loading'}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
                  >
                    {bookingStatus === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Bezig met boeken...
                      </>
                    ) : (
                      'Afspraak Bevestigen'
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          )}

          {currentStep === 'confirmation' && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              
              <div>
                <h3 className="text-2xl text-white font-medium mb-2">
                  Afspraak Bevestigd!
                </h3>
                <p className="text-gray-400">
                  Je ontvangt een bevestigingsmail met alle details.
                </p>
              </div>

              <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-6">
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-green-400" />
                    <span className="text-white">
                      {formatDate(selectedDate)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-green-400" />
                    <span className="text-white">
                      {selectedSlot && formatTime(selectedSlot.startTime)} - {selectedSlot && formatTime(selectedSlot.endTime)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-400" />
                    <span className="text-white">
                      {contact.email}
                    </span>
                  </div>
                  {meetingId && (
                    <div className="text-xs text-gray-400 pt-2">
                      Meeting ID: {meetingId}
                    </div>
                  )}
                </div>
              </div>

              <Button
                onClick={resetBooking}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg"
              >
                Nieuwe Afspraak Plannen
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TimeSlotPicker;