import React, { useState } from 'react';
import { JOB_OPENINGS } from '../data';
import { Sparkles, Briefcase, MailCheck, GraduationCap, DollarSign, UploadCloud, CheckCircle, FileText, X } from 'lucide-react';

export default function Career() {
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  
  // Application form states
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantRole, setApplicantRole] = useState(JOB_OPENINGS[0].title);
  const [applicantCover, setApplicantCover] = useState('');
  const [cvFile, setCvFile] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedJob = JOB_OPENINGS.find((j) => j.id === selectedJobId);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail || !applicantPhone) return;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setApplicantName('');
      setApplicantEmail('');
      setApplicantPhone('');
      setApplicantCover('');
      setCvFile('');
      setSelectedJobId(null); // Close detail dialog
    }, 4500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0].name);
    }
  };

  return (
    <section className="py-20 bg-brand-creamdark/15 scroll-mt-20 border-b border-brand-creamdark/40" id="career">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-sagedark text-brand-charcoal text-xs font-mono font-bold tracking-widest uppercase mb-4">
            Join Our Team
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-brand-charcoal">
            Professional Career Openings
          </h2>
          <div className="h-1 w-20 bg-brand-earth mx-auto my-4 rounded-full" />
          <p className="text-sm sm:text-base text-stone-600 font-sans">
            Build your real estate career with Ahmedabad and Gandhinagar’s elite advisory house. We offer professional RERA certification coaching, top-tier workspace facilities, and industry leading commission brackets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Job Cards Grid (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-2 mb-1 font-mono">
              Currently Available Openings ({JOB_OPENINGS.length})
            </h3>
            
            {JOB_OPENINGS.map((job) => (
              <div
                key={job.id}
                onClick={() => {
                  setSelectedJobId(job.id);
                  setApplicantRole(job.title);
                }}
                className="bg-white p-6 rounded-2xl border border-brand-creamdark/85 hover:border-brand-earth/50 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <span className="p-1 px-2 mb-2 inline-block rounded bg-brand-creamlight border border-brand-creamdark text-[10px] text-brand-earth font-mono font-bold uppercase">
                    {job.department}
                  </span>
                  
                  <h4 className="text-lg font-display font-bold text-brand-charcoal mb-1">
                    {job.title}
                  </h4>
                  
                  {/* Job Specs */}
                  <div className="flex flex-wrap gap-4 text-xs font-sans text-stone-500 mt-2">
                    <span className="flex items-center gap-1">
                      <GraduationCap className="h-3.5 w-3.5 text-brand-earth" /> Exp: {job.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-3.5 w-3.5 text-brand-earth" /> {job.type}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="px-4 py-2 bg-brand-creamlight group-hover:bg-brand-earth border border-brand-creamdark text-brand-charcoal hover:bg-brand-earth hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider text-center transition-colors shrink-0"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Right Column: Dynamic HR Application Portal Form (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-brand-creamdark shadow-sm">
            <div className="mb-6 pb-4 border-b border-brand-creamlight">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-brand-earth uppercase tracking-widest">
                <Briefcase className="h-4 w-4" /> Professional Candidate Form
              </div>
              <h3 className="text-xl font-display font-bold text-brand-charcoal mt-1">
                Apply for Position
              </h3>
              <p className="text-xs text-stone-500 font-sans mt-0.5">
                Submit credentials directly to our Human Resources team. We screen applications within 4 business days.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 px-4 text-center flex flex-col items-center justify-center animate-pulse-slow">
                <MailCheck className="h-12 w-12 text-brand-earth mb-4" />
                <h4 className="text-lg font-display font-bold text-brand-charcoal">Application Registered Securely</h4>
                <p className="text-xs text-stone-600 font-sans mt-2 max-w-sm">
                  Hey <strong>{applicantName}</strong>, thank you! Your resume for <strong>{applicantRole}</strong> has been logged. Our Talent Team will inspect your file and follow up over telephone or email within 96 hours.
                </p>
                <span className="mt-4 p-1 px-3 bg-brand-creamlight text-[9px] font-mono text-brand-earth font-bold uppercase rounded border border-brand-creamdark">
                  Log ID: EST-CAREER-083
                </span>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="flex flex-col gap-4" id="career-application-form">
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">
                    Full Candidate Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full px-3 py-2 border border-brand-creamdark/95 bg-brand-creamlight/30 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-earth text-brand-charcoal font-sans"
                  />
                </div>

                {/* Email & Phone splits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@gmail.com"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-brand-creamdark/95 bg-brand-creamlight/30 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-earth text-brand-charcoal font-mono"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">
                      WhatsApp Contact
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      className="w-full px-3 py-2 border border-brand-creamdark/95 bg-brand-creamlight/30 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-earth text-brand-charcoal font-mono"
                    />
                  </div>
                </div>

                {/* Selected target position */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">
                    Apply for Position
                  </label>
                  <select
                    value={applicantRole}
                    onChange={(e) => setApplicantRole(e.target.value)}
                    className="w-full px-3 py-2.5 border border-brand-creamdark/95 bg-brand-creamlight/30 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-earth text-brand-charcoal font-sans cursor-pointer"
                  >
                    {JOB_OPENINGS.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Brief cover pitch */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">
                    Professional Cover Note
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Describe your real estate background in a few short sentences..."
                    value={applicantCover}
                    onChange={(e) => setApplicantCover(e.target.value)}
                    className="w-full px-3 py-2 border border-brand-creamdark/95 bg-brand-creamlight/30 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-earth text-brand-charcoal font-sans"
                  />
                </div>

                {/* Custom Drag & drop simulation upload box */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">
                    Attach Professional CV (PDF/Word)
                  </label>
                  
                  <div className="border-2 border-dashed border-brand-creamdark/85 hover:border-brand-earth rounded-2xl p-4 text-center cursor-pointer bg-brand-creamlight/10 transition-colors relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
                    />
                    <div className="flex flex-col items-center justify-center gap-1.5">
                      <UploadCloud className="h-6 w-6 text-brand-earth" />
                      <p className="text-xs font-semibold text-brand-charcoal">
                        {cvFile ? `Selected: ${cvFile}` : 'Drag resume here or click to upload'}
                      </p>
                      <p className="text-[10px] text-gray-400 font-mono">Max size 5MB (PDF/DOC)</p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-brand-charcoal hover:bg-brand-earth text-brand-creamlight hover:text-brand-charcoal font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow mt-2"
                  id="hr-apply-submit-btn"
                >
                  Submit Executive Application
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Detailed Job Description Overlay Modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-brand-charcoal/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto" id="career-modal">
            <div className="bg-brand-creamlight max-w-xl w-full rounded-3xl p-6 sm:p-8 border border-brand-creamdark shadow-2xl relative animate-float my-auto">
              {/* Close */}
              <button
                onClick={() => setSelectedJobId(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-brand-charcoal/80 text-brand-creamlight hover:bg-brand-earth hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <span className="p-1 px-2 rounded bg-brand-creamdark/70 border border-brand-creamdark text-[10px] text-brand-earth font-mono font-bold uppercase mb-2 inline-block">
                {selectedJob.department}
              </span>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-charcoal leading-tight">
                {selectedJob.title}
              </h3>

              <div className="grid grid-cols-2 gap-3 py-4 border-t border-b border-brand-creamdark/30 my-4 text-xs font-mono text-brand-charcoal">
                <div>
                  <span className="text-gray-400 block text-[9px] uppercase tracking-wider">Required Experience:</span>
                  <span className="font-semibold text-brand-earth">{selectedJob.experience}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[9px] uppercase tracking-wider">Job Placement Type:</span>
                  <span className="font-semibold">{selectedJob.type}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-400 block text-[9px] uppercase tracking-wider">Comp & Remuneration:</span>
                  <span className="font-semibold text-stone-700">{selectedJob.salary}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-2 font-mono">
                  Role Description:
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                  {selectedJob.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-2 font-mono">
                  Requirements & Competencies Checklist:
                </h4>
                <ul className="flex flex-col gap-2">
                  {selectedJob.requirements.map((req, i) => (
                    <li key={i} className="flex gap-1.5 text-xs text-stone-700 font-sans items-start">
                      <CheckCircle className="h-4 w-4 text-brand-sagedark shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => {
                  setApplicantRole(selectedJob.title);
                  setSelectedJobId(null);
                  document.getElementById('emi-calculator-card')?.scrollIntoView({ behavior: 'smooth' }); // Scroll past emi card to apply form
                }}
                className="w-full py-2.5 bg-brand-earth hover:bg-brand-charcoal text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
              >
                Apply for this opening
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
