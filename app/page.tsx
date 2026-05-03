export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Team Leads &amp; Ops Managers
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
          Calculate the{" "}
          <span className="text-[#58a6ff]">real cost</span>{" "}
          of every meeting
        </h1>
        <p className="text-lg sm:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect your Google Calendar or Outlook and payroll data to see exactly how much each meeting costs your company — in real dollars, in real time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Saving — $8/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { stat: "$25,000+", label: "Average annual meeting waste per employee" },
            { stat: "31 hrs", label: "Unproductive meetings per month per manager" },
            { stat: "67%", label: "Meetings considered unnecessary by attendees" }
          ].map((item) => (
            <div key={item.stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl font-extrabold text-[#58a6ff] mb-2">{item.stat}</div>
              <div className="text-sm text-[#8b949e]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, transparent pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$8</div>
          <div className="text-[#8b949e] mb-6">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Google Calendar &amp; Outlook integration",
              "Payroll sync or manual salary input",
              "Real-time meeting cost dashboard",
              "Team analytics &amp; ROI insights",
              "Unlimited team members",
              "Export reports as CSV / PDF"
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: feature }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-xs text-[#8b949e] mt-4">14-day free trial. No credit card required.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it calculate meeting costs?",
              a: "We pull attendee lists from your calendar and match them against salary data (from payroll integration or manual input). Cost = (hourly rate × hours) summed across all attendees."
            },
            {
              q: "Is my payroll data secure?",
              a: "Yes. All data is encrypted in transit and at rest. We never store raw payroll files — only the anonymized hourly rates needed for calculations. You can delete your data at any time."
            },
            {
              q: "Which calendars and payroll systems are supported?",
              a: "We support Google Calendar, Microsoft Outlook/365, and manual CSV import. For payroll, we integrate with Gusto, ADP, and Rippling, plus manual salary entry for any team size."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Meeting Cost Tracker. All rights reserved.
      </footer>
    </main>
  );
}
