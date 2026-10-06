import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  ArrowUpRight,
  BadgePercent,
  Banknote,
  Check,
  CircleDollarSign,
  CreditCard,
  Gift,
  Menu,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Wallet,
  X,
  Zap,
} from "lucide-react";
import "./styles.css";

const features = [
  [
    "Smart discovery",
    Search,
    "DISCOVER",
    "Find participating businesses around you and discover better places to spend.",
    "More choice, less searching.",
  ],
  [
    "Cashback rewards",
    BadgePercent,
    "EARN",
    "See eligible cashback before you pay, then watch the reward land in Payzo.",
    "Rewards made visible.",
  ],
  [
    "Your way to pay",
    CreditCard,
    "PAY",
    "Continue to your preferred payment gateway and complete payment normally.",
    "No new payment habit.",
  ],
  [
    "Clear value",
    CircleDollarSign,
    "VALUE",
    "Know what you are getting, why you are getting it and how it adds up.",
    "Simple by design.",
  ],
  [
    "Secure experience",
    ShieldCheck,
    "TRUST",
    "A familiar, straightforward flow designed to keep every step easy to understand.",
    "Confidence at every step.",
  ],
  [
    "Everyday wins",
    Gift,
    "REPEAT",
    "Turn regular purchases into repeatable savings without changing how you shop.",
    "Small wins add up.",
  ],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [toast, setToast] = useState("");

  const goToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2200);
  };

  return (
    <>
      {/* =========================
          HEADER
      ========================== */}
      <header>
        <div className="nav">
          <button
            className="brand"
            onClick={() => goToSection("top")}
            aria-label="Go to top"
          >
            <i>P</i>
            payzo
          </button>

          <nav className={menuOpen ? "open" : ""}>
            <button onClick={() => goToSection("how")}>
              How it works
            </button>

            <button onClick={() => goToSection("features")}>
              Features
            </button>

            <button onClick={() => goToSection("benefits")}>
              Benefits
            </button>

            <button
              onClick={() => showToast("Get Payzo link coming soon.")}
            >
              Get Payzo ↗
            </button>
          </nav>

          <button
            className="cta"
            onClick={() => showToast("Get Payzo link coming soon.")}
          >
            Get Payzo ↗
          </button>

          <button
            className="menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main id="top">
        {/* =========================
            HERO
        ========================== */}
        <section className="hero">
          <div>
            <small className="ey">
              ● THE SMARTER WAY TO SPEND
            </small>

            <h1>
              Make your money go{" "}
              <em>a little further.</em>
            </h1>

            <p>
              Discover participating businesses, pay the way you already do,
              and get rewarded with cashback through Payzo.
            </p>

            <div className="actions">
              <button
                className="primary"
                onClick={() => goToSection("how")}
              >
                See how Payzo works
                <ArrowRight size={17} />
              </button>

              <button
                className="secondary"
                onClick={() =>
                  showToast(
                    "Demo preview — real app screens can be added here."
                  )
                }
              >
                <Play size={15} />
                Watch the flow
              </button>
            </div>

            <div className="trust">
              <span>
                <ShieldCheck />
                Simple
              </span>

              <span>
                <Zap />
                Fast
              </span>

              <span>
                <BadgePercent />
                Rewarding
              </span>
            </div>
          </div>

          {/* Hero Phone */}
          <div className="visual">
            <div className="glow" />

            <div className="phone">
              <div className="time">
                9:41
                <span>● ● ●</span>
              </div>

              <p>
                Good afternoon, <b>Alex</b>
              </p>

              <div className="balance">
                <div>
                  <small>PAYZO REWARDS</small>
                  <strong>₹ 1,280.40</strong>
                </div>

                <CircleDollarSign />
              </div>

              <label>Discover near you</label>

              {[
                [
                  "BT",
                  "Bean Theory",
                  "2.4 km · Coffee",
                  "8%",
                ],
                [
                  "FM",
                  "Fresh Market",
                  "1.1 km · Groceries",
                  "5%",
                ],
              ].map(
                ([logo, merchantName, distance, cashback]) => (
                  <div
                    className="merchant"
                    key={merchantName}
                  >
                    <i>{logo}</i>

                    <div>
                      <b>{merchantName}</b>
                      <small>{distance}</small>
                    </div>

                    <strong>
                      {cashback}
                      <small>cashback</small>
                    </strong>
                  </div>
                )
              )}

              <div className="pnav">
                ⌂　⌕　<b>P</b>　◷　◎
              </div>
            </div>

            <div className="float">
              <BadgePercent />

              <b>
                ₹43.20
                <small>cashback earned</small>
              </b>
            </div>
          </div>
        </section>

        {/* =========================
            TICKER
        ========================== */}
        <div className="ticker">
          ONE APP　•　DISCOVER　•　PAY　•　EARN　•　REPEAT
        </div>

        {/* =========================
            HOW IT WORKS
        ========================== */}
        <section className="section" id="how">
          <div className="head">
            <div>
              <small className="ey">
                HOW IT WORKS
              </small>

              <h2>
                Four steps.{" "}
                <em>One better</em> way to pay.
              </h2>
            </div>

            <p>
              Payzo fits into your existing payment habit. The
              difference is what happens around the payment.
            </p>
          </div>

          <div className="steps">
            {[
              [
                "01",
                "Discover",
                Search,
                "Find a participating business in the Payzo app.",
              ],
              [
                "02",
                "Choose",
                Sparkles,
                "Pick an offer and see your potential cashback.",
              ],
              [
                "03",
                "Pay",
                Wallet,
                "Tap through to your preferred payment gateway.",
              ],
              [
                "04",
                "Get rewarded",
                Gift,
                "Complete payment and receive your Payzo reward.",
              ],
            ].map(
              ([number, title, Icon, description]) => (
                <article key={number}>
                  <small>{number}</small>

                  <i>
                    <Icon />
                  </i>

                  <h3>{title}</h3>

                  <p>{description}</p>

                  <ArrowUpRight />
                </article>
              )
            )}
          </div>
        </section>

        {/* =========================
            FEATURES
        ========================== */}
        <section className="dark" id="features">
          <div className="head">
            <div>
              <small className="ey">
                THE PAYZO EXPERIENCE
              </small>

              <h2>
                Built around{" "}
                <em>real spending.</em>
              </h2>
            </div>

            <p>
              Six simple ideas designed to make everyday money
              decisions clearer and more rewarding.
            </p>
          </div>

          <div className="features">
            {/* Feature Navigation */}
            <div>
              {features.map(
                (
                  [
                    title,
                    Icon,
                    eyebrow,
                    description,
                    stat,
                  ],
                  index
                ) => (
                  <button
                    key={title}
                    className={
                      activeFeature === index
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setActiveFeature(index)
                    }
                  >
                    <small>
                      0{index + 1}
                    </small>

                    <i>
                      <Icon />
                    </i>

                    <span>
                      <em>{eyebrow}</em>
                      <b>{title}</b>
                    </span>

                    <ArrowRight />
                  </button>
                )
              )}
            </div>

            {/* Feature Preview */}
            <div className="stage">
              <small>
                PAYZO /{" "}
                {features[activeFeature][2]}
              </small>

              <div className="demo">
                <b>payzo</b>

                <div>
                  <small>
                    {features[activeFeature][2]}
                  </small>

                  <h3>
                    {features[activeFeature][0]}
                  </h3>

                  <p>
                    {features[activeFeature][3]}
                  </p>
                </div>

                <strong>
                  {activeFeature === 1
                    ? "8%"
                    : activeFeature === 3
                    ? "₹540"
                    : "P"}
                </strong>

                <footer>
                  {features[activeFeature][4]}

                  <span>
                    0{activeFeature + 1} / 06
                  </span>
                </footer>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            PAYMENT FLOW
        ========================== */}
        <section className="payment">
          <div>
            <small className="ey">
              A FAMILIAR PAYMENT FLOW
            </small>

            <h2>
              No new wallet.
              <br />
              <em>No complicated steps.</em>
            </h2>

            <p>
              Payzo helps you discover the right place to spend,
              then gets out of the way. You complete payment
              through the gateway you already trust.
            </p>

            <div className="checks">
              <span>
                <Check />
                Choose a participating business
              </span>

              <span>
                <Check />
                See cashback before paying
              </span>

              <span>
                <Check />
                Continue to your preferred gateway
              </span>

              <span>
                <Check />
                Get rewarded after payment
              </span>
            </div>
          </div>

          {/* Payment Card */}
          <div className="paycard">
            <small>
              PAYZO CHECKOUT　✓
            </small>

            <div className="paymerchant">
              <i>BT</i>

              <span>
                <b>Bean Theory</b>
                <small>
                  Today · 2:42 PM
                </small>
              </span>

              <strong>₹540</strong>
            </div>

            <div className="cash">
              Cashback
              <b>+ ₹43.20</b>
            </div>

            <p>
              Preferred payment
              <b>GPay · UPI</b>
            </p>

            <button
              onClick={() =>
                showToast(
                  "Payment demo — connect your real gateway here."
                )
              }
            >
              Continue to payment
              <ArrowRight size={16} />
            </button>

            <small>
              Protected payment experience
            </small>
          </div>
        </section>

        {/* =========================
            BENEFITS
        ========================== */}
        <section
          className="section"
          id="benefits"
        >
          <div className="center">
            <small className="ey">
              WHY PAYZO
            </small>

            <h2>
              Small rewards.{" "}
              <em>Real difference.</em>
            </h2>

            <p>
              Payzo is designed for purchases you already make
              — without making everyday spending complicated.
            </p>
          </div>

          <div className="benefits">
            {[
              [
                Banknote,
                "Spend smarter",
                "Discover businesses where everyday spending can go further.",
              ],
              [
                BadgePercent,
                "Keep more",
                "See your cashback opportunity before you commit.",
              ],
              [
                Wallet,
                "Pay your way",
                "Use the payment gateway you already know and trust.",
              ],
              [
                Sparkles,
                "Discover more",
                "Find new places, offers and everyday wins around you.",
              ],
            ].map(
              ([Icon, title, description]) => (
                <article key={title}>
                  <i>
                    <Icon />
                  </i>

                  <h3>{title}</h3>

                  <p>{description}</p>

                  <ArrowUpRight />
                </article>
              )
            )}
          </div>
        </section>

        {/* =========================
            FINAL CTA
        ========================== */}
        <section className="final">
          <small>READY WHEN YOU ARE</small>

          <h2>
            Why just spend
            <br />
            when you can <em>earn?</em>
          </h2>

          <p>
            Discover. Pay. Get rewarded. That's Payzo.
          </p>

          <button
            onClick={() =>
              showToast("Get Payzo link coming soon.")
            }
          >
            Get started with Payzo
            <ArrowRight />
          </button>
        </section>
      </main>

      {/* =========================
          FOOTER
      ========================== */}
      <footer>
        <b>
          <i>P</i> payzo
        </b>

        <span>
          Spend better. Get rewarded.
        </span>

        <nav>
          <button onClick={() => goToSection("how")}>
            How it works
          </button>

          <button
            onClick={() => goToSection("features")}
          >
            Features
          </button>

          <button
            onClick={() => goToSection("benefits")}
          >
            Benefits
          </button>
        </nav>

        <small>
          © 2026 Payzo. Demo website concept.
        </small>
      </footer>

      {/* =========================
          TOAST
      ========================== */}
      {toast && (
        <div className="toast">
          <Check />
          {toast}
        </div>
      )}
    </>
  );
}

createRoot(
  document.getElementById("root")
).render(<App />);