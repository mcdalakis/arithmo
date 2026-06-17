import React, { useState, useEffect, useId } from "react";
import { FileText, Calendar, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import excelUrl from "/data/exams.xlsx?url";
import * as XLSX from "xlsx";
import styled from 'styled-components';

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

  @media (max-width: 639px) { /* Below sm breakpoint */
    justify-content: flex-start;
    justify-content: center;
    overflow-x: auto;
    scrollbar-width: none; /* Firefox */
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

interface Exam {
  level: string;
  class: string;
  title: string;
  date: string;
  time: string;
}

const Exams = () => {
  const [examData, setExamData] = useState<Record<string, Record<string, Exam[]>>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("gymnasio");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(excelUrl);
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData: Exam[] = XLSX.utils.sheet_to_json(worksheet);

        // Group by level and then class
        const grouped: Record<string, Record<string, Exam[]>> = {};

        jsonData.forEach((exam) => {
          if (!exam.level || !exam.class) return; // Skip rows with missing level or class
          if (!grouped[exam.level]) {
            grouped[exam.level] = {};
          }
          if (!grouped[exam.level][exam.class]) {
            grouped[exam.level][exam.class] = [];
          }
          grouped[exam.level][exam.class].push(exam);
        });

        setExamData(grouped);
      } catch (error) {
        console.error("Error fetching or parsing Excel data:", error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const tabOptions = [
    { value: "gymnasio", label: "Γυμνάσιο" },
    { value: "a-lykeiou", label: "Α' Λυκείου" },
    { value: "b-lykeiou", label: "Β' Λυκείου" },
    { value: "g-lykeiou", label: "Γ' Λυκείου" },
  ];
  const radioGroupName = useId();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-hero-gradient text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FileText className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h1 className="text-5xl font-bold mb-6">Διαγωνίσματα</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Πρόγραμμα διαγωνισμάτων του φροντηστηρίου
            </p>
            <p className="text-2xl font-semibold text-accent mt-4">
              1ος Κύκλος Διαγωνισμάτων
            </p>
          </div>
        </div>
      </section>

      {/* Exams Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <GlassRadioGroup
              name={radioGroupName}
              value={activeTab}
              onValueChange={setActiveTab}
              options={tabOptions}
            />

            <Tabs value={activeTab}>
              {isLoading ? (
                <div className="flex justify-center items-center py-16">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  <p className="ml-4 text-muted-foreground">Φόρτωση διαγωνισμάτων...</p>
                </div>
              ) : (
                tabOptions.map(({ value: level }) => {
                  const levelData = examData[level];
                  const hasData = levelData && Object.keys(levelData).length > 0;

                  return (
                    <TabsContent key={level} value={level} className="space-y-4">
                      {hasData ? (
                        Object.entries(levelData).map(([className, exams]) => (
                          <Card key={className} className="mb-8">
                            <CardHeader>
                              <CardTitle className="text-2xl text-primary">
                                {className}
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-3">
                                {exams.map((exam, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                                  >
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full">
                                      <div className="flex items-center gap-4 sm:gap-10">
                                        <FileText className="w-5 h-5 text-accent flex-shrink-0" />
                                        <div className="font-medium text-foreground">
                                          {exam.title}
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-1 font-medium text-muted-foreground mt-2 sm:mt-0 sm:text-foreground whitespace-nowrap min-w-0">
                                        <Calendar className="w-4 h-4 flex-shrink-0" />
                                        <span className="overflow-hidden text-ellipsis whitespace-nowrap">{exam.date} - {exam.time}</span>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))
                      ) : (
                        <p className="py-8 text-center text-muted-foreground">
                          Δεν υπάρχουν διαθέσιμα διαγωνίσματα για αυτή την τάξη.
                        </p>
                      )}
                    </TabsContent>
                  );
                })
              )}
            </Tabs>

            <Card className="mt-12 border-2 border-accent/50">
              <CardContent className="py-8 text-center">
                <p className="text-lg text-muted-foreground">
                  Τα διαγωνίσματα ενημερώνονται τακτικά και είναι διαθέσιμα για τους μαθητές μας
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exams;
