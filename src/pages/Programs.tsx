import React, { useState, useRef, useEffect, useId } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import styled from 'styled-components';
import { Highlighter } from "@/components/ui/highlighter"

const GlassRadioGroup = ({ options, value, onValueChange, name }) => {
  const selectedIndex = options.findIndex(opt => opt.value === value);

  const gliderStyle = {
    width: `calc(100% / ${options.length})`,
    transform: `translateX(${selectedIndex * 100}%)`,
  };

  return (
    <StyledGlassRadioWrapper>
      <div className="glass-radio-group">
        {options.map((option) => (
          <React.Fragment key={option.value}>
            <input
              type="radio"
              name={name}
              id={option.value}
              checked={option.value === value}
              onChange={() => onValueChange(option.value)}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </React.Fragment>
        ))}
        {selectedIndex !== -1 && <div className="glass-glider" style={gliderStyle} />}
      </div>
    </StyledGlassRadioWrapper>
  );
};

const StyledGlassRadioWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 100%;

  @media (max-width: 639px) { /* Below sm breakpoint */
    justify-content: center;
  }

  .glass-radio-group {
    --bg: hsl(var(--secondary));
    --text: hsl(var(--muted-foreground));
    --text-hover: hsl(var(--primary));
    --text-active: hsl(var(--accent-foreground));

    display: flex;
    position: relative;
    background: var(--bg);
    border-radius: 1rem;
    padding: 4px;
    box-shadow:
      inset 1px 1px 4px rgba(0, 0, 0, 0.05),
      0 4px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    width: 100%;
    width: fit-content;
  }

  .glass-radio-group input {
    display: none;
  }

  .glass-radio-group label {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: auto;
    min-width: 90px; /* Adjusted for better mobile centering */
    font-size: 0.875rem; /* 14px */
    padding: 0.6rem 0.8rem;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.3px;
    color: var(--text);
    position: relative;
    z-index: 2;
    transition: all 0.3s ease-in-out;

    @media (min-width: 640px) { /* sm breakpoint */
      min-width: 140px;
      font-size: 1rem; /* 16px */
      padding: 0.6rem 1.2rem;
    }
  }

  .glass-radio-group label:hover {
    color: var(--text-hover);
  }

  .glass-radio-group input:checked + label {
    color: var(--text-active);
  }


  .glass-glider {
    position: absolute;
    top: 4px;
    bottom: 4px;
    border-radius: 0.75rem;
    z-index: 1;
    background: hsl(var(--accent));
    box-shadow: 0 0 18px hsla(var(--accent) / 0.5);
    transition:
      transform 0.4s cubic-bezier(0.45, 0, 0.05, 1);
  }
`;

// Placeholder images - replace with your actual image imports
import gymnasioImg from "@/assets/gymnasio.jpg";
import aLykeiouImg from "@/assets/a-lykeiou.jpg";
import bLykeiouImg from "@/assets/b-lykeiou.jpg";
import gLykeiouImg from "@/assets/g-lykeiou.jpg";

const Programs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [bLykeiouSubTab, setBLykeiouSubTab] = useState<string>("summer");
  const programsSectionRef = useRef<HTMLElement>(null);
  const programCategories = [
    {
      level: "Α' Γυμνασίου",
      value: "gymnasio",
      grades: ["Μαθηματικά", "Ελληνικά - Έκθεση", "Αρχαία"],
      description: "Θεμελίωση και ενδυνάμωση στα βασικά μαθηματικά για το Γυμνάσιο",
      features: [
        "Κάλυψη όλης της ύλης του σχολείου",
        "Προετοιμασία για διαγωνίσματα",
        "Ενίσχυση αδύναμων σημείων",
        "Ανάπτυξη μεθοδολογίας επίλυσης προβλημάτων",
      ],
      schedule: "Σύνολο Ωρών: 3,5 ",
      detailedSchedule: [
        "Μαθηματικά: 1,5 Ώρες",
        "Ελληνικά: 1 Ώρα",
        "Αρχαία: 1 Ώρα",
      ],
      groupSize: "Έως 8 μαθητές",
    },
    {
      level: "Β' Γυμνασίου",
      value: "gymnasio",
      grades: ["Φυσική", "Μαθηματικά", "Ελληνικά - Έκθεση", "Αρχαία", "Χημεία"],
      description: "Θεμελίωση και ενδυνάμωση στα βασικά μαθηματικά για το Γυμνάσιο",
      features: [
        "Κάλυψη όλης της ύλης του σχολείου",
        "Προετοιμασία για διαγωνίσματα",
        "Ενίσχυση αδύναμων σημείων",
        "Ανάπτυξη μεθοδολογίας επίλυσης προβλημάτων",
      ],
      schedule: "Σύνολο Ωρών: 5,5 ",
      detailedSchedule: [
        "Φυσική: 1 Ώρα",
        "Μαθηματικά: 1,5 Ώρα",
        "Ελληνικά: 1 Ώρα",
        "Αρχαία: 1 Ώρα",
        "Χημεία: 1 Ώρα",
      ],
      groupSize: "Έως 8 μαθητές",
    },
    {
      level: "Γ' Γυμνασίου",
      value: "gymnasio",
      grades: ["Φυσική", "Μαθηματικά", "Ελληνικά - Έκθεση", "Αρχαία", "Χημεία"],
      description: "Θεμελίωση και ενδυνάμωση στα βασικά μαθηματικά για το Γυμνάσιο",
      features: [
        "Κάλυψη όλης της ύλης του σχολείου",
        "Προετοιμασία για διαγωνίσματα",
        "Ενίσχυση αδύναμων σημείων",
        "Ανάπτυξη μεθοδολογίας επίλυσης προβλημάτων",
      ],
      schedule: "Σύνολο Ωρών: 5,5 ",
      detailedSchedule: [
        "Φυσική: 1 Ώρα",
        "Μαθηματικά: 1,5 Ώρα",
        "Ελληνικά: 1 Ώρα",
        "Αρχαία: 1 Ώρα",
        "Χημεία: 1 Ώρα",
      ],
      groupSize: "Έως 8 μαθητές",
    },
    {
      level: "Α' Λυκείου - Θερινό Πρόγραμμα Προετοιμασίας",
      value: "a-lykeiou",
      grades: ["Φυσική", "Αλγεβρα", "Αρχαία Ελληνικά"],
      description: "Προετοιμασία για τη μετάβαση στο Λύκειο και εμπέδωση βάσεων",
      features: [
        "4εις κύκλοι διαγωνισμάτων",
        "Τακτική επικοινωνία για την πρόοδο του μαθητή",
        "Άμεση ενημέωση σε περίπτωση απουσίας",
        "Οι διδακτικές ώρες είναι 60 λεπτά και όχι 45 λεπτά",
      ],
      schedule: "Σύνολο Ωρών: 5 ",
      detailedSchedule: [
        "Φυσική: 1,5 Ώρες",
        "Αλγεβρα: 2 Ώρες",
        "Αρχαία Ελληνικά: 1,5 Ώρα",
      ],
      groupSize: "Έως 10 μαθητές",
    },
    {
      level: "Α' Λυκείου - Χειμερινό Πρόγραμμα",
      value: "a-lykeiou",
      grades: ["Φυσική", "Αλγεβρα", "Γεωμετρία", "Χημεία", "Έκθεση", "Αρχαία Ελληνικά"],
      description: "Συστηματική παρακολούθηση της σχολικής ύλης",
      features: [
        "Κάλυψη όλης της ύλης του σχολείου",
        "Προετοιμασία για διαγωνίσματα",
        "Λύση ασκήσεων από το βιβλίο"
      ],
      schedule: "Σύνολο Ωρών: 8,5 ",
      detailedSchedule: [
        "Φυσική: 1,5 Ώρα",
        "Αλγεβρα: 2 Ώρες",
        "Γεωμετρία: 1 Ώρα",
        "Χημεία: 1 Ώρα",
        "Έκθεση: 1,5 Ώρα",
        "Αρχαία Ελληνικά: 1,5 Ώρα",
      ],
      groupSize: "Έως 10 μαθητές",
    },
    {
      level: "Β' Λυκείου - Θερινό Πρόγραμμα Προετοιμασίας - Θετικές Επιστήμες",
      value: "b-lykeiou",
      grades: ["Φυσική Προσανατολισμού", "Χημεία", "Μαθηματικά"],
      description: "Προετοιμασία για τη Β' Λυκείου",
      features: [
        "Επανάληψη βασικών εννοιών Α' Λυκείου",
        "Εισαγωγή στην ύλη Β' Λυκείου",
        "ΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧ",
        "Προσομοιώσεις εξετάσεων",
      ],
      schedule: "Σύνολο Ωρών: 6 ",
      detailedSchedule: [
        "Φυσική Προσανατολισμού: 2 Ώρες",
        "Χημεία: 1 Ώρα",
        "Μαθηματικά: 3 Ώρες",
      ],
      groupSize: "Έως 10 μαθητές",
    },
    {
      level: "Β' Λυκείου - Θερινό Πρόγραμμα Προετοιμασίας - Σπουδών Οικονομίας και Πληροφορικής",
      value: "b-lykeiou",
      grades: ["Α.Ε.Π.Π. - Πληροφορική", "Μαθηματικά Προσανατολισμού", "Α.Ο.Θ. - Οικονομία"],
      description: "Προετοιμασία για τη Β' Λυκείου",
      features: [
        "Επανάληψη βασικών εννοιών Α' Λυκείου",
        "Εισαγωγή στην ύλη Β' Λυκείου",
        "ΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧ",
        "Προσομοιώσεις εξετάσεων",
      ],
      schedule: "Σύνολο Ωρών: 5 ",
      detailedSchedule: [
        "Α.Ε.Π.Π. : 1 Ώρα",
        "Μαθηματικά Προσανατολισμού: 3 Ώρες",
        "Α.Ο.Θ. : 1 Ώρα",
      ],
      groupSize: "Έως 10 μαθητές",
    },
    {
      level: "Β' Λυκείου - Θερινό Πρόγραμμα Προετοιμασίας - Επιστήμες Υγείας",
      value: "b-lykeiou",
      grades: ["Φυσική Προσανατολισμού", "Χημεία", "Μαθηματικά"],
      description: "Προετοιμασία για τη Β' Λυκείου",
      features: [
        "Επανάληψη βασικών εννοιών Α' Λυκείου",
        "Εισαγωγή στην ύλη Β' Λυκείου",
        "ΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧ",
        "Προσομοιώσεις εξετάσεων",
      ],
      schedule: "Σύνολο Ωρών: 6 ",
      detailedSchedule: [
        "Φυσική Προσανατολισμού: 2 Ώρες",
        "Χημεία: 1 Ώρα",
        "Μαθηματικά: 3 Ώρες",
      ],
      groupSize: "Έως 10 μαθητές",
    },
    {
      level: "Β' Λυκείου - Θερινό Πρόγραμμα Προετοιμασίας - Ανθρωπιστικές Σπουδές",
      value: "b-lykeiou",
      grades: ["Αρχαία", "Έκθεση-Λογοτεχνία"],
      description: "Προετοιμασία για τη Β' Λυκείου",
      features: [
        "Επανάληψη βασικών εννοιών Α' Λυκείου",
        "Εισαγωγή στην ύλη Β' Λυκείου",
        "ΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧ",
        "Προσομοιώσεις εξετάσεων",
      ],
      schedule: "Σύνολο Ωρών: 5 ",
      detailedSchedule: [
        "Αρχαία: 3 Ώρες",
        "Έκθεση-Λογοτεχνία: 2 Ώρες",
      ],
      groupSize: "Έως 10 μαθητές",
    },
    {
      level: "Β' Λυκείου - Χειμερινό Πρόγραμμα - Θετικές Επιστήμες",
      value: "b-lykeiou",
      grades: ["Φυσική", "Χημεία", "Έκθεση-Λογοτεχνία", "Μαθηματικά"],
      description: "Συστηματική παρακολούθηση με ειδική προσοχή στα Μαθηματικά Κατεύθυνσης",
      features: [
        "Πλήρης κάλυψη σχολικής ύλης",
        "Ειδική προσοχή στα Μαθηματικά Κατεύθυνσης",
        "Εβδομαδιαία διαγωνίσματα",
        "Προσομοιώσεις εξετάσεων",
      ],
      schedule: "Σύνολο Ωρών: 10,5 ",
      detailedSchedule: [
        "Φυσική Προσονατολισμού Β΄Λυκείου: 2 Ώρες",
        "Φυσική Γ' Λυκείου: 1 Ώρα",
        "Χημεία: 1,5 Ώρα",
        "Έκθεση-Λογοτεχνία: 2 Ώρες",
        "Άλγεβρα Β΄Λυκείου: 1,5 Ώρα",
        "Μαθηματικά Προσανατολισμού Β' Λυκείου: 1,5 Ώρα",
        "Μαθηματικά Γ' Λυκείου: 1 Ώρα",
      ],
      groupSize: "Έως 10 μαθητές",
    },
    {
      level: "Β' Λυκείου - Χειμερινό Πρόγραμμα - Επιστήμες Υγείας",
      value: "b-lykeiou",
      grades: ["Φυσική", "Χημεία", "Έκθεση-Λογοτεχνία", "Βιολογία"],
      description: "ΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧ",
      features: [
        "Πλήρης κάλυψη σχολικής ύλης",
        "Ειδική προσοχή στα Μαθηματικά Κατεύθυνσης",
        "Εβδομαδιαία διαγωνίσματα",
        "Προσομοιώσεις εξετάσεων",
      ],
      schedule: "Σύνολο Ωρών: 7,5",
      detailedSchedule: [
        "Φυσική Προσονατολισμού Β΄Λυκείου: 2 Ώρες",
        "Φυσική Γ' Λυκείου: 1 Ώρα",
        "Χημεία: 1,5 Ώρα",
        "Έκθεση-Λογοτεχνία: 2 Ώρες",
        "Βιολογία: 1 Ώρα",
      ],
      groupSize: "Έως 10 μαθητές",
    },
    {
      level: "Β' Λυκείου - Χειμερινό Πρόγραμμα - Οικονομικών Σπουδών",
      value: "b-lykeiou",
      grades: ["Α.Ε.Π.Π. (Γ΄Λυκείου)", "Α.Ο.Θ. (Γ΄Λυκείου)", "Έκθεση-Λογοτεχνία", "Μαθηματικά"],
      description: "ΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧ",
      features: [
        "Πλήρης κάλυψη σχολικής ύλης",
        "Ειδική προσοχή στα Μαθηματικά Κατεύθυνσης",
        "Εβδομαδιαία διαγωνίσματα",
        "Προσομοιώσεις εξετάσεων",
      ],
      schedule: "Σύνολο Ωρών: 8",
      detailedSchedule: [
        "Α.Ε.Π.Π. (Γ΄Λυκείου): 1 Ώρα",
        "Α.Ο.Θ. (Γ΄Λυκείου): 1 Ώρα",
        "Έκθεση-Λογοτεχνία: 2 Ώρες",
        "Άλγεβρα Β΄Λυκείου: 1,5 Ώρα",
        "Μαθηματικά Προσανατολισμού Β' Λυκείου: 1,5 Ώρα",
        "Μαθηματικά Γ' Λυκείου: 1 Ώρα",
      ],
      groupSize: "Έως 10 μαθητές",
    },
    {
      level: "Β' Λυκείου - Χειμερινό Πρόγραμμα - Ανθρωπιστικών Σπουδών",
      value: "b-lykeiou",
      grades: ["Αρχαία", "Ιστορία (Γ' Λυκείου)", "Έκθεση-Λογοτεχνία", "Λατινικά"],
      description: "ΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧΧ",
      features: [
        "Πλήρης κάλυψη σχολικής ύλης",
        "Ειδική προσοχή στα Μαθηματικά Κατεύθυνσης",
        "Εβδομαδιαία διαγωνίσματα",
        "Προσομοιώσεις εξετάσεων",
      ],
      schedule: "Σύνολο Ωρών: 8",
      detailedSchedule: [
        "Αρχαία: 4 Ώρες",
        "Ιστορία (Γ' Λυκείου): 1 Ώρα",
        "Έκθεση-Λογοτεχνία: 2 Ώρες",
        "Λατινικά: 1 Ώρα",
      ],
      groupSize: "Έως 10 μαθητές",
    },
    {
      level: "Γ' Λυκείου - Θετικών Σπουδών",
      value: "g-lykeiou",
      grades: ["Φυσική Προσανατολισμού", "Χημεία", "Μαθηματικά", "Νεοοελληνική Γλώσσα"],
      description: "Ολοκληρωμένη προετοιμασία για τις Πανελλαδικές Εξετάσεις",
      features: [
        "Πλήρης κάλυψη της ύλης",
        "Εβδομαδιαία προσομοιωμένα διαγωνίσματα",
        "Στοχευμένη προετοιμασία ανά κεφάλαιο",
        "Επανάληψη όλης της ύλης τριετίας",
        "Λύση θεμάτων παλαιότερων ετών"
      ],
      schedule: "Σύνολο Ωρών: 13,5 ",
      detailedSchedule: [
        "Φυσική Προσανατολισμού: 4 Ώρες",
        "Χημεία: 3 Ώρες",
        "Μαθηματικά: 4 Ώρες",
        "Νεοελληνική Γλώσσα: 2,5 Ώρες"
      ],
      groupSize: "Έως 12 μαθητές",
      highlight: false,
    },
    {
      level: "Γ' Λυκείου - Σπουδών Οικονομίας και Πληροφορικής",
      value: "g-lykeiou",
      grades: ["Α.Ε.Π.Π. - Πληροφορική", "Α.Ο.Θ. - Οικονομία", "Μαθηματικά", "Νεοοελληνική Γλώσσα"],
      description: "Ολοκληρωμένη προετοιμασία για τις Πανελλαδικές Εξετάσεις",
      features: [
        "Πλήρης κάλυψη της ύλης",
        "Εβδομαδιαία προσομοιωμένα διαγωνίσματα",
        "Στοχευμένη προετοιμασία ανά κεφάλαιο",
        "Επανάληψη όλης της ύλης τριετίας",
        "Λύση θεμάτων παλαιότερων ετών"
      ],
      schedule: "Σύνολο Ωρών: 12,5 ",
      detailedSchedule: [
        "Α.Ε.Π.Π. : 3 Ώρες",
        "Α.Ο.Θ. : 3 Ώρες",
        "Μαθηματικά: 4 Ώρες",
        "Νεοελληνική Γλώσσα: 2,5 Ώρες"
      ],
      groupSize: "Έως 12 μαθητές",
      highlight: false,
    },
    {
      level: "Γ' Λυκείου - Σπουδών Υγείας και Ζωής",
      value: "g-lykeiou",
      grades: ["Φυσική Προσανατολισμού", "Χημεία", "Βιολογία", "Νεοοελληνική Γλώσσα"],
      description: "Ολοκληρωμένη προετοιμασία για τις Πανελλαδικές Εξετάσεις",
      features: [
        "Πλήρης κάλυψη της ύλης",
        "Εβδομαδιαία προσομοιωμένα διαγωνίσματα",
        "Στοχευμένη προετοιμασία ανά κεφάλαιο",
        "Επανάληψη όλης της ύλης τριετίας",
        "Λύση θεμάτων παλαιότερων ετών"
      ],
      schedule: "Σύνολο Ωρών: 12,5 ",
      detailedSchedule: [
        "Φυσική Προσανατολισμού: 4 Ώρες",
        "Χημεία: 3 Ώρες",
        "Βιολογία: 3 Ώρες",
        "Νεοελληνική Γλώσσα: 2,5 Ώρες"
      ],
      groupSize: "Έως 12 μαθητές",
      highlight: false,
    },
    {
      level: "Γ' Λυκείου - Ανθρωπιστικών Σπουδών",
      value: "g-lykeiou",
      grades: ["Αρχαία Ελληνικά", "Ιστορία", "Λατινικά", "Νεοοελληνική Γλώσσα"],
      description: "Ολοκληρωμένη προετοιμασία για τις Πανελλαδικές Εξετάσεις",
      features: [
        "Πλήρης κάλυψη της ύλης",
        "Εβδομαδιαία προσομοιωμένα διαγωνίσματα",
        "Στοχευμένη προετοιμασία ανά κεφάλαιο",
        "Επανάληψη όλης της ύλης τριετίας",
        "Λύση θεμάτων παλαιότερων ετών"
      ],
      schedule: "Σύνολο Ωρών: 12 ",
      detailedSchedule: [
        "Αρχαία Ελληνικά: 5 Ώρες",
        "Ιστορία: 2,5 Ώρες",
        "Λατινικά: 2,5 Ώρες",
        "Νεοελληνική Γλώσσα: 2,5 Ώρες"
      ],
      groupSize: "Έως 12 μαθητές",
      highlight: false,
    },
  ];

  const tabInfo = [
    { value: "gymnasio", title: "Γυμνάσιο", description: "Οι μαθητές του Γυμνασίου πρέπει να αποκτήσουν στέρεες βάσεις κατανοώντας την χρήση και την δομή της Νεοελληνικής Γλώσσας και να αναπτύξουν βασική μαθηματική σκέψη. Αυτό γίνεται με ένα ολιγόωρο πρόγραμμα που δίνει έμφαση στις αποδοτικές μεθόδους μελέτης και στην οργάνωση του διαβάσματος. Έτσι, ο μαθητής αποκτά περισσότερη αυτοπεποίθηση και βλέπει τη μάθηση ως κάτι πιο ευχάριστο και δημιουργικό.", image: gymnasioImg },
    { value: "a-lykeiou", title: "Α' Λυκείου", description: "Οι μαθητές που θα φοιτήσουν ή φοιτούν στην Α΄ Λυκείου, με βάση τις απαιτήσεις του εξεταστικού συστήματος της τάξης τους, θα πρέπει:\n• Να καλλιεργήσουν κουλτούρα υποψήφιου, αποκτώντας οργάνωση και μεθοδικότητα στην μελέτη τους.\n• Να αναπτύξουν ευχέρεια στην αντιμετώπιση ζητημάτων τύπου Πανελλαδικών εξετάσεων, εμβαθύνοντας στην ύλη του κάθε μαθήματος.\n• Να εξοικειωθούν στις γραπτές εξετάσεις μέσα από τους κύκλους των σταθμισμένων διαγωνισμάτων.\n• Να εκπαιδευτούν στη στρατηγική σωστής διαχείρισης χρόνου για την αντιμετώπιση ενός διαγωνίσματος.", image: aLykeiouImg },
    { value: "b-lykeiou", title: "Β' Λυκείου", description: "Η χρονιά φοίτησης στην Β΄ Λυκείου είναι πολύ σημαντική για την προετοιμασία των μαθητών ώστε να φτάσουν Γ΄ Λυκείου με σιγουρία και αυτοπεποίθηση. Έτσι πρέπει:\n• Ο μαθητής πρέπει να κατανοήσει σε βάθος την εξεταστέα ύλη και να καλύψει κενά που ίσως υπάρχουν.\n• Με εξάσκηση, καθοδήγηση, συνεχείς στοχευμένες επαναλήψεις και τακτικά διαγωνίσματα ο μαθητής να φτάσει στην επόμενη τάξη των Πανελληνίων εξετάσεων με όσο το δυνατόν πιο ομαλό τρόπο.", image: bLykeiouImg },
    { value: "g-lykeiou", title: "Γ' Λυκείου", description: "Ο μαθητής έχει να διανύσει την τελική ευθεία μιας δύσκολης πορείας που έχει ξεκινήσει αρκετά χρόνια πριν ώστε να φτάσει στον τελικό στόχο, την εισαγωγή του στη σχολή που επιθυμεί.\nΗ ύλη των Πανελληνίων είναι μεγάλη και απαιτητική και σε αυτή τη φάση τίποτα δεν αφήνεται στην τύχη και κάθε βοήθεια κάνει τη διαφορά.\n• Συνεχής ψυχολογική υποστήριξη γιατί η επιτυχία στις Πανελλήνιες δεν χτίζεται μόνο με γνώσεις, αλλά και με ψυχική ισορροπία, πίστη στις δυνατότητές μας και ηρεμία.\n• Μεθοδική καθοδήγηση, σωστός προγραμματισμός και συνεχής αξιολόγηση.\n• Ο μαθητής μαθαίνει να οργανώνεται, να εμβαθύνει στη γνώση, να αυτενεργεί και τελικά να αποκτά την αυτοπεποίθηση που χρειάζεται για να πετύχει στις εξετάσεις.\n• Έγκαιρη κάλυψη της ύλης ώστε να υπάρχει επαρκής χρόνος για επαναλήψεις.\n• Εξοικείωση στις γραπτές εξετάσεις μέσα από τους κύκλους των διαγωνισμάτων του Αριθμώ.\n• Να εκπαιδευτούν σε τεχνικές διαχείρισης χρόνου.", image: gLykeiouImg },
  ];

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const filteredPrograms = activeTab
    ? programCategories.filter((p) => {
      if (p.value !== activeTab) {
        return false;
      }
      if (activeTab === 'b-lykeiou') {
        if (bLykeiouSubTab === 'summer') {
          return p.level.includes('Θερινό');
        }
        if (bLykeiouSubTab === 'winter') {
          return p.level.includes('Χειμερινό');
        }
      }
      return true;
    })
    : [];

  const handleInitialTabClick = (value: string) => {
    setActiveTab(value);
    programsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    if (location.state?.reset) {
      setActiveTab(null);
      navigate(location.pathname, { replace: true, state: {} });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (location.state?.tab) {
      setActiveTab(location.state.tab);
      navigate(location.pathname, { replace: true, state: {} });
      if (programsSectionRef.current) {
        programsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location, navigate]);

  const mainRadioName = useId();
  const subRadioName = useId();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-hero-gradient text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Τα Προγράμματά μας</h1>
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
                Προσαρμοσμένα προγράμματα για κάθε τάξη και επίπεδο, με στόχο την επιτυχία
              </Highlighter>
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section ref={programsSectionRef} className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div>
              {!activeTab ? (
                // Initial expanded view
                <div className="space-y-6">
                  {tabInfo.map((tab) => (
                    <button
                      key={tab.value}
                      onClick={() => handleInitialTabClick(tab.value)}
                      className="w-full text-left border-2 rounded-lg hover:border-accent hover:shadow-lg transition-all duration-300 bg-card overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 items-center">
                        <div className="md:col-span-1 h-48 md:h-full">
                          <img src={tab.image} alt={tab.title} className="w-full h-full object-cover md:rounded-l-lg md:rounded-r-none" />
                        </div>
                        <div className="md:col-span-2 p-6">
                          <h3 className="text-2xl font-bold text-primary mb-2">{tab.title}</h3>
                          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{tab.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                // Collapsed view with content
                <>
                  {/* Tabs Triggers */}
                  <GlassRadioGroup
                    name={mainRadioName}
                    value={activeTab}
                    onValueChange={handleTabChange}
                    options={tabInfo.map(tab => ({ value: tab.value, label: tab.title }))}
                  />

                  {/* B' Lykeiou Sub-tabs */}
                  {activeTab === 'b-lykeiou' && (
                    <GlassRadioGroup
                      name={subRadioName}
                      value={bLykeiouSubTab}
                      onValueChange={setBLykeiouSubTab}
                      options={[
                        { value: 'summer', label: 'Θερινά' },
                        { value: 'winter', label: 'Χειμερινά' },
                      ]}
                    />
                  )}

                  {/* Tabs Content */}
                  <div className="space-y-8 mt-8">
                    {filteredPrograms.map((cat) => (
                      <Card
                        key={cat.level}
                        className={`border-2 ${cat.highlight ? "border-accent shadow-xl" : "hover:border-accent"
                          } transition-all duration-300`}
                      >
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <CardTitle className="text-3xl text-primary mb-2">{cat.level}</CardTitle>
                              <div className="flex flex-wrap gap-2">
                                {cat.grades.map((grade, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-sm">
                                    {grade}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            {cat.highlight && <Badge className="bg-accent text-white">Προτεινόμενο</Badge>}
                          </div>
                          <p className="text-muted-foreground mt-4 text-lg break-words">{cat.description}</p>
                        </CardHeader>

                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Features */}
                            <div>
                              <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-accent" />
                                Χαρακτηριστικά
                              </h4>
                              <ul className="space-y-2">
                                {cat.features.map((feature, idx) => (
                                  <li key={idx} className="text-muted-foreground flex items-start gap-2 break-words">
                                    <span className="text-accent mt-1">•</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Details */}
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                  {cat.schedule}
                                </h4>
                                <div className="space-y-3">
                                  <div className="flex items-start gap-3 text-muted-foreground">
                                    <div>
                                      {cat.detailedSchedule && (
                                        <ul className="mt-2 space-y-1">
                                          {cat.detailedSchedule.map((time, idx) => (
                                            <li key={idx} className="text-sm text-muted-foreground">
                                              {time}
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Θέλετε περισσότερες πληροφορίες;
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Επικοινωνήστε μαζί μας για να μάθετε ποιο πρόγραμμα ταιριάζει καλύτερα στις ανάγκες σας
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-hero-gradient text-white hover:bg-white/90 font-semibold text-lg px-8 py-6 h-auto shadow-xl">
              Επικοινωνήστε Τώρα
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Programs;
