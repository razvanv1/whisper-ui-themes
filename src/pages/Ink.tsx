import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from "@/components/shared/SEO";
import PageLayout from "@/components/layout/PageLayout";
import { ConnectingArrow } from "@/components/shared/ConnectingArrow";
import ScanTool from "@/components/shared/ScanTool";
import realMascot from "@/assets/real-mascot.png";
import { Eye, PenTool, Scale, Workflow, ArrowRight } from 'lucide-react';
import './Ink.css';

const Ink = () => {
  // Trial Form State
  const [trialOpen, setTrialOpen] = useState(true);
  const [trialName, setTrialName] = useState('');
  const [trialEmail, setTrialEmail] = useState('');
  const [trialConsent, setTrialConsent] = useState({ confidentiality: false, newsletter: false });
  const [trialStatus, setTrialStatus] = useState<'idle' | 'error' | 'sent'>('idle');
  
  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const submitTrial = async () => {
    if (!trialName || !trialEmail || !trialEmail.includes('@') || !trialConsent.confidentiality || !trialConsent.newsletter) {
      setTrialStatus('error');
      return;
    }
    setTrialStatus('loading' as any);
    try {
      const response = await fetch('/submit-form.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          formType: 'ink_trial', 
          name: trialName,
          email: trialEmail,
          acceptConfidentiality: trialConsent.confidentiality,
          acceptNewsletter: trialConsent.newsletter
        }),
      });
      
      const result = await response.json();
      if (result.status === 'success') {
        setTrialStatus('sent');
      } else {
        throw new Error(result.message || 'Failed to send');
      }
    } catch (err) {
      console.error('Trial submission error:', err);
      setTrialStatus('error');
    }
  };

  // Scroll to section helper
  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageLayout>
      <div className="ink-page-wrapper">
        <SEO 
          title="INK by Unlearning | Agentic Funding Execution Platform" 
          description="Scan 944+ active EU calls, monitor structural funds, and automate your funding execution. INK is an agentic platform that transforms funding research into submitted applications." 
          path="/ink" 
        />
        
        {/* HERO */}
        <section id="ink-hero" className="ink-section relative">
          <div className="ink-hero-grid ink-wrap">
            <div>
              <div className="ink-hero-tag"><span className="ink-pulse"></span>INK Agentic funding platform</div>
              <h1>Find more funding.<br /><em className="ink-accent">Submit more of it.</em></h1>
              <p className="ink-hero-sub">INK helps organizations diversify their funding sources by tracking opportunities and turning them into submitted applications, without the manual overhead that slows most teams down.</p>
              <div className="ink-hero-actions" style={{ minHeight: '120px' }}>
                {!trialOpen ? (
                  <div className="flex flex-wrap gap-5">
                    <button onClick={() => setTrialOpen(true)} className="btn-ink-primary px-8 py-4 text-base">Start 14-Day Free Trial →</button>
                    <a href="#ink-scan" onClick={(e) => scrollTo('ink-scan', e)} className="inline-flex items-center justify-center rounded-xl border border-border px-8 py-4 font-semibold text-foreground hover:bg-muted btn-animate text-base">Live Opportunity Scan →</a>
                  </div>
                ) : (
                  <div className="flex flex-col gap-6">
                    <div className="bg-white/50 backdrop-blur-sm border border-border p-6 rounded-2xl shadow-xl animate-in fade-in slide-in-from-top-4 duration-500 max-w-xl">
                      <p className="font-black text-slate-900 mb-2">Get early access to INK</p>
                      <p className="text-sm text-slate-500 mb-4 font-sans">Enter your details and we will activate your trial within 48 hours.</p>
                      {trialStatus === 'idle' || trialStatus === 'error' ? (
                        <div className="space-y-4">
                          <div className="flex flex-col sm:flex-row gap-2">
                            <input type="text" placeholder="Your name" 
                              value={trialName} onChange={e => setTrialName(e.target.value)}
                              className="bg-white border border-border rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-blue-500 outline-none w-full"
                            />
                            <input type="email" placeholder="Your email" 
                              value={trialEmail} onChange={e => setTrialEmail(e.target.value)}
                              className="bg-white border border-border rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-blue-500 outline-none w-full"
                            />
                          </div>
                          <div className="flex flex-col gap-2 text-left">
                            <div className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" required checked={trialConsent.confidentiality} onChange={e => setTrialConsent(p => ({...p, confidentiality: e.target.checked}))} className="h-4 w-4" />
                              <span className="text-xs text-slate-500 font-sans">I accept the confidentiality terms</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" required checked={trialConsent.newsletter} onChange={e => setTrialConsent(p => ({...p, newsletter: e.target.checked}))} className="h-4 w-4" />
                              <span className="text-xs text-slate-500 font-sans">I want to receive the Unlearning Pill newsletter</span>
                            </div>
                          </div>
                          <button className="btn-ink-primary w-full py-3 text-sm" onClick={submitTrial}>Request access →</button>
                        </div>
                      ) : (
                        <p className="text-emerald-500 font-bold p-4 bg-emerald-50 rounded-xl">✓ Received. We will be in touch within 48 hours.</p>
                      )}
                    </div>
                    <div>
                      <a href="#ink-scan" onClick={(e) => scrollTo('ink-scan', e)} className="text-blue-600 font-bold hover:underline flex items-center gap-2 text-sm">
                        Just want to scan? Go to Live Opportunity Scan →
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="ink-hero-proof">
                <div className="ink-proof-item"><span className="ink-proof-n">944+</span><span className="ink-proof-l">EU calls monitored</span></div>
                <div className="ink-divider-v"></div>
                <div className="ink-proof-item"><span className="ink-proof-n">↓ 80%</span><span className="ink-proof-l">Admin per application</span></div>
                <div className="ink-divider-v"></div>
                <div className="ink-proof-item"><span className="ink-proof-n">Active</span><span className="ink-proof-l">Powers The Unlearning School</span></div>
              </div>
            </div>

            <div className="ink-hero-image-container relative" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ConnectingArrow variant={4} className="left-1/4 top-0 -translate-y-12 sm:hidden z-50 text-blue-500" />
              <img src={realMascot} alt="INK Mascot" style={{ maxWidth: '100%', height: 'auto', maxHeight: '500px' }} />
              <ConnectingArrow variant={2} className="right-1/4 bottom-0 translate-y-12 -scale-x-100 sm:hidden z-50 text-blue-500" />
            </div>
          </div>
          <ConnectingArrow variant={1} className="left-1/2" />
        </section>

        {/* STATS BAR */}
        <div id="ink-stats-bar">
          <div className="ink-sbar">
            <div className="ink-sbar-item"><div className="ink-sbar-n">€4B+</div><div className="ink-sbar-l">EU grants unclaimed annually</div></div>
            <div className="ink-sbar-div"></div>
            <div className="ink-sbar-item"><div className="ink-sbar-n">944</div><div className="ink-sbar-l">Active calls monitored by INK</div></div>
            <div className="ink-sbar-div"></div>
            <div className="ink-sbar-item"><div className="ink-sbar-n">80%</div><div className="ink-sbar-l">Reduction in proposal prep time</div></div>
            <div className="ink-sbar-div"></div>
            <div className="ink-sbar-item"><div className="ink-sbar-n">73%</div><div className="ink-sbar-l">Of SMBs find grant applications too burdensome <br/><span className="ink-sbar-src">Eurochambres 2024</span></div></div>
            <div className="ink-sbar-div"></div>
            <div className="ink-sbar-item"><div className="ink-sbar-n">#1</div><div className="ink-sbar-l">Rejection cause: poor programme alignment <br/><span className="ink-sbar-src">ERC Analysis</span></div></div>
          </div>
        </div>

        {/* SCAN TOOL */}
        <ScanTool />
        <ConnectingArrow variant={2} className="left-1/4" />

        {/* HOW IT WORKS */}
        <section id="ink-how" className="ink-section relative">
          <div className="ink-wrap">
            <div className="ink-eyebrow">How it works</div>
            <h2>From funding call to submitted application. Four steps.</h2>
            <p style={{ marginTop: '13px', maxWidth: '500px', fontSize: '15px' }}>INK removes the manual overhead between spotting an opportunity and submitting a finished application. Your team's judgment stays in the loop. The platform handles the volume.</p>
            <div className="ink-how-steps">
              <div className="ink-how-step">
                <div className="ink-how-n">01</div>
                <h3>Define your funding profile</h3>
                <p>Set your domains, geography, eligible funding types, and past application history. INK uses this as the baseline for scanning and building.</p>
              </div>
              <div className="ink-how-step">
                <div className="ink-how-n">02</div>
                <h3>INK scans and surfaces matches</h3>
                <p>The platform monitors EU structural funds, Horizon Europe, Erasmus+, and national programs. Each call is filtered by fit, effort, and deadline proximity.</p>
              </div>
              <div className="ink-how-step">
                <div className="ink-how-n">03</div>
                <h3>Build application workflows</h3>
                <p>For each opportunity, INK generates a structured proposal outline, organizes required inputs, and produces draft materials from your context and past work.</p>
              </div>
              <div className="ink-how-step">
                <div className="ink-how-n">04</div>
                <h3>Track and submit</h3>
                <p>Deadlines, pending inputs, review steps, and co-applicant actions are tracked automatically. INK flags what needs attention. Applications reach submission.</p>
              </div>
            </div>
          </div>
          <ConnectingArrow variant={3} className="left-3/4" />
        </section>

        {/* PROBLEM → OUTCOME */}
        <section id="ink-outcomes" className="ink-section relative">
          <div className="ink-wrap">
            <div className="ink-eyebrow" style={{ marginBottom: '4px' }}>What changes</div>
            <h2>Your team is working hard.<br />The output should match the effort.</h2>
            <p className="ink-lead">The bottleneck is rarely ambition or eligibility. It is execution capacity, the repeated manual work that consumes hours that should go to decisions, not administration.</p>
            <div className="ink-oc-cols">
              <div className="ink-oc-col before">
                <div className="ink-oc-label">Without INK</div>
                <ul className="ink-oc-list">
                  <li>Relevant calls noticed, but not tracked consistently enough to act before the deadline</li>
                  <li>Applications started, not finished. Proposals are often in draft until the window closes</li>
                  <li>Each application built from scratch, even when 70% of the content already existed</li>
                  <li>Follow-up depends on someone remembering. Things slip between meetings.</li>
                  <li>Strategic capacity consumed by coordination, not by judgment calls</li>
                  <li>Opportunities lost not for lack of qualification, but for lack of bandwidth</li>
                </ul>
              </div>
              <div className="ink-oc-col after">
                <div className="ink-oc-label">With INK</div>
                <ul className="ink-oc-list">
                  <li>Relevant opportunities tracked continuously, surfaced before the deadline</li>
                  <li>Applications structured from day one, with draft materials ready to refine</li>
                  <li>Past applications and project knowledge reused across future submissions</li>
                  <li>Deadlines and next steps tracked automatically. Nothing slips.</li>
                  <li>Your team's time goes to decisions, not to rebuilding documents</li>
                  <li>More sources pursued in parallel, at a lower cost per submission</li>
                </ul>
              </div>
            </div>
          </div>
          <ConnectingArrow variant={4} className="left-1/2" />
        </section>

        {/* THE ENGINE (AGENTS) */}
        <section id="ink-engine" className="ink-section relative" style={{ background: 'var(--bg2)', color: 'var(--ink)' }}>
          <div className="ink-wrap">
            <div className="ink-eyebrow" style={{ marginBottom: '16px' }}>The Engine</div>
            <h2 style={{ color: 'var(--ink)', maxWidth: '600px' }}>Meet your AI Execution Team</h2>
            <p style={{ marginTop: '13px', maxWidth: '580px', fontSize: '15.5px', color: 'var(--ink2)' }}>INK doesn't just track tasks. It deploys specialized AI agents that actively do the heavy lifting, turning your organization into a funding machine.</p>
            
            <div className="ink-engine-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '48px' }}>
              <div className="ink-agent-card" style={{ background: 'white', padding: '36px 30px', borderRadius: 'var(--rL)', border: '1px solid var(--border)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <div style={{ color: 'var(--brand)', marginBottom: '16px' }}><Eye className="h-8 w-8" /></div>
                <h3 style={{ color: 'var(--ink)', fontSize: '18px', marginBottom: '12px' }}>Scout Agent</h3>
                <p style={{ color: 'var(--ink3)', fontSize: '14px', lineHeight: 1.6 }}>Monitors 944+ EU and national portals 24/7. It reads 100-page guidelines in seconds and scores the call against your specific organizational profile to find the perfect fit.</p>
              </div>
              
              <div className="ink-agent-card" style={{ background: 'white', padding: '36px 30px', borderRadius: 'var(--rL)', border: '1px solid var(--border)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <div style={{ color: 'var(--brand)', marginBottom: '16px' }}><PenTool className="h-8 w-8" /></div>
                <h3 style={{ color: 'var(--ink)', fontSize: '18px', marginBottom: '12px' }}>Grant Writer Agent</h3>
                <p style={{ color: 'var(--ink3)', fontSize: '14px', lineHeight: 1.6 }}>Drafts proposal sections automatically. It pulls context from your past successful applications, organizational vault, and project descriptions so you never start from a blank page.</p>
              </div>
              
              <div className="ink-agent-card" style={{ background: 'white', padding: '36px 30px', borderRadius: 'var(--rL)', border: '1px solid var(--border)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <div style={{ color: 'var(--brand)', marginBottom: '16px' }}><Scale className="h-8 w-8" /></div>
                <h3 style={{ color: 'var(--ink)', fontSize: '18px', marginBottom: '12px' }}>Compliance Agent</h3>
                <p style={{ color: 'var(--ink3)', fontSize: '14px', lineHeight: 1.6 }}>The ultimate reviewer. Checks your draft against the official evaluation criteria, ensures budgets align with page limits, and verifies all mandatory annexes are attached.</p>
              </div>
              
              <div className="ink-agent-card" style={{ background: 'white', padding: '36px 30px', borderRadius: 'var(--rL)', border: '1px solid var(--border)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <div style={{ color: 'var(--brand)', marginBottom: '16px' }}><Workflow className="h-8 w-8" /></div>
                <h3 style={{ color: 'var(--ink)', fontSize: '18px', marginBottom: '12px' }}>Coordinator Agent</h3>
                <p style={{ color: 'var(--ink3)', fontSize: '14px', lineHeight: 1.6 }}>Manages the humans. Automatically pings partners for signatures, reminds your finance team for budgets, and tracks the critical path to ensure you submit before the deadline.</p>
              </div>
            </div>
          </div>
          <ConnectingArrow variant={4} className="left-1/2" />
        </section>

        {/* FEATURES */}
        <section id="ink-features" className="ink-section relative">
          <div className="ink-wrap">
            <div className="ink-eyebrow">Platform capabilities</div>
            <h2>Everything from opportunity to submission. In one system.</h2>
            <div className="ink-feat-grid">
              <div className="ink-feat-card">
                <div className="ink-feat-tag">Opportunity intelligence</div>
                <h3>Funding source monitoring</h3>
                <p>Continuous scanning across EU structural funds, Horizon Europe, Erasmus+, national programs, and sector-specific calls, filtered for your profile, not a generic feed.</p>
              </div>
              <div className="ink-feat-card">
                <div className="ink-feat-tag">Prioritization</div>
                <h3>Fit scoring and ranking</h3>
                <p>Each opportunity is evaluated against your context, such as thematic fit, eligibility, effort required, and deadline proximity, so you focus on the calls worth pursuing.</p>
              </div>
              <div className="ink-feat-card">
                <div className="ink-feat-tag">Application builder</div>
                <h3>Structured proposal drafting</h3>
                <p>AI-generated proposal structure with organized inputs per section and draft materials from your context. Your team refines and approves. Nothing rebuilt from zero.</p>
              </div>
              <div className="ink-feat-card">
                <div className="ink-feat-tag">Execution tracking</div>
                <h3>Deadline and follow-up management</h3>
                <p>Every active application tracked. Deadlines, pending inputs, co-applicant steps, and review stages monitored and flagged, so nothing slips through coordination gaps.</p>
              </div>
              <div className="ink-feat-card">
                <div className="ink-feat-tag">Knowledge reuse</div>
                <h3>Content repurposing from past work</h3>
                <p>Previous applications, project reports, and internal documentation structured into reusable assets. Your next application starts from a solid base, not a blank document.</p>
              </div>
              <div className="ink-feat-card">
                <div className="ink-feat-tag">Reporting</div>
                <h3>Pipeline visibility</h3>
                <p>Full view of your funding pipeline, from opportunities identified and in progress to those submitted, won, and lost, with visibility into where time is spent.</p>
              </div>
            </div>
          </div>
          <ConnectingArrow variant={1} className="left-1/4" />
        </section>

        {/* WHO */}
        <section id="ink-who" className="ink-section relative">
          <div className="ink-wrap">
            <div className="ink-eyebrow">Built for</div>
            <h2>Teams that run programs and can't afford to miss funding.</h2>
            <p style={{ marginTop: '13px', maxWidth: '520px', fontSize: '15px' }}>INK fits best when the bottleneck is no longer ambition or eligibility, but the capacity to execute on every opportunity your organization identifies.</p>
            <div className="ink-who-grid">
              <div className="ink-who-card">
                <div className="ink-who-tag">NGOs and non-profits</div>
                <h3>Multiple active projects, lean operations team</h3>
                <p>You know which calls matter. The problem is keeping all of them moving without losing quality or missing submission windows. INK handles the coordination and drafting load so your team focuses on what requires judgment.</p>
              </div>
              <div className="ink-who-card">
                <div className="ink-who-tag">Training organizations and academies</div>
                <h3>Providers building funded programs at scale</h3>
                <p>You work across EU-funded programs, institutional partnerships, and private contracts simultaneously. INK structures the application pipeline so you can pursue more sources without growing your back-office team.</p>
              </div>
              <div className="ink-who-card">
                <div className="ink-who-tag">Accelerators and incubators</div>
                <h3>Multiple cohorts and funding streams in parallel</h3>
                <p>Managing grant applications, impact reporting, and portfolio funding simultaneously means constant context-switching. INK centralizes the operational layer so your team can run more without spreading thin.</p>
              </div>
              <div className="ink-who-card">
                <div className="ink-who-tag">Research and innovation teams</div>
                <h3>Institutions applying to competitive European programs</h3>
                <p>Horizon Europe, national R&D grants, and institutional partnerships require sustained tracking and complex documentation. INK monitors the landscape and keeps proposals moving through review and submission cycles.</p>
              </div>
            </div>
          </div>
          <ConnectingArrow variant={2} className="left-1/2" />
        </section>


        {/* PRICING */}
        <section id="ink-pricing" className="ink-section relative">
          <div className="ink-wrap">
            <div style={{ textAlign: 'center' }}><div className="ink-eyebrow" style={{ justifyContent: 'center' }}>Pricing</div></div>
            <h2 style={{ textAlign: 'center', marginBottom: '9px' }}>Simple pricing. No long-term contracts.</h2>
            <p style={{ textAlign: 'center', maxWidth: '420px', margin: '0 auto', fontSize: '14.5px' }}>Start free for 14 days. Full platform access, no credit card required.</p>
            <div className="ink-price-grid">
              <div className="ink-price-card">
                <div className="ink-p-tier">Starter</div>
                <div className="ink-p-num">€49</div>
                <div className="ink-p-per">per month</div>
                <div className="ink-p-desc">For small teams beginning to systematize their funding pipeline.</div>
                <ul className="ink-p-feats">
                  <li>1 active application workflow</li>
                  <li>Bi-weekly opportunity scanning</li>
                  <li>Standard AI drafting assistance</li>
                  <li>Deadline reminders</li>
                  <li>Email support</li>
                </ul>
                <button onClick={() => { setTrialOpen(true); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="inline-flex items-center justify-center rounded-xl border border-border px-8 py-3 font-semibold text-foreground hover:bg-muted transition-all btn-animate" style={{ width: '100%', justifyContent: 'center' }}>Start 14-Day Free Trial →</button>
              </div>
              <div className="ink-price-card feat">
                <div className="ink-pop-badge">Most popular</div>
                <div className="ink-p-tier">Pro</div>
                <div className="ink-p-num">€149</div>
                <div className="ink-p-per">per month</div>
                <div className="ink-p-desc">For organizations running multiple funding streams in parallel.</div>
                <ul className="ink-p-feats">
                  <li>Up to 5 active application workflows</li>
                  <li>Continuous EU and national program scanning</li>
                  <li>Advanced AI builder with context integration</li>
                  <li>Deadline tracking and workflow management</li>
                  <li>Knowledge reuse from past applications</li>
                  <li>Pipeline reporting and priority support</li>
                </ul>
                <button onClick={() => { setTrialOpen(true); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="btn-ink-primary" style={{ width: '100%', justifyContent: 'center' }}>Start 14-Day Free Trial →</button>
              </div>
              <div className="ink-price-card">
                <div className="ink-p-tier">Enterprise</div>
                <div className="ink-p-num" style={{ fontSize: '32px', paddingTop: '7px' }}>Custom</div>
                <div className="ink-p-per">contact for pricing</div>
                <div className="ink-p-desc">For large organizations, consortiums, and teams with complex requirements.</div>
                <ul className="ink-p-feats">
                  <li>Custom workflow volume (5+ active)</li>
                  <li>Locally fine-tuned models on organizational data</li>
                  <li>White-label deployment & API access</li>
                  <li>Multi-entity and consortium support</li>
                  <li>Dedicated onboarding and account management</li>
                  <li>SLA and custom reporting</li>
                </ul>
                <a href="mailto:hello@unlearning.ro" className="inline-flex items-center justify-center rounded-xl border border-border px-8 py-3 font-semibold text-foreground hover:bg-muted transition-all btn-animate" style={{ width: '100%', justifyContent: 'center' }}>Contact Us →</a>
              </div>
            </div>
          </div>
          <ConnectingArrow variant={3} className="left-3/4" />
        </section>

        {/* FAQ */}
        <section id="ink-faq" className="ink-section relative">
          <div className="ink-wrap">
            <div className="ink-eyebrow">FAQ</div>
            <h2>Common questions</h2>
            <div className="ink-faq-list">
              {[
                { q: 'Is this a database of grants?', a: 'No. INK is an execution platform. It monitors funding opportunities continuously, but the core function is helping you turn those opportunities into submitted applications with structured workflows, draft materials, deadline tracking, and follow-up management built around each call you decide to pursue.' },
                { q: 'How is this different from a grant consultant?', a: 'A consultant works per application, costs €3,000–15,000 per submission, and is limited by their own capacity. INK gives your team a system to run applications continuously at a fixed monthly cost. It eliminates the 80% of operational work that slows or blocks submission, without replacing specialist judgment on high-complexity calls.' },
                { q: 'What funding sources does INK cover?', a: 'INK monitors EU structural funds, Horizon Europe, Erasmus+, national innovation and training programs, sector-specific grants, and institutional partnership calls. The platform currently tracks 944+ active EU calls. You configure it to filter by domain, geography, and funding type relevant to your organization.' },
                { q: 'Can we use INK without prior grant experience?', a: 'Yes. INK guides the structure and next steps for each application, organizes required inputs, and generates draft materials from your context. The platform is designed to make the process manageable even for teams running their first systematic funding program.' },
                { q: 'How long does setup take?', a: 'Initial onboarding, including organization profile, funding domains, geography, and scan configuration, takes under 30 minutes. The first filtered list of matching opportunities appears within hours of activation. You can start building your first application workflow the same day.' },
                { q: 'What happens to our past applications and documents?', a: 'You can import previous applications, project reports, and internal documentation into INK. The platform structures them as reusable assets, such as sections, impact data, and project descriptions, and draws on them when generating drafts for future submissions. Your institutional knowledge stops being locked in old files.' },
                { q: 'Is INK available only for Romania?', a: 'No. INK covers EU-wide funding opportunities and can be configured for any organization operating within the European Union. The platform interface is in English. Support is available in Romanian and English.' },
              ].map((faq, idx) => (
                <div key={idx} className={`ink-faq-item ${openFaq === idx ? 'open' : ''}`}>
                  <button className="ink-faq-q" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                    {faq.q}<span className="ink-faq-icon">+</span>
                  </button>
                  <div className="ink-faq-a"><p>{faq.a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="ink-final-cta" className="ink-section">
          <div className="ink-fc-inner">
            <h2>Funding goes to organizations<br />that submit, consistently.<br /><em className="ink-accent" style={{ color: 'var(--brand)' }}>INK is built to make that possible.</em></h2>
            <div className="ink-fc-right">
              <a href="https://meet.brevo.com/razvan-valceanu" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl border border-border px-8 py-4 font-semibold text-foreground hover:bg-muted transition-all btn-animate">Schedule a Demo →</a>
              <p className="ink-fc-note">14-day free trial · No credit card required · Full platform access</p>
            </div>
          </div>
          {trialOpen && (
            <div id="ink-trial-form" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p className="ink-tf-title">Get early access to INK</p>
              <p className="ink-tf-sub">The platform is in invite-only access. Enter your email and we will be in touch within 48 hours.</p>
              {trialStatus === 'idle' || trialStatus === 'error' ? (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input type="text" placeholder="Your name" 
                      value={trialName} onChange={e => setTrialName(e.target.value)}
                      className="ink-input-minimal"
                    />
                    <input type="email" placeholder="Your email" 
                      value={trialEmail} onChange={e => setTrialEmail(e.target.value)}
                      className="ink-input-minimal"
                      style={trialStatus === 'error' ? { borderColor: 'rgba(192,58,30,.6)' } : {}}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-3 text-left py-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" required checked={trialConsent.confidentiality} 
                        onChange={e => setTrialConsent(prev => ({ ...prev, confidentiality: e.target.checked }))} 
                        className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-slate-500">I accept the confidentiality terms</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" required checked={trialConsent.newsletter} 
                        onChange={e => setTrialConsent(prev => ({ ...prev, newsletter: e.target.checked }))} 
                        className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-slate-500">I want to receive the Unlearning Pill newsletter</span>
                    </label>
                  </div>

                  <button className="ink-tf-btn w-full" onClick={submitTrial}>Request access →</button>
                </div>
              ) : null}
              {trialStatus === 'sent' && (
                <p id="ink-trial-confirm" style={{ display: 'block' }}>✓ Received. We will be in touch within 48 hours.</p>
              )}
            </div>
          )}
        </section>

      </div>
    </PageLayout>
  );
};

export default Ink;
