# Startup Project — Scenario

## Concept

**Startup Project** is a choose-your-own-adventure game set in the world of web entrepreneurship. The player steps into the shoes of a first-time founder who has just decided to quit their job and bet everything on a startup idea. Every decision they make — big or small — will determine whether their company grows into a success story or collapses under the pressure of the startup world.

The game draws on real situations encountered during studies and internships: fundraising meetings, pricing dilemmas, co-founder dynamics, sales strategy, product-market fit, and the ever-present threat of running out of runway.

---

## Scenario

You have an idea. A real one — the kind that keeps you up at night. You have saved a few months of living expenses, you have a laptop, and you have conviction.

The question is not whether to start. You already decided that.

The question is: **how?**

Over the course of five pivotal decisions, you will navigate the earliest and most brutal phase of startup life — from the first line of code to your first paying customers, your first investor meeting, and ultimately your first real outcome: growth or failure.

Every path through the game is different. Some lead to a Series A. Some lead to a graceful shutdown. Most fall somewhere in between.

---

## Decision Tree Overview

The game is structured around **5 consecutive choices**. Each choice branches the story, leading to a different situation and a different final outcome.

```
Decision 1 — Team
    Solo  ──────────────────────────────────────────────────────┐
    Co-founder ─────────────────────────────────────────────────┤
                                                                │
Decision 2 — Strategy                                           │
    Solo:        Perfect the product / Ship fast                │
    Co-founder:  Interview users first / Start building         │
                                                                │
Decision 3 — First challenge                                    │
    Raise capital / Stay lean                                   │
    Go viral / Fix the product                                  │
    Cold email / Network                                        │
    License deal / Join accelerator                             │
                                                                │
Decision 4 — Key dilemma                                        │
    Operator angel / Passive investor                           │
    Cut price / Build features                                  │
    Freemium / Paid-only                                        │
    Build before closing / Close then build                     │
    Accept exclusivity / Decline                                │
    Sign the IP clause / Renegotiate                            │
    Chase users / Chase features                                │
                                                                │
Decision 5 — Final call                                         │
    The last move that seals your fate.                         │
                                                                ▼
                                                           16 ENDINGS
```

---

## The Endings

There are **16 possible endings** across the game — 9 successes and 7 failures. No two paths lead to exactly the same story.

**Successes include:**
- Closing a Series A at a €5M valuation
- Reaching €30k MRR bootstrapped, with 100% ownership
- Landing a major enterprise client through word-of-mouth alone
- A clean acquisition exit that funds your next venture
- Graduating from an accelerator with a VC term sheet in hand

**Failures include:**
- Running out of runway after a price war with a funded competitor
- Becoming trapped as a single client's private dev agency
- A last-minute pivot that arrives too late to save the company
- Losing the market window while rebuilding the product from scratch

---

## Themes

The game explores decisions that every early-stage founder faces:

- **Solo vs. team** — the trade-off between speed and resilience
- **Build vs. sell** — when to talk to customers vs. when to ship
- **Revenue vs. growth** — profitability vs. scale
- **Control vs. capital** — equity dilution and investor dynamics
- **Timing** — when to act and when to wait

---

## Technical Overview

| Element | Detail |
|---|---|
| Language | TypeScript |
| Framework | Vite (vanilla) |
| Structure | Single page — `index.html` + `src/main.ts` |
| Story engine | Plain object graph — 47 nodes, 5 decision levels |
| Endings | 16 shared ending nodes (9 success / 7 failure) |
| Animations | CSS keyframes — fade/slide transitions, success glow, failure shake |

The entire game logic lives in a single `story` object. Each node contains a text and up to two choices. The `render()` function reads the current node and updates the DOM accordingly, with CSS animations triggered on every transition.

---

## How to Run

```bash
cd game
npm install
npm run dev
```

Open `http://localhost:5174` in your browser.
