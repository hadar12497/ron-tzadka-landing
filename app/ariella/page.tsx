import type { Metadata } from "next";
import {
  ArrowLeft,
  BadgeCheck,
  Check,
  CheckCircle2,
  Dumbbell,
  HeartPulse,
  MapPin,
  MessageCircle,
  Play,
  Sparkles,
  Star,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Ariella Berkus | אימונים ותזונה לנשים בירושלים",
  description:
    "דף נחיתה לאריאלה ברקוס: מאמנת נשים בירושלים שמלמדת להתאמן לבד בחדר כושר, עם אימונים ותזונה בלי קיצוניות.",
};

const videoEmbedUrl = process.env.NEXT_PUBLIC_ARIELLA_VIDEO_URL;

const heroProof = [
  { label: "מאמנת נשים", icon: BadgeCheck },
  { label: "ירושלים | 1:1 ותוכניות", icon: MapPin },
  { label: "אימונים + תזונה בלי קיצוניות", icon: Zap },
];

const painPoints = [
  "את נכנסת לחדר כושר, מסתכלת על המכשירים, ולא באמת יודעת מאיפה להתחיל.",
  "את לא רוצה להיות תלויה במאמן כל החיים. את רוצה להבין מה עושים, למה עושים ואיך מתקדמים.",
  "נמאס לך מתפריטים שחונקים אותך, אבל את כן רוצה סדר תזונתי שיעבוד גם בחיים האמיתיים.",
  "את רוצה להתחזק, להרגיש ביטחון בגוף שלך, ולהפסיק לנחש בכל אימון מחדש.",
];

const commonBlocks = [
  {
    title: "אין תוכנית ברורה",
    text: "כשכל אימון נראה אחרת ואין מעקב, קשה לדעת אם את באמת מתקדמת או רק מזיעה.",
  },
  {
    title: "פחד ממכשירים ומשקלים",
    text: "הרבה נשים נמנעות מאימוני כוח כי אף אחת לא לימדה אותן איך לעבוד נכון ובביטחון.",
  },
  {
    title: "תזונה קיצונית מדי",
    text: "אם התפריט מרגיש כמו עונש, הוא בדרך כלל לא יחזיק. צריך שיטה ברורה שאפשר לחיות איתה.",
  },
];

const processSteps = [
  {
    icon: MessageCircle,
    title: "ממפות את המטרה",
    text: "מבינות מה את רוצה לשנות: כוח, חיטוב, ירידה במשקל, ביטחון בחדר כושר או חזרה לשגרה.",
  },
  {
    icon: Dumbbell,
    title: "בונות תוכנית אימון",
    text: "תוכנית ברורה עם תרגילים, סדר אימון, דגשים וטכניקה, כדי שתדעי בדיוק מה לעשות.",
  },
  {
    icon: HeartPulse,
    title: "מסדרות תזונה בלי קיצוניות",
    text: "ליווי תזונתי שפוי שמבוסס על הרגלים, גמישות והבנה, לא על חוקים שמרגישים חונקים.",
  },
  {
    icon: Trophy,
    title: "נהיות עצמאיות",
    text: "המטרה היא שלא תצטרכי לנחש. את לומדת להתאמן לבד, להבין התקדמות ולבנות ביטחון.",
  },
];

const includes = [
  "ליווי 1:1 או תוכנית אישית לפי הצורך",
  "תוכנית אימונים מסודרת לחדר כושר",
  "הסבר על תרגילים, טכניקה וקצב התקדמות",
  "תזונה שמתאימה לחיים שלך בלי קיצוניות",
  "מעקב אחרי התקדמות, עומסים והרגלים",
  "גישה ישירה, פרקטית ומחזקת לנשים",
];

const fitFor = [
  "נשים שרוצות ללמוד להתאמן לבד בחדר כושר",
  "מי שרוצה להתחזק בלי להרגיש אבודה מול המכשירים",
  "מי שמחפשת אימונים ותזונה בלי קיצוניות",
  "מי שנמצאת בירושלים או רוצה תוכנית אישית מסודרת",
];

const notFor = [
  "מי שמחפשת קסמים בלי התמדה",
  "מי שלא רוצה ללמוד ולהבין את הגוף שלה",
  "מי שמעדיפה תפריט קיצוני במקום תהליך שאפשר להחזיק",
];

const proofCards = [
  {
    title: "בלי תלות במאמנים",
    text: "הליווי בנוי כדי שתביני את ההיגיון מאחורי האימון, ולא רק תבצעי הוראות.",
  },
  {
    title: "כוח זה גם לנשים",
    text: "אימוני כוח יכולים להיות מדויקים, נשיים, חזקים ובטוחים. לא צריך לפחד ממשקלים.",
  },
  {
    title: "מגישה של חיים אמיתיים",
    text: "המסר של אריאלה ברור: תזונה לא אמורה לחנוק אותך, ואימון לא אמור להרגיש כמו בלגן.",
  },
];

const faqs = [
  {
    question: "אני מתחילה לגמרי. זה מתאים לי?",
    answer: "כן. הדגש הוא ללמד אותך מה לעשות בחדר כושר בצורה ברורה, הדרגתית ובטוחה.",
  },
  {
    question: "זה רק אימונים או גם תזונה?",
    answer: "הגישה משלבת אימונים ותזונה בלי קיצוניות, כדי שהתהליך יהיה גם יעיל וגם אפשרי ביום-יום.",
  },
  {
    question: "האם חייבים להתאמן בירושלים?",
    answer: "אריאלה פעילה בירושלים, ויש גם אפשרות לתוכניות אישיות. השאירי פרטים ונחזור אלייך עם האפשרויות.",
  },
  {
    question: "מה קורה אחרי שאני משאירה פרטים?",
    answer: "נחזור אלייך, נבין מה את צריכה, ונכוון אותך לליווי או לתוכנית שהכי מתאימים למצב שלך.",
  },
];

function AriellaVideo() {
  return (
    <div className="ariella-video" aria-label="סרטון היכרות">
      <div className="ariella-video-strip">
        <Play size={18} fill="currentColor" aria-hidden="true" />
        מקום לסרטון היכרות / ריל מוביל
      </div>
      <div className="ariella-video-frame">
        {videoEmbedUrl ? (
          <iframe
            src={videoEmbedUrl}
            title="סרטון היכרות אריאלה ברקוס"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="ariella-video-placeholder">
            <div className="ariella-phone" aria-hidden="true">
              <div />
              <span />
              <strong>FIT WITH ARIELLA</strong>
              <p>Gym confidence starts here</p>
            </div>
            <div className="ariella-play" aria-hidden="true">
              <Play fill="currentColor" size={30} />
            </div>
            <strong>כאן ייכנס הסרטון שלה</strong>
            <span>ריל קצר שבו אריאלה מדברת למצלמה או מדגימה אימון ייתן לדף תחושה אמיתית ומיידית.</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AriellaPage() {
  return (
    <main className="ariella-page">
      <section className="ariella-hero" id="top">
        <nav className="ariella-nav" aria-label="ניווט ראשי">
          <a className="ariella-brand" href="#top">
            <Sparkles size={19} aria-hidden="true" />
            <span>Fit With Ariella</span>
          </a>
          <div className="ariella-nav-links">
            <a href="#method">השיטה</a>
            <a href="#fit">למי זה מתאים</a>
            <a href="#faq">שאלות</a>
          </div>
          <a className="ariella-nav-cta" href="#contact">
            להתחיל עכשיו
            <ArrowLeft size={16} aria-hidden="true" />
          </a>
        </nav>

        <div className="ariella-hero-inner">
          <Reveal className="ariella-pill">
            <Dumbbell size={16} aria-hidden="true" />
            מאמנת נשים בירושלים
          </Reveal>
          <Reveal delay={0.08}>
            <h1>להיכנס לחדר כושר ולדעת בדיוק מה לעשות.</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="ariella-subtitle">
              ליווי לנשים שרוצות להתאמן לבד, להתחזק, להבין תזונה בלי קיצוניות, ולהפסיק להיות תלויות במאמנים כדי להרגיש ביטחון.
            </p>
          </Reveal>
          <Reveal className="ariella-hero-actions" delay={0.2}>
            <a className="ariella-hero-main-cta" href="#contact">
              אני רוצה להתחיל
              <ArrowLeft size={18} aria-hidden="true" />
            </a>
            <a className="ariella-hero-secondary" href="#method">
              איך זה עובד
            </a>
          </Reveal>
          <Reveal delay={0.24}>
            <AriellaVideo />
          </Reveal>
          <Reveal className="ariella-proof" delay={0.3}>
            {heroProof.map((item) => {
              const Icon = item.icon;
              return (
                <span key={item.label}>
                  <Icon size={16} aria-hidden="true" />
                  {item.label}
                </span>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section className="ariella-contact-section" id="contact">
        <Reveal className="ariella-contact-card">
          <span className="ariella-label dark">השארת פרטים</span>
          <h2>רוצה להפסיק לנחש בחדר כושר?</h2>
          <p>השאירי פרטים ונחזור אלייך עם האפשרות המתאימה: ליווי 1:1, תוכנית אישית או הכוונה ראשונית.</p>
          <ContactForm
            source="Fit With Ariella - Ariella Berkus"
            privacyText="קראתי ואני מאשר/ת שמותר לאריאלה או לצוות לחזור אליי לגבי ליווי או תוכנית."
            goalLabel="מה היית רוצה לשנות באימון או בתזונה?"
            goalPlaceholder="לדוגמה: להרגיש ביטחון בחדר כושר, לבנות תוכנית אימונים, לשלב תזונה בלי קיצוניות או להתחזק."
            submitLabel="השארת פרטים"
            idleMessage="הפרטים נשלחים לצורך חזרה עם פרטי הליווי והתוכניות."
          />
        </Reveal>
      </section>

      <section className="ariella-empathy-section">
        <Reveal className="ariella-copy">
          <h2>את לא צריכה עוד מוטיבציה. את צריכה לדעת מה לעשות.</h2>
          <p>
            מהביו והתוכן של אריאלה עולה מסר מאוד ברור: נשים יכולות ללמוד להתאמן לבד, בלי פחד ממכשירים, בלי תלות במאמנים ובלי תזונה קיצונית שמחזיקה שבועיים.
          </p>
        </Reveal>
        <div className="ariella-point-list">
          {painPoints.map((item, index) => (
            <Reveal className="ariella-point" delay={index * 0.06} key={item}>
              <Check size={18} aria-hidden="true" />
              <span>{item}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="ariella-light-section">
        <Reveal className="ariella-copy center">
          <span className="ariella-label dark">איפה זה נתקע?</span>
          <h2>רוב הנשים לא נכשלות. פשוט אף אחת לא נתנה להן שיטה ברורה.</h2>
        </Reveal>
        <div className="ariella-card-grid">
          {commonBlocks.map((item, index) => (
            <Reveal className="ariella-card" delay={index * 0.08} key={item.title}>
              <span className="ariella-card-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="ariella-process-section" id="method">
        <Reveal className="ariella-copy center">
          <span className="ariella-label">השיטה</span>
          <h2>ליווי שמלמד אותך להתאמן, לא רק “לעשות אימון”.</h2>
        </Reveal>
        <div className="ariella-process-grid">
          {processSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal className="ariella-process-card" delay={index * 0.08} key={item.title}>
                <span>{index + 1}</span>
                <Icon size={25} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="ariella-included-section">
        <Reveal className="ariella-copy">
          <span className="ariella-label">מה מקבלים</span>
          <h2>תוכנית פרקטית שמכניסה סדר לאימון, לתזונה ולביטחון שלך.</h2>
          <p>הדף בנוי סביב ההבטחה הכי חזקה של אריאלה: ללמד אותך להיות עצמאית יותר בחדר כושר, עם כלים שתביני באמת.</p>
        </Reveal>
        <Reveal className="ariella-included-list" delay={0.12}>
          {includes.map((item) => (
            <div key={item}>
              <Sparkles size={18} aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="ariella-fit-section" id="fit">
        <Reveal className="ariella-copy center">
          <span className="ariella-label dark">למי זה מתאים?</span>
          <h2>אם את רוצה להרגיש חזקה, ברורה ועצמאית יותר באימונים, זה הכיוון.</h2>
        </Reveal>
        <div className="ariella-fit-grid">
          <Reveal className="ariella-fit-card good">
            <h3>מתאים במיוחד ל...</h3>
            {fitFor.map((item) => (
              <div key={item}>
                <Check size={18} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </Reveal>
          <Reveal className="ariella-fit-card bad" delay={0.08}>
            <h3>פחות מתאים ל...</h3>
            {notFor.map((item) => (
              <div key={item}>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="ariella-proof-section">
        <Reveal className="ariella-copy center">
          <span className="ariella-label">המסר</span>
          <h2>כושר לא אמור להשאיר אותך תלויה, מבולבלת או רעבה.</h2>
        </Reveal>
        <div className="ariella-testimonial-grid">
          {proofCards.map((item, index) => (
            <Reveal className="ariella-testimonial" delay={index * 0.08} key={item.title}>
              <div className="ariella-stars" aria-label="דגש מרכזי">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={16} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <p>{item.text}</p>
              <strong>{item.title}</strong>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="ariella-faq-section" id="faq">
        <Reveal className="ariella-copy center">
          <span className="ariella-label dark">שאלות נפוצות</span>
          <h2>מה חשוב לדעת לפני שמשאירות פרטים?</h2>
        </Reveal>
        <div className="ariella-faq-list">
          {faqs.map((item) => (
            <Reveal key={item.question}>
              <details>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="ariella-final">
        <Reveal>
          <Users size={34} aria-hidden="true" />
          <h2>אם את רוצה להיכנס לחדר כושר עם תוכנית, ביטחון וכיוון ברור, השאירי פרטים.</h2>
          <a className="ariella-final-button" href="#contact">
            השארת פרטים
            <ArrowLeft size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </section>

      <a className="ariella-floating-cta" href="#contact">
        להשארת פרטים
        <ArrowLeft size={16} aria-hidden="true" />
      </a>
    </main>
  );
}
