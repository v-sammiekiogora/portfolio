import Image from "next/image";
import Link from "next/link";
import styles from "./WowziCaseStudy.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const scale = [
  ["200K+", "Creators onboarded"],
  ["$6M+", "Earned by African influencers"],
  ["$3M+", "Funding raised"],
  ["Global brands", "Coca-Cola · WPP · Mastercard · Netflix · P&G"],
];

const discoveryProcess = [
  "User interviews",
  "Observation and feedback",
  "Problem identification",
  "Competitive analysis",
  "Opportunity definition",
  "Prioritization",
  "Design and validation",
  "Delivery and iteration",
];

const roleAreas = [
  {
    title: "Product strategy",
    copy: "Vision, roadmap, prioritization, requirements, planning, and stakeholder alignment.",
  },
  {
    title: "Discovery and research",
    copy: "Creator and advertiser interviews, product feedback, market research, and competitive analysis.",
  },
  {
    title: "Product and UX",
    copy: "Journeys, flows, information architecture, design-system direction, and validation.",
  },
  {
    title: "Delivery",
    copy: "Cross-functional planning, engineering collaboration, QA, UAT, release planning, and iteration.",
  },
];

const initiatives = [
  {
    number: "01",
    title: "Product and design-system transformation",
    problem:
      "The product had accumulated inconsistent patterns and repeated design decisions.",
    approach:
      "Research → UX exploration → reusable foundation → engineering collaboration → implementation",
    contribution:
      "Led product direction and worked with UX to establish a coherent foundation across mobile and web.",
  },
  {
    number: "02",
    title: "Creator experience",
    problem:
      "Creators needed clearer ways to discover, understand, and participate in campaigns.",
    approach:
      "Interviews → journey mapping → product prioritization → development → QA and UAT",
    contribution:
      "Owned product direction with UX, Engineering, and QA across the creator experience.",
  },
  {
    number: "03",
    title: "Advertiser experience",
    problem:
      "Brands needed effective workflows for creating and managing creator campaigns.",
    approach:
      "Advertiser research → competitive analysis → workflow mapping → product definition → delivery",
    contribution:
      "Led product development across the advertiser web platform.",
  },
];

const outcomes = [
  "Established a reusable design foundation",
  "Improved consistency across the product",
  "Strengthened product discovery and research practices",
  "Built stronger UX and QA ownership",
  "Supported the move toward internally managed software development",
  "Created clearer collaboration across Product, UX, QA, Engineering, and Data",
];

const lessons = [
  {
    title: "Existing products need a different kind of leadership",
    copy: "The work was not starting from zero. It was understanding what already existed, deciding what needed to change, and creating a path forward without disrupting an established platform.",
  },
  {
    title: "Design systems are product infrastructure",
    copy: "A shared foundation gives Product, UX, Engineering, and QA a common language for building and evolving the experience.",
  },
  {
    title: "Scaling the product means scaling how it is built",
    copy: "Moving toward internal engineering required stronger ownership, communication, process, and collaboration—not only a staffing change.",
  },
];

const creatorScreens = [
  {
    src: "/work/wowzi/creator-verification.png",
    alt: "Wowzi creator app identity-verification flow",
    caption: "Creator verification",
    height: 1315,
  },
  {
    src: "/work/wowzi/creator-socials.png",
    alt: "Wowzi creator app screen for linking social profiles",
    caption: "Social profile setup",
    height: 1314,
  },
  {
    src: "/work/wowzi/creator-jobs.png",
    alt: "Wowzi creator app showing available campaign opportunities",
    caption: "Campaign discovery",
    height: 1314,
  },
];

const advertiserScreens = [
  {
    src: "/work/wowzi/advertiser-campaign-creation.jpg",
    alt: "Wowzi advertiser platform showing creator discovery and selection for a new campaign",
    caption: "Creator discovery and campaign setup",
    width: 1600,
    height: 1194,
  },
  {
    src: "/work/wowzi/advertiser-campaign-reporting.jpg",
    alt: "Wowzi advertiser platform campaign reporting interface",
    caption: "Campaign reporting and creator performance",
    width: 1600,
    height: 1341,
  },
];

function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className={styles.sectionHeader}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`display ${styles.sectionTitle}`}>{title}</h2>
    </div>
  );
}

export function WowziCaseStudy() {
  return (
    <main id="main" className={styles.caseStudy}>
      <header className={`site-shell ${styles.hero}`}>
        <Link className={`text-link ${styles.backLink}`} href="/work">
          ← All work
        </Link>
        <div className={styles.heroKicker}>
          <div className={styles.heroBrand}>
            <Image
              alt=""
              aria-hidden="true"
              height={57}
              priority
              src={`${basePath}/work/wowzi/wowzi-logo.svg`}
              width={59}
            />
            <span>Wowzi</span>
          </div>
          <div className={styles.heroMeta}>
            <p className="eyebrow">Lead Product Manager case study</p>
            <a
              className="text-link"
              href="https://www.wowzi.co/"
              rel="noreferrer"
              target="_blank"
            >
              Visit wowzi.co ↗
            </a>
          </div>
        </div>
        <div className={styles.heroGrid}>
          <h1 className={`display ${styles.heroTitle}`}>
            Evolving creator commerce for scale.
          </h1>
          <div className={styles.heroCopy}>
            <p>
              Wowzi connects African creators and brands at scale. I helped
              evolve the product and how it was built through research,
              strategy, UX leadership, and cross-functional delivery.
            </p>
          </div>
        </div>
        <dl className={styles.metadata}>
          <div>
            <dt>Role</dt>
            <dd>Lead Product Manager</dd>
          </div>
          <div>
            <dt>Product</dt>
            <dd>Creator mobile app + advertiser web platform</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Strategy · Research · UX · Team leadership</dd>
          </div>
        </dl>
      </header>

      <section className={`site-shell ${styles.scaleSection}`}>
        <div className={styles.scaleIntro}>
          <p className="eyebrow">Wowzi at scale</p>
          <p>
            Company-level figures describe the environment I worked within, not
            individual achievements.
          </p>
        </div>
        <dl className={styles.scaleGrid}>
          {scale.map(([value, label]) => (
            <div key={value}>
              <dt>{value}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={`site-shell ${styles.section}`}>
        <SectionHeader
          eyebrow="01 · The challenge"
          title="Evolve the product—and the way it was built."
        />
        <div className={styles.challengeGrid}>
          <article>
            <p className="eyebrow">Product</p>
            <h3>An established experience carrying growing complexity.</h3>
            <ul>
              <li>Inconsistent UI and interaction patterns</li>
              <li>No cohesive design system</li>
              <li>Creator and advertiser journeys needing continued improvement</li>
              <li>Discovery and research needing a stronger role in decisions</li>
            </ul>
          </article>
          <article>
            <p className="eyebrow">Organization</p>
            <h3>A product organization building stronger internal ownership.</h3>
            <ul>
              <li>Development primarily delivered through an offshore consultancy</li>
              <li>A new internal software capability taking shape</li>
              <li>UX and QA needing clearer internal ownership</li>
              <li>Product, Engineering, and Data operating as partner functions</li>
            </ul>
          </article>
        </div>
        <div className={styles.transformation}>
          <span>Established product</span>
          <span>Research + strategy</span>
          <span>Reusable design foundation</span>
          <span>Internally owned delivery</span>
        </div>
      </section>

      <section className={`site-shell ${styles.section}`}>
        <SectionHeader
          eyebrow="02 · My role"
          title="Product direction from discovery through delivery."
        />
        <div className={styles.roleIntro}>
          <p>
            I owned product direction and delivery across the creator mobile
            application and advertiser web platform, initially reporting to the
            CEO and later to the CTO as the organization evolved.
          </p>
          <div>
            <strong>Direct team</strong>
            <span>3 UX Designers · 2 QA Engineers</span>
            <small>
              Engineering and Data were cross-functional partners, not direct
              reports.
            </small>
          </div>
        </div>
        <div className={styles.roleGrid}>
          {roleAreas.map((area) => (
            <article key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`site-shell ${styles.section}`}>
        <SectionHeader
          eyebrow="03 · Understanding the marketplace"
          title="Two sides, one connected product."
        />
        <div className={styles.marketplace}>
          <article>
            <p className="eyebrow">Creators</p>
            <h3>Discover → Apply → Participate → Submit → Earn</h3>
            <p>
              Find relevant opportunities, understand requirements, submit
              content, follow progress, and understand earnings.
            </p>
          </article>
          <div aria-hidden="true">
            <span>Wowzi</span>
            <small>Marketplace</small>
          </div>
          <article>
            <p className="eyebrow">Brands</p>
            <h3>Create → Select → Manage → Review → Measure</h3>
            <p>
              Define campaigns, select creators, manage execution, review
              content, and track performance.
            </p>
          </article>
        </div>
        <div className={styles.productSurfaces}>
          <div className={styles.surfaceHeader}>
            <p className="eyebrow">Creator mobile app</p>
            <h3>From onboarding to finding the next campaign.</h3>
          </div>
          <div className={styles.creatorScreens}>
            {creatorScreens.map((screen) => (
              <figure key={screen.src}>
                <Image
                  alt={screen.alt}
                  height={screen.height}
                  sizes="(min-width: 850px) 24vw, 65vw"
                  src={`${basePath}${screen.src}`}
                  width={650}
                />
                <figcaption>{screen.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className={styles.surfaceHeader}>
            <p className="eyebrow">Advertiser web platform</p>
            <h3>Campaign setup, creator selection, and performance in one view.</h3>
          </div>
          <div className={styles.advertiserScreens}>
            {advertiserScreens.map((screen) => (
              <figure key={screen.src}>
                <Image
                  alt={screen.alt}
                  height={screen.height}
                  sizes="(min-width: 850px) 45vw, calc(100vw - 2rem)"
                  src={`${basePath}${screen.src}`}
                  width={screen.width}
                />
                <figcaption>{screen.caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className={styles.screenNote}>
            Product screens illustrate the creator and advertiser experiences.
            Sample campaign content is shown as interface context, not as a
            claimed outcome.
          </p>
        </div>
      </section>

      <section className={`site-shell ${styles.section}`}>
        <SectionHeader
          eyebrow="04 · Discovery"
          title="Move product conversations from assumptions to evidence."
        />
        <p className={styles.lead}>
          Decisions drew on creator and advertiser interviews, stakeholder
          conversations, usability feedback, competitive research, business
          requirements, and product data.
        </p>
        <ol className={styles.process}>
          {discoveryProcess.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {step}
            </li>
          ))}
        </ol>
        <div className={styles.competitiveLens}>
          <p className="eyebrow">Competitive lens</p>
          <p>
            Creator discovery · Campaign creation · Onboarding · Campaign
            management · Content submission · Payments · Analytics
          </p>
        </div>
      </section>

      <section className={`site-shell ${styles.section}`}>
        <SectionHeader
          eyebrow="05 · Product infrastructure"
          title="A shared foundation for the experience and the team."
        />
        <div className={styles.foundationGrid}>
          <article>
            <span>Before</span>
            <h3>Repeated decisions and inconsistent patterns.</h3>
            <p>
              Components, spacing, visual treatments, states, and interactions
              varied across the product.
            </p>
          </article>
          <article className={styles.foundationCore}>
            <span>Design system</span>
            <h3>Reusable patterns across mobile and web.</h3>
            <p>
              Typography, colour, buttons, forms, cards, navigation, tables,
              modals, states, and responsive behavior.
            </p>
          </article>
          <article>
            <span>Application</span>
            <h3>A common language for delivery.</h3>
            <p>
              Product, UX, Engineering, and QA could reason from the same
              foundation as the experience evolved.
            </p>
          </article>
        </div>
        <div className={styles.operatingModel}>
          <div>
            <span>Before</span>
            <p>Product → Offshore consulting team</p>
          </div>
          <div>
            <span>Transition</span>
            <p>Product + UX + QA ↔ Internal Engineering</p>
          </div>
          <div>
            <span>Evolved model</span>
            <p>Product ↔ Design ↔ Engineering ↔ QA</p>
            <small>Data and analytics supporting decisions</small>
          </div>
        </div>
      </section>

      <section className={`site-shell ${styles.section}`}>
        <SectionHeader
          eyebrow="06 · Key initiatives"
          title="Three connected areas of product leadership."
        />
        <div className={styles.initiativeGrid}>
          {initiatives.map((initiative) => (
            <article key={initiative.title}>
              <span>{initiative.number}</span>
              <h3>{initiative.title}</h3>
              <div>
                <strong>Problem</strong>
                <p>{initiative.problem}</p>
              </div>
              <div>
                <strong>Approach</strong>
                <p>{initiative.approach}</p>
              </div>
              <div>
                <strong>My contribution</strong>
                <p>{initiative.contribution}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`site-shell ${styles.section}`}>
        <SectionHeader
          eyebrow="07 · Impact"
          title="Stronger foundations for product and delivery."
        />
        <ul className={styles.outcomeGrid}>
          {outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
        <p className={styles.impactNote}>
          These are qualitative outcomes. No individual product metric is
          claimed without a verified source.
        </p>
      </section>

      <section className={`site-shell ${styles.section}`}>
        <SectionHeader
          eyebrow="08 · What I learned"
          title="Three lessons I still carry forward."
        />
        <div className={styles.lessonGrid}>
          {lessons.map((lesson, index) => (
            <article key={lesson.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{lesson.title}</h3>
              <p>{lesson.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`site-shell ${styles.closing}`}>
        <p className="eyebrow">Closing reflection</p>
        <blockquote>
          At Wowzi, my role evolved beyond managing a roadmap. I helped shape
          the product, the product team, and the way the organization built
          software.
        </blockquote>
        <Link className="button button-primary" href="/work">
          Back to all work
        </Link>
      </section>
    </main>
  );
}
