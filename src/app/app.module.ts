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
    BouttonExportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
