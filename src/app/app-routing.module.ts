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


const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: 'ajouted', component: AjouteDevisComponent},
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
      {path: 'exportOf', component: BouttonExportComponent}]},
      {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
