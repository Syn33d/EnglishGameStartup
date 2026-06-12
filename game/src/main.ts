type Choice = { word: string; next: string };

type StoryNode = {
  text: string;
  choices?: [Choice, Choice];
  outcome?: "success" | "failure";
};

const story: Record<string, StoryNode> = {

  // ── CHOICE 1 ─────────────────────────────────────────────────────────────
  start: {
    text: "You have a promising idea for a web startup. First decision: do you build it alone or find a co-founder?",
    choices: [
      { word: "Solo", next: "solo" },
      { word: "Co-founder", next: "cofounder" },
    ],
  },

  // ── CHOICE 2 ─────────────────────────────────────────────────────────────
  solo: {
    text: "Going solo. Do you spend months perfecting the product in stealth, or ship something rough right now?",
    choices: [
      { word: "Perfect", next: "solo_perfect" },
      { word: "Ship", next: "solo_ship" },
    ],
  },
  cofounder: {
    text: "You find a co-founder with complementary skills. Before writing a line of code, do you spend time interviewing potential users or start building immediately?",
    choices: [
      { word: "Interview", next: "cf_interview" },
      { word: "Build", next: "cf_build" },
    ],
  },

  // ── CHOICE 3 ─────────────────────────────────────────────────────────────
  solo_perfect: {
    text: "Four months of polish. You launch on Product Hunt — 600 upvotes, inbox on fire. Do you ride the wave and raise capital, or stay lean and focus on revenue?",
    choices: [
      { word: "Raise", next: "solo_perfect_raise" },
      { word: "Lean", next: "solo_perfect_lean" },
    ],
  },
  solo_ship: {
    text: "You ship in two weeks. Buggy but live. An early user shares it and it gets 2,000 views overnight. Do you double down on that channel or fix the product first?",
    choices: [
      { word: "Channel", next: "solo_ship_channel" },
      { word: "Fix", next: "solo_ship_fix" },
    ],
  },
  cf_interview: {
    text: "Thirty user interviews reveal that companies, not consumers, are the real target. You pivot to B2B SaaS. How do you approach your first sales?",
    choices: [
      { word: "Cold email", next: "cf_interview_cold" },
      { word: "Network", next: "cf_interview_network" },
    ],
  },
  cf_build: {
    text: "You build fast. Three months in you have a working product. A large company wants to license it. Meanwhile a top accelerator offers you a spot. Which do you choose?",
    choices: [
      { word: "License", next: "cf_build_license" },
      { word: "Accelerator", next: "cf_build_accelerator" },
    ],
  },

  // ── CHOICE 4 ─────────────────────────────────────────────────────────────
  solo_perfect_raise: {
    text: "Two angels make offers. One is a well-known operator offering €50k for 15%. The other is a passive investor offering €50k for 10%. Who do you take?",
    choices: [
      { word: "Operator", next: "sp_raise_operator" },
      { word: "Passive", next: "sp_raise_passive" },
    ],
  },
  solo_perfect_lean: {
    text: "Early customers pay €49/month but growth is slow. A well-funded competitor launches a clone. Do you cut your price to compete, or focus on adding features they lack?",
    choices: [
      { word: "Cut price", next: "sp_lean_cut" },
      { word: "Features", next: "sp_lean_features" },
    ],
  },
  solo_ship_channel: {
    text: "The viral channel is Twitter. Daily build threads earn you 8,000 followers in a month. Time to monetize. Do you launch a freemium tier or go straight to paid-only?",
    choices: [
      { word: "Freemium", next: "ss_channel_freemium" },
      { word: "Paid", next: "ss_channel_paid" },
    ],
  },
  solo_ship_fix: {
    text: "The product is now solid. You apply to YC. Simultaneously a larger SaaS company offers to acquire you for €80k. Do you hold out for YC or take the acquisition?",
    choices: [
      { word: "YC", next: "ss_fix_yc" },
      { word: "Acquire", next: "ss_fix_acquire" },
    ],
  },
  cf_interview_cold: {
    text: "200 cold emails, 3 demo calls. During demos you spot a missing feature they all need. Do you build it before asking them to sign, or close the contracts first and build after?",
    choices: [
      { word: "Build first", next: "cf_cold_build" },
      { word: "Close first", next: "cf_cold_close" },
    ],
  },
  cf_interview_network: {
    text: "A warm intro leads to a company ready to sign a €12k annual contract — but they want 6 months of exclusivity in return. Do you accept their terms or decline?",
    choices: [
      { word: "Accept", next: "cf_net_accept" },
      { word: "Decline", next: "cf_net_decline" },
    ],
  },
  cf_build_license: {
    text: "The deal is €200k upfront for 2 years. Your co-founder spots a clause giving them rights to all future features. Do you sign as-is or renegotiate that clause?",
    choices: [
      { word: "Sign", next: "cf_lic_sign" },
      { word: "Renegotiate", next: "cf_lic_renegotiate" },
    ],
  },
  cf_build_accelerator: {
    text: "The accelerator gives €25k for 7%. A VC promises a €300k follow-on if you hit 100 paid users in 90 days. Do you focus entirely on user growth, or keep building features?",
    choices: [
      { word: "Users", next: "cf_acc_users" },
      { word: "Features", next: "cf_acc_features" },
    ],
  },

  // ── CHOICE 5 ─────────────────────────────────────────────────────────────
  sp_raise_operator: {
    text: "The operator's network opens enterprise doors. You sign your first big contract. Twelve months later a larger startup offers €800k to acquire you. Do you sell or push for more?",
    choices: [
      { word: "Sell", next: "end_small_exit" },
      { word: "Push", next: "end_series_a" },
    ],
  },
  sp_raise_passive: {
    text: "The investor's advice is thin. You're burning cash and losing direction. A senior developer offers to join for 15% equity with no salary. Do you bring them on or keep cutting costs alone?",
    choices: [
      { word: "Bring on", next: "end_late_recovery" },
      { word: "Cut costs", next: "end_runout" },
    ],
  },
  sp_lean_cut: {
    text: "A price war erupts. The competitor drops to €19/month. A larger SaaS player offers to white-label your product to escape the race. Do you take the deal or keep fighting?",
    choices: [
      { word: "White-label", next: "end_reseller_win" },
      { word: "Fight", next: "end_pricewar_loss" },
    ],
  },
  sp_lean_features: {
    text: "Feature velocity wins fierce loyalty. You reach €20k MRR. Your biggest customer wants an annual enterprise contract for €100k — but demands SLA guarantees. Do you sign?",
    choices: [
      { word: "Sign", next: "end_enterprise_win" },
      { word: "Decline", next: "end_steady_growth" },
    ],
  },
  ss_channel_freemium: {
    text: "The free tier hits 3,000 users but barely 1% convert. Runway is down to 2 months. A competitor offers €40k for your user base. Do you sell or attempt a last-minute model change?",
    choices: [
      { word: "Sell base", next: "end_acquihire" },
      { word: "Pivot model", next: "end_pivot_fail" },
    ],
  },
  ss_channel_paid: {
    text: "120 paying customers, ramen profitable. A VC cold emails about your traction. Do you take a meeting and explore a raise, or protect your independence and stay bootstrapped?",
    choices: [
      { word: "Meet VC", next: "end_series_a" },
      { word: "Bootstrap", next: "end_steady_growth" },
    ],
  },
  ss_fix_yc: {
    text: "YC rejects you but another accelerator says yes. Demo Day is in 3 months. An angel wants to pre-empt with €100k before Demo Day. Do you take the offer early or wait?",
    choices: [
      { word: "Pre-empt", next: "end_early_funding" },
      { word: "Wait", next: "end_demo_day_win" },
    ],
  },
  ss_fix_acquire: {
    text: "The acquirer is serious. Offer: €80k. Your lawyer spots an earnout clause worth an extra €40k if you stay 18 months. Do you accept the earnout or push for everything upfront?",
    choices: [
      { word: "Earnout", next: "end_earnout_win" },
      { word: "Upfront", next: "end_small_exit" },
    ],
  },
  cf_cold_build: {
    text: "Building takes six weeks. Two of three prospects moved on. The one remaining client is happy but wants 3 months of exclusivity. Do you give it to them or refuse?",
    choices: [
      { word: "Exclusive", next: "end_client_trap" },
      { word: "Refuse", next: "end_runout" },
    ],
  },
  cf_cold_close: {
    text: "€8k MRR in the first quarter. You're invited to pitch at a regional tech summit. Do you pitch publicly now to attract investors, or keep growing quietly for 3 more months?",
    choices: [
      { word: "Pitch now", next: "end_early_funding" },
      { word: "Grow first", next: "end_steady_growth" },
    ],
  },
  cf_net_accept: {
    text: "Six months of exclusivity. Competitors filled the gap. The client now wants to extend for another 6 months. Do you renew and stay safe, or break free and rebuild your pipeline?",
    choices: [
      { word: "Renew", next: "end_client_trap" },
      { word: "Break free", next: "end_late_recovery" },
    ],
  },
  cf_net_decline: {
    text: "Three contracts, full freedom. A company offers to resell your product to 500 of their clients for 20% revenue share. Do you sign the reseller deal or stay direct-only?",
    choices: [
      { word: "Reseller", next: "end_reseller_win" },
      { word: "Direct", next: "end_enterprise_win" },
    ],
  },
  cf_lic_sign: {
    text: "The client uses the IP clause to demand features for a different vertical. Every sprint takes you further from your vision. Do you keep building what they want, or push back hard?",
    choices: [
      { word: "Keep building", next: "end_client_trap" },
      { word: "Push back", next: "end_contract_exit" },
    ],
  },
  cf_lic_renegotiate: {
    text: "Clean €200k deal, 40 side customers. A SaaS giant proposes a partnership — their massive distribution in exchange for 25% equity. Do you accept the deal?",
    choices: [
      { word: "Accept", next: "end_series_a" },
      { word: "Decline", next: "end_enterprise_win" },
    ],
  },
  cf_acc_users: {
    text: "100 users hit, €300k wired. Now you need a growth strategy. Do you hire a traditional sales team to push outbound, or invest in product-led growth to let the product sell itself?",
    choices: [
      { word: "Sales team", next: "end_series_a" },
      { word: "PLG", next: "end_reseller_win" },
    ],
  },
  cf_acc_features: {
    text: "34 users by day 90 — the VC passes. You have 3 months of runway left. Do you bet everything on one final growth sprint, or wind down gracefully and return what remains?",
    choices: [
      { word: "Sprint", next: "end_late_recovery" },
      { word: "Wind down", next: "end_graceful_exit" },
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

const cardEl = document.getElementById("card") as HTMLDivElement;
const textEl = document.getElementById("text") as HTMLParagraphElement;
const buttonsEl = document.getElementById("buttons") as HTMLDivElement;

function render(id: string): void {
  const node = story[id];
  if (!node) return;

  cardEl.className = "";
  textEl.textContent = node.text;
  buttonsEl.innerHTML = "";

  if (node.choices) {
    for (const choice of node.choices) {
      const btn = document.createElement("button");
      btn.textContent = choice.word;
      btn.onclick = () => render(choice.next);
      buttonsEl.appendChild(btn);
    }
  } else {
    cardEl.className = node.outcome ?? "";
    const btn = document.createElement("button");
    btn.textContent = "Play again";
    btn.onclick = () => render("start");
    buttonsEl.appendChild(btn);
  }
}

render("start");
