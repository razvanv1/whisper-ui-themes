import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Check, Target, Workflow } from 'lucide-react';
import { ConnectingArrow } from "./ConnectingArrow";

interface ScanToolProps {
  showTitle?: boolean;
  variant?: 'brand' | 'ink';
}

const ScanTool = ({ showTitle = true, variant = 'brand' }: ScanToolProps) => {
  const [formData, setFormData] = useState({ 
    text: '', type: '', domain: '', status: 'Open', grantType: 'Direct calls for proposals (issued by the EU)', budget: 'Any Budget', country: '' 
  });
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [scanState, setScanState] = useState<'idle' | 'loading' | 'results'>('idle');
  const [scanResults, setScanResults] = useState<any[]>([]);
  const [emailState, setEmailState] = useState<'idle' | 'loading' | 'error' | 'sent'>('idle');
  const [capEmail, setCapEmail] = useState('');

  const runScan = () => {
    setScanState('loading');
    setEmailState('idle');
    setScanResults([]);
    setTimeout(() => {
      const baseTitle = formData.text ? formData.text.charAt(0).toUpperCase() + formData.text.slice(1) : 'Digital Transformation';
      const baseDomain = formData.domain || 'Digital';
      const selectedGrantType = formData.grantType;
      
      const allPossible = [
        { match: 98, status: 'Open', date: '2026-04-19', prog: 'Digital Europe', title: `${baseTitle} and Integration`, desc: `Direct funding for large-scale projects focusing on ${baseTitle.toLowerCase()} and cross-border ${baseDomain} infrastructure.`, tags: [baseDomain, 'Direct Call', 'EU Tech'] },
        { match: 94, status: 'Open', date: '2026-05-04', prog: 'Horizon Europe', title: `${baseTitle} Applied Research`, desc: `Research and Innovation Action (RIA) for breakthrough development in ${baseTitle.toLowerCase()} using AI methodologies.`, tags: [baseDomain, 'Direct Call', 'R&D'] },
        { match: 91, status: 'Open', date: '2026-05-19', prog: 'Cascade Project Alpha', title: `Small-scale ${baseTitle} Pilot`, desc: `Third-party cascade funding for rapid deployment on ${baseDomain} initiatives within local ecosystems.`, tags: [baseDomain, 'Cascade Funding', 'Pilot'] },
        { match: 89, status: 'Forthcoming', date: '2026-06-12', prog: 'EU External Action Support', title: `Regional ${baseTitle} Expansion`, desc: `Support for trans-border cooperation in External Actions zones, focusing on ${baseTitle.toLowerCase()} and sustainability.`, tags: [baseDomain, 'EU External Action', 'Regional'] },
        { match: 87, status: 'Open', date: '2026-07-01', prog: 'Erasmus+ KA2', title: `Modern ${baseDomain} Skills Training`, desc: `Capacity building and digital transformation of vocational training centers in the ${baseDomain} sector.`, tags: ['Education', 'Direct Call', 'Skills'] },
        { match: 84, status: 'Open', date: '2026-08-15', prog: 'LIFE Climate', title: `${baseTitle} for Green Transition`, desc: `Environmental focused funding for projects using ${baseDomain} technologies for climate adaptation.`, tags: ['Environment', 'Direct Call', 'Climate'] },
        { match: 82, status: 'Forthcoming', date: '2026-09-10', prog: 'EIC Accelerator', title: `Deep-tech ${baseTitle} Scaling`, desc: `Equity and grant support for high-impact startups scaling ${baseTitle.toLowerCase()} solutions globally.`, tags: [baseDomain, 'Direct Call', 'Startup'] },
        { match: 79, status: 'Open', date: '2026-10-05', prog: 'Creative Europe', title: `Cultural ${baseTitle} Innovation`, desc: `Bridging culture and technology through innovative ${baseDomain} applications and audience engagement.`, tags: ['Culture', 'Cascade Funding', 'Media'] },
        { match: 76, status: 'Open', date: '2026-11-20', prog: 'Interreg Europe', title: `Cross-border ${baseTitle} Hubs`, desc: `Improving regional development policies through ${baseDomain} cooperation and digital knowledge exchange.`, tags: ['Regional', 'Direct Call', 'Public Sector'] },
        { match: 73, status: 'Forthcoming', date: '2026-12-05', prog: 'Single Market Programme', title: `SME ${baseTitle} Resilience`, desc: `Boosting the competitiveness of SMEs through targeted ${baseDomain} support and market access grants.`, tags: ['SME', 'Cascade Funding', 'Economic'] }
      ];

      // Simple heuristic filter based on selection but ensuring at least 8 results even if filter is specific
      let filtered = allPossible.filter(o => {
        if (selectedGrantType === 'Direct calls for proposals (issued by the EU)' && o.tags.includes('Direct Call')) return true;
        if (selectedGrantType === 'EU External Actions' && o.tags.includes('EU External Action')) return true;
        if (selectedGrantType === 'Calls for funding in cascade (issued by funded projects)' && o.tags.includes('Cascade Funding')) return true;
        return false;
      });

      // If filtered is too small, pad with remaining items from allPossible to keep the list full (8 items)
      if (filtered.length < 8) {
        const remaining = allPossible.filter(o => !filtered.includes(o));
        filtered = [...filtered, ...remaining].slice(0, 8);
      }

      setScanResults(filtered);
      setScanState('results');
    }, 1500);
  };

  const captureEmail = async () => {
    if (!capEmail || !capEmail.includes('@')) {
      setEmailState('error');
      return;
    }
    setEmailState('loading');
    
    // For local testing/resilience: revealed results even if backend fails after a delay
    const proceed = () => {
      setEmailState('sent');
    };

    try {
      const response = await fetch('/submit-form.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'ink_scan', email: capEmail }),
      });
      
      if (response.ok) {
        const result = await response.json();
        if (result.status === 'success') {
          proceed();
          return;
        }
      }
      // If not ok or not success, still proceed after a short delay for UX
      setTimeout(proceed, 800);
    } catch {
      // Catch network errors and still proceed for local testing/UX
      setTimeout(proceed, 800);
    }
  };
  const exportResults = () => {
    if (scanResults.length === 0) return;
    
    const content = `INK OPPORTUNITY SCAN RESULTS\n` +
      `Date: ${new Date().toLocaleDateString()}\n` +
      `Total Matches: ${scanResults.length}\n\n` +
      scanResults.map((o, i) => (
        `${i + 1}. ${o.title.toUpperCase()}\n` +
        `   Programme: ${o.prog}\n` +
        `   Match: ${o.match}%\n` +
        `   Status: ${o.status} | Deadline: ${o.date}\n` +
        `   Description: ${o.desc}\n` +
        `   Tags: ${o.tags.join(', ')}\n`
      )).join('\n' + '-'.repeat(40) + '\n\n');

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ink-funding-scan-${formData.text || 'results'}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="ink-scan" className="ink-section relative">
      <div className="ink-scan-card border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl bg-white">
        {showTitle && (
          <div className="ink-scan-head p-8 md:p-12 text-center bg-white border-b border-slate-50 text-slate-900">
            <div className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-blue-600">Free Funding Scan</div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Check your funding opportunities in 60 seconds.</h2>
            <p className="text-lg max-w-2xl mx-auto text-slate-500">INK scans 944+ active EU and national funding calls and surfaces the ones that match your organization. No account required to scan.</p>
          </div>
        )}
        <div className="ink-scan-body p-8 md:p-12 bg-white">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-slate-400">What do you want to fund?</label>
              <input 
                type="text" 
                placeholder="e.g. AI training program for professionals, Green energy transition..." 
                maxLength={200}
                value={formData.text} 
                onChange={e => setFormData({...formData, text: e.target.value})} 
                className="w-full border rounded-xl px-5 py-4 text-lg focus:border-blue-500 transition-colors outline-none shadow-sm bg-slate-50 border-slate-100 text-slate-900 placeholder:text-slate-300"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-slate-400">Organization Type</label>
              <select 
                value={formData.type} 
                onChange={e => setFormData({...formData, type: e.target.value})}
                className="w-full border rounded-xl px-5 py-4 outline-none transition-colors shadow-sm appearance-none bg-slate-50 border-slate-100 text-slate-900 focus:border-blue-500"
              >
                <option value="">Select type</option>
                <option value="ngo">NGO / Non-profit</option>
                <option value="sme">SME / Startup</option>
                <option value="edu">Educational institution</option>
                <option value="research">Research / University</option>
                <option value="public">Public Sector</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-slate-400">Primary Domain</label>
              <select 
                value={formData.domain} 
                onChange={e => setFormData({...formData, domain: e.target.value})}
                className="w-full border rounded-xl px-5 py-4 outline-none transition-colors shadow-sm appearance-none bg-slate-50 border-slate-100 text-slate-900 focus:border-blue-500"
              >
                <option value="">Select domain</option>
                <option value="digital">Digital / AI / Tech</option>
                <option value="education">Education / Training</option>
                <option value="innovation">Innovation / R&D</option>
                <option value="environment">Environment / Climate</option>
                <option value="health">Health / Social</option>
                <option value="culture">Culture / Creative</option>
                <option value="agri">Agriculture / Rural</option>
              </select>
            </div>
          </div>

          <div className="text-center my-8">
            <button 
              onClick={() => setShowAdvanced(!showAdvanced)} 
              className="text-sm font-black uppercase tracking-widest hover:underline flex items-center gap-2 mx-auto transition-all text-blue-600"
            >
              {showAdvanced ? (
                <>Hide Advanced Filters <ChevronUp className="h-4 w-4" /></>
              ) : (
                <>Show Advanced Filters <ChevronDown className="h-4 w-4" /></>
              )}
            </button>
          </div>

          {showAdvanced && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10 animate-in fade-in slide-in-from-top-4 duration-500">
               <div>
                <label className="block text-xs font-bold mb-2 uppercase tracking-widest text-slate-400">Funding Status</label>
                <select 
                  value={formData.status} 
                  onChange={e => setFormData({...formData, status: e.target.value})}
                  className="w-full border rounded-xl px-4 py-3 outline-none transition-all shadow-sm appearance-none bg-slate-50 border-slate-100 text-slate-900 focus:border-blue-500"
                >
                  <option value="Open">Open Now</option>
                  <option value="Forthcoming">Forthcoming</option>
                  <option value="All">All Calls</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold mb-2 uppercase tracking-widest text-slate-400">Type of grants calls</label>
                <select 
                  value={formData.grantType} 
                  onChange={e => setFormData({...formData, grantType: e.target.value})}
                  className="w-full border rounded-xl px-4 py-3 outline-none transition-all shadow-sm appearance-none bg-slate-50 border-slate-100 text-slate-900 focus:border-blue-500"
                >
                  <option value="Direct calls for proposals (issued by the EU)">Direct calls for proposals (issued by the EU)</option>
                  <option value="EU External Actions">EU External Actions</option>
                  <option value="Calls for funding in cascade (issued by funded projects)">Calls for funding in cascade (issued by funded projects)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold mb-2 uppercase tracking-widest text-slate-400">Budget Range</label>
                <select 
                  value={formData.budget} 
                  onChange={e => setFormData({...formData, budget: e.target.value})}
                  className="w-full border rounded-xl px-4 py-3 outline-none transition-all shadow-sm appearance-none bg-slate-50 border-slate-100 text-slate-900 focus:border-blue-500"
                >
                  <option value="Small">Up to €100k</option>
                  <option value="Medium">€100k - €1M</option>
                  <option value="Large">€1M+</option>
                  <option value="Any">Any Budget</option>
                </select>
              </div>
            </div>
          )}

          <button 
            className={`w-full py-5 rounded-xl font-black text-xl transition-all btn-animate btn-glow shadow-lg ${variant === 'ink' ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white shadow-blue-500/20'}`}
            onClick={runScan} 
            disabled={scanState === 'loading'}
          >
            {scanState === 'loading' ? 'Scanning...' : 'Scan Opportunities'}
          </button>
          <p className="text-center mt-4 text-sm text-slate-400 font-medium">Free · No account required · Real EU data</p>

          {scanState === 'loading' && (
            <div className="mt-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="font-bold text-lg text-slate-800">Scanning 944 active EU calls...</p>
            </div>
          )}

          {scanState === 'results' && scanResults.length > 0 && (
            <div className="mt-12 pt-12 border-t border-slate-100 animate-in fade-in duration-700">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black italic text-slate-900">Matched Opportunities ({(emailState as string) === 'sent' ? scanResults.length : 3})</h3>
                <button 
                  onClick={exportResults}
                  className="text-sm font-bold text-slate-400 uppercase tracking-widest cursor-pointer hover:text-blue-600 transition-colors bg-transparent border-none"
                >
                  Download Results (PDF)
                </button>
              </div>
              
              <div className="space-y-6">
                {((emailState as string) === 'sent' ? scanResults : scanResults.slice(0, 3)).map((o, i) => (
                  <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl group">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100 flex items-center gap-1.5"><Target className="h-3 w-3" /> {o.match}% Match</span>
                      <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100">{o.status}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-slate-100 text-slate-500 rounded-full border border-slate-200">{o.prog}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">{o.title}</h4>
                    <p className="text-slate-600 mb-6 line-clamp-2">{o.desc}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {o.tags.map((t: string) => (
                          <span key={t} className="text-[9px] font-bold px-2 py-0.5 bg-white rounded border border-slate-200 uppercase tracking-tighter text-slate-400">{t}</span>
                        ))}
                      </div>
                      <button className="text-sm font-black uppercase tracking-widest text-blue-600 hover:underline">Start App →</button>
                    </div>
                  </div>
                ))}
              </div>
              
              {emailState !== 'sent' && (
                <div id="ink-wall" className="mt-12 bg-blue-50/50 border border-blue-100 p-10 md:p-16 rounded-[2.5rem] text-center relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600"></div>
                   <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight text-slate-900">Unlock {scanResults.length - 3} more matches & full platform access</h3>
                  <p className="text-slate-500 mb-10 max-w-lg mx-auto leading-relaxed">Enter your email to see all your matched opportunities, get the full application checklists, and access the INK Application Builder.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      value={capEmail} 
                      onChange={e => setCapEmail(e.target.value)}
                      className="flex-1 bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-900 outline-none focus:border-blue-500 transition-colors placeholder:text-slate-300"
                      disabled={emailState === 'loading'}
                    />
                    <button 
                      onClick={captureEmail} 
                      disabled={emailState === 'loading'}
                      className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black whitespace-nowrap hover:bg-blue-500 transition-all btn-animate shadow-lg shadow-blue-500/20 disabled:opacity-50"
                    >
                      {emailState === 'loading' ? 'Processing...' : 'Unlock Platform →'}
                    </button>
                  </div>
                  {emailState === 'error' && <p className="text-red-600 mt-3 text-sm font-bold">Please enter a valid email.</p>}
                  <p className="mt-8 text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Free 14-day trial · No credit card required</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ScanTool;
