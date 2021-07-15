import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { TopbarComponent } from './home/topbar/topbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { ContainerComponent } from './home/container/container.component';
import { AjouteDevisComponent } from './ajoute-devis/ajoute-devis.component';
import { LoginComponent } from './login/login.component';
import { AjouteOffreComponent } from './ajoute-offre/ajoute-offre.component';
import { EtudeFaiComponent } from './etude-fai/etude-fai.component';
import { MatiereComponent } from './matiere/matiere.component';
import { ManagerComponent } from './manager/manager.component';
import { AjouteManagerComponent } from './ajoute-manager/ajoute-manager.component';
import { AjouteClientComponent } from './ajoute-client/ajoute-client.component';
import { AjouteMatiereComponent } from './ajoute-matiere/ajoute-matiere.component';
import { EditManagerComponent } from './edit-manager/edit-manager.component';
import { AllManagerComponent } from './all-manager/all-manager.component';
import { DetailMatiereComponent } from './detail-matiere/detail-matiere.component';
import { EditMatiereComponent } from './edit-matiere/edit-matiere.component';
import { EditFamiliyComponent } from './edit-familiy/edit-familiy.component';
import { DetailFamiliyComponent } from './detail-familiy/detail-familiy.component';
import { AllClientComponent } from './all-client/all-client.component';
import { BouttonCreateOfferComponent } from './boutton-create-offer/boutton-create-offer.component';
import { BouttonExportComponent } from './boutton-export/boutton-export.component';
import { OffreProvisoireComponent } from './offre-provisoire/offre-provisoire.component';
import { OffreFinalisesComponent } from './offre-finalises/offre-finalises.component';
import { OffreRefusesComponent } from './offre-refuses/offre-refuses.component';
import { OffreSignesComponent } from './offre-signes/offre-signes.component';
import { BtnFinaliserComponent } from './btn-finaliser/btn-finaliser.component';
import { BtnRefuseOffreFinaliseComponent } from './btn-refuse-offre-finalise/btn-refuse-offre-finalise.component';
import { BtnSigneOffreFinaliseComponent } from './btn-signe-offre-finalise/btn-signe-offre-finalise.component';
import { SyntheseProjetParOffreComponent } from './synthese-projet-par-offre/synthese-projet-par-offre.component';
import { TestComponent } from './test/test.component';
import { AnnulerSingComponent } from './annuler-sing/annuler-sing.component';
import { AddQuotationComponent } from './add-quotation/add-quotation.component';
import { AllQuotationComponent } from './all-quotation/all-quotation.component';
import { DemandeEtudeConsultationComponent } from './demande-etude-consultation/demande-etude-consultation.component';
import { ExquiseFaisabiliteInterneComponent } from './exquise-faisabilite-interne/exquise-faisabilite-interne.component';
import { QuotationMouleComponent } from './quotation-moule/quotation-moule.component';
import { OfferMouleComponent } from './offer-moule/offer-moule.component';
import { AjoutQuotationMouleComponent } from './ajout-quotation-moule/ajout-quotation-moule.component';
import { AjoutOffreMouleComponent } from './ajout-offre-moule/ajout-offre-moule.component';
import { ProjectComponent } from './project/project.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddProjectComponent } from './add-project/add-project.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DevisEssaiComponent} from './devis-essai/devis-essai.component';
import {OffreEssaiComponent} from './offre-essai/offre-essai.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    ContainerComponent,
    AjouteDevisComponent,
    LoginComponent,
    AjouteOffreComponent,
    EtudeFaiComponent,
    MatiereComponent,
    ManagerComponent,
    AjouteManagerComponent,
    AjouteClientComponent,
    AjouteMatiereComponent,
    EditManagerComponent,
    AllManagerComponent,
    DetailMatiereComponent,
    EditMatiereComponent,
    EditFamiliyComponent,
    DetailFamiliyComponent,
    AllClientComponent,
    BouttonCreateOfferComponent,
    BouttonExportComponent,
    OffreProvisoireComponent,
    OffreFinalisesComponent,
    OffreRefusesComponent,
    OffreSignesComponent,
    BtnFinaliserComponent,
    BtnRefuseOffreFinaliseComponent,
    BtnSigneOffreFinaliseComponent,
    SyntheseProjetParOffreComponent,
    TestComponent,
    AnnulerSingComponent,
    AddQuotationComponent,
    AllQuotationComponent,
    DemandeEtudeConsultationComponent,
    ExquiseFaisabiliteInterneComponent,
    QuotationMouleComponent,
    OfferMouleComponent,
    AjoutQuotationMouleComponent,
    AjoutOffreMouleComponent,
    ProjectComponent,
    AcceuilComponent,
    AddProjectComponent,
 DevisEssaiComponent,
  OffreEssaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
