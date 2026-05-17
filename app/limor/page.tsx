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
  title: "לימור בנימין | סדנה לירידה במשקל",
  description: "סדנת ירידה במשקל לנשים עם לימור בנימין: תפריטים, מתכונים, קבוצת תמיכה, שקילות, מדידות וליווי אישי.",
};

const videoEmbedUrl = process.env.NEXT_PUBLIC_LIMOR_VIDEO_URL;

const heroProof = [
  { label: "מחזור חדש נפתח בקרוב", icon: BadgeCheck },
  { label: "סדנה פרונטלית לנשים", icon: Zap },
  { label: "לנשים בכל הגילאים", icon: Heart },
];

const painPoints = [
  "את רוצה לרדת במשקל, אבל כבר ניסית דברים בעבר וקשה להאמין שהפעם זה באמת יעבוד.",
  "את לא צריכה עוד הבטחה ריקה. את צריכה ידע ברור, מסגרת, ותוכנית שאפשר להחזיק בחיים האמיתיים.",
  "כשיש תפריטים, מתכונים, מעקב וקבוצת נשים שעוברות את זה איתך, הרבה יותר קל להתמיד.",
  "השינוי לא חייב להיות קיצוני או מפחיד. הוא יכול להתחיל מצעדים פשוטים וברורים.",
];

const commonBlocks = [
  {
    title: "אין מסגרת ברורה",
    text: "כשאין סדר שבועי, תפריט ברור ומעקב, קל לחזור להרגלים הישנים.",
  },
  {
    title: "מסתבכות עם אוכל",
    text: "הרבה נשים יודעות שהן רוצות שינוי, אבל נתקעות במה לאכול, איך לגוון ואיך להתמיד.",
  },
  {
    title: "עושות את זה לבד",
    text: "בלי תמיכה, ליווי ומישהי שמחזיקה איתך את התהליך, הספקות מנצחים מהר מדי.",
  },
];

const processSteps = [
  {
    icon: MessageCircle,
    title: "משאירות פרטים",
    text: "את משאירה פרטים להרשמה, ולימור חוזרת אלייך עם כל הפרטים החשובים על המחזור הקרוב.",
  },
  {
    icon: ShieldCheck,
    title: "מקבלות מסגרת ברורה",
    text: "מפגשים ממוקדים עם ידע מקצועי, תפריטים מותאמים, תחליפים ומתכונים פשוטים.",
  },
  {
    icon: HeartPulse,
    title: "לא עוברות את זה לבד",
    text: "קבוצת תמיכה של נשים, ליווי אישי ומקצועי, ושיח שמחזיק גם כשמגיעים רגעים קשים.",
  },
  {
    icon: Trophy,
    title: "עוקבות אחרי התקדמות",
    text: "שקילות ומדידות עוזרות לראות תנועה אמיתית, לא רק להרגיש שאת מנסה.",
  },
];

const includes = [
  "מפגשים ממוקדים עם ידע מקצועי וחשוב",
  "תפריטים מותאמים עם תחליפים",
  "מתכונים פשוטים וקלים",
  "קבוצת תמיכה של נשים בתהליך דומה",
  "שקילות ומדידות לאורך הסדנה",
  "ליווי אישי ומקצועי של לימור",
];

const fitFor = [
  "נשים בכל גיל שרוצות להתחיל שינוי אמיתי",
  "מי שמרגישה סקפטית אבל רוצה לתת לעצמה הזדמנות",
  "מי שצריכה מסגרת ברורה ולא עוד ניסיון לבד",
  "מי שרוצה תפריטים, מתכונים, תמיכה וליווי אישי",
];

const notFor = [
  "מי שמחפשת פתרון קסם בלי שינוי הרגלים",
  "מי שלא מוכנה להגיע למפגשים ולהיות חלק מהמסגרת",
  "מי שמעדיפה לעשות הכל לבד בלי ליווי ותמיכה",
];

const testimonials = [
  {
    name: "סקפטיות שהופתעו",
    text: "גם נשים שהגיעו בלי אמונה גדולה בתהליך גילו שכאשר יש מסגרת, ליווי ומעקב, שינוי באמת יכול לקרות.",
  },
  {
    name: "תמיכה שעושה הבדל",
    text: "קבוצה של נשים בתהליך דומה נותנת כוח, פרופורציה ומוטיבציה להמשיך גם בשבועות פחות קלים.",
  },
  {
    name: "פשוט וברור יותר",
    text: "תפריטים, תחליפים ומתכונים פשוטים מורידים עומס מהראש ועוזרים להבין מה לעשות ביום-יום.",
  },
];

const faqs = [
  {
    question: "מתי הסדנה מתקיימת?",
    answer: "השאירי פרטים ולימור תחזור אלייך עם התאריך, השעות והמיקום של המחזור הקרוב.",
  },
  {
    question: "מה כוללת הסדנה?",
    answer: "מפגשים ממוקדים, תפריטים עם תחליפים, מתכונים קלים, קבוצת תמיכה, שקילות ומדידות וליווי אישי של לימור.",
  },
  {
    question: "זה מתאים גם אם אני סקפטית?",
    answer: "כן. הרבה נשים מגיעות סקפטיות, ודווקא מסגרת ברורה ותומכת עוזרת לראות שזה יכול לעבוד.",
  },
  {
    question: "זה מתאים לכל גיל?",
    answer: "כן. הסדנה מיועדת לנשים בכל הגילאים שרוצות תהליך מסודר ובריא לירידה במשקל.",
  },
];

function LimorVideo() {
  return (
    <div className="limor-video" aria-label="סרטון היכרות">
      <div className="limor-video-strip">
        <Play size={18} fill="currentColor" aria-hidden="true" />
        הצצה לסדנה עם לימור
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
            <strong>הכירי את לימור ואת הסדנה</strong>
            <span>כאן ייכנס סרטון קצר שמציג את לימור, את האווירה, ואת הדרך שבה הסדנה עוזרת להתחיל שינוי אמיתי.</span>
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
            להרשמה לסדנה
            <ArrowLeft size={16} aria-hidden="true" />
          </a>
        </nav>

        <div className="limor-hero-inner">
          <Reveal className="limor-pill">
            <Heart size={16} aria-hidden="true" />
            מחזור חדש נפתח בקרוב
          </Reveal>
          <Reveal delay={0.08}>
            <h1>השינוי אפשרי. בכל גיל.</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="limor-subtitle">
              סדנה לירידה במשקל לנשים שרוצות תהליך ברור, תומך ומקצועי, עם תפריטים, מתכונים, קבוצת תמיכה, מדידות וליווי אישי של לימור.
            </p>
          </Reveal>
          <Reveal className="limor-hero-actions" delay={0.2}>
            <a className="limor-hero-main-cta" href="#contact">
              אני רוצה פרטים והרשמה
              <ArrowLeft size={18} aria-hidden="true" />
            </a>
            <a className="limor-hero-secondary" href="#process">
              מה כוללת הסדנה
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
          <span className="limor-label dark">הרשמה למחזור הקרוב</span>
          <h2>רוצה להצטרף למחזור הקרוב של הסדנה?</h2>
          <p>השאירי פרטים ולימור תחזור אלייך עם כל הפרטים על הסדנה, המקום, השעות וההרשמה.</p>
          <ContactForm
            source="סדנת ירידה במשקל - לימור בנימין"
            privacyText="קראתי ואני מאשר/ת שמותר ללימור או לצוות לחזור אליי לגבי הרשמה לסדנה."
            goalLabel="מה חשוב לך בסדנה?"
            goalPlaceholder="לדוגמה: אני רוצה לרדת במשקל, לקבל מסגרת, להבין תפריטים או לקבל פרטים על המחזור הקרוב."
            submitLabel="השארת פרטים להרשמה"
            idleMessage="הפרטים נשלחים ללימור לצורך חזרה עם פרטי הסדנה וההרשמה."
          />
        </Reveal>
      </section>

      <section className="limor-empathy-section">
        <Reveal className="limor-copy">
          <h2>גם אם את סקפטית, שינוי עדיין אפשרי.</h2>
          <p>
            הרבה נשים מגיעות אחרי ניסיונות קודמים, עם ספק אמיתי אם הן יצליחו הפעם. הסדנה בנויה בדיוק בשביל זה: ידע
            מקצועי, כלים פשוטים, תמיכה וליווי שמחזיקים את התהליך גם כשהמוטיבציה יורדת.
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
          <h2>כי לא מספיק לרצות לרדת במשקל. צריך מסגרת שמראה לך מה לעשות.</h2>
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
          <h2>סדנה פרקטית שמחברת ידע, אוכל פשוט, תמיכה ומעקב.</h2>
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
          <h2>לא עוד “תנסי לבד”. סדנה עם כלים שמכניסים סדר לתהליך.</h2>
          <p>המטרה היא להפוך ירידה במשקל למשהו ברור יותר: מה לאכול, איך לגוון, איך למדוד התקדמות, ואיך לא לוותר באמצע.</p>
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
          <h2>אם את רוצה שינוי, אבל צריכה מסגרת שתעזור לך להחזיק אותו, זה המקום.</h2>
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
          <h2>פתאום הירידה במשקל מרגישה פחות לבד, פחות מסובכת ויותר אפשרית.</h2>
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
          <h2>אם את רוצה להצטרף למחזור הקרוב, השאירי פרטים ולימור תחזור אלייך.</h2>
          <a className="limor-final-button" href="#contact">
            השארת פרטים להרשמה
            <ArrowLeft size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </section>

      <a className="limor-floating-cta" href="#contact">
        להרשמה לסדנה
        <ArrowLeft size={16} aria-hidden="true" />
      </a>
    </main>
  );
}
