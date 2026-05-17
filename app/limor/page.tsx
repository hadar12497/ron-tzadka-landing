import type { Metadata } from "next";
import {
  ArrowLeft,
  BadgeCheck,
  Check,
  CheckCircle2,
  Heart,
  HeartPulse,
  MessageCircle,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "לימור בנימין | מאמנת כושר",
  description: "דף נחיתה ללימור בנימין, מאמנת כושר, עם דגש על כוח, ביטחון, טכניקה נכונה ודימוי גוף חיובי.",
};

const videoEmbedUrl = process.env.NEXT_PUBLIC_LIMOR_VIDEO_URL;

const heroProof = [
  { label: "מאמנת כושר מוסמכת", icon: BadgeCheck },
  { label: "אימונים דינמיים וכיפיים", icon: Zap },
  { label: "כוח, ביטחון ודימוי גוף חיובי", icon: Heart },
];

const painPoints = [
  "את רוצה להתחזק, אבל לא להתחיל תהליך שמרגיש קשוח, שיפוטי או לא נעים.",
  "את יודעת שאימון יכול לעשות טוב לגוף ולביטחון, אבל קשה לדעת מאיפה להתחיל נכון.",
  "את מחפשת מסגרת שמלמדת טכניקה, נותנת קצב, ומשאירה תחושה טובה אחרי האימון.",
  "את רוצה להתקדם בלי להשוות את עצמך לאחרות ובלי לחץ מיותר סביב הגוף.",
];

const commonBlocks = [
  {
    title: "מתחילים מהר מדי",
    text: "קופצים לעומס גבוה, ואז הגוף מתעייף והמוטיבציה יורדת.",
  },
  {
    title: "אין ביטחון בטכניקה",
    text: "כשלא בטוחים איך לבצע תרגיל, קשה ליהנות מהאימון ולהתקדם לאורך זמן.",
  },
  {
    title: "האימון מרגיש כמו מטלה",
    text: "כשהמסגרת לא כיפית ולא מותאמת, קל לוותר גם אם המטרה חשובה.",
  },
];

const processSteps = [
  {
    icon: MessageCircle,
    title: "שיחת התאמה",
    text: "מבינים מטרה, ניסיון קודם ומה חשוב לך להרגיש באימון.",
  },
  {
    icon: ShieldCheck,
    title: "טכניקה נכונה",
    text: "לומדים לבצע תנועות בביטחון, עם דגש על קצב שמתאים לרמה שלך.",
  },
  {
    icon: HeartPulse,
    title: "אימון קצבי ודינמי",
    text: "אימונים שמחברים כוח, חיטוב, אנרגיה ותחושת מסוגלות.",
  },
  {
    icon: Trophy,
    title: "התקדמות שמרגישים",
    text: "בונים כוח, ביטחון והתמדה דרך צעדים קטנים וברורים.",
  },
];

const includes = [
  "אימוני כוח וחיטוב בקצב מותאם",
  "דגש על טכניקה נכונה ובטוחה",
  "אווירה מעודדת ולא שיפוטית",
  "אימון דינמי, קצבי וכיפי",
  "חיזוק ביטחון עצמי ודימוי גוף חיובי",
  "בדיקת התאמה לפני התחלה",
];

const fitFor = [
  "נערות או נשים שרוצות להתחזק במסגרת נעימה",
  "מי שרוצה ללמוד טכניקה נכונה מהבסיס",
  "מי שמחפשת אימון כיפי, קצבי ומעודד",
  "מי שרוצה להרגיש יותר ביטחון בגוף שלה",
];

const notFor = [
  "מי שמחפשת פתרונות קיצוניים ומהירים",
  "מי שלא מוכנה להגיע ולהיות חלק מהמסגרת",
  "מי שמעדיפה אימון בלי הדרכה או תיקון טכניקה",
];

const testimonials = [
  {
    name: "ביטחון באימון",
    text: "מסגרת שמלמדת איך להתאמן נכון, להרגיש בטוחה בתנועה, ולהיכנס לאימון בלי פחד לטעות.",
  },
  {
    name: "אימון שכיף להגיע אליו",
    text: "הדגש הוא לא רק על תוצאה, אלא על חוויה טובה שגורמת לרצות להמשיך.",
  },
  {
    name: "כוח מבפנים",
    text: "תהליך שמתייחס גם לגוף וגם לתחושת המסוגלות, עם דגש על דימוי גוף חיובי.",
  },
];

const faqs = [
  {
    question: "האם זה מתאים למתחילות?",
    answer: "כן. מתחילים מבדיקת התאמה ומתקדמים בקצב שמתאים לרמה ולביטחון שלך.",
  },
  {
    question: "מה הדגש באימונים?",
    answer: "כוח, חיטוב, טכניקה נכונה, תנועה בטוחה, אווירה טובה ובניית ביטחון עצמי.",
  },
  {
    question: "זה מתאים לנערות?",
    answer: "לפי מידע גלוי שמצאתי, ללימור יש פעילות אימוני כוח לנערות בגילאי 12-15. בדף עצמו אפשר להתאים את הניסוח לקהל המדויק שהיא רוצה.",
  },
  {
    question: "צריך ניסיון קודם?",
    answer: "לא בהכרח. המטרה היא לבנות בסיס נכון ולהתקדם בהדרגה.",
  },
];

function LimorVideo() {
  return (
    <div className="limor-video" aria-label="סרטון היכרות">
      <div className="limor-video-strip">
        <Play size={18} fill="currentColor" aria-hidden="true" />
        הצצה לאימון עם לימור
      </div>
      <div className="limor-video-frame">
        {videoEmbedUrl ? (
          <iframe
            src={videoEmbedUrl}
            title="סרטון היכרות לימור בנימין"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="limor-video-placeholder">
            <div className="limor-play" aria-hidden="true">
              <Play fill="currentColor" size={34} />
            </div>
            <strong>הכירי את לימור ואת האימון</strong>
            <span>סרטון קצר שמראה את האווירה, הקצב, והדרך שבה בונים כוח וביטחון בצורה נעימה.</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function LimorPage() {
  return (
    <main className="limor-page">
      <section className="limor-hero" id="top">
        <nav className="limor-nav" aria-label="ניווט ראשי">
          <a className="limor-brand" href="#top">
            <Sparkles size={19} aria-hidden="true" />
            <span>לימור בנימין</span>
          </a>
          <div className="limor-nav-links">
            <a href="#process">התהליך</a>
            <a href="#fit">למי זה מתאים</a>
            <a href="#faq">שאלות</a>
          </div>
          <a className="limor-nav-cta" href="#contact">
            בדיקת התאמה
            <ArrowLeft size={16} aria-hidden="true" />
          </a>
        </nav>

        <div className="limor-hero-inner">
          <Reveal className="limor-pill">
            <Heart size={16} aria-hidden="true" />
            כוח מתחיל מבפנים
          </Reveal>
          <Reveal delay={0.08}>
            <h1>להתחזק, להתחטב ולהרגיש טוב בגוף שלך</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="limor-subtitle">
              אימוני כוח וחיטוב באווירה מקצועית, קצבית ומעצימה, עם דגש על טכניקה נכונה, ביטחון עצמי ודימוי גוף חיובי.
            </p>
          </Reveal>
          <Reveal className="limor-hero-actions" delay={0.2}>
            <a className="limor-hero-main-cta" href="#contact">
              אני רוצה שיחזרו אליי
              <ArrowLeft size={18} aria-hidden="true" />
            </a>
            <a className="limor-hero-secondary" href="#process">
              לראות איך זה עובד
            </a>
          </Reveal>
          <Reveal delay={0.24}>
            <LimorVideo />
          </Reveal>
          <Reveal className="limor-proof" delay={0.3}>
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

      <section className="limor-contact-section" id="contact">
        <Reveal className="limor-contact-card">
          <span className="limor-label dark">שיחת התאמה</span>
          <h2>רוצה לבדוק אם האימונים מתאימים לך?</h2>
          <p>השאירי פרטים ונחזור אלייך לשיחה קצרה. נבין מה המטרה, מה הרמה הנוכחית, ואיך נכון להתחיל.</p>
          <ContactForm
            source="לימור בנימין"
            privacyText="קראתי ואני מאשר/ת שמותר ללימור או לצוות לחזור אליי לגבי שיחת התאמה."
            goalPlaceholder="לדוגמה: להתחזק, להתחטב, ללמוד טכניקה או להרגיש יותר ביטחון בגוף."
            submitLabel="שליחת פרטים"
            idleMessage="הפרטים נשלחים לבדיקה ראשונית בלבד. אין התחייבות להתחיל תהליך."
          />
        </Reveal>
      </section>

      <section className="limor-empathy-section">
        <Reveal className="limor-copy">
          <span className="limor-label">הבעיה היא לא את</span>
          <h2>אימון טוב לא אמור להרגיש כמו עונש.</h2>
          <p>
            הרבה נשים ונערות רוצות להתחזק, אבל פוגשות תוכניות קשוחות מדי, שפה שיפוטית מדי או אימונים שלא מסבירים איך
            לזוז נכון. כאן המטרה היא אחרת: לבנות כוח וביטחון בצורה נעימה ומקצועית.
          </p>
        </Reveal>
        <div className="limor-point-list">
          {painPoints.map((item, index) => (
            <Reveal className="limor-point" delay={index * 0.06} key={item}>
              <Check size={18} aria-hidden="true" />
              <span>{item}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="limor-light-section">
        <Reveal className="limor-copy center">
          <span className="limor-label dark">למה זה נתקע?</span>
          <h2>כי לא מספיק לדעת שצריך להתאמן. צריך מסגרת שכיף לחזור אליה.</h2>
        </Reveal>
        <div className="limor-card-grid">
          {commonBlocks.map((item, index) => (
            <Reveal className="limor-card" delay={index * 0.08} key={item.title}>
              <span className="limor-card-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="limor-process-section" id="process">
        <Reveal className="limor-copy center">
          <span className="limor-label">איך זה עובד?</span>
          <h2>תהליך שמחבר טכניקה, קצב וביטחון.</h2>
        </Reveal>
        <div className="limor-process-grid">
          {processSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal className="limor-process-card" delay={index * 0.08} key={item.title}>
                <span>{index + 1}</span>
                <Icon size={25} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="limor-included-section">
        <Reveal className="limor-copy">
          <span className="limor-label">מה מקבלים</span>
          <h2>אימון שמרגיש מקצועי, אישי וכיפי, לא עוד משימה לסמן עליה וי.</h2>
          <p>הדגש הוא על חוויה שמחזיקה לאורך זמן: תנועה נכונה, כוח, חיטוב, ביטחון ואווירה שגורמת לרצות להגיע.</p>
        </Reveal>
        <Reveal className="limor-included-list" delay={0.12}>
          {includes.map((item) => (
            <div key={item}>
              <Sparkles size={18} aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="limor-fit-section" id="fit">
        <Reveal className="limor-copy center">
          <span className="limor-label dark">למי זה מתאים?</span>
          <h2>כדי שתהליך יצליח, הוא צריך להתאים לאופי ולמטרה שלך.</h2>
        </Reveal>
        <div className="limor-fit-grid">
          <Reveal className="limor-fit-card good">
            <h3>מתאים במיוחד ל...</h3>
            {fitFor.map((item) => (
              <div key={item}>
                <Check size={18} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </Reveal>
          <Reveal className="limor-fit-card bad" delay={0.08}>
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

      <section className="limor-testimonials-section">
        <Reveal className="limor-copy center">
          <span className="limor-label">התחושה אחרי שמתחילים</span>
          <h2>לא רק להתחטב. להרגיש יותר חזקה, בטוחה ומסוגלת.</h2>
        </Reveal>
        <div className="limor-testimonial-grid">
          {testimonials.map((item, index) => (
            <Reveal className="limor-testimonial" delay={index * 0.08} key={item.name}>
              <div className="limor-stars" aria-label="5 כוכבים">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={16} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <p>{item.text}</p>
              <strong>{item.name}</strong>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="limor-faq-section" id="faq">
        <Reveal className="limor-copy center">
          <span className="limor-label dark">שאלות נפוצות</span>
          <h2>מה חשוב לדעת לפני שמשאירות פרטים?</h2>
        </Reveal>
        <div className="limor-faq-list">
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

      <section className="limor-final">
        <Reveal>
          <Users size={34} aria-hidden="true" />
          <h2>אם את רוצה להתחזק במקום שמרגיש מקצועי ונעים, מתחילים בשיחת התאמה.</h2>
          <a className="limor-final-button" href="#contact">
            אני רוצה שיחזרו אליי
            <ArrowLeft size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </section>

      <a className="limor-floating-cta" href="#contact">
        בדיקת התאמה
        <ArrowLeft size={16} aria-hidden="true" />
      </a>
    </main>
  );
}
