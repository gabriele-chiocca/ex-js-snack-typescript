export type Dipendente = {
  nome: string;
  cognome: string;
  annoNascita: number;
  sesso: 'm' | 'f';
  anniDiServizio: number[];
};

export type Developer = Dipendente & {
  livelloEsperienza: 'Junior' | 'Mid' | 'Senior';
  linguaggi: string[];
  certificazioni: string[];
};

export type ProjectManager = Dipendente & {
  teamSize: number | null;
  budgetGestito: number;
  stakeholderPrincipali: string[];
};
