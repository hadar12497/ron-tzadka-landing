import { ArrowLeft, Check, Dumbbell, Flame, Play, ShieldCheck, Star, Target, Timer, TrendingDown } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

const videoEmbedUrl = process.env.NEXT_PUBLIC_HERO_VIDEO_URL;

const painPoints = [
  "מתחילים מתוכנית שמתאימה לחיים שלך, לא מתפריט קיצוני שקשה להחזיק.",
  "האימונים מתמקדים בכוח, חיטוב והתקדמות הדרגתית, במקום עוד ניסיון קצר שנגמר אחרי שבועיים.",
  "הליווי בנוי כדי לתת מסגרת, אחריות ופידבק, בלי להפוך את כל היום שלך סביב אימונים.",
];

const framework = [
  {
    icon: Target,
    title: "שיחת התאמה",
    text: "בודקים מטרה, מצב נוכחי ושגרה, כדי להבין אם הליווי מתאים ומה הדרך הנכונה להתחיל.",
  },
  {
    icon: Timer,
    title: "אימוני כוח וחיטוב",
    text: "תוכנית אימונים מסודרת בסטודיו בלהבים, עם עומסים וקצב שמתאימים לרמה שלך.",
  },
  {
    icon: ShieldCheck,
    title: "מעקב ושיפור",
    text: "מתקדמים לפי תוצאות, התמדה ותחושה בגוף, ולא לפי ניחושים או טרנדים מהרשת.",
  },
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
            <span>106 פוסטים</span>
            <span>סטודיו בלהבים</span>
            <span>
              <TrendingDown size={16} aria-hidden="true" />
              ירידות של 5-42 ק״ג
            </span>
          </Reveal>
        </div>
      </section>

      <section className="lead-card-section" id="contact">
        <Reveal className="lead-card">
          <h2>לבדיקת התאמה לליווי בסטודיו</h2>
          <p>
            השאירו פרטים ונחזור אליכם לשיחה קצרה. נבין מה המטרה, איפה אתם עומדים היום, והאם הליווי מתאים לכם.
          </p>
          <ContactForm />
        </Reveal>
      </section>

      <section className="dark-copy-section">
        <Reveal className="copy-block">
          <span className="section-label">בלי להשתעבד</span>
          <h2>שינוי אמיתי לא חייב לבוא עם קיצוניות.</h2>
          <p>
            המטרה היא לבנות גוף חזק וחטוב יותר דרך מסגרת שאפשר להתמיד בה. לא עוד התחלה אגרסיבית שנשברת, אלא תהליך
            ברור שמתאים לשגרה.
          </p>
        </Reveal>
        <div className="pain-list">
          {painPoints.map((item, index) => (
            <Reveal className="pain-item" delay={index * 0.08} key={item}>
              <Check size={18} aria-hidden="true" />
              <span>{item}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="white-section">
        <Reveal className="copy-block center">
          <span className="section-label red">איך זה עובד?</span>
          <h2>סטודיו כוח וחיטוב בלהבים, עם תהליך אישי וברור.</h2>
          <p>
            מתחילים משיחה קצרה, בונים מסגרת שמתאימה למטרה שלך, ומתקדמים דרך אימונים, מעקב והתאמות לאורך הדרך.
          </p>
        </Reveal>
        <div className="framework-grid">
          {framework.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal className="framework-card" delay={index * 0.08} key={item.title}>
                <Icon size={24} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="testimonials-section" id="results">
        <Reveal className="copy-block center">
          <span className="section-label">המלצות</span>
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
      </section>

      <section className="final-cta">
        <Reveal>
          <h2>רוצה לבדוק אם הסטודיו של רון מתאים לך?</h2>
          <a className="final-button" href="#contact">
            אני רוצה בדיקת התאמה
            <ArrowLeft size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </section>
    </main>
  );
}
