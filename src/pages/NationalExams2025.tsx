import { FileText, ExternalLink, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NationalExams2025 = () => {
  const subjects = [
    {
      name: "Μαθηματικά Γενικής Παιδείας",
      date: "Μάιος 2025",
      available: true
    },
    {
      name: "Μαθηματικά Κατεύθυνσης (Άλγεβρα)",
      date: "Μάιος 2025",
      available: true
    },
    {
      name: "Μαθηματικά Κατεύθυνσης (Γεωμετρία)",
      date: "Μάιος 2025",
      available: true
    },
    {
      name: "Φυσική Γενικής Παιδείας",
      date: "Μάιος 2025",
      available: true
    },
    {
      name: "Φυσική Κατεύθυνσης",
      date: "Μάιος 2025",
      available: true
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FileText className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h1 className="text-5xl font-bold mb-6">Θέματα Εθνικών Εξετάσεων 2025</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Τα επίσημα θέματα των Πανελλαδικών Εξετάσεων 2025
            </p>
          </div>
        </div>
      </section>

      {/* Exams Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-accent/50 mb-8">
              <CardContent className="py-6">
                <div className="flex items-start gap-4">
                  <ExternalLink className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Επίσημος Σύνδεσμος Ο.Ε.Φ.Ε.
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Για τα επίσημα θέματα και λύσεις των Πανελλαδικών Εξετάσεων, επισκεφθείτε τον επίσημο ιστότοπο της Ο.Ε.Φ.Ε.
                    </p>
                    <Button 
                      asChild
                      className="bg-accent hover:bg-accent/90"
                    >
                      <a 
                        href="https://www.oefe.gr/el/static/panelladikes.aspx" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Επίσκεψη στην Ο.Ε.Φ.Ε.
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Θέματα Εξετάσεων 2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {subjects.map((subject, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <FileText className="w-5 h-5 text-accent flex-shrink-0" />
                        <div>
                          <div className="font-medium text-foreground">{subject.name}</div>
                          <div className="text-sm text-muted-foreground">{subject.date}</div>
                        </div>
                      </div>
                      <button 
                        className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
                        disabled={!subject.available}
                      >
                        <Download className="w-5 h-5 text-accent" />
                      </button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8 border-2 border-accent/50">
              <CardContent className="py-6 text-center">
                <p className="text-muted-foreground">
                  Τα θέματα ενημερώνονται αμέσως μετά τη διεξαγωγή των εξετάσεων
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NationalExams2025;
