import { Link2, School, FileText, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UsefulLinks = () => {
  const links = [
    {
      category: "Πανελλαδικές Εξετάσεις",
      icon: School,
      items: [
        { title: "Θέματα Εθνικών Εξετάσεων 2025", url: "https://www.oefe.gr/el/static/panelladikes.aspx" },
        { title: "Υπολογισμός Μορίων", url: "/moira-calculator" },
        { title: "Οδηγός Σπουδών", url: "https://www.minedu.gov.gr/" },
      ]
    },
    {
      category: "Φοιτητικά",
      icon: FileText,
      items: [
        { title: "Πανελλήνια Ένωση Φοιτητών", url: "https://www.efee.gr/" },
        { title: "ΙΚΥ - Υποτροφίες", url: "https://www.iky.gr/" },
        { title: "ΔΟΑΤΑΠ - Αναγνώριση Τίτλων", url: "https://www.doatap.gr/" },
      ]
    },
    {
      category: "Ημερολόγιο",
      icon: Calendar,
      items: [
        { title: "Σχολικό Ημερολόγιο", url: "https://www.minedu.gov.gr/" },
        { title: "Εξεταστική Περίοδος", url: "https://www.minedu.gov.gr/" },
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link2 className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h1 className="text-5xl font-bold mb-6">Χρήσιμες Συνδέσεις</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Σύνδεσμοι που θα σας φανούν χρήσιμοι κατά τη διάρκεια των σπουδών σας
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
                          target={link.url.startsWith('/') ? undefined : "_blank"}
                          rel={link.url.startsWith('/') ? undefined : "noopener noreferrer"}
                          className="flex items-center justify-between p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-all group"
                        >
                          <span className="text-foreground font-medium">{link.title}</span>
                          <Link2 className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
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

export default UsefulLinks;
