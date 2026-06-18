import { GraduationCap, Users, BookOpen, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Highlighter } from "@/components/ui/highlighter"

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  disabled?: boolean;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, speed = 60, className = '', onComplete, disabled = false }) => {
  const [displayedText, setDisplayedText] = useState(disabled ? text : '');
  const [currentIndex, setCurrentIndex] = useState(disabled ? text.length : 0);

  useEffect(() => {
    if (disabled) {
      if (onComplete) onComplete();
      return;
    }
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete, disabled]);

  return (
    <span className={className}>
      {displayedText}
      {!disabled && currentIndex < text.length && (
        <span className="animate-pulse" style={{ position: 'absolute' }}>|</span>
      )}
    </span>
  );
};


const DISABLE_TYPING_ANIMATION = false; // Toggle this to temporarily disable the hero text typing animation
const DISABLE_UNDERLINE_ANIMATION = false; // Toggle this to temporarily disable the text underlining animation

const TerminalCard = () => {
  return (
    <StyledWrapper $disabled={false}>
      <div className="card">
        <div className="wrap">
          <div className="terminal">
            <hgroup className="head">
              <p className="title">
                <svg width="16px" height="16px" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none">
                  <path d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" />
                </svg>
                Terminal
              </p>
              <button className="copy_toggle" tabIndex={-1} type="button">
                <svg width="16px" height="16px" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none">
                  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                  <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                </svg>
              </button>
            </hgroup>
            <div className="body">
              <pre className="pre">{"          "}<code>&gt;&nbsp;</code>{"\n"}{"          "}<code>arithmo&nbsp;</code>{"\n"}{"          "}<code className="cmd" data-cmd="Επιτυχία στις εξετάσεις!" />{"\n"}{"        "}</pre>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}


const StyledWrapper = styled.div<{ $disabled?: boolean }>`
  .card {
    padding: 1rem;
    overflow: hidden;
    border: 1px solid #c5c5c5;
    border-radius: 12px;
    background-color: #d9d9d92f;
    backdrop-filter: blur(8px);
    width: 100%;
    @media (min-width: 380px) {
      min-width: 344px;
    }
  }
  .wrap {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    z-index: 10;
    border: 0.5px solid #525252;
    border-radius: 8px;
    overflow: hidden;
  }
  .terminal {
    display: flex;
    flex-direction: column;

    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
  }
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    min-height: 40px;
    padding-inline: 12px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #202425;
  }
  .title {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 2.5rem;
    user-select: none;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #8e8e8e;
  }
  .title > svg {
    height: 18px;
    width: 18px;
    margin-top: 2px;
    color: #006adc;
  }
  .copy_toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    border: 0.65px solid #c1c2c5;
    margin-left: auto;
    border-radius: 6px;
    background-color: #202425;
    color: #8e8e8e;
    cursor: pointer;
  }
  .copy_toggle > svg {
    width: 20px;
    height: 20px;
  }
  .copy_toggle:active > svg > path,
  .copy_toggle:focus-within > svg > path {
    animation: clipboard-check 500ms linear forwards;
  }
  .body {
    display: flex;
    flex-direction: column;
    position: relative;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    overflow-x: auto;
    padding: 1rem;
    line-height: 19px;
    color: white;
    background-color: black;
    white-space: nowrap;
  }
  .pre {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-wrap: nowrap;
    white-space: pre;
    background-color: transparent;
    overflow-x: auto;
    box-sizing: border-box;
    font-size: clamp(12px, 3.8vw, 16px);
  }
  .pre code:nth-child(1) {
    color: #575757;
  }
  .pre code:nth-child(2) {
    color: #e34ba9;
  }
  .cmd {
    height: 19px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  .cmd::before {
    content: attr(data-cmd);
    position: relative;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    background-color: transparent;
    ${props => props.$disabled ? 'width: auto;' : 'animation: inputs 8s linear infinite;'}
  }
  .cmd::after {
    content: "";
    position: relative;
    display: block;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
    border-right: 0.15em solid #e34ba9;
    ${props => props.$disabled ? 'display: none;' : 'animation: cursor 0.5s step-end infinite alternate, blinking 0.5s infinite;'}
  }

  @keyframes blinking {
    20%,
    80% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0);
    }
  }
  @keyframes cursor {
    50% {
      border-right-color: transparent;
    }
  }
  @keyframes inputs {
    0%, 100% {
      width: 0;
    }
    5%, 95% {
      width: 0;
    }
    35%, 65% {
      width: 24ch;
    }
  }
  @keyframes clipboard-check {
    100% {
      color: #fff;
      d: path(
        "M 9 5 H 7 a 2 2 0 0 0 -2 2 v 12 a 2 2 0 0 0 2 2 h 10 a 2 2 0 0 0 2 -2 V 7 a 2 2 0 0 0 -2 -2 h -2 M 9 5 a 2 2 0 0 0 2 2 h 2 a 2 2 0 0 0 2 -2 M 9 5 a 2 2 0 0 1 2 -2 h 2 a 2 2 0 0 1 2 2 m -6 9 l 2 2 l 4 -4"
      );
    }
  }`;

const ContactButton = () => {
  return (
    <ContactButtonWrapper>
      <button className="animated-button">
        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
        <span className="text">Επικοινωνήστε</span>
        <span className="circle" />
        <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
      </button>
    </ContactButtonWrapper>
  );
}

const ContactButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .animated-button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 16px 36px;
    border: 4px solid;
    border-color: transparent;
    font-size: 16px;
    background-color: inherit;
    border-radius: 100px;
    font-weight: 600;
    color: orange;
    box-shadow: 0 0 0 2px orange;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button svg {
    position: absolute;
    width: 24px;
    fill: orange;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .arr-1 {
    right: 16px;
  }

  .animated-button .arr-2 {
    left: -25%;
  }

  .animated-button .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: orange;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .text {
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button:hover {
    box-shadow: 0 0 0 12px transparent;
    color: #212121;
    border-radius: 12px;
  }

  .animated-button:hover .arr-1 {
    right: -25%;
  }

  .animated-button:hover .arr-2 {
    left: 16px;
  }

  .animated-button:hover .text {
    transform: translateX(12px);
  }

  .animated-button:hover svg {
    fill: #212121;
  }

  .animated-button:active {
    scale: 0.95;
    box-shadow: 0 0 0 4px orange;
  }

  .animated-button:hover .circle {
    width: 220px;
    height: 220px;
    opacity: 1;
  }`;

const Home = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Έμπειροι Καθηγητές",
      description: "Πτυχιούχοι και μεταπτυχιακοί εκπαιδευτικοί με πολυετή εμπειρία στη διδασκαλία μαθηματικών.",
      link: "/teachers",
    },
    {
      icon: Users,
      title: "Μικρά Τμήματα",
      description: "Περιορισμένος αριθμός μαθητών ανά τάξη για εξατομικευμένη προσέγγιση και καλύτερη απόδοση.",
    },
    {
      icon: BookOpen,
      title: "Πλούσιο Υλικό",
      description: "Δικά μας βιβλία και φύλλα εργασίας, προσαρμοσμένα στις ανάγκες κάθε τάξης και μαθητή.",
      link: "/books",
    },
    {
      icon: Target,
      title: "Στοχευμένη Προετοιμασία",
      description: "Ειδικά προγράμματα για πανελλαδικές εξετάσεις και διαγωνίσματα σχολείου.",
    },
  ];

  const programs = [
    { title: "Γυμνάσιο", description: "Α', Β', Γ' Γυμνασίου", link: "/programs", state: { tab: "gymnasio" } },
    { title: "Λύκειο", description: "Α', Β', Γ' Λυκείου", link: "/programs", state: { tab: "a-lykeiou" } },
    { title: "Θερινά Προγράμματα", description: "Προετοιμασία για νέα τάξη", link: "/programs", state: { tab: "b-lykeiou" } },
  ];

  const [isFirstLineComplete, setIsFirstLineComplete] = useState(DISABLE_TYPING_ANIMATION);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-hero-gradient text-white overflow-hidden ">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight relative">
                {/* Invisible full text to permanently reserve space */}
                <span className="invisible" aria-hidden="true">
                  Αριθμούμε Επιτυχίες με Σεβασμό στον Μαθητή
                  <span className="block text-accent mt-2">- στην Μαθήτρια</span>
                </span>
                {/* Visible animated text layered on top */}
                <span className="absolute inset-0">
                  <TypingAnimation text="Αριθμούμε Επιτυχίες με Σεβασμό στον Μαθητή"
                    onComplete={() => setIsFirstLineComplete(true)}
                    disabled={DISABLE_TYPING_ANIMATION}
                  />
                  {isFirstLineComplete && (
                    <span className="block text-accent mt-2">
                      <TypingAnimation text="- στην Μαθήτρια" disabled={DISABLE_TYPING_ANIMATION} />
                    </span>
                  )}
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                <Highlighter
                  action="underline"
                  color="orange"
                  strokeWidth={3}
                  animationDuration={900}
                  iterations={4}
                  padding={5}
                  multiline={true}
                  isView={true}
                  delay={DISABLE_UNDERLINE_ANIMATION ? 0 : 3400}
                  animate={!DISABLE_UNDERLINE_ANIMATION}
                >
                  Αγγίζουμε την Κορυφή των Προσδοκιών σου
                </Highlighter>
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/programs">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all">
                    Δείτε τα Προγράμματα
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 borde-white text-[hsl(234,49%,22%)] hover:bg-[hsl(220,36.04%,74.38%)] hover:text-primary font-semibold text-lg px-8 py-6 h-auto transition-all">
                    Επικοινωνήστε
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <TerminalCard />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Γιατί να Επιλέξετε το Αριθμώ;</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Συνδυάζουμε εμπειρία, μεθοδολογία και σύγχρονες παιδαγωγικές πρακτικές
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link to={feature.link || "#"} key={index}>
                <Card
                  className="border-2 hover:border-accent hover:shadow-lg transition-all duration-300 animate-fade-in h-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-14 h-14 bg-accent-gradient rounded-xl flex items-center justify-center mb-4 shadow-md">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-secondary/100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Τα Προγράμματά μας</h2>
            <p className="text-xl text-muted-foreground">
              Προσαρμοσμένα προγράμματα για κάθε επίπεδο
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {programs.map((program, index) => (
              <Link to={program.link} state={program.state} key={index}>
                <Card
                  className="text-center border-2 hover:border-accent hover:shadow-xl transition-all duration-300 group h-full"
                >
                  <CardContent className="p-8 flex flex-col items-center justify-center h-full">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{program.title}</h3>
                    <p className="text-muted-foreground">{program.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/programs">
              <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 py-6 h-auto">
                Περισσότερες Πληροφορίες
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ξεκινήστε τη Μαθηματική σας Πορεία Σήμερα</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Επικοινωνήστε μαζί μας για να μάθετε περισσότερα για τα προγράμματά μας
            και πώς μπορούμε να βοηθήσουμε τον μαθητή σας.
          </p>
          <Link to="/contact">
            <ContactButton />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
