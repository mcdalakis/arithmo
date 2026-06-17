import { ExternalLink, BookOpen, GraduationCap, Calculator } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EducationalLinks = () => {
  const links = [
    {
      category: "Υπουργείο Παιδείας",
      icon: GraduationCap,
      items: [
        { title: "Υπουργείο Παιδείας και Θρησκευμάτων", url: "https://www.minedu.gov.gr/" },
        { title: "Ινστιτούτο Εκπαιδευτικής Πολιτικής", url: "https://www.iep.edu.gr/" },
      ]
    },
    {
      category: "Μαθηματικά",
      icon: Calculator,
      items: [
        { title: "Ελληνική Μαθηματική Εταιρεία", url: "https://www.hms.gr/" },
        { title: "Mathαίνω - Ψηφιακή Πλατφόρμα", url: "https://matheno.schools.ac.cy/" },
        { title: "Khan Academy - Μαθηματικά", url: "https://el.khanacademy.org/" },
      ]
    },
    {
      category: "Εκπαιδευτικοί Οργανισμοί",
      icon: BookOpen,
      items: [
        { title: "Ο.Ε.Φ.Ε.", url: "https://www.oefe.gr/" },
        { title: "Διεύθυνση Β/θμιας Εκπαίδευσης Αθήνας", url: "https://dipe-a-ath.att.sch.gr/" },
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ExternalLink className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h1 className="text-5xl font-bold mb-6">Εκπαιδευτικές Συνδέσεις</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Χρήσιμοι εκπαιδευτικοί σύνδεσμοι για μαθητές και γονείς
            </p>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {links.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="border-2 hover:border-accent transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-center gap-3">
                      <Icon className="w-7 h-7 text-accent" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.items.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-all group"
                        >
                          <span className="text-foreground font-medium">{link.title}</span>
                          <ExternalLink className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationalLinks;
