'use client';
import React from 'react';
import ContactUs from '../contactus';
import MobileHeader from '../MobileHeader';
import MobileFooter from '../MobileFooter';
import { ActivePageProvider } from '../../store/ActivePageContext';

export default function ContactPage() {
  return (
    <ActivePageProvider>
        <main className="bg-black min-h-screen">
            <MobileHeader pageHeading="Contact Us" />
            <ContactUs />
            <MobileFooter />
        </main>
    </ActivePageProvider>
  );
}
