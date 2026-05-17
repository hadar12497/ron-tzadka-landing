import {
  ArrowLeft,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Dumbbell,
  Flame,
  MapPin,
  MessageCircle,
  Play,
  Scale,
  Sparkles,
  Star,
  Target,
  TrendingDown,
  Trophy,
  X,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

const videoEmbedUrl = process.env.NEXT_PUBLIC_HERO_VIDEO_URL;

const proofPoints = [
  { label: "סטודיו בלהבים", icon: MapPin },
  { label: "אימוני כוח וחיטוב", icon: Dumbbell },
  { label: "ירידות של 5-42 ק״ג", icon: TrendingDown },
];

const painPoints = [
  "אתה מתחיל חזק, אבל אחרי שבועיים השגרה שוב משתלטת.",
  "אתה יודע שצריך להתאמן ולאכול טוב יותר, אבל לא מצליח להפוך את זה למסגרת קבועה.",
  "ניסית סרטונים, תפריטים ושיטות, אבל בסוף נשארת לבד עם יותר מדי החלטות.",
  "אתה רוצה שינוי בגוף, אבל לא רוצה לחיות סביב דיאטה ואימונים כל היום.",
];

const failedReasons = [
  {
    title: "יותר מדי שיטות",
    text: "כשכל שבוע יש גישה חדשה, קשה לדעת מה באמת נכון עבורך ומה רק רעש.",
  },
  {
    title: "אין מסגרת",
    text: "בלי מישהו שבודק התקדמות, מתקן ומחזיר אותך למסלול, קל להיעלם.",
  },
  {
    title: "תוכנית שלא מתאימה לחיים",
    text: "תהליך שלא מתאים ללוח הזמנים שלך אולי נראה טוב על הדף, אבל לא מחזיק לאורך זמן.",
  },
];

const principles = [
  "אימונים ברורים שאפשר לבצע באמת",
  "התאמות לפי רמה, עומס ושגרה",
  "מעקב שמונע היעלמות באמצע הדרך",
  "שינוי שמרגיש אפשרי, לא קיצוני",
];

const processSteps = [
  {
    icon: MessageCircle,
    title: "שיחת התאמה",
    text: "מבינים מה המטרה, איפה אתה עומד היום, ומה עוצר אותך מלהתמיד.",
  },
  {
    icon: ClipboardCheck,
    title: "תוכנית התחלה",
    text: "בונים מסגרת אימונים שמתאימה לרמה שלך ולזמן שיש לך בפועל.",
  },
  {
    icon: Dumbbell,
    title: "אימוני כוח וחיטוב",
    text: "עובדים בסטודיו בלהבים על טכניקה, עומסים והתקדמות הדרגתית.",
  },
  {
    icon: Target,
    title: "מעקב ושיפור",
    text: "בודקים מה עובד, מה צריך לשנות, ואיך ממשיכים להתקדם בלי להישבר.",
  },
];

const includes = [
  "אימונים בסטודיו כוח וחיטוב בלהבים",
  "מסגרת ברורה שמתאימה לשגרת היום שלך",
  "הכוונה בסיסית סביב תזונה והרגלים",
  "מעקב שמחזיק אותך בתהליך",
  "התאמות לפי התקדמות, עומס והתמדה",
  "שיחת התאמה לפני התחלה",
];

const fitFor = [
  "מי שרוצה לרדת במשקל בלי להשתעבד לדיאטות",
  "מי שרוצה להתחטב ולהתחזק במסגרת מסודרת",
  "מי שניסה לבד וצריך ליווי ברור",
  "מי שגר באזור להבים ומחפש סטודיו אישי יותר",
];

const notFor = [
  "מי שמחפש פתרון קסם תוך שבוע",
  "מי שלא מוכן להגיע לאימונים ולהיות עקבי",
  "מי שרוצה תוכנית כללית בלי בדיקת התאמה",
];

const testimonials = [
  {
    name: "ירידה במשקל",
    text: "מתאמנים בתהליך ירדו בין 5 ל-42 ק״ג בעזרת מסגרת אימונים, ליווי והתאמות לאורך הדרך.",
  },
  {
    name: "חיטוב וכוח",
    text: "התהליך מתאים למי שרוצה להתחזק, להתחטב ולהרגיש שינוי ברור בגוף בלי להשתעבד.",
  },
  {
    name: "סטודיו בלהבים",
    text: "העבודה נעשית בסטודיו מסודר, עם יחס אישי ותהליך שמותאם לאדם שמגיע, לא להפך.",
  },
];

const faqs = [
  {
    question: "האם זה מתאים גם למי שלא בכושר?",
    answer: "כן. מתחילים משיחת התאמה ובונים את הקצב לפי הרמה הנוכחית, לא לפי איפה שהיית רוצה להיות בעוד חודש.",
  },
  {
    question: "צריך להתחייב מראש לתהליך ארוך?",
    answer: "לפני שמתחילים בודקים התאמה. המטרה היא להבין אם הליווי נכון עבורך ורק אז להחליט על המשך.",
  },
  {
    question: "האם חייבים דיאטה קשוחה?",
    answer: "לא. הדגש הוא על מסגרת שאפשר להחזיק: אימונים, הרגלים, והכוונה שמתאימה לחיים שלך.",
  },
  {
    question: "איפה מתקיימים האימונים?",
    answer: "בסטודיו לאימוני כוח וחיטוב בלהבים.",
  },
];

function HeroVideo() {
  return (
    <div className="video-shell" aria-label="סרטון היכרות">
      <div className="video-strip">
        <Play size={18} fill="currentColor" aria-hidden="true" />
        היכרות קצרה עם התהליך
      </div>
      <div className="video-frame">
        {videoEmbedUrl ? (
          <iframe
            src={videoEmbedUrl}
            title="סרטון היכרות רון צדקה"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="video-placeholder">
            <div className="play-button" aria-hidden="true">
              <Play fill="currentColor" size={34} />
            </div>
            <strong>הכירו את רון ואת התהליך</strong>
            <span>סרטון קצר שמסביר למי הסטודיו מתאים, איך הליווי עובד, ומה בודקים בשיחת ההתאמה.</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="sales-page">
      <section className="sales-hero" id="top">
        <nav className="sales-nav" aria-label="ניווט ראשי">
          <a className="sales-brand" href="#top" aria-label="רון צדקה">
            <Dumbbell size={20} aria-hidden="true" />
            <span>רון צדקה</span>
          </a>
          <a className="sales-nav-cta" href="#contact">
            שיחת התאמה
            <ArrowLeft size={16} aria-hidden="true" />
          </a>
        </nav>

        <div className="sales-hero-inner">
          <Reveal className="sales-pill">
            <Flame size={16} aria-hidden="true" />
            אימוני כוח וחיטוב בלהבים
          </Reveal>
          <Reveal delay={0.08}>
            <h1>להגיע לגוף חזק וחטוב בלי להשתעבד לדיאטות</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="sales-subtitle">
              ליווי אישי בסטודיו לאימוני כוח וחיטוב בלהבים, עם מסגרת ברורה ומטרה אחת: שינוי שאפשר להחזיק.
            </p>
          </Reveal>
          <Reveal className="hero-video-wrap" delay={0.24}>
            <HeroVideo />
          </Reveal>
          <Reveal className="proof-row" delay={0.3}>
            {proofPoints.map((item) => {
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

      <section className="lead-card-section" id="contact">
        <Reveal className="lead-card">
          <span className="section-label red">בדיקת התאמה</span>
          <h2>רוצה להבין אם הליווי מתאים לך?</h2>
          <p>השאירו פרטים ונחזור אליכם לשיחה קצרה. נבין מה המטרה, איפה אתם עומדים היום, ומה הצעד הנכון להתחלה.</p>
          <ContactForm />
        </Reveal>
      </section>

      <section className="dark-copy-section">
        <Reveal className="copy-block">
          <span className="section-label">הבעיה היא לא כוח רצון</span>
          <h2>רוב האנשים לא נכשלים כי הם לא רוצים מספיק.</h2>
          <p>
            הם נכשלים כי אין להם מסלול ברור, אין התאמות כשמשהו משתנה, ואין מישהו שמחזיק אותם בתהליך כשהשגרה נהיית
            עמוסה.
          </p>
        </Reveal>
        <div className="pain-list">
          {painPoints.map((item, index) => (
            <Reveal className="pain-item" delay={index * 0.06} key={item}>
              <Check size={18} aria-hidden="true" />
              <span>{item}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mistakes-section">
        <Reveal className="copy-block center">
          <span className="section-label red">למה זה לא עבד עד היום?</span>
          <h2>כי עוד מידע לא פותר בעיית מסגרת.</h2>
          <p>אפשר לדעת בדיוק מה צריך לעשות ועדיין לא לעשות את זה. התפקיד של הליווי הוא להפוך ידע לפעולה קבועה.</p>
        </Reveal>
        <div className="mistake-grid">
          {failedReasons.map((item, index) => (
            <Reveal className="mistake-card" delay={index * 0.08} key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="principle-band">
        <Reveal className="principle-copy">
          <span className="section-label">הגישה</span>
          <h2>לא מחפשים שיטה מושלמת. בונים מסגרת שעובדת עבורך.</h2>
        </Reveal>
        <Reveal className="principle-list" delay={0.12}>
          {principles.map((item) => (
            <div key={item}>
              <CheckCircle2 size={20} aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="process-section">
        <Reveal className="copy-block center">
          <span className="section-label red">איך זה עובד?</span>
          <h2>תהליך אישי וברור, בלי לנחש מה השלב הבא.</h2>
        </Reveal>
        <div className="process-grid">
          {processSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal className="process-card" delay={index * 0.08} key={item.title}>
                <span className="process-number">{index + 1}</span>
                <Icon size={25} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="included-section">
        <Reveal className="included-copy">
          <span className="section-label">מה מקבלים</span>
          <h2>כל מה שצריך כדי להיכנס למסגרת ולהישאר בה.</h2>
          <p>הדגש הוא לא על עוד עומס, אלא על סדר: מה עושים, מתי, ואיך יודעים שמתקדמים.</p>
        </Reveal>
        <Reveal className="included-list" delay={0.12}>
          {includes.map((item) => (
            <div key={item}>
              <Sparkles size={18} aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="fit-section">
        <Reveal className="copy-block center">
          <span className="section-label red">למי זה מתאים?</span>
          <h2>כדי שהתהליך יעבוד, חשוב שהוא יהיה נכון עבורך.</h2>
        </Reveal>
        <div className="fit-grid">
          <Reveal className="fit-card good">
            <h3>מתאים במיוחד ל...</h3>
            {fitFor.map((item) => (
              <div key={item}>
                <Check size={18} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </Reveal>
          <Reveal className="fit-card bad" delay={0.08}>
            <h3>פחות מתאים ל...</h3>
            {notFor.map((item) => (
              <div key={item}>
                <X size={18} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="testimonials-section" id="results">
        <Reveal className="copy-block center">
          <span className="section-label">תוצאות והוכחות</span>
          <h2>תוצאות שמגיעות מתהליך, לא מהבטחות ריקות.</h2>
        </Reveal>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <Reveal className="testimonial-card" delay={index * 0.08} key={item.name}>
              <div className="stars" aria-label="5 כוכבים">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={16} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <p>{item.text}</p>
              <strong>{item.name}</strong>
            </Reveal>
          ))}
        </div>
        <Reveal className="result-metric" delay={0.18}>
          <Trophy size={28} aria-hidden="true" />
          <strong>5-42 ק״ג</strong>
          <span>טווח ירידות משקל שמופיע בפרופיל של רון</span>
        </Reveal>
      </section>

      <section className="faq-section">
        <Reveal className="copy-block center">
          <span className="section-label red">שאלות נפוצות</span>
          <h2>לפני שמשאירים פרטים, הנה מה שכדאי לדעת.</h2>
        </Reveal>
        <div className="faq-list">
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

      <section className="final-cta">
        <Reveal>
          <Scale size={34} aria-hidden="true" />
          <h2>אם אתה רוצה שינוי שאפשר להחזיק, מתחילים בבדיקת התאמה.</h2>
          <a className="final-button" href="#contact">
            אני רוצה שיחזרו אליי
            <ArrowLeft size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </section>

      <a className="floating-cta" href="#contact">
        בדיקת התאמה
        <ArrowLeft size={16} aria-hidden="true" />
      </a>
    </main>
  );
}
