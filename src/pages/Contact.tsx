import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Highlighter } from "@/components/ui/highlighter"
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_0k76p63",   // Replace with your EmailJS service ID
      "template_vd7e3dc",  // Replace with your EmailJS template ID
      e.currentTarget,     // Pass the form element
      "CZTOYgnHTJFY8rArO"    // Replace with your EmailJS public key
    )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Το μήνυμά σας εστάλη επιτυχώς! Θα επικοινωνήσουμε σύντομα μαζί σας.");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          e.currentTarget.reset(); // clear the form
        },
        (error) => {
          console.log(error.text);
          toast.error("Σφάλμα κατά την αποστολή μηνύματος. Προσπαθήστε ξανά.");
        }
      );
  };


  const contactInfo = [
    {
      icon: MapPin,
      title: "Διεύθυνση",
      details: ["Παναγή Τσαλδάρη 21", "Μελίσσια, Αθήνα"],
    },
    {
      icon: Phone,
      title: "Τηλέφωνο",
      details: ["210-8043136"],
      href: "tel:2108043136"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["snarithmo@gmail.com"],
    },
    {
      icon: Clock,
      title: "Άδεια Λειτουργίας",
      details: ["Ειδικός κωδικός: 2202580", "Μέλος της Ο.Ε.Φ.Ε."],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-hero-gradient text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Επικοινωνήστε Μαζί μας</h1>
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
                Είμαστε εδώ να απαντήσουμε σε κάθε σας ερώτηση και να σας βοηθήσουμε
              </Highlighter>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary mb-8">
                Πληροφορίες Επικοινωνίας
              </h2>

              {contactInfo.map((info, index) => {
                const cardContent = (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );

                return (
                  <Card key={index} className="border-2 hover:border-accent transition-all duration-300">
                    {info.href ? (
                      <a href={info.href} className="block p-6">
                        {cardContent}
                      </a>
                    ) : (
                      <CardContent className="p-6">
                        {cardContent}
                      </CardContent>
                    )}
                  </Card>
                );
              })}

              {/* Map Placeholder */}
              <Card className="border-2 overflow-hidden h-96">
                {/*<ContactMap />*/}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.123456!2d23.817!3d38.015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1abcd123456%3A0x1234567890abcd!2sPanagi%20Tsaldari%2021%2C%20Melissia!5e0!3m2!1sen!2sgr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Στείλτε μας Μήνυμα
              </h2>

              <Card className="border-2">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Ονοματεπώνυμο *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Το όνομά σας"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Τηλέφωνο
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="XXXXXXXXXX"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Μήνυμα *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Πείτε μας πώς μπορούμε να σας βοηθήσουμε..."
                        className="w-full min-h-32"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
                    >
                      Αποστολή Μηνύματος
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-secondary/100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Έχετε Ερωτήσεις;
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Μπορείτε να επισκεφθείτε το φροντιστήριό μας για να γνωρίσετε τους καθηγητές,
              να δείτε τις εγκαταστάσεις μας και να λάβετε περισσότερες πληροφορίες για
              τα προγράμματά μας. Θα χαρούμε να σας υποδεχτούμε!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
