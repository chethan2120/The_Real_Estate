import React, { useState, useEffect } from 'react';
import { SERVICES } from '../data';
import { Sparkles, Calculator, Landmark, ShieldCheck, CheckCircle2, FileSliders, Percent, ArrowRight } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<string>(SERVICES[0].id);

  // EMI Calculator States
  const [loanAmount, setLoanAmount] = useState<number>(5000000); // 50 Lakhs default
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5% default
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 Years default

  const [emi, setEmi] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  // Recalculate EMI whenever parameters change
  useEffect(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100; // Monthly rate
    const n = tenureYears * 12; // Total months

    if (P > 0 && r > 0 && n > 0) {
      const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayVal = emiValue * n;
      const totalIntVal = totalPayVal - P;

      setEmi(Math.floor(emiValue));
      setTotalPayment(Math.floor(totalPayVal));
      setTotalInterest(Math.floor(totalIntVal));
    } else {
      setEmi(0);
      setTotalPayment(0);
      setTotalInterest(0);
    }
  }, [loanAmount, interestRate, tenureYears]);

  const activeService = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];

  // Number Formatter Assist
  const formatRupees = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <section className="py-20 bg-brand-creamlight scroll-mt-20 border-b border-brand-creamdark/40" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-sagelight text-brand-charcoal text-xs font-mono font-bold tracking-widest uppercase mb-4">
            Certified Consultancy
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-brand-charcoal">
            Strategic Advisory Services
          </h2>
          <div className="h-1 w-20 bg-brand-earth mx-auto my-4 rounded-full" />
          <p className="text-sm sm:text-base text-stone-600 font-sans">
            Whether representing high-wealth families for sky villas or helping multi-national operations set base inside GIFT City SEZ, we offer comprehensive legal, investment, and documentation support.
          </p>
        </div>

        {/* Dynamic Services Tab Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24" id="services-dynamic-tabs">
          
          {/* Navigation Selection Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            <h3 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-2 pl-2">
              Our Core Services Block
            </h3>
            {SERVICES.map((serv) => (
              <button
                key={serv.id}
                onClick={() => setSelectedService(serv.id)}
                className={`w-full text-left p-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                  selectedService === serv.id
                    ? 'bg-brand-earth text-white border-brand-earth shadow-md font-bold scale-[1.01]'
                    : 'bg-white text-brand-charcoal border-brand-creamdark/85 hover:bg-brand-creamdark/30 hover:border-brand-earth/20'
                }`}
              >
                <span>{serv.title.split(' & ')[0]}</span>
                <ArrowRight className={`h-4 w-4 shrink-0 transition-transform ${selectedService === serv.id ? 'translate-x-1 text-white' : 'text-stone-400'}`} />
              </button>
            ))}
          </div>

          {/* Active Detail Showcase Box (8 cols) */}
          <div className="lg:col-span-8 bg-white p-7 sm:p-10 rounded-3xl border border-brand-creamdark shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-creamlight text-brand-earth text-xs font-mono font-bold border border-brand-creamdark mb-6">
                Active Client Assistance Desk
              </div>
              
              <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-charcoal mb-4 border-b border-brand-creamlight pb-3">
                {activeService.title}
              </h3>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans mb-6">
                {activeService.fullDesc}
              </p>

              {/* Service Sub Bullets */}
              <div className="bg-brand-creamlight p-5 rounded-2xl border border-brand-creamdark/80 mb-6">
                <h4 className="text-xs font-bold text-brand-earth uppercase tracking-widest mb-3 font-mono">
                  SOP Guidelines & Scope of Support:
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {activeService.points.map((pt, i) => (
                    <li key={i} className="flex gap-2 text-xs sm:text-sm text-stone-700 font-sans items-start">
                      <CheckCircle2 className="h-4.5 w-4.5 text-brand-sagedark shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-[10px] font-mono text-stone-400 italic">
              *All consultancies are legally backed by standard bilateral nondisclosure agreements. We charge 0% consultation fee on premium direct allocations.
            </p>
          </div>
        </div>

        {/* Interactive Quick Home Loan EMI Calculator */}
        <div className="bg-white rounded-3xl border border-brand-creamdark shadow p-6 sm:p-10" id="emi-calculator-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Calculator Left: Core sliders (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-brand-creamdark text-brand-charcoal text-[10px] font-mono uppercase tracking-widest font-bold mb-4">
                <Calculator className="h-3.5 w-3.5 text-brand-earth" /> Real Estate Finance Module
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-brand-charcoal leading-tight mb-2">
                Quick Home Loan EMI Calculator
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 font-sans mb-8">
                Plan your multi-generational purchase budget index instantly. Change the loan size, interest rate margins, and payoff tenures to check monthly payments.
              </p>

              {/* Slider 1: Loan size */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs sm:text-sm font-semibold mb-2 text-brand-charcoal">
                  <span>Loan Principal Amount</span>
                  <span className="font-mono text-brand-earth text-sm font-bold bg-brand-creamlight px-3 py-1 rounded border border-brand-creamdark">
                    {formatRupees(loanAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min="500000"
                  max="30000000"
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-brand-creamdark rounded-lg appearance-none cursor-pointer accent-brand-earth"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-mono mt-1">
                  <span>₹5 Lakhs</span>
                  <span>₹1.5 Crores</span>
                  <span>₹3 Crores</span>
                </div>
              </div>

              {/* Slider 2: Interest rates */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs sm:text-sm font-semibold mb-2 text-brand-charcoal">
                  <span>Interest Rate (p.a.)</span>
                  <span className="font-mono text-brand-earth text-sm font-bold bg-brand-creamlight px-3 py-1 rounded border border-brand-creamdark">
                    {interestRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="6.0"
                  max="15.0"
                  step="0.05"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-brand-creamdark rounded-lg appearance-none cursor-pointer accent-brand-earth"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-mono mt-1">
                  <span>6% Min (SBI/HDFC Spec)</span>
                  <span>10.5% Average</span>
                  <span>15% Max Commercial</span>
                </div>
              </div>

              {/* Slider 3: Payoff Years */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs sm:text-sm font-semibold mb-2 text-brand-charcoal">
                  <span>Payback Tenure</span>
                  <span className="font-mono text-brand-earth text-sm font-bold bg-brand-creamlight px-3 py-1 rounded border border-brand-creamdark">
                    {tenureYears} Years
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full h-2 bg-brand-creamdark rounded-lg appearance-none cursor-pointer accent-brand-earth"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-mono mt-1">
                  <span>5 Years</span>
                  <span>15 Years</span>
                  <span>30 Years Payoff</span>
                </div>
              </div>
            </div>

            {/* Calculator Right: Output Panel (5 cols) */}
            <div className="lg:col-span-5 bg-brand-creamlight p-6 sm:p-8 rounded-2xl border border-brand-creamdark flex flex-col justify-between self-stretch">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono text-center mb-6">
                  Payment Breakout Summary
                </h4>

                {/* Main Monthly EMI */}
                <div className="text-center mb-6">
                  <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest font-mono mb-1">
                    Monthly EMI Amount
                  </p>
                  <p className="text-3xl sm:text-4xl font-display font-extrabold text-brand-charcoal tracking-tight">
                    {formatRupees(emi)}
                  </p>
                  <p className="text-[10px] text-stone-400 mt-1 font-sans">
                    Computed dynamically with standard amortization formulations.
                  </p>
                </div>

                {/* Sub details */}
                <div className="flex flex-col gap-3 py-4 border-t border-b border-brand-creamdark/60 text-xs font-sans text-stone-700 mb-6">
                  <div className="flex justify-between">
                    <span>Requested Principal:</span>
                    <span className="font-bold font-mono">{formatRupees(loanAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Interest Accrued:</span>
                    <span className="font-bold font-mono text-amber-800">{formatRupees(totalInterest)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Payback Amount:</span>
                    <span className="font-bold font-mono text-brand-charcoal">{formatRupees(totalPayment)}</span>
                  </div>
                </div>

                {/* Ratio bar */}
                <div>
                  <div className="flex justify-between text-[10px] font-mono mb-1.5">
                    <span className="text-brand-earth font-semibold">Principal ({Math.round((loanAmount/totalPayment)*100) || 50}%)</span>
                    <span className="text-amber-800 font-semibold">Interest ({Math.round((totalInterest/totalPayment)*100) || 50}%)</span>
                  </div>
                  {/* Dynamic split */}
                  <div className="w-full h-3 rounded-full overflow-hidden bg-amber-800 flex">
                    <div 
                      className="bg-brand-earth h-full" 
                      style={{ width: `${(loanAmount/totalPayment)*100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Trigger assistance */}
              <div className="mt-8 pt-4 border-t border-brand-creamdark/40 text-center">
                <p className="text-xs font-sans text-stone-600 mb-2">
                  Want preferential direct-channel interest rate waivers starting at <strong>8.15%</strong>?
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-earth hover:text-brand-charcoal hover:underline uppercase transition-all"
                >
                  Apply with Advisor Desk <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
