import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AjouteDevisComponent} from './Offre/ajoute-devis/ajoute-devis.component';
import {LoginComponent} from './login/login.component';
import {AjouteOffreComponent} from './Offre/ajoute-offre/ajoute-offre.component';
import {EtudeFaiComponent} from './FCOM/etude-fai/etude-fai.component';
import {MatiereComponent} from './material/matiere/matiere.component';
import {ManagerComponent} from './managers/manager/manager.component';
import {AllManagerComponent} from './managers/all-manager/all-manager.component';
import {AjouteMatiereComponent} from './Familiy matiere/ajoute-matiere/ajoute-matiere.component';
import {DetailMatiereComponent} from './material/detail-matiere/detail-matiere.component';
import {AllClientComponent} from './client/all-client/all-client.component';
import {BouttonCreateOfferComponent} from './Offre/boutton-create-offer/boutton-create-offer.component';
import {SyntheseProjetParOffreComponent} from './Offre/synthese-projet-par-offre/synthese-projet-par-offre.component';
import {AddQuotationComponent} from './Devis/add-quotation/add-quotation.component';
import {DemandeEtudeConsultationComponent} from './FCOM/demande-etude-consultation/demande-etude-consultation.component';
import {ExquiseFaisabiliteInterneComponent} from './FCOM/exquise-faisabilite-interne/exquise-faisabilite-interne.component';
import {QuotationMouleComponent} from './Mold/quotation-moule/quotation-moule.component';
import {OfferMouleComponent} from './Mold/offer-moule/offer-moule.component';
import {AjoutQuotationMouleComponent} from './Mold/ajout-quotation-moule/ajout-quotation-moule.component';
import {AjoutOffreMouleComponent} from './Mold/ajout-offre-moule/ajout-offre-moule.component';
import {ProjectComponent} from './project/project.component';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {DevisEssaiComponent} from './Essai/devis-essai/devis-essai.component';
import {OffreEssaiComponent} from './Essai/offre-essai/offre-essai.component';
import {DatabaseComponent} from './database/database.component';
import {AjouteDeviscalculComponent} from './Devis/ajoute-deviscalcul/ajoute-deviscalcul.component';
import {AllDemandeconComponent} from './FCOM/all-demandecon/all-demandecon.component';
import {AllEtudeComponent} from './FCOM/all-etude/all-etude.component';
import {AllExquiseComponent} from './FCOM/all-exquise/all-exquise.component';
import {ListDevisComponent} from './Devis/list-devis/list-devis.component';
import {Test2Component} from './test2/test2.component';
import {AlldevisEssaiComponent} from './Essai/alldevis-essai/alldevis-essai.component';
import {AlloffreEssaiComponent} from './Essai/alloffre-essai/alloffre-essai.component';
import {EditDevisEssaiComponent} from './Essai/edit-devis-essai/edit-devis-essai.component';
import {EditOffreEssaiComponent} from './Essai/edit-offre-essai/edit-offre-essai.component';
import {ReclamationComponent} from './Reclamations/reclamation/reclamation.component';
import {TracabiliteReclamComponent} from './Tracabilite/tracabilite-reclam/tracabilite-reclam.component';
import {AlldevismoldComponent} from './Mold/alldevismold/alldevismold.component';
import {AlloffremoldComponent} from './Mold/alloffremold/alloffremold.component';
import {ExportdevisComponent} from './Devis/exportdevis/exportdevis.component';
import {TracabiliteSalesComponent} from './Tracabilite/tracabilite-sales/tracabilite-sales.component';
import {TracabpurchComponent} from './Tracabilite/tracabpurch/tracabpurch.component';





const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent, children: [
      {path: 'ajouted/:idOffre', component: AjouteDevisComponent},
      {path: 'ajoutedevis/:idClient/:idProjet', component: AjouteDeviscalculComponent},
      {path: 'addQuotation', component: AddQuotationComponent},
      {path: 'listdevis', component: ListDevisComponent},
      {path: 'ajouteof', component: AjouteOffreComponent},
      {path: 'etude', component: EtudeFaiComponent},
      {path: 'manager', component: ManagerComponent},
      {path: 'allMa', component: AllManagerComponent},
      {path: 'matiere/:idfamily', component: MatiereComponent},
      {path: 'AjouteMat', component: AjouteMatiereComponent},
      {path: 'detailMat/:idmaterial', component: DetailMatiereComponent},
      {path: 'allClient', component: AllClientComponent},
      {path: 'createOf', component: BouttonCreateOfferComponent},
      {path: 'SynteseOf', component: SyntheseProjetParOffreComponent},
      {path: 'demEtudeCons', component: DemandeEtudeConsultationComponent},
      {path: 'exquise', component: ExquiseFaisabiliteInterneComponent},
      {path: 'quotMoule', component: QuotationMouleComponent},
      {path: 'offreMoule', component: OfferMouleComponent},
      {path: 'ajoutQuotMoule', component: AjoutQuotationMouleComponent},
      {path: 'ajoutOfferMoule', component: AjoutOffreMouleComponent},
      {path: 'project', component: ProjectComponent} ,
      {path: 'acceuil', component: AcceuilComponent},
      {path: 'devisEssai', component: DevisEssaiComponent},
      {path: 'offreEssai', component: OffreEssaiComponent} ,
      {path: 'database' , component: DatabaseComponent},
      {path: 'allDem' , component: AllDemandeconComponent},
      {path: 'alletude' , component: AllEtudeComponent},
      {path: 'testt' , component: Test2Component},
      {path: 'allexquise' , component: AllExquiseComponent},
      {path: 'allDevEss' , component: AlldevisEssaiComponent},
      {path: 'allOffrEss' , component: AlloffreEssaiComponent},
      {path: 'editdev/:idDevisEssai' , component: EditDevisEssaiComponent},
      {path: 'editoff' , component: EditOffreEssaiComponent},
      {path: 'tracesales' , component: TracabiliteSalesComponent},
      {path: 'tracrecpur' , component: TracabpurchComponent},
      {path: 'tracrecrec' , component: TracabiliteReclamComponent},
      {path: 'reclamation' , component: ReclamationComponent},
      {path: 'exportd' , component: ExportdevisComponent},
      {path: 'allmolddevis' , component: AlldevismoldComponent},
      {path: 'allmoldoffre' , component: AlloffremoldComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
