import { useState } from "react";
import { GraduationCap, Award, BookOpen, Users, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { Highlighter } from "@/components/ui/highlighter"

// Import teacher images
import skepariotisImg from "@/assets/blank.jpg";
import vrakaImg from "@/assets/blank.jpg";
import barbagiannisImg from "@/assets/blank.jpg";
import risvanisImg from "@/assets/blank.jpg";
import thalassinosImg from "@/assets/blank.jpg";
import chrysikopoulosImg from "@/assets/blank.jpg";
import milbanisImg from "@/assets/blank.jpg";
import stathakiImg from "@/assets/blank.jpg";
import stathopoulouImg from "@/assets/blank.jpg";
import ntzouraImg from "@/assets/blank.jpg";
import xatzopoulosImg from "@/assets/blank.jpg";

const Teachers = () => {
  const qualities = [
    {
      icon: GraduationCap,
      title: "Ακαδημαϊκά Προσόντα",
      description: "Πτυχιούχοι Μαθηματικών και συναφών επιστημών με μεταπτυχιακούς τίτλους",
    },
    {
      icon: Award,
      title: "Πιστοποιημένη Εμπειρία",
      description: "Πολυετής εμπειρία στη διδασκαλία και προετοιμασία για πανελλαδικές",
    },
    {
      icon: BookOpen,
      title: "Σύγχρονες Μέθοδοι",
      description: "Εκπαίδευση σε σύγχρονες παιδαγωγικές μεθόδους και τεχνικές διδασκαλίας",
    },
    {
      icon: Users,
      title: "Προσωπική Προσέγγιση",
      description: "Ικανότητα προσαρμογής σε διαφορετικά στυλ μάθησης και ανάγκες",
    },
  ];

  const teachersData = [
    {
      id: 1,
      name: "Σκεπαριώτης Νίκος",
      specialty: "Φυσικός",
      bio: "Με πολυετή εμπειρία στη διδασκαλία της Φυσικής, ο Νίκος εμπνέει τους μαθητές του να αγαπήσουν την επιστήμη και να κατανοήσουν σε βάθος τις αρχές της. Εξειδικεύεται στην προετοιμασία για τις Πανελλαδικές εξετάσεις.",
      image: skepariotisImg
    },
    {
      id: 2,
      name: "Βρακά Λία",
      specialty: "Φυσικός/Ηλεκτρονικός",
      bio: "Η Λία συνδυάζει τις γνώσεις της στη Φυσική και την Ηλεκτρονική για να προσφέρει μια μοναδική οπτική στη διδασκαλία. Είναι υπεύθυνη για τον σχεδιασμό και την υλοποίηση καινοτόμων εκπαιδευτικών προγραμμάτων.",
      image: vrakaImg
    },
    {
      id: 3,
      name: "Μπαρμπαγιάννης Γιάννης",
      specialty: "Μαθηματικός",
      bio: "Ο Γιάννης είναι ένας παθιασμένος Μαθηματικός που βοηθά τους μαθητές να ξεπεράσουν τις δυσκολίες και να αναπτύξουν ισχυρή αναλυτική σκέψη. Η μεταδοτικότητά του είναι το δυνατό του σημείο.",
      image: barbagiannisImg
    },
    {
      id: 4,
      name: "Ρισβάνης Άρης",
      specialty: "Μαθηματικός",
      bio: "Ο Άρης ειδικεύεται στα μαθηματικά κατεύθυνσης και έχει βοηθήσει δεκάδες μαθητές να επιτύχουν τους στόχους τους στις Πανελλαδικές. Η μεθοδολογία του είναι προσαρμοσμένη στις απαιτήσεις των εξετάσεων.",
      image: risvanisImg
    },
    {
      id: 5,
      name: "Θαλασσινός Γιώργος",
      specialty: "Μαθηματικός-Μεταπτυχιακό Πληροφορικής",
      bio: "Ο Γιώργος συνδυάζει τη μαθηματική λογική με την πληροφορική, προσφέροντας στους μαθητές μια σύγχρονη προσέγγιση. Το μεταπτυχιακό του στην Πληροφορική του δίνει ένα μοναδικό πλεονέκτημα.",
      image: thalassinosImg
    },
    {
      id: 6,
      name: "Χρυσικόπουλος Νίκος",
      specialty: "Βιολόγος",
      bio: "Ο Νίκος κάνει τη Βιολογία μια συναρπαστική περιπέτεια. Με παραδείγματα από την καθημερινή ζωή, βοηθά τους μαθητές να κατανοήσουν πολύπλοκες έννοιες και να αγαπήσουν τον κόσμο της ζωής.",
      image: chrysikopoulosImg
    },
    {
      id: 7,
      name: "Μίλμπανης Αλέξανδρος",
      specialty: "Χημικός",
      bio: "Ο Αλέξανδρος έχει την ικανότητα να κάνει τη Χημεία προσιτή και κατανοητή. Με έμφαση στα πειράματα και την πρακτική εφαρμογή, οι μαθητές του αποκτούν στέρεες βάσεις.",
      image: milbanisImg
    },
    {
      id: 8,
      name: "Σταθάκη Μαριάννα",
      specialty: "Οικονομολόγος",
      bio: "Η Μαριάννα προετοιμάζει τους μαθητές για τις οικονομικές σπουδές, δίνοντας έμφαση στην κατανόηση των σύγχρονων οικονομικών θεωριών και την εφαρμογή τους στην πράξη.",
      image: stathakiImg
    },
    {
      id: 9,
      name: "Σταθοπούλου Άλκηστις",
      specialty: "Φιλόλογος",
      bio: "Η Άλκηστις καλλιεργεί την αγάπη για τη γλώσσα και τη λογοτεχνία. Με βαθιά γνώση των κλασικών και νέων ελληνικών, προετοιμάζει τους μαθητές για τις φιλολογικές προκλήσεις.",
      image: stathopoulouImg
    },
    {
      id: 10,
      name: "Ντζούρα Μαρία",
      specialty: "Φιλόλογος",
      bio: "Η Μαρία ειδικεύεται στην Αρχαία Ελληνική Γλώσσα και βοηθά τους μαθητές να αποκρυπτογραφήσουν τα μυστικά των αρχαίων κειμένων. Η διδασκαλία της είναι μεθοδική και αποτελεσματική.",
      image: ntzouraImg
    },
    {
      id: 11,
      name: "Χατζόπουλος Γιάννης",
      specialty: "Φιλόλογος",
      bio: "Ο Γιάννης έχει μια μοναδική ικανότητα να ζωντανεύει τα κείμενα και να εμπνέει τους μαθητές του. Με έμφαση στην κριτική σκέψη και την ανάλυση, προετοιμάζει τους μαθητές για κάθε φιλολογική πρόκληση.",
      image: xatzopoulosImg
    }
  ];

  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-hero-gradient text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Οι Καθηγητές μας</h1>
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
                Έμπειροι επαγγελματίες με πάθος για τη διδασκαλία και την επιτυχία των μαθητών
              </Highlighter>
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">Διεύθυνση Σπουδών</h2>
            <div className="bg-secondary/100 rounded-lg p-8 mb-8">
              <p className="text-lg font-semibold text-primary mb-2">Σκεπαριώτης Νίκος - Φυσικός</p>
              <p className="text-lg font-semibold text-primary">Βρακά Λία - Φυσικός/Ηλεκτρονικός</p>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              Οι διδάσκοντες είναι έμπειροι εκπαιδευτικοί και παιδαγωγοί με μεγάλη επιστημονική κατάρτιση.
              Η συλλογική δουλειά της ομάδας των καθηγητών του φροντιστηρίου, η μεταξύ τους συνεργασία
              και η αγάπη για τους μαθητές, τους καθιστούν αρωγούς και συμπαραστάτες σε αυτή την δύσκολη προσπάθεια.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Η βοήθεια που τους προσφέρουν δεν περιορίζεται μόνο στη μεθοδική διδασκαλία αλλά και στην
              ψυχολογική στήριξη και ενθάρρυνση, ώστε να πραγματοποιήσουν τους στόχους τους με τη μικρότερη ψυχική επιβάρυνση.
            </p>
          </div>
        </div>
      </section>

      {/* Qualities */}
      <section className="py-20 bg-secondary/100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">
            Τα Προσόντα των Καθηγητών μας
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Η επιλογή των καθηγητών γίνεται με αυστηρά κριτήρια
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {qualities.map((quality, index) => (
              <Card
                key={index}
                className="text-center border-2 hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <quality.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{quality.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{quality.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Η Ομάδα του Αριθμώ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachersData.map((teacher) => (
              <motion.div
                key={teacher.id}
                layoutId={`card-container-${teacher.id}`}
                onClick={() => setSelectedId(teacher.id)}
                className="cursor-pointer"
              >
                <Card className="h-full text-center border-2 hover:border-accent hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <img src={teacher.image} alt={teacher.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                    <h3 className="text-xl font-bold text-primary">{teacher.name}</h3>
                    <p className="text-accent font-semibold">{teacher.specialty}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedId && (
              <motion.div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
              >
                <motion.div layoutId={`card-container-${selectedId}`} onClick={(e) => e.stopPropagation()}>
                  <Card className="w-full max-w-lg mx-auto relative">
                    <CardHeader>
                      <img src={teachersData.find(t => t.id === selectedId)?.image} alt={teachersData.find(t => t.id === selectedId)?.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                      <CardTitle className="text-center text-3xl text-primary">{teachersData.find(t => t.id === selectedId)?.name}</CardTitle>
                      <p className="text-center text-accent text-lg font-semibold">{teachersData.find(t => t.id === selectedId)?.specialty}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-center leading-relaxed">{teachersData.find(t => t.id === selectedId)?.bio}</p>
                    </CardContent>
                    <button onClick={() => setSelectedId(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-primary">
                      <X className="w-6 h-6" />
                    </button>
                  </Card>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20 bg-secondary/100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Συνεργασία με Γονείς
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Πιστεύουμε στη στενή συνεργασία με τους γονείς. Οι καθηγητές μας είναι
              πάντα διαθέσιμοι για ενημέρωση σχετικά με την πρόοδο των μαθητών και
              τυχόν ζητήματα που προκύπτουν. Η ανοιχτή επικοινωνία είναι κλειδί για
              την επιτυχία του μαθητή.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teachers;
