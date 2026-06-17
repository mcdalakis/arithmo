import { GraduationCap, Award, BookOpen, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Οι Καθηγητές μας</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Έμπειροι επαγγελματίες με πάθος για τη διδασκαλία και την επιτυχία των μαθητών
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">Διεύθυνση Σπουδών</h2>
            <div className="bg-secondary/30 rounded-lg p-8 mb-8">
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
      <section className="py-20 bg-secondary/30">
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">
              Η Διδακτική μας Προσέγγιση
            </h2>
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    Έχουν πολυετή συνεργασία με το Αριθμώ, εγγυώνται την ποιότητα της εκπαιδευτικής διαδικασίας 
                    και διαμορφώνουν την επιτυχία. <strong className="text-primary">Αποτελούν την καρδιά του Φροντιστηρίου.</strong>
                  </p>
                  <div className="mt-8">
                    <h4 className="text-xl font-bold text-primary mb-4">Οι καθηγητές μας</h4>
                    <ul className="space-y-2">
                      <li>• Σκεπαριώτης Νίκος - Φυσικός</li>
                      <li>• Βρακά Λία - Φυσικός/Ηλεκτρονικός</li>
                      <li>• Μπαρμπαγιάννης Γιάννης - Μαθηματικός</li>
                      <li>• Ρισβάνης Άρης - Μαθηματικός</li>
                      <li>• Θαλασσινός Γιώργος - Μαθηματικός-Μεταπτυχιακό Πληροφορικής</li>
                      <li>• Χρυσικόπουλος Νίκος - Βιολόγος</li>
                      <li>• Μίλμπανης Αλέξανδρος - Χημικός</li>
                      <li>• Σταθάκη Μαριάννα - Οικονομολόγος</li>
                      <li>• Σταθοπούλου Άλκηστις - Φιλόλογος</li>
                      <li>• Ντζούρα Μαρία - Φιλόλογος</li>
                      <li>• Χατζόπουλος Γιάννης - Φιλόλογος</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20 bg-secondary/30">
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
