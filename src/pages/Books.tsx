import { BookOpen, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Book from "@/components/ui/book";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import book1 from "@/assets/Physics_Book.jpg";
import book2 from "@/assets/Essay_Book.jpg";
import allbooks from "@/assets/All_Books.jpg";



const Books = () => {
  const books = [
    {
      level: "Γυμνάσιο",
      items: [
        "Άλγεβρα Α' Γυμνασίου",
        "Γεωμετρία Α' Γυμνασίου",
        "Άλγεβρα Β' Γυμνασίου",
        "Γεωμετρία Β' Γυμνασίου",
        "Άλγεβρα Γ' Γυμνασίου",
        "Γεωμετρία Γ' Γυμνασίου",
      ]
    },
    {
      level: "Α' Λυκείου",
      items: [
        "Άλγεβρα Α' Λυκείου",
        "Γεωμετρία Α' Λυκείου",
      ]
    },
    {
      level: "Β' Λυκείου",
      items: [
        "Άλγεβρα Β' Λυκείου",
        "Γεωμετρία Β' Λυκείου",
        "Μαθηματικά Κατεύθυνσης Β' Λυκείου",
      ]
    },
    {
      level: "Γ' Λυκείου",
      items: [
        "Μαθηματικά Γενικής Παιδείας Γ' Λυκείου",
        "Μαθηματικά Κατεύθυνσης Γ' Λυκείου (Άλγεβρα)",
        "Μαθηματικά Κατεύθυνσης Γ' Λυκείου (Γεωμετρία)",
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-hero-gradient text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center justify-center items-center flex flex-col ">
            {/*<BookOpen className="w-16 h-16 mx-auto mb-6 text-accent" />*/}
            <Book className="mb-12" />
            <h1 className="text-5xl font-bold mb-6">Τα Βιβλία μας</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Εκπαιδευτικό υλικό υψηλής ποιότητας για όλες τις τάξεις
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Αποτελούν σημαντικό παράγοντα υποβοήθησης στην μαθησιακή διαδικασία</h2>
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">ΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧ</h3>
                    <p className="text-lg">
                      Το σύστημα προετοιμασίας του Αριθμώ υποστηρίζεται από βιβλία που έχουν γραφτεί από
                      τους έμπειρους φροντιστές-καθηγητές μας και είναι σχεδιασμένα να καλύπτουν πλήρως
                      όλες τις ανάγκες του μαθητή και τις απαιτήσεις του εκάστοτε συστήματος εισαγωγής
                      στις Ανώτατες και Ανώτερες σχολές.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">ΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧ</h3>
                    <p className="text-lg">
                      Εξασφαλίζουν την ουσιαστική κατανόηση της διδασκόμενης ύλης, ελαχιστοποιούν τα κενά του
                      υποψηφίου και τον βοηθούν να πατήσει γερά στα πόδια του σίγουρος για τις γνώσεις και την επιτυχία του
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">ΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧ</h3>
                    <p className="text-lg">
                      Ανανεώνονται κάθε χρόνο ώστε να περιλαμβάνουν τις αλλαγές που ανακοινώνει το Υπουργείο Παιδείας.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">ΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧ</h3>
                    <p className="text-lg">
                      Εναρμονίζονται πλήρως με την λογική των θεμάτων των εξετάσεων αποφεύγοντας κάθε
                      είδους υπερβολή συμπληρώνοντας τα σχολικά συγγράμματα, ενισχύοντας τη μάθηση και
                      προετοιμάζοντας τους μαθητές για τις εξετάσεις.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-12 space-y-6">
          {/* Top row: 2 images side by side */}
          <div className="flex flex-wrap justify-center gap-6">
            <img src={book1} alt="Image 1" className="w-1/4 h-auto rounded-lg" />
            <img src={book2} alt="Image 2" className="w-1/4 h-auto rounded-lg" />
          </div>

          {/* Bottom row: 1 larger image */}
          <div className="mt-6 flex justify-center">
            <img src={allbooks} alt="Image 3" className="w-3/4 max-w-5xl h-auto object-cover rounded-lg" />
          </div>
        </div>
      </section>
      {/* Books Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/*<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {books.map((category, index) => (
                <Card key={index} className="border-2 hover:border-accent transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">
                      {category.level}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.items.map((book, idx) => (
                        <li key={idx} className="flex items-center justify-between gap-4 p-3 rounded-lg bg-secondary/20">
                          <span className="text-foreground">{book}</span>
                          <Download className="w-5 h-5 text-accent flex-shrink-0" />
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>*/}

            <div className="mt-12 text-center">
              <Card className="max-w-3xl mx-auto border-2 border-accent/50">
                <CardContent className="py-8">
                  <p className="text-lg text-muted-foreground mb-6">
                    Τα βιβλία μας είναι προσαρμοσμένα στις ανάγκες των μαθητών και ακολουθούν το εκπαιδευτικό πρόγραμμα
                  </p>
                  <Link to="/contact" >
                    <Button size="lg" className="bg-accent hover:bg-accent/90 h-auto whitespace-normal text-center py-3">
                      Επικοινωνήστε για Περισσότερες Πληροφορίες
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Books;
