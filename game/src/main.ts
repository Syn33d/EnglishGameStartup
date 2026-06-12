type Verdict = "good" | "bad" | "mixed";

type Choice = {
  word: string;
  next: string;
  verdict: Verdict;
  why: string;
};

type StoryNode = {
  text: string;
  label?: string;
  choices?: [Choice, Choice];
  outcome?: "success" | "failure";
};

type HistoryEntry = {
  label: string;
  word: string;
  verdict: Verdict;
  why: string;
};

const story: Record<string, StoryNode> = {

  // ── CHOICE 1 ─────────────────────────────────────────────────────────────
  start: {
    label: "Team setup",
    text: "You have a promising idea for a web startup. First decision: do you build it alone or find a co-founder?",
    choices: [
      {
        word: "Solo", next: "solo",
        verdict: "mixed",
        why: "Going solo lets you move fast and keep full equity, but you take on every skill gap alone. It works — but requires exceptional range.",
      },
      {
        word: "Co-founder", next: "cofounder",
        verdict: "mixed",
        why: "A co-founder covers your blind spots and shares the mental load, but splits equity and introduces the risk of co-founder conflict.",
      },
    ],
  },

  // ── CHOICE 2 ─────────────────────────────────────────────────────────────
  solo: {
    label: "Build approach",
    text: "Going solo. Do you spend months perfecting the product in stealth, or ship something rough right now?",
    choices: [
      {
        word: "Perfect", next: "solo_perfect",
        verdict: "bad",
        why: "Spending months polishing before any user feedback is a classic mistake. You optimize a product nobody has validated yet.",
      },
      {
        word: "Ship", next: "solo_ship",
        verdict: "good",
        why: "Shipping early puts real users in front of the product fast. Most features built in stealth turn out to be wrong anyway.",
      },
    ],
  },
  cofounder: {
    label: "Validation method",
    text: "You find a co-founder with complementary skills. Before writing a line of code, do you spend time interviewing potential users or start building immediately?",
    choices: [
      {
        word: "Interview", next: "cf_interview",
        verdict: "good",
        why: "Talking to users before building is the most reliable way to avoid building the wrong thing. Every hour here saves ten in engineering.",
      },
      {
        word: "Build", next: "cf_build",
        verdict: "bad",
        why: "Starting without validation assumes you already know the problem. Most early assumptions turn out to be wrong.",
      },
    ],
  },

  // ── CHOICE 3 ─────────────────────────────────────────────────────────────
  solo_perfect: {
    label: "Growth strategy",
    text: "Four months of polish. You launch on Product Hunt — 600 upvotes, inbox on fire. Do you ride the wave and raise capital, or stay lean and focus on revenue?",
    choices: [
      {
        word: "Raise", next: "solo_perfect_raise",
        verdict: "mixed",
        why: "Raising on strong traction is smart timing. The risk is giving up equity before you know if growth is truly sustainable.",
      },
      {
        word: "Lean", next: "solo_perfect_lean",
        verdict: "good",
        why: "Staying lean keeps focus on revenue over vanity metrics and preserves full ownership until real growth justifies dilution.",
      },
    ],
  },
  solo_ship: {
    label: "Next move",
    text: "You ship in two weeks. Buggy but live. An early user shares it and it gets 2,000 views overnight. Do you double down on that channel or fix the product first?",
    choices: [
      {
        word: "Channel", next: "solo_ship_channel",
        verdict: "good",
        why: "Doubling down on a channel that already works is a smart, evidence-based move. Always follow the signal the market gives you.",
      },
      {
        word: "Fix", next: "solo_ship_fix",
        verdict: "mixed",
        why: "Fixing the product is necessary eventually — but applying to YC before product-market fit is rarely the right priority.",
      },
    ],
  },
  cf_interview: {
    label: "Sales approach",
    text: "Thirty user interviews reveal that companies, not consumers, are the real target. You pivot to B2B SaaS. How do you approach your first sales?",
    choices: [
      {
        word: "Cold email", next: "cf_interview_cold",
        verdict: "good",
        why: "Cold outreach is a scalable, learnable skill. It also forces you to articulate your value proposition precisely to strangers.",
      },
      {
        word: "Network", next: "cf_interview_network",
        verdict: "mixed",
        why: "Warm intros move faster, but relying solely on your network limits your market to people you already know.",
      },
    ],
  },
  cf_build: {
    label: "Opportunity",
    text: "You build fast. Three months in you have a working product. A large company wants to license it. Meanwhile a top accelerator offers you a spot. Which do you choose?",
    choices: [
      {
        word: "License", next: "cf_build_license",
        verdict: "mixed",
        why: "A large licensing deal provides serious runway but often creates dependency on one client's priorities and roadmap.",
      },
      {
        word: "Accelerator", next: "cf_build_accelerator",
        verdict: "good",
        why: "Accelerators provide structure, mentorship, and investor access that is very hard to replicate independently at this stage.",
      },
    ],
  },

  // ── CHOICE 4 ─────────────────────────────────────────────────────────────
  solo_perfect_raise: {
    label: "Investor type",
    text: "Two angels make offers. One is a well-known operator offering €50k for 15%. The other is a passive investor offering €50k for 10%. Who do you take?",
    choices: [
      {
        word: "Operator", next: "sp_raise_operator",
        verdict: "good",
        why: "An operator investor brings network, pattern recognition, and intros — often worth more than the capital itself at early stage.",
      },
      {
        word: "Passive", next: "sp_raise_passive",
        verdict: "bad",
        why: "A passive investor only provides money. At early stage, you need guidance at least as much as you need cash.",
      },
    ],
  },
  solo_perfect_lean: {
    label: "Competitive response",
    text: "Early customers pay €49/month but growth is slow. A well-funded competitor launches a clone. Do you cut your price to compete, or focus on adding features they lack?",
    choices: [
      {
        word: "Cut price", next: "sp_lean_cut",
        verdict: "bad",
        why: "Competing on price against a funded competitor is a losing game. They can always outspend you — don't play their game.",
      },
      {
        word: "Features", next: "sp_lean_features",
        verdict: "good",
        why: "Competing on product quality and customer success is where a lean startup consistently beats a funded clone.",
      },
    ],
  },
  solo_ship_channel: {
    label: "Monetization model",
    text: "The viral channel is Twitter. Daily build threads earn you 8,000 followers in a month. Time to monetize. Do you launch a freemium tier or go straight to paid-only?",
    choices: [
      {
        word: "Freemium", next: "ss_channel_freemium",
        verdict: "bad",
        why: "Freemium works at scale, not at early stage. Infrastructure costs and low conversion rates can sink you before you find the fix.",
      },
      {
        word: "Paid", next: "ss_channel_paid",
        verdict: "good",
        why: "Charging from day one attracts serious users, validates willingness to pay, and generates the cash you need to survive.",
      },
    ],
  },
  solo_ship_fix: {
    label: "Next step",
    text: "The product is now solid. You apply to YC. Simultaneously a larger SaaS company offers to acquire you for €80k. Do you hold out for YC or take the acquisition?",
    choices: [
      {
        word: "YC", next: "ss_fix_yc",
        verdict: "mixed",
        why: "YC accepts roughly 2% of applicants. Betting the company on it is a distraction unless your application is genuinely exceptional.",
      },
      {
        word: "Acquire", next: "ss_fix_acquire",
        verdict: "mixed",
        why: "A small acquisition is a real outcome, but it ends the journey early. Weigh what you give up, not just what you gain.",
      },
    ],
  },
  cf_interview_cold: {
    label: "Sales sequence",
    text: "200 cold emails, 3 demo calls. During demos you spot a missing feature they all need. Do you build it before asking them to sign, or close the contracts first and build after?",
    choices: [
      {
        word: "Build first", next: "cf_cold_build",
        verdict: "bad",
        why: "Building before closing gives prospects a reason to wait — and while they wait, they find or build alternatives.",
      },
      {
        word: "Close first", next: "cf_cold_close",
        verdict: "good",
        why: "Closing on a promise is how most B2B startups land their first contracts. It also reveals quickly whether you can actually sell.",
      },
    ],
  },
  cf_interview_network: {
    label: "Contract terms",
    text: "A warm intro leads to a company ready to sign a €12k annual contract — but they want 6 months of exclusivity in return. Do you accept their terms or decline?",
    choices: [
      {
        word: "Accept", next: "cf_net_accept",
        verdict: "bad",
        why: "Exclusivity locks you out of the market. No single contract is worth sacrificing the entire pipeline you could build.",
      },
      {
        word: "Decline", next: "cf_net_decline",
        verdict: "good",
        why: "Keeping market freedom is almost always worth more than one contract. Never sacrifice optionality in the early months.",
      },
    ],
  },
  cf_build_license: {
    label: "IP clause",
    text: "The deal is €200k upfront for 2 years. Your co-founder spots a clause giving them rights to all future features. Do you sign as-is or renegotiate that clause?",
    choices: [
      {
        word: "Sign", next: "cf_lic_sign",
        verdict: "bad",
        why: "An IP clause in a licensing deal is a trap. You hand your entire roadmap to the client and lose control of the product.",
      },
      {
        word: "Renegotiate", next: "cf_lic_renegotiate",
        verdict: "good",
        why: "Never sign away your IP. A client who refuses to remove that clause is an acquirer in disguise — not a genuine partner.",
      },
    ],
  },
  cf_build_accelerator: {
    label: "Growth focus",
    text: "The accelerator gives €25k for 7%. A VC promises a €300k follow-on if you hit 100 paid users in 90 days. Do you focus entirely on user growth, or keep building features?",
    choices: [
      {
        word: "Users", next: "cf_acc_users",
        verdict: "good",
        why: "User growth is the metric that unlocks the next funding stage. Investors want traction, not a roadmap.",
      },
      {
        word: "Features", next: "cf_acc_features",
        verdict: "bad",
        why: "Building features feels productive but is often a way to avoid the harder work of selling. A critical mistake at this stage.",
      },
    ],
  },

  // ── CHOICE 5 ─────────────────────────────────────────────────────────────
  sp_raise_operator: {
    label: "Exit decision",
    text: "The operator's network opens enterprise doors. You sign your first big contract. Twelve months later a larger startup offers €800k to acquire you. Do you sell or push for more?",
    choices: [
      {
        word: "Sell", next: "end_small_exit",
        verdict: "mixed",
        why: "Taking an early offer locks in a certain outcome but may leave significant value on the table. Know your risk tolerance.",
      },
      {
        word: "Push", next: "end_series_a",
        verdict: "good",
        why: "If the business is healthy and growing, holding out for a better outcome usually pays off — provided you have the runway for it.",
      },
    ],
  },
  sp_raise_passive: {
    label: "Talent decision",
    text: "The investor's advice is thin. You're burning cash and losing direction. A senior developer offers to join for 15% equity with no salary. Do you bring them on or keep cutting costs alone?",
    choices: [
      {
        word: "Bring on", next: "end_late_recovery",
        verdict: "good",
        why: "Adding execution capacity through equity when cash is short is creative and often the right call. Engineers for equity is a proven early-stage move.",
      },
      {
        word: "Cut costs", next: "end_runout",
        verdict: "bad",
        why: "Cutting costs alone rarely saves a company. You need both a runway fix and a growth fix simultaneously.",
      },
    ],
  },
  sp_lean_cut: {
    label: "Market strategy",
    text: "A price war erupts. The competitor drops to €19/month. A larger SaaS player offers to white-label your product to escape the race. Do you take the deal or keep fighting?",
    choices: [
      {
        word: "White-label", next: "end_reseller_win",
        verdict: "good",
        why: "A white-label deal trades branding for distribution. When you are stuck in a price war you cannot win, this is the smarter exit.",
      },
      {
        word: "Fight", next: "end_pricewar_loss",
        verdict: "bad",
        why: "Fighting a funded competitor on price is almost always a losing strategy for a bootstrapped company. Don't enter their game.",
      },
    ],
  },
  sp_lean_features: {
    label: "Enterprise deal",
    text: "Feature velocity wins fierce loyalty. You reach €20k MRR. Your biggest customer wants an annual enterprise contract for €100k — but demands SLA guarantees. Do you sign?",
    choices: [
      {
        word: "Sign", next: "end_enterprise_win",
        verdict: "good",
        why: "Enterprise contracts are high-value and sticky. If you can meet the SLA, the revenue and reference client are worth the operational cost.",
      },
      {
        word: "Decline", next: "end_steady_growth",
        verdict: "mixed",
        why: "Declining protects operations but leaves significant revenue on the table. Reasonable, but not the most ambitious call.",
      },
    ],
  },
  ss_channel_freemium: {
    label: "Crisis response",
    text: "The free tier hits 3,000 users but barely 1% convert. Runway is down to 2 months. A competitor offers €40k for your user base. Do you sell or attempt a last-minute model change?",
    choices: [
      {
        word: "Sell base", next: "end_acquihire",
        verdict: "mixed",
        why: "Selling your user base is a micro-exit — small, but real. Better than closing the company with nothing.",
      },
      {
        word: "Pivot model", next: "end_pivot_fail",
        verdict: "bad",
        why: "Last-minute model pivots with 2 months of runway almost never work. The timeline is too short to validate a new approach.",
      },
    ],
  },
  ss_channel_paid: {
    label: "Funding path",
    text: "120 paying customers, ramen profitable. A VC cold emails about your traction. Do you take a meeting and explore a raise, or protect your independence and stay bootstrapped?",
    choices: [
      {
        word: "Meet VC", next: "end_series_a",
        verdict: "mixed",
        why: "VC money accelerates growth but introduces external pressure, milestones, and dilution. Only right if you genuinely need scale capital.",
      },
      {
        word: "Bootstrap", next: "end_steady_growth",
        verdict: "good",
        why: "Staying bootstrapped at ramen profitability preserves full ownership and lets the business grow on its own terms.",
      },
    ],
  },
  ss_fix_yc: {
    label: "Investment timing",
    text: "YC rejects you but another accelerator says yes. Demo Day is in 3 months. An angel wants to pre-empt with €100k before Demo Day. Do you take the offer early or wait?",
    choices: [
      {
        word: "Pre-empt", next: "end_early_funding",
        verdict: "mixed",
        why: "Pre-empting removes investor competition that typically drives up valuations. You trade certainty for potential value.",
      },
      {
        word: "Wait", next: "end_demo_day_win",
        verdict: "good",
        why: "Demo Day creates competitive pressure between investors that almost always produces better terms. Patience tends to pay.",
      },
    ],
  },
  ss_fix_acquire: {
    label: "Deal structure",
    text: "The acquirer is serious. Offer: €80k. Your lawyer spots an earnout clause worth an extra €40k if you stay 18 months. Do you accept the earnout or push for everything upfront?",
    choices: [
      {
        word: "Earnout", next: "end_earnout_win",
        verdict: "good",
        why: "If you believe in the milestones, an earnout lets you participate in the upside you created. Often the smarter deal structure.",
      },
      {
        word: "Upfront", next: "end_small_exit",
        verdict: "mixed",
        why: "Taking everything upfront removes risk but also removes any claim to future value. Reasonable if you want a clean break.",
      },
    ],
  },
  cf_cold_build: {
    label: "Client terms",
    text: "Building takes six weeks. Two of three prospects moved on. The one remaining client is happy but wants 3 months of exclusivity. Do you give it to them or refuse?",
    choices: [
      {
        word: "Exclusive", next: "end_client_trap",
        verdict: "bad",
        why: "Accepting exclusivity with only one client gives them full control over your next 3 months with no leverage in return.",
      },
      {
        word: "Refuse", next: "end_runout",
        verdict: "mixed",
        why: "Refusing keeps you free to find new clients — but with one prospect left, the company likely cannot survive the loss.",
      },
    ],
  },
  cf_cold_close: {
    label: "Visibility timing",
    text: "€8k MRR in the first quarter. You're invited to pitch at a regional tech summit. Do you pitch publicly now to attract investors, or keep growing quietly for 3 more months?",
    choices: [
      {
        word: "Pitch now", next: "end_early_funding",
        verdict: "mixed",
        why: "Pitching early brings attention, but without stronger metrics it can do more harm than good to your investor reputation.",
      },
      {
        word: "Grow first", next: "end_steady_growth",
        verdict: "good",
        why: "More growth means better metrics, which means better terms. Investors reward founders who show up with real numbers.",
      },
    ],
  },
  cf_net_accept: {
    label: "Client renewal",
    text: "Six months of exclusivity. Competitors filled the gap. The client now wants to extend for another 6 months. Do you renew and stay safe, or break free and rebuild your pipeline?",
    choices: [
      {
        word: "Renew", next: "end_client_trap",
        verdict: "bad",
        why: "Renewing exclusivity after already losing the market once compounds the original mistake. You are choosing to stay trapped.",
      },
      {
        word: "Break free", next: "end_late_recovery",
        verdict: "good",
        why: "Breaking exclusivity is painful short-term but necessary. Your pipeline will not rebuild itself while you remain locked in.",
      },
    ],
  },
  cf_net_decline: {
    label: "Distribution deal",
    text: "Three contracts, full freedom. A company offers to resell your product to 500 of their clients for 20% revenue share. Do you sign the reseller deal or stay direct-only?",
    choices: [
      {
        word: "Reseller", next: "end_reseller_win",
        verdict: "good",
        why: "A reseller with 500 clients gives you instant distribution you could not build alone. The 20% cut is cheap for that kind of reach.",
      },
      {
        word: "Direct", next: "end_enterprise_win",
        verdict: "mixed",
        why: "Staying direct preserves margin but limits reach. Works well if you already have a strong enough direct sales motion.",
      },
    ],
  },
  cf_lic_sign: {
    label: "Product direction",
    text: "The client uses the IP clause to demand features for a different vertical. Every sprint takes you further from your vision. Do you keep building what they want, or push back hard?",
    choices: [
      {
        word: "Keep building", next: "end_client_trap",
        verdict: "bad",
        why: "Continuing to build for a client who controls your IP turns you into a dev agency. The startup as a product company is over.",
      },
      {
        word: "Push back", next: "end_contract_exit",
        verdict: "mixed",
        why: "Pushing back risks the contract — but at this point the contract is already killing the company. It is the only remaining move.",
      },
    ],
  },
  cf_lic_renegotiate: {
    label: "Partnership offer",
    text: "Clean €200k deal, 40 side customers. A SaaS giant proposes a partnership — their massive distribution in exchange for 25% equity. Do you accept the deal?",
    choices: [
      {
        word: "Accept", next: "end_series_a",
        verdict: "mixed",
        why: "A distribution partnership is powerful, but 25% equity is steep. Only worth it if their reach genuinely cannot be replicated.",
      },
      {
        word: "Decline", next: "end_enterprise_win",
        verdict: "good",
        why: "Keeping equity early on preserves future optionality. Growing slower with more ownership often beats growing faster with less.",
      },
    ],
  },
  cf_acc_users: {
    label: "Growth model",
    text: "100 users hit, €300k wired. Now you need a growth strategy. Do you hire a traditional sales team to push outbound, or invest in product-led growth to let the product sell itself?",
    choices: [
      {
        word: "Sales team", next: "end_series_a",
        verdict: "good",
        why: "A structured sales team scales outbound systematically and reaches enterprise deals that product-led growth alone cannot close.",
      },
      {
        word: "PLG", next: "end_reseller_win",
        verdict: "mixed",
        why: "Product-led growth works well for bottom-up SaaS, but is slower and harder to control than a focused sales team at this stage.",
      },
    ],
  },
  cf_acc_features: {
    label: "Final decision",
    text: "34 users by day 90 — the VC passes. You have 3 months of runway left. Do you bet everything on one final growth sprint, or wind down gracefully and return what remains?",
    choices: [
      {
        word: "Sprint", next: "end_late_recovery",
        verdict: "mixed",
        why: "A last-ditch sprint can work — but only with a clear, testable hypothesis. Without focus, it just burns the remaining runway faster.",
      },
      {
        word: "Wind down", next: "end_graceful_exit",
        verdict: "good",
        why: "Winding down gracefully is a professional, mature decision. Founders who close well preserve the reputation and relationships that last.",
      },
    ],
  },

  // ── ENDINGS ──────────────────────────────────────────────────────────────
  end_series_a: {
    text: "You close a Series A at a €5M valuation. The team grows to 12 people. Your startup is now a real company with a real shot at the market.",
    outcome: "success",
  },
  end_steady_growth: {
    text: "Slow but steady wins the race. Three years of profitable growth, no outside capital. You own 100% of a business generating €30k MRR.",
    outcome: "success",
  },
  end_enterprise_win: {
    text: "Your enterprise client becomes your biggest advocate. Their referrals fuel a pipeline you could not have built alone. Revenue doubles in six months.",
    outcome: "success",
  },
  end_small_exit: {
    text: "You sell for €120k — not a unicorn, but real money on the table. You take three months off and start planning your next venture with hard-won experience.",
    outcome: "success",
  },
  end_early_funding: {
    text: "The early cheque lands at a fair valuation. You deploy it well, hit your milestones, and unlock a much larger round six months later.",
    outcome: "success",
  },
  end_demo_day_win: {
    text: "Demo Day produces three term sheets. You pick the best partner, close the round, and finally have the resources to build the team you always needed.",
    outcome: "success",
  },
  end_earnout_win: {
    text: "You stay the 18 months, hit every milestone, and walk away with €120k total. The experience inside a bigger company teaches you more than any accelerator could.",
    outcome: "success",
  },
  end_reseller_win: {
    text: "The reseller deal unlocks 80 new customers in 90 days. Monthly revenue triples without a single extra cold email.",
    outcome: "success",
  },
  end_late_recovery: {
    text: "It takes a year longer than expected but you claw back. Behind schedule, but still standing — and the company is profitable.",
    outcome: "success",
  },
  end_runout: {
    text: "The runway runs out. You pay the last salaries, close the accounts, and send a gracious shutdown email. It hurts, but it is over.",
    outcome: "failure",
  },
  end_pivot_fail: {
    text: "You attempt a last-minute switch to a paid model. Conversion is near zero. The pivot comes too late and the company folds.",
    outcome: "failure",
  },
  end_pricewar_loss: {
    text: "You fight the price war to the bitter end. Margins collapse. You cannot sustain operations. Lights out after four brutal months.",
    outcome: "failure",
  },
  end_client_trap: {
    text: "You become entirely dependent on one client. When they renegotiate a year later you have no leverage. They slash the contract by 60% and the business model breaks.",
    outcome: "failure",
  },
  end_acquihire: {
    text: "You sell the user base for €40k and walk away. The idea had real potential — execution just ran out of time and money.",
    outcome: "failure",
  },
  end_contract_exit: {
    text: "You push back and they terminate the contract. With no revenue and a locked IP clause you cannot enforce, the company is dead within weeks.",
    outcome: "failure",
  },
  end_graceful_exit: {
    text: "You wind down cleanly. Investors appreciate the honesty. One of them introduces you to a founding team looking for exactly your skills. A new chapter begins.",
    outcome: "failure",
  },
};

const cardEl    = document.getElementById("card")    as HTMLDivElement;
const textEl    = document.getElementById("text")    as HTMLParagraphElement;
const buttonsEl = document.getElementById("buttons") as HTMLDivElement;
const reportEl  = document.getElementById("report")  as HTMLDivElement;

const history: HistoryEntry[] = [];

function renderReport(): void {
  reportEl.innerHTML = `<div class="report-title">Decision Review</div>`;
  for (const entry of history) {
    const verdictText =
      entry.verdict === "good"  ? "✓ Good call" :
      entry.verdict === "bad"   ? "✗ Poor call" :
                                  "~ Mixed";
    const div = document.createElement("div");
    div.className = "decision";
    div.innerHTML = `
      <div class="decision-top">
        <span class="decision-label">${entry.label}</span>
        <span class="verdict-${entry.verdict}">${verdictText}</span>
      </div>
      <div class="decision-choice">You chose: <strong>${entry.word}</strong></div>
      <div class="decision-why">${entry.why}</div>
    `;
    reportEl.appendChild(div);
  }
  reportEl.className = "visible";
}

function render(id: string): void {
  const node = story[id];
  if (!node) return;

  cardEl.className = "";
  textEl.classList.remove("anim");
  buttonsEl.classList.remove("anim-d");
  void textEl.offsetWidth;

  textEl.textContent = node.text;
  textEl.classList.add("anim");
  buttonsEl.innerHTML = "";

  if (node.choices) {
    for (const choice of node.choices) {
      const btn = document.createElement("button");
      btn.textContent = choice.word;
      btn.onclick = () => {
        if (node.label) {
          history.push({ label: node.label, word: choice.word, verdict: choice.verdict, why: choice.why });
        }
        render(choice.next);
      };
      buttonsEl.appendChild(btn);
    }
    buttonsEl.classList.add("anim-d");
  } else {
    cardEl.className = node.outcome ?? "";
    renderReport();
    const btn = document.createElement("button");
    btn.textContent = "Play again";
    btn.onclick = () => {
      history.length = 0;
      reportEl.className = "";
      reportEl.innerHTML = "";
      render("start");
    };
    buttonsEl.appendChild(btn);
    buttonsEl.classList.add("anim-d");
  }
}

render("start");
