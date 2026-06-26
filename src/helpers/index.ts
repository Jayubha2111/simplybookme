import React from 'react';

export interface BusinessType {
  description: string;
  icon: string;
  color: string;
  businessCount: number;
  averageBookingsPerMonth: number;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  initials: string;
  rating: number;
  text: string;
  avatar: string;
}

const images: Record<string, string> = {
  'logo.svg': '/Group4.svg',
  'Group4.svg': '/Group4.svg',
  'avatar.svg': '/avatar.png',
  'loading-spinner.svg': '/loading-spinner.png',
  'error-icon.svg': '/error-icon.png',
  'wave-pattern.svg': '/wave-pattern.png',
  'gradient-overlay.svg': '/gradient-overlay.png',
  'company-logo.svg': '/company-logo.png',
  'app-store.svg': '/app-store.png',
  'play-store.svg': '/play-store.png',
  'calendar-icon.svg': '/calendar-icon.png',
  'chat-icon.svg': '/chat-icon.png',
  'analytics-icon.svg': '/analytics-icon.png',
  'notification-icon.svg': '/notification-icon.png',
  'facebook-icon.svg': '/facebook-icon.png',
  'instagram-icon.svg': '/instagram-icon.png',
  'twitter-icon.svg': '/twitter-icon.png',
  'youtube-icon.svg': '/youtube-icon.png',
  'dashboard-mock.svg': '/dashboard-mock.png',
  'mobile-app.svg': '/mobile-app.png',
  'ai-voice.svg': '/ai-voice.png',
  'decorative-1.svg': '/decorative-1.png',
  'decorative-2.svg': '/decorative-2.png'
};

export default function Image({ src, alt, className }: {
  src: string;
  alt: string;
  className?: string;
}): React.ReactElement {
  const imageSrc = images[src] || src;
  return React.createElement('img', { src: imageSrc, alt, className });
}

export function getBusinessType(slug: string): BusinessType | undefined {
  const businessTypes: Record<string, BusinessType> = {
    sportsAndFitness: {
      description: 'Professional fitness training and workout services',
      icon: '💪',
      color: '#00AEE',
      businessCount: 1250,
      averageBookingsPerMonth: 450
    },
    beautyAndWellness: {
      description: 'Comprehensive beauty treatments and wellness services',
      icon: '✨',
      color: '#EC4899',
      businessCount: 890,
      averageBookingsPerMonth: 320
    },
    educational: {
      description: 'Learning programs, courses, and educational services',
      icon: '📚',
      color: '#8B5CF6',
      businessCount: 670,
      averageBookingsPerMonth: 280
    },
    eventsAndEntertainment: {
      description: 'Events, performances, and entertainment experiences',
      icon: '🎭',
      color: '#FBBF24',
      businessCount: 450,
      averageBookingsPerMonth: 180
    },
    personalMeetings: {
      description: 'One-on-one consultations and personal services',
      icon: '💼',
      color: '#F97316',
      businessCount: 1800,
      averageBookingsPerMonth: 650
    },
    medicalAndHealth: {
      description: 'Healthcare services, medical treatments, and wellness',
      icon: '🏥',
      color: '#06B6D4',
      businessCount: 920,
      averageBookingsPerMonth: 380
    }
  };

  return businessTypes[slug];
}

export function getTopReviews(limit = 3): Review[] {
  const customerReviews: Review[] = [
    {
      id: 1,
      name: 'Olivia Bennett',
      role: 'Owner, Bloom Hair Studio',
      initials: 'OB',
      rating: 4.8,
      text: 'SimplybookME transformed how we manage appointments. No-shows dropped by 40% in our first month thanks to automatic reminders. The interface is intuitive and our clients love the booking flexibility.',
      avatar: 'ob'
    },
    {
      id: 2,
      name: 'Daniel Park',
      role: 'Founder, North Strength Gym',
      initials: 'DP',
      rating: 4.6,
      text: 'The custom features let me build exactly the workflow we needed — from intake forms to membership renewals. Game changer! The analytics help us understand our clients better.',
      avatar: 'dp'
    },
    {
      id: 3,
      name: 'Sofia Romero',
      role: 'Director, Serenity Wellness Spa',
      initials: 'SR',
      rating: 4.9,
      text: 'Clients love the branded app and we love how much time we save. Support is genuinely 24/7 — I\'ve tested it. The booking system is seamless.',
      avatar: 'sr'
    }
  ];

  return customerReviews.slice(0, limit);
}

export function getPlatformRatings() {
  const ratings = [
    { platform: 'Capterra', score: '4.6/5', reviews: 1250, verified: true },
    { platform: 'GetApp', score: '4.6/5', reviews: 890, verified: true },
    { platform: 'FinancesOnline', score: '4.7/5', reviews: 675, verified: true },
    { platform: 'G2', score: '4.4/5', reviews: 520, verified: true },
    { platform: 'TrustRadius', score: '4.5/5', reviews: 380, verified: true }
  ];
  return ratings;
}

export function getAppointmentFeatures() {
  const features = [
    { id: 'auto-reminders', title: 'Automatic Reminders', description: 'Send SMS, email, and WhatsApp reminders automatically', icon: '⏰', status: 'active' },
    { id: 'smart-scheduling', title: 'Smart Scheduling', description: 'AI-powered availability checking and conflict resolution', icon: '🧠', status: 'active' },
    { id: 'payment-processing', title: 'Payment Processing', description: 'Secure payment processing with multiple gateways', icon: '💳', status: 'active' },
    { id: 'client-history', title: 'Client History', description: 'Complete client booking and treatment history', icon: '📊', status: 'active' },
    { id: 'staff-management', title: 'Staff Management', description: 'Efficient staff scheduling and assignment', icon: '👥', status: 'active' },
    { id: 'reporting', title: 'Advanced Reporting', description: 'Detailed analytics and business insights', icon: '📈', status: 'active' }
  ];
  return features;
}

export function getSystemFeatures() {
  const systemFeatures = {
    apiIntegration: true,
    mobileApp: true,
    '24x7Support': true,
    customDomain: true,
    whiteLabeling: true,
    multiLocation: true,
    appointmentReminders: true,
    clientPortal: true
  };
  return systemFeatures;
}

export function getAllBusinessTypes(): BusinessType[] {
  const businessTypes: Record<string, BusinessType> = {
    sportsAndFitness: {
      description: 'Professional fitness training and workout services',
      icon: '💪',
      color: '#00AEE',
      businessCount: 1250,
      averageBookingsPerMonth: 450
    },
    beautyAndWellness: {
      description: 'Comprehensive beauty treatments and wellness services',
      icon: '✨',
      color: '#EC4899',
      businessCount: 890,
      averageBookingsPerMonth: 320
    },
    educational: {
      description: 'Learning programs, courses, and educational services',
      icon: '📚',
      color: '#8B5CF6',
      businessCount: 670,
      averageBookingsPerMonth: 280
    },
    eventsAndEntertainment: {
      description: 'Events, performances, and entertainment experiences',
      icon: '🎭',
      color: '#FBBF24',
      businessCount: 450,
      averageBookingsPerMonth: 180
    },
    personalMeetings: {
      description: 'One-on-one consultations and personal services',
      icon: '💼',
      color: '#F97316',
      businessCount: 1800,
      averageBookingsPerMonth: 650
    },
    medicalAndHealth: {
      description: 'Healthcare services, medical treatments, and wellness',
      icon: '🏥',
      color: '#06B6D4',
      businessCount: 920,
      averageBookingsPerMonth: 380
    }
  };

  return Object.values(businessTypes);
}