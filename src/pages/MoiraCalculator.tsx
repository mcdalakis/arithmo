import { Calculator, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";

const MoiraCalculator = () => {
  const [grades, setGrades] = useState({
    mathGeneral: "",
    mathOrientation: "",
    physics: "",
    grade3: "",
  });

  const [result, setResult] = useState<number | null>(null);

  const calculateMoira = () => {
    const total = 
      (parseFloat(grades.mathGeneral) || 0) * 0.7 +
      (parseFloat(grades.mathOrientation) || 0) * 1.3 +
      (parseFloat(grades.physics) || 0) * 0.4 +
      (parseFloat(grades.grade3) || 0) * 0.3;
    
    setResult(total);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Calculator className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h1 className="text-5xl font-bold mb-6">Υπολογισμός Μορίων 2025</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Υπολογίστε τα μόρια σας για τις Πανελλαδικές Εξετάσεις
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-accent/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Υπολογισμός Μορίων
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Εισάγετε τους βαθμούς σας (0-20) στα παρακάτω μαθήματα
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="mathGeneral">Μαθηματικά Γενικής Παιδείας (συντελεστής 0.7)</Label>
                    <Input
                      id="mathGeneral"
                      type="number"
                      min="0"
                      max="20"
                      step="0.5"
                      value={grades.mathGeneral}
                      onChange={(e) => setGrades({ ...grades, mathGeneral: e.target.value })}
                      placeholder="π.χ. 18.5"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="mathOrientation">Μαθηματικά Κατεύθυνσης (συντελεστής 1.3)</Label>
                    <Input
                      id="mathOrientation"
                      type="number"
                      min="0"
                      max="20"
                      step="0.5"
                      value={grades.mathOrientation}
                      onChange={(e) => setGrades({ ...grades, mathOrientation: e.target.value })}
                      placeholder="π.χ. 17.0"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="physics">Φυσική (συντελεστής 0.4)</Label>
                    <Input
                      id="physics"
                      type="number"
                      min="0"
                      max="20"
                      step="0.5"
                      value={grades.physics}
                      onChange={(e) => setGrades({ ...grades, physics: e.target.value })}
                      placeholder="π.χ. 16.0"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="grade3">3ο Μάθημα (συντελεστής 0.3)</Label>
                    <Input
                      id="grade3"
                      type="number"
                      min="0"
                      max="20"
                      step="0.5"
                      value={grades.grade3}
                      onChange={(e) => setGrades({ ...grades, grade3: e.target.value })}
                      placeholder="π.χ. 15.5"
                      className="mt-2"
                    />
                  </div>
                </div>

                <Button 
                  onClick={calculateMoira} 
                  className="w-full bg-accent hover:bg-accent/90"
                  size="lg"
                >
                  Υπολογισμός Μορίων
                </Button>

                {result !== null && (
                  <div className="mt-6 p-6 rounded-lg bg-accent/10 border-2 border-accent">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-2">Συνολικά Μόρια</div>
                      <div className="text-4xl font-bold text-accent">{result.toFixed(2)}</div>
                    </div>
                  </div>
                )}

                <Alert className="mt-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Αυτός είναι ένας ενδεικτικός υπολογισμός. Για ακριβή υπολογισμό συμβουλευτείτε τον επίσημο οδηγό του Υπουργείου Παιδείας.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoiraCalculator;
