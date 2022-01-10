import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SidebarComponent} from './home/sidebar/sidebar.component';
import {TopbarComponent} from './home/topbar/topbar.component';
import {FooterComponent} from './home/footer/footer.component';
import {ContainerComponent} from './home/container/container.component';
import {AjouteDevisComponent} from './Offre/ajoute-devis/ajoute-devis.component';
import {LoginComponent} from './login/login.component';
import {AjouteOffreComponent} from './Offre/ajoute-offre/ajoute-offre.component';
import {EtudeFaiComponent} from './FCOM/etude-fai/etude-fai.component';
import {MatiereComponent} from './material/matiere/matiere.component';
import {ManagerComponent} from './managers/manager/manager.component';
import {AjouteMatiereComponent} from './Familiy matiere/ajoute-matiere/ajoute-matiere.component';
import {AllManagerComponent} from './managers/all-manager/all-manager.component';
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
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DevisEssaiComponent} from './Essai/devis-essai/devis-essai.component';
import {OffreEssaiComponent} from './Essai/offre-essai/offre-essai.component';
import {DatabaseComponent} from './database/database.component';
import {AjouteDeviscalculComponent} from './Devis/ajoute-deviscalcul/ajoute-deviscalcul.component';
import {AllExquiseComponent} from './FCOM/all-exquise/all-exquise.component';
import {AllEtudeComponent} from './FCOM/all-etude/all-etude.component';
import {AllDemandeconComponent} from './FCOM/all-demandecon/all-demandecon.component';
import {ListDevisComponent} from './Devis/list-devis/list-devis.component';
import {Test2Component} from './test2/test2.component';
import {AlldevisEssaiComponent} from './Essai/alldevis-essai/alldevis-essai.component';
import {AlloffreEssaiComponent} from './Essai/alloffre-essai/alloffre-essai.component';
import {DetailclietnComponent} from './client/detailclietn/detailclietn.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {EditDevisEssaiComponent} from './Essai/edit-devis-essai/edit-devis-essai.component';
import {EditOffreEssaiComponent} from './Essai/edit-offre-essai/edit-offre-essai.component';
import {ReclamationComponent} from './Reclamations/reclamation/reclamation.component';
import {TracabiliteReclamComponent} from './Tracabilite/tracabilite-reclam/tracabilite-reclam.component';
import {AlloffremoldComponent} from './Mold/alloffremold/alloffremold.component';
import {AlldevismoldComponent} from './Mold/alldevismold/alldevismold.component';
import {ExportdevisComponent} from './Devis/exportdevis/exportdevis.component';
import {TracabiliteSalesComponent} from './Tracabilite/tracabilite-sales/tracabilite-sales.component';
import {TracabpurchComponent} from './Tracabilite/tracabpurch/tracabpurch.component';
import {JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import { ForgetPageComponent } from './forget-page/forget-page.component';


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
    AjouteMatiereComponent,
    AllManagerComponent,
    DetailMatiereComponent,
    AllClientComponent,
    BouttonCreateOfferComponent,
    SyntheseProjetParOffreComponent,
    AddQuotationComponent,
    DemandeEtudeConsultationComponent,
    ExquiseFaisabiliteInterneComponent,
    QuotationMouleComponent,
    OfferMouleComponent,
    AjoutQuotationMouleComponent,
    AjoutOffreMouleComponent,
    ProjectComponent,
    AcceuilComponent,
    DevisEssaiComponent,
    OffreEssaiComponent,
    DatabaseComponent,
    AjouteDeviscalculComponent,
    AllExquiseComponent,
    AllEtudeComponent,
    AllDemandeconComponent,
    ListDevisComponent,
    Test2Component,
    AlldevisEssaiComponent,
    AlloffreEssaiComponent,
    DetailclietnComponent,
    EditDevisEssaiComponent,
    EditOffreEssaiComponent,
    ReclamationComponent,
    TracabiliteReclamComponent,
    AlloffremoldComponent,
    AlldevismoldComponent,
    ExportdevisComponent,
    TracabiliteSalesComponent,
    TracabpurchComponent,
    ForgetPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
