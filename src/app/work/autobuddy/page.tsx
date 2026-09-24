import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { AutoBuddyGallery } from "./AutoBuddyGallery";
import styles from "./page.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "AutoBuddy product and UX case study",
  description:
    "How Sammy Mati explored a connected digital workspace for independent auto garages through product discovery, UX research, prototyping, and usability testing.",
  alternates: {
    canonical: `${site.url}/work/autobuddy`,
  },
};

const evidence = [
  ["6", "Garage professionals interviewed"],
  ["Survey", "Garage operations and workflows"],
  ["Competitive analysis", "Existing garage-management solutions"],
  ["Field insights", "Customers, mechanics, and owners"],
];

const productProcess = [
  "Research",
  "Insights",
  "Opportunities",
  "Information architecture",
  "Prototype",
  "Test",
  "Iterate",
];

const workflows = [
  {
    number: "01",
    title: "Repair Orders",
    copy: "Follow jobs from customer and vehicle intake through completion.",
  },
  {
    number: "02",
    title: "Inventory",
    copy: "Keep parts, stock levels, and usage connected to the work.",
  },
  {
    number: "03",
    title: "Popular Services",
    copy: "Reuse service packages instead of rebuilding common work each time.",
  },
  {
    number: "04",
    title: "Business Overview",
    copy: "Create visibility across the operation from one workspace.",
  },
];

const taskTimes = [
  ["Create account", "98s"],
  ["Create repair order", "115s"],
  ["Create counter sale order", "102s"],
  ["Book new inventory", "75s"],
];

const contributions = [
  "Product discovery",
  "User research",
  "Problem definition",
  "Competitive analysis",
  "Information architecture",
  "UX/UI design",
  "Prototyping",
  "Usability testing",
  "Product iteration",
];

const lessons = [
  {
    title: "Start with workflow, not screen",
    copy: "Understanding how the garage operated made it possible to design the relationships between tasks before deciding how any single screen should work.",
  },
  {
    title: "Test product, not assumptions",
    copy: "Task completion showed that the core flows worked, while observation revealed where the product model still needed to change.",
  },
  {
    title: "Good products reduce repeated decisions",
    copy: "Popular Services turned recurring work into reusable setup, reducing the need to reconstruct pricing, taxes, inventory, and labor each time.",
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

export default function AutoBuddyPage() {
  return (
    <main id="main" className={styles.caseStudy}>
      <header className={`site-shell ${styles.hero}`}>
        <Link className={`text-link ${styles.backLink}`} href="/work">
          ← All work
        </Link>
        <div className={styles.heroLead}>
          <div>
            <p className={`eyebrow ${styles.heroEyebrow}`}>
              AutoBuddy · Product / UX case study
            </p>
            <h1 className={`display ${styles.heroTitle}`}>
              Turning an auto-garage&apos;s everyday operations into one product.
            </h1>
          </div>
          <figure className={styles.heroVisual}>
            <Image
              alt="Three AutoBuddy mobile product concepts showing onboarding, the garage dashboard, and vehicle service history"
              height={1896}
              priority
              sizes="(min-width: 900px) 55vw, calc(100vw - 2rem)"
              src={`${basePath}/work/autobuddy/autobuddy-mobile-concept.webp`}
              width={3147}
            />
          </figure>
        </div>
        <div className={styles.heroCopy}>
          <p>
            I explored how independent auto garages could move from fragmented,
            manual workflows to a more connected digital workspace for managing
            customers, vehicles, repairs, inventory and payments.
          </p>
          <p>
            I owned the product exploration from research and problem definition
            through UX, prototyping and usability testing.
          </p>
        </div>
        <dl className={styles.metadataStrip}>
          <div>
            <dt>Shape</dt>
            <dd>0 → 1 product concept</dd>
          </div>
          <div>
            <dt>Practice</dt>
            <dd>Product discovery, UX research, prototyping</dd>
          </div>
          <div>
            <dt>Core question</dt>
            <dd>How might we make running an auto garage simpler?</dd>
          </div>
        </dl>
      </header>

      <section className={`site-shell ${styles.section}`}>
        <SectionHeader
          eyebrow="01 · Understanding the work"
          title="Understanding what actually happens inside a garage."
        />
        <div className={styles.sectionBody}>
          <p className={styles.lead}>
            Before designing, I needed to understand the operation: the people
            doing the work, the workflows they followed, and the tools already in
            use.
          </p>
          <p>
            Interviews, a survey, competitive analysis, and field insights
            revealed a fragmented environment where customers, mechanics, owners,
            and records were often connected through manual or disconnected
            processes.
          </p>
        </div>
        <dl className={styles.evidenceGrid}>
          {evidence.map(([label, copy]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{copy}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={`site-shell ${styles.section}`}>
        <SectionHeader
          eyebrow="02 · From research to product"
          title="Turning messy workflows into a product system."
        />
        <p className={`${styles.lead} ${styles.narrowCopy}`}>
          The research helped identify the core areas that needed to connect,
          rather than treating every garage task as a separate feature.
        </p>
        <ol className={styles.process} aria-label="Product design process">
          {productProcess.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {step}
            </li>
          ))}
        </ol>
        <p className={styles.callout}>
          The goal was not simply to digitize individual tasks. It was to shape a
          connected workspace around garage operations.
        </p>
      </section>

      <section className={`site-shell ${styles.section}`}>
        <SectionHeader
          eyebrow="03 · Designing the experience"
          title="From fragmented workflows to one workspace."
        />
        <p className={`${styles.lead} ${styles.narrowCopy}`}>
          I translated the product system into a mobile-first experience that
          brought the operation&apos;s recurring workflows closer together. The
          idea was to build AutoBuddy as a progressive web app (PWA), allowing
          the same connected workspace to adapt across desktop and mobile.
        </p>
        <div className={styles.workflowGrid}>
          {workflows.map((workflow) => (
            <article key={workflow.title}>
              <span>{workflow.number}</span>
              <h3>{workflow.title}</h3>
              <p>{workflow.copy}</p>
              <small>Design concept explored in the original case study</small>
            </article>
          ))}
        </div>
        <AutoBuddyGallery />
      </section>

      <section className={`site-shell ${styles.section}`}>
        <SectionHeader
          eyebrow="04 · Usability testing"
          title="Testing didn’t just validate the design. It changed it."
        />
        <div className={styles.testIntro}>
          <p className={styles.lead}>
            Three participants who had worked in or owned an auto repair or
            maintenance business in the prior 12 months completed a remote,
            moderated Think Aloud test using Figma Mirror and Lookback.
          </p>
          <p>
            All assigned key tasks were completed. The overall System Usability
            Scale result was described as “good”; no numeric score was reported.
          </p>
        </div>
        <dl className={styles.timeGrid}>
          {taskTimes.map(([task, time]) => (
            <div key={task}>
              <dt>{task}</dt>
              <dd>{time}</dd>
            </div>
          ))}
        </dl>
        <div className={styles.learningChain}>
          <div>
            <span>Observation</span>
            <p>Garages repeat common services.</p>
          </div>
          <div>
            <span>Insight</span>
            <p>Common work should be reusable.</p>
          </div>
          <div>
            <span>Product response</span>
            <p>Popular Services.</p>
          </div>
          <div>
            <span>New flow</span>
            <p>Select service → automatically configure repair order.</p>
          </div>
        </div>
        <div className={styles.iterationCopy}>
          <p>
            Popular Services became the main iteration story. Testing exposed an
            opportunity to preconfigure pricing, taxes, inventory changes and
            charges, and labor charges for repeated work.
          </p>
          <ul>
            <li>Make progress through a task more visible.</li>
            <li>Prevent errors around the floating create-order action.</li>
            <li>Improve access to help and documentation.</li>
          </ul>
        </div>
      </section>

      <section className={`site-shell ${styles.section}`}>
        <SectionHeader eyebrow="05 · My contribution" title="Across the product loop." />
        <div className={styles.contributionGrid}>
          <div>
            <p className={styles.lead}>
              I worked across the lifecycle, connecting research, product
              definition, interaction design, and validation rather than treating
              design as a standalone phase.
            </p>
            <p className={styles.evidenceLoop}>
              Research → Insight → Opportunity → Prototype → Test → Iteration
            </p>
          </div>
          <ul>
            {contributions.map((contribution) => (
              <li key={contribution}>{contribution}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`site-shell ${styles.section}`}>
        <SectionHeader eyebrow="06 · What I learned" title="Three lessons I carried forward." />
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
        <div>
          <p className="eyebrow">Original case study</p>
          <h2 className={`display ${styles.closingTitle}`}>
            Want to explore the original research and design process?
          </h2>
        </div>
        <a
          className="button button-primary"
          href={site.autobuddy}
          target="_blank"
          rel="noreferrer"
        >
          Read the original AutoBuddy case study on Medium ↗
        </a>
      </section>
    </main>
  );
}
