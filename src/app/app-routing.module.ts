import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
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
import {AuthGuard} from './auth-guard.service';
import {ForgetPageComponent} from './forget-page/forget-page.component';
import {ProfileComponent} from './profile/profile.component';


const routes: Routes = [
  {path: 'forget', component: ForgetPageComponent},

  {path: '', component: LoginComponent},
  {
    path: 'home', component: HomeComponent, children: [
      {path: 'ajouted/:idOffre', component: AjouteDevisComponent, canActivate: [AuthGuard]},
      {path: 'ajoutedevis/:idClient/:idProjet', component: AjouteDeviscalculComponent, canActivate: [AuthGuard]},
      {path: 'addQuotation', component: AddQuotationComponent, canActivate: [AuthGuard]},
      {path: 'listdevis', component: ListDevisComponent, canActivate: [AuthGuard]},
      {path: 'ajouteof', component: AjouteOffreComponent, canActivate: [AuthGuard]},
      {path: 'etude', component: EtudeFaiComponent, canActivate: [AuthGuard]},
      {path: 'manager', component: ManagerComponent},
      {path: 'allMa', component: AllManagerComponent},
      {path: 'matiere/:idfamily', component: MatiereComponent, canActivate: [AuthGuard]},
      {path: 'AjouteMat', component: AjouteMatiereComponent, canActivate: [AuthGuard]},
      {path: 'detailMat/:idmaterial', component: DetailMatiereComponent, canActivate: [AuthGuard]},
      {path: 'allClient', component: AllClientComponent},
      {path: 'createOf', component: BouttonCreateOfferComponent, canActivate: [AuthGuard]},
      {path: 'SynteseOf', component: SyntheseProjetParOffreComponent, canActivate: [AuthGuard]},
      {path: 'demEtudeCons', component: DemandeEtudeConsultationComponent, canActivate: [AuthGuard]},
      {path: 'exquise', component: ExquiseFaisabiliteInterneComponent, canActivate: [AuthGuard]},
      {path: 'quotMoule', component: QuotationMouleComponent, canActivate: [AuthGuard]},
      {path: 'offreMoule', component: OfferMouleComponent, canActivate: [AuthGuard]},
      {path: 'ajoutQuotMoule', component: AjoutQuotationMouleComponent, canActivate: [AuthGuard]},
      {path: 'ajoutOfferMoule', component: AjoutOffreMouleComponent, canActivate: [AuthGuard]},
      {path: 'project', component: ProjectComponent, canActivate: [AuthGuard]},
      {path: '', component: AcceuilComponent, canActivate: [AuthGuard]},
      {path: 'devisEssai', component: DevisEssaiComponent, canActivate: [AuthGuard]},
      {path: 'offreEssai', component: OffreEssaiComponent, canActivate: [AuthGuard]},
      {path: 'database', component: DatabaseComponent, canActivate: [AuthGuard]},
      {path: 'allDem', component: AllDemandeconComponent, canActivate: [AuthGuard]},
      {path: 'alletude', component: AllEtudeComponent, canActivate: [AuthGuard]},
      {path: 'testt', component: Test2Component, canActivate: [AuthGuard]},
      {path: 'allexquise', component: AllExquiseComponent, canActivate: [AuthGuard]},
      {path: 'allDevEss', component: AlldevisEssaiComponent, canActivate: [AuthGuard]},
      {path: 'allOffrEss', component: AlloffreEssaiComponent},
      {path: 'editdev/:idDevisEssai', component: EditDevisEssaiComponent, canActivate: [AuthGuard]},
      {path: 'editoff', component: EditOffreEssaiComponent, canActivate: [AuthGuard]},
      {path: 'tracesales', component: TracabiliteSalesComponent, canActivate: [AuthGuard]},
      {path: 'tracrecpur', component: TracabpurchComponent, canActivate: [AuthGuard]},
      {path: 'tracrecrec', component: TracabiliteReclamComponent, canActivate: [AuthGuard]},
      {path: 'reclamation', component: ReclamationComponent, canActivate: [AuthGuard]},
      {path: 'exportd', component: ExportdevisComponent, canActivate: [AuthGuard]},
      {path: 'allmolddevis', component: AlldevismoldComponent, canActivate: [AuthGuard]},
      {path: 'allmoldoffre', component: AlloffremoldComponent, canActivate: [AuthGuard]},
      {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
