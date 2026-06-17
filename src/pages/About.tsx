import { Award, Heart, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SplitText from "@/components/ui/split-text";
import { Highlighter } from "@/components/ui/highlighter"

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Σεβασμός",
      description: "Σεβόμαστε τον μαθητή, τις ανάγκες του και τον ρυθμό μάθησής του.",
    },
    {
      icon: Award,
      title: "Ποιότητα",
      description: "Προσφέρουμε υψηλού επιπέδου διδασκαλία με σύγχρονες μεθόδους.",
    },
    {
      icon: TrendingUp,
      title: "Αποτελεσματικότητα",
      description: "Στοχοπροσήλωση στην επίτευξη των καλύτερων δυνατών αποτελεσμάτων.",
    },
    {
      icon: Users,
      title: "Συνεργασία",
      description: "Συνεργαζόμαστε με γονείς και μαθητές για το καλύτερο αποτέλεσμα.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-hero-gradient text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SplitText
              text="Γνωρίζοντας το Αριθμώ"
              className="text-5xl font-bold mb-6"
              splitType="words, chars"
              duration={1}
              delay={50}
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
            />
            <p className="text-xl text-white/90 leading-relaxed">
              <Highlighter
                action="underline"
                color="orange"
                strokeWidth={3}
                animationDuration={1000}
                iterations={2}
                padding={0}
                multiline={true}
                isView={true}
                delay={1000}
                animate={true}
              >
                35 χρόνια εμπειρίας στον χώρο της Φροντιστηριακής Εκπαίδευσης
              </Highlighter>
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Η Ιστορία μας</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                Με την <strong className="text-primary">35ετή εμπειρία μας</strong> στον χώρο της Φροντιστηριακής εκπαίδευσης
                γνωρίζουμε πολύ καλά τις ανάγκες του σύγχρονου μαθητή και της οικογένειάς του.
              </p>
              <p>
                <strong className="text-primary">Χωρίς εντυπωσιασμούς και υπερβολές</strong>, στεκόμαστε δίπλα τους με μια
                ολοκληρωμένη πρόταση προετοιμασίας έχοντας σαν πυρήνα της λογικής μας το γεγονός πως ο κάθε μαθητής
                και η κάθε μαθήτρια είναι μια ανεξάρτητη προσωπικότητα με τις δικές του ιδιαιτερότητες, τις δικές του
                ανάγκες και τους δικούς του στόχους.
              </p>
              <p>
                Η <strong className="text-primary">μεθοδική προετοιμασία</strong>, η παιδαγωγική και επιστημονική επάρκεια
                των διδασκόντων καθηγητών, η συνέπεια και η ειλικρίνεια αποτελούν για το Φροντιστήριο Αριθμώ τις
                καθοριστικές παραμέτρους της επιτυχίας.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">Οι Αξίες μας</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Οι βασικές αρχές που καθοδηγούν το έργο μας
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-2 hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Η Φιλοσοφία μας</h2>
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Εμπειρία και Εξειδίκευση</h3>
                    <p className="text-lg">
                      Στο Αριθμώ, γνωρίζουμε καλά το πόσο σημαντική είναι η επιλογή φροντιστηρίου σήμερα,
                      στο σύγχρονο εκπαιδευτικό περιβάλλον και έχουμε σχεδιάσει μια ευέλικτη μέθοδο προετοιμασίας
                      και μελέτης, με στόχο τη σωστή εκπαίδευση και την επιτυχία στις εισαγωγικές εξετάσεις.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Σύστημα - Γνώση - Επιτυχία</h3>
                    <p className="text-lg">
                      Λειτουργούμε βάσει ενός μοντέρνου και αποτελεσματικού συστήματος, που βασίζεται στην άμεση,
                      ουσιαστική και αμφίδρομη επαφή καθηγητή–μαθητή. Όλοι οι καθηγητές μας είναι άνθρωποι με
                      πολυετή διδακτική και παιδαγωγική εμπειρία.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Τραπέζι Μαθήματος αντί Θρανίου</h3>
                    <p className="text-lg">
                      Τα μαθήματα γίνονται σε μικρές, ομοιογενείς ομάδες των 4 μαθητών, με τον καθηγητή να κάθεται
                      ανάμεσα στους μαθητές, σε ένα τραπέζι εργασίας και όχι μια 'ψυχρή' αίθουσα διδασκαλίας.
                      Αυτό εξασφαλίζει την απόλυτη προσοχή του καθηγητή στον κάθε μαθητή ξεχωριστά.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Σεβασμός στο Μαθητή και την Οικογένειά του</h3>
                    <p className="text-lg">
                      Η σύγχρονη αντιμετώπισή μας λειτουργεί αποτελεσματικά και στην ψυχολογία του μαθητή αποφεύγοντας
                      κάθε είδους υπερβολή. Θεωρούμε τους γονείς απαραίτητους συνεργάτες σε αυτή την κοινή μας προσπάθεια.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
