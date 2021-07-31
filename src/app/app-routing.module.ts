import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContainerComponent} from './home/container/container.component';
import {AjouteDevisComponent} from './ajoute-devis/ajoute-devis.component';
import {LoginComponent} from './login/login.component';
import {AjouteOffreComponent} from './ajoute-offre/ajoute-offre.component';
import {EtudeFaiComponent} from './etude-fai/etude-fai.component';
import {MatiereComponent} from './matiere/matiere.component';
import {ManagerComponent} from './manager/manager.component';
import {AjouteManagerComponent} from './ajoute-manager/ajoute-manager.component';
import {EditManagerComponent} from './edit-manager/edit-manager.component';
import {AllManagerComponent} from './all-manager/all-manager.component';
import {AjouteClientComponent} from './ajoute-client/ajoute-client.component';
import {AjouteMatiereComponent} from './ajoute-matiere/ajoute-matiere.component';
import {DetailMatiereComponent} from './detail-matiere/detail-matiere.component';
import {EditMatiereComponent} from './edit-matiere/edit-matiere.component';
import {EditFamiliyComponent} from './edit-familiy/edit-familiy.component';
import {DetailFamiliyComponent} from './detail-familiy/detail-familiy.component';
import {AllClientComponent} from './all-client/all-client.component';
import {BouttonCreateOfferComponent} from './boutton-create-offer/boutton-create-offer.component';
import {BouttonExportComponent} from './boutton-export/boutton-export.component';
import {OffreProvisoireComponent} from './offre-provisoire/offre-provisoire.component';
import {BtnFinaliserComponent} from './btn-finaliser/btn-finaliser.component';
import {OffreFinalisesComponent} from './offre-finalises/offre-finalises.component';
import {BtnRefuseOffreFinaliseComponent} from './btn-refuse-offre-finalise/btn-refuse-offre-finalise.component';
import {BtnSigneOffreFinaliseComponent} from './btn-signe-offre-finalise/btn-signe-offre-finalise.component';
import {SyntheseProjetParOffreComponent} from './synthese-projet-par-offre/synthese-projet-par-offre.component';
import {TestComponent} from './test/test.component';
import {AnnulerSingComponent} from './annuler-sing/annuler-sing.component';
import {AddQuotationComponent} from './add-quotation/add-quotation.component';
import {AllQuotationComponent} from './all-quotation/all-quotation.component';
import {DemandeEtudeConsultationComponent} from './demande-etude-consultation/demande-etude-consultation.component';
import {ExquiseFaisabiliteInterneComponent} from './exquise-faisabilite-interne/exquise-faisabilite-interne.component';
import {QuotationMouleComponent} from './quotation-moule/quotation-moule.component';
import {OfferMouleComponent} from './offer-moule/offer-moule.component';
import {AjoutQuotationMouleComponent} from './ajout-quotation-moule/ajout-quotation-moule.component';
import {AjoutOffreMouleComponent} from './ajout-offre-moule/ajout-offre-moule.component';
import {OffreRefusesComponent} from './offre-refuses/offre-refuses.component';
import {ProjectComponent} from './project/project.component';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {AddProjectComponent} from './add-project/add-project.component';
import {OffreSignesComponent} from './offre-signes/offre-signes.component';
import {DevisEssaiComponent} from './devis-essai/devis-essai.component';
import {OffreEssaiComponent} from './offre-essai/offre-essai.component';
import {AjoutePackagingComponent} from './ajoute-packaging/ajoute-packaging.component';
import {AjouteTransportComponent} from './ajoute-transport/ajoute-transport.component';


const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: 'ajouted', component: AjouteDevisComponent},
      {path: 'addQuotation', component: AddQuotationComponent},
      {path: 'ajouteof', component: AjouteOffreComponent},
      {path: 'etude', component: EtudeFaiComponent},
      {path: 'manager', component: ManagerComponent},
      {path: 'ajouteMag', component: AjouteManagerComponent},
      {path: 'editMag', component: EditManagerComponent},
      {path: 'allMa', component: AllManagerComponent},
      {path: 'ajouteC', component: AjouteClientComponent},
      {path: 'matiere', component: MatiereComponent},
      {path: 'AjouteMat', component: AjouteMatiereComponent},
      {path: 'detailMat', component: DetailMatiereComponent},
      {path: 'editMat', component: EditMatiereComponent},
      {path: 'editFam', component: EditFamiliyComponent},
      {path: 'detailFam', component: DetailFamiliyComponent},
      {path: 'allClient', component: AllClientComponent},
      {path: 'createOf', component: BouttonCreateOfferComponent},

      {path: 'finaOf', component: OffreFinalisesComponent} ,
      {path: 'signOf', component: OffreSignesComponent},
      {path: 'refuseOf', component: OffreRefusesComponent} ,
      {path: 'SynteseOf', component: SyntheseProjetParOffreComponent},
      {path: 'test', component: TestComponent},
      {path: 'demEtudeCons', component: DemandeEtudeConsultationComponent},
      {path: 'exquise', component: ExquiseFaisabiliteInterneComponent},
      {path: 'quotMoule', component: QuotationMouleComponent},
      {path: 'offreMoule', component: OfferMouleComponent},
      {path: 'ajoutQuotMoule', component: AjoutQuotationMouleComponent},
      {path: 'ajoutOfferMoule', component: AjoutOffreMouleComponent},
      {path: 'project', component: ProjectComponent} ,
      {path: 'acceuil', component: AcceuilComponent},
      {path: 'addProject', component: AddProjectComponent},
      {path: 'devisEssai', component: DevisEssaiComponent},
      {path: 'offreEssai', component: OffreEssaiComponent} ,
      {path: 'allQuotation', component: AllQuotationComponent},
      {path: 'exportOf', component: BouttonExportComponent},
      {path: 'ajoutePack', component: AjoutePackagingComponent},
      {path: 'ajouteTran', component: AjouteTransportComponent}]},
      {path: 'login', component: LoginComponent},
      {path: 'btnFina', component: BtnFinaliserComponent},
      {path: 'btnRefuseFina', component: BtnRefuseOffreFinaliseComponent},
      {path: 'btnSignFina', component: BtnSigneOffreFinaliseComponent},
  {path: 'provisoireOf', component: OffreProvisoireComponent},
      {path: 'annulerSign', component: AnnulerSingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
