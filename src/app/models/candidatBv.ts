import { Adresse } from './adresse';

export interface CandidatBv {
 
    id: number;
    cin: string;
    dateCin: string;
    lieuCin: string;
    nom: string;
    prenom: string;
    dateNaissance: string;
    lieuNaissance: string;
    mobile: number;
    email: string;
    specialite: string;
    dateObtentionDiplome: string;
    profession: string;
    dateCandidature: string;
    zoneConsulaireId: number;
    circonscriptionId: number;
    fonctionId: number;
    niveauEtudeId:number;
    pjCandidatureBvId:number;
    sexe:string;
    adr: Adresse; 
    
  }
  