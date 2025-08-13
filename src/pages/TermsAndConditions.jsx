import React from 'react';
import { 
    FiAlertTriangle, 
    FiFileText, 
    FiLink, 
    FiMessageSquare, 
    FiShield, 
    FiXOctagon,
    FiInfo,
    FiMail,
    FiAward
} from 'react-icons/fi';

// Data for sections to keep the component clean and easy to update
const sections = [
    { id: 'disclaimer', title: 'Disclaimer', icon: FiAlertTriangle },
    { id: 'cookies', title: 'Cookies', icon: FiInfo },
    { id: 'license', title: 'License', icon: FiAward },
    { id: 'comments', title: 'Comments', icon: FiMessageSquare },
    { id: 'hyperlinking', title: 'Hyperlinking', icon: FiLink },
    { id: 'iframes', title: 'iFrames', icon: FiXOctagon },
    { id: 'liability', title: 'Content Liability', icon: FiShield },
    { id: 'rights', title: 'Reservation of Rights', icon: FiFileText },
    { id: 'contact', title: 'Contact Us', icon: FiMail },
];

// A reusable component for important notices
const HighlightBox = ({ icon, children }) => (
    <div className="my-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-4">
        <div className="text-yellow-500 mt-1 flex-shrink-0">{icon}</div>
        <div className="text-sm text-yellow-800">{children}</div>
    </div>
);

// A reusable component for each main section
const Section = ({ id, title, icon: Icon, children }) => (
    <section id={id} className="mb-12 scroll-mt-24">
        <div className="flex items-center gap-3 mb-4">
            <Icon className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        </div>
        <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed">
            {children}
        </div>
    </section>
);

// The sticky table of contents
const TableOfContents = () => (
    <div className="lg:sticky lg:top-24">
        <h3 className="font-semibold text-gray-900 mb-3">On this page</h3>
        <ul className="space-y-2">
            {sections.map(section => (
                <li key={section.id}>
                    <a 
                        href={`#${section.id}`} 
                        className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 p-2 rounded-md transition-colors hover:bg-gray-100"
                    >
                        <section.icon className="w-4 h-4 flex-shrink-0" />
                        <span>{section.title}</span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
);


const TermsAndConditionsPage = () => {
  return (
    <div className="bg-white font-sans">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        <header className="mb-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">Terms and Conditions</h1>
          <p className="mt-4 text-lg text-gray-500">
            Welcome to <strong>Global Career Advisor LLC</strong>!
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Left Sidebar - Table of Contents */}
            <aside className="lg:col-span-1">
                <TableOfContents />
            </aside>
            
            {/* Right Side - Main Content */}
            <main className="lg:col-span-3">
                <p className="mb-6 text-gray-600 leading-relaxed">
                    By accessing this website (<a href="https://globalcareeradvisorllc.com" className="text-blue-600 underline hover:no-underline">https://globalcareeradvisorllc.com</a>), we assume you accept these terms and conditions. Do not continue to use Global Career Advisors if you do not agree to take all of the terms and conditions stated on this page.
                </p>

                <Section id="disclaimer" title="Disclaimer" icon={FiAlertTriangle}>
                    <p>You are solely responsible for your use of the Services, and we are not responsible for the activities, omissions, or other conduct, whether online or offline, of any other user or any Coach.</p>
                    <HighlightBox icon={<FiAlertTriangle size={20} />}>
                        <strong>All sales are final.</strong> Should a client decide at any time during the course of their job search that the services they paid for are no longer of interest to them, no refunds will be provided. A future credit may be available at the discretion of Global Career Advisors.
                    </HighlightBox>
                    <p>We reserve the right to adjust our Service prices at any time. By purchasing any Paid Services, you agree to pay applicable fees and taxes at the time of purchase and authorize Global Career Advisors to collect payment directly or through a third-party processor.</p>
                    <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800">Factors Influencing Outcomes:</h3>
                    <ul className="list-disc list-inside space-y-2 my-4">
                        <li><strong>Individual Circumstances:</strong> Skills, background, experience, and personal situations impact results.</li>
                        <li><strong>Commitment and Effort:</strong> How much you implement our strategies matters.</li>
                        <li><strong>External Market Conditions:</strong> Job market and economic conditions may influence opportunities.</li>
                    </ul>
                    <p><strong>No Guarantees:</strong> We do not guarantee specific outcomes. Executive career advising is subjective and depends on multiple factors beyond our control.</p>
                </Section>

                <Section id="cookies" title="Cookies" icon={FiInfo}>
                    <p>By accessing Global Career Advisors, you agree to our use of cookies in accordance with our Privacy Policy. Cookies are used to improve functionality and user experience.</p>
                </Section>
                
                <Section id="license" title="License" icon={FiAward}>
                    <p>Unless otherwise stated, Global Career Advisors and/or its licensors own all intellectual property rights for material on our site. You may access content for personal use only, subject to these restrictions:</p>
                    <ul className="list-disc list-inside space-y-2 my-4">
                        <li>No republishing material</li>
                        <li>No selling, renting, or sub-licensing</li>
                        <li>No reproducing or copying content</li>
                        <li>No redistributing content</li>
                    </ul>
                </Section>
                
                <Section id="comments" title="Comments" icon={FiMessageSquare}>
                     <p>Users may post comments in certain areas. Comments reflect the views of the individual poster, not Global Career Advisors. We are not liable for comments and may remove any deemed inappropriate or offensive.</p>
                </Section>

                <Section id="hyperlinking" title="Hyperlinking to Our Content" icon={FiLink}>
                    <p>Certain organizations (search engines, news organizations, directories) may link to our Website without prior approval, provided the link is not deceptive and fits within the linking party’s site context. Other organizations may request approval.</p>
                </Section>
                
                <Section id="iframes" title="iFrames" icon={FiXOctagon}>
                     <p>Without written permission, you may not create frames that alter the visual presentation of our Website.</p>
                </Section>

                <Section id="liability" title="Content Liability" icon={FiShield}>
                    <p>We are not responsible for content on your website that links to ours. You agree to defend us against all related claims.</p>
                </Section>

                <Section id="rights" title="Reservation of Rights" icon={FiFileText}>
                    <p>We reserve the right to request link removal and amend these terms at any time. By linking to our site, you agree to these conditions.</p>
                </Section>

                <Section id="contact" title="Contact Us" icon={FiMail}>
                    <p>If you have any questions regarding these Terms and Conditions, please contact us at <a href="https://www.globalcareeradvisorllc.com/contact" className="text-blue-600 underline hover:no-underline">www.globalcareeradvisors.com/contact</a>.</p>
                </Section>
            </main>

        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;