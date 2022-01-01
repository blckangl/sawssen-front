import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CartonService} from '../services/carton.service';
import {ActivatedRoute} from '@angular/router';
import {SachetService} from '../services/sachet.service';
import {PaletteService} from '../services/palette.service';
import {TransportService} from '../services/transport.service';
import {InserrtService} from '../services/inserrt.service';
import {ColorantService} from '../services/colorant.service';
import {MachineService} from '../services/machine.service';
import {ParamService} from '../services/param.service';
import {SeparationService} from '../services/separation.service';
import Swal from 'sweetalert2';
import {ClientService} from '../services/client.service';
import {AuthentificationService} from '../services/authentification.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {
  idCarton;
  listCarton;
  detailcarton;
  descriptioncarton;
  idSachet;
  listSachet;
  detailsachet;
  descriptionsachet;
  idSeparation; listSeparation; detailseparation;
  idPalette; listPalette; detailpalette;
  idTransport; listTransport; detailtransport;
  idInserrt;
  listInserrt;
  detailinsert;
  idColorant;
  listColorant;
  detailcolorant;
  idMachine;
  listMachine;
  detailmachine;
  idMachineParam;
  listMachineParam;
  detailmachineparam;
  listclient;
  selectclient;
  detailclient;
  currentDate = new Date().toLocaleDateString();
  addcarton: FormGroup;
  addsachet: FormGroup;
  addseparation: FormGroup;
  addpalette: FormGroup;
  addtransport: FormGroup;
  addinsert: FormGroup;
  addcolorant: FormGroup;
  addmachine: FormGroup;
  addmachineParam: FormGroup;
  show = false;
  submitted = false;
  p = 1;
  im: any;
  customer: any;
  designation: any;
  design: any;
  destination: any;
  description: any;
  type: any;
  user;
  role;
  constructor(private actvroute: ActivatedRoute, private ServiceCarton: CartonService, private ServiceSachet: SachetService,
              private ServicePalette: PaletteService, private ServiceTransport: TransportService, private ServiceInser: InserrtService,
              private ServiceCol: ColorantService, private ServMach: MachineService, private SerParam: ParamService,
              private ServiceSeparation: SeparationService, private servclient: ClientService, private formBuilder: FormBuilder,
              private authService: AuthentificationService) {

  }

  ngOnInit() {
    this.getprofileadmine();
    this.getallCarton();
    this.getallSachet();
    this.getallPalette();
    this.getallTransport();
    this.getallInserrt();
    this.getallColorant();
    this.getallMachine();
    this.getallMachineParam();
    this.getallSeparation();
    this.getallclient();
    this.addcarton = this.formBuilder.group({
      id: ['', Validators.required],
      description: ['', Validators.required],
      code: ['', Validators.required],
      longeur: ['', Validators.required],
      largeur: ['', Validators.required],
      hauteur: ['', Validators.required],
      unite: ['', Validators.required],
      costs: ['', Validators.required],
      date: this.currentDate,
      trac: this.user,
    });
    this.addsachet = this.formBuilder.group({
      id: ['', Validators.required],
      description: ['', Validators.required],
      code: ['', Validators.required],
      unite: ['', Validators.required],
      costs: ['', Validators.required],
      date: this.currentDate,
      trac: this.user,

    });
    this.addseparation = this.formBuilder.group({
      id: ['', Validators.required],
      description: ['', Validators.required],
      code: ['', Validators.required],
      unite: ['', Validators.required],
      cost: ['', Validators.required],
      date: this.currentDate,
      trac: this.user,
    });
    this.addpalette = this.formBuilder.group({
      id: ['', Validators.required],
      type: ['', Validators.required],
      code: ['', Validators.required],
      unite: ['', Validators.required],
      costs: ['', Validators.required],
      date: this.currentDate,
      trac: this.user,
    });
    this.addtransport = this.formBuilder.group({
      id: ['', Validators.required],
      pays: ['', Validators.required],
      destination: ['', Validators.required],
      quotation: ['', Validators.required],
      offer: ['', Validators.required],
      date: this.currentDate,
      trac: this.user,
    });
    this.addinsert = this.formBuilder.group({
      id: ['', Validators.required],
      design: ['', Validators.required],
      code: ['', Validators.required],
      unite: ['', Validators.required],
      price: ['', Validators.required],
      trans: ['', Validators.required],
      scrap: ['', Validators.required],
      date: this.currentDate,
      trac: this.user,
    });
    this.addcolorant = this.formBuilder.group({
      id: ['', Validators.required],
      designation: ['', Validators.required],
      code: ['', Validators.required],
      unite: ['', Validators.required],
      price: ['', Validators.required],
      date: this.currentDate,
      trac: this.user,
    });
    this.addmachine = this.formBuilder.group({
      id: ['', Validators.required],
      im: ['', Validators.required],
      tauxho: ['', Validators.required],
      energie: ['', Validators.required],
      completen: ['', Validators.required],
      opedev: ['', Validators.required],
      startingdev: ['', Validators.required],
      opeven: ['', Validators.required],
      startingof: ['', Validators.required],
      date: this.currentDate,
      trac: this.user,
    });
    this.addmachineParam = this.formBuilder.group({
      id: ['', Validators.required],
      customer: ['', Validators.required],
      handling: ['', Validators.required],
      scrap: ['', Validators.required],
      sales: ['', Validators.required],
      rd: ['', Validators.required],
      profit: ['', Validators.required],
      date: this.currentDate,
      trac: this.user,
    });
  }

  get f() {
    return this.addcarton.controls;
    return this.addsachet.controls;
    return this.addseparation.controls;
    return this.addpalette.controls;
    return this.addtransport.controls;
    return this.addinsert.controls;
    return this.addcolorant.controls;
    return this.addmachine.controls;
    return this.addmachineParam.controls;
  }

  onSubmit() {
    this.submitted = true;

    console.log('addform', this.addcarton.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addcarton.value, null, 4));

    console.log('addform', this.addsachet.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addsachet.value, null, 4));

    console.log('addform', this.addseparation.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addseparation.value, null, 4));

    console.log('addform', this.addpalette.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addpalette.value, null, 4));

    console.log('addform', this.addtransport.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addtransport.value, null, 4));

    console.log('addform', this.addinsert.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addinsert.value, null, 4));

    console.log('addform', this.addcolorant.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addcolorant.value, null, 4));

    console.log('addform', this.addmachine.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addmachine.value, null, 4));

    console.log('addform', this.addmachineParam.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addmachineParam.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.addcarton.reset();
    this.addsachet.reset();
    this.addseparation.reset();
    this.addpalette.reset();
    this.addtransport.reset();
    this.addinsert.reset();
    this.addcolorant.reset();
    this.addmachine.reset();
    this.addmachineParam.reset();
  }

  getprofileadmine() {
    this.authService.getprofile().subscribe(res => {
      console.log(res);
      this.user = res;
      this.role = res['roles'][0]['roleName'];
      // console.log(res['roles'][0]['roleName']);
    });
  }

  /*Gérer UC-BOX*/

  getallCarton() {
    this.ServiceCarton.all().subscribe(result => {

      this.listCarton = result;

      console.log('listcarton', this.listCarton);

    });
  }

  add() {
    console.log('formgroup', this.addcarton.value);
    this.ServiceCarton.ajout(this.addcarton.value).subscribe(res => {
      console.log(res);
      this.getallCarton();
    });
    Swal.fire({
      position: 'center',
      title: 'Added Successfully',
      html: 'UC-Box has been added',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      width: 500,
    });

  }

  supprimer(idCarton) {
    Swal.fire({
      position: 'center',
      title: 'Are you sure?',
      html: 'You wont it be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      width: 500,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.ServiceCarton.supprimer(idCarton).subscribe(res => {
          console.log(res);
          this.getallCarton();
        });
        Swal.fire(
          'Deleted!',
          'Your UC-BOX has been deleted.',
          'success',
        );
      }
    });
  }

  recuper(id, des, co, len, lar, hau, un, cos) {
    this.idCarton = id;
    this.addcarton.get('description').setValue(des);
    this.addcarton.get('code').setValue(co);
    this.addcarton.get('longeur').setValue(len);
    this.addcarton.get('largeur').setValue(lar);
    this.addcarton.get('hauteur').setValue(hau);
    this.addcarton.get('unite').setValue(un);
    this.addcarton.get('costs').setValue(cos);
  }

  edit() {
    /*console.log('formgroup', this.addcarton.value);*/
    this.ServiceCarton.modifier(this.idCarton, this.addcarton.value).subscribe(res => {
      console.log(res);
      this.getallCarton();
    });
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      width: 500,
      padding: 50,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
    Toast.fire({
      icon: 'success',
      title: 'The changes saved'
    });
  }

  /*Gérer Bag*/

  getallSachet() {
    this.ServiceSachet.all().subscribe(result => {

      this.listSachet = result;

      console.log('listSachet', this.listSachet);

    });
  }

  addsach() {
    console.log('formgroup', this.addsachet.value);
    this.ServiceSachet.ajout(this.addsachet.value).subscribe(res => {
      console.log(res);
      this.getallSachet();
    });
    Swal.fire({
      position: 'center',
      title: 'Added Successfully',
      html: 'Bag has been added',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      width: 500,
    });

  }

  supprimersach(idSachet) {
    Swal.fire({
      position: 'center',
      title: 'Are you sure?',
      html: 'You wont it be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      width: 500,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.ServiceSachet.supprimer(idSachet).subscribe(res => {
          console.log(res);
          this.getallSachet();
        });
        Swal.fire(
          'Deleted!',
          'Your Bag has been deleted.',
          'success',
        );
      }
    });
  }

  recupersach(id, desc, cod, unt, cost) {
    this.idSachet = id;
    this.addsachet.get('description').setValue(desc);
    this.addsachet.get('code').setValue(cod);
    this.addsachet.get('unite').setValue(unt);
    this.addsachet.get('costs').setValue(cost);
  }

  editsach() {
    this.ServiceSachet.modifier(this.idSachet, this.addsachet.value).subscribe(res => {
      console.log(res);
      this.getallSachet();
    });
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      width: 500,
      padding: 50,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
    Toast.fire({
      icon: 'success',
      title: 'The changes saved'
    });
  }

  /*Gérer Separation*/

  getallSeparation() {
    this.ServiceSeparation.all().subscribe(result => {

      this.listSeparation = result;

      console.log(' listSeparation', this.listSeparation);

    });
  }

  addsep() {
    console.log('formgroup', this.addseparation.value);
    this.ServiceSeparation.ajout(this.addseparation.value).subscribe(res => {
      console.log(res);
      this.getallSeparation();
    });
    Swal.fire({
      position: 'center',
      title: 'Added Successfully',
      html: 'Separation has been added',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      width: 500,
    });

  }

  supprimersep(idSeparation) {
    Swal.fire({
      position: 'center',
      title: 'Are you sure?',
      html: 'You wont it be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      width: 500,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.ServiceSeparation.supprimer(idSeparation).subscribe(res => {
          console.log(res);
          this.getallSeparation();
        });
        Swal.fire(
          'Deleted!',
          'Your Separation has been deleted.',
          'success',
        );
      }
    });
  }

  recupersepa(id, desr, cod, unt, coss) {
    this.idSeparation = id;
    this.addseparation.get('description').setValue(desr);
    this.addseparation.get('code').setValue(cod);
    this.addseparation.get('unite').setValue(unt);
    this.addseparation.get('cost').setValue(coss);
  }

  editsep() {
    this.ServiceSeparation.modifier(this.idSeparation, this.addseparation.value).subscribe(res => {
      console.log(res);
      this.getallSeparation();
    });
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      width: 500,
      padding: 50,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
    Toast.fire({
      icon: 'success',
      title: 'The changes saved'
    });
  }

  /*Gérer palette*/

  getallPalette() {
    this.ServicePalette.all().subscribe(result => {

      this.listPalette = result;

      console.log('listPalette', this.listPalette);

    });
  }

  addpalet() {
    console.log('formgroup', this.addpalette.value);
    this.ServicePalette.ajout(this.addpalette.value).subscribe(res => {
      console.log(res);
      this.getallPalette();
    });
    Swal.fire({
      position: 'center',
      title: 'Added Successfully',
      html: ' UM - Pallet has been added',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      width: 500,
    });

  }

  supprimerpal(idPalette) {
    Swal.fire({
      position: 'center',
      title: 'Are you sure?',
      html: 'You wont it be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      width: 500,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.ServicePalette.supprimer(idPalette).subscribe(res => {
          console.log(res);
          this.getallPalette();
        });
        Swal.fire(
          'Deleted!',
          'Your UM - Pallet has been deleted.',
          'success',
        );
      }
    });
  }

  recuperpal(id, typ, codp, unti, cosst) {
    this.idPalette = id;
    this.addpalette.get('type').setValue(typ);
    this.addpalette.get('code').setValue(codp);
    this.addpalette.get('unite').setValue(unti);
    this.addpalette.get('costs').setValue(cosst);
  }

  editpale() {
    this.ServicePalette.modifier(this.idPalette, this.addpalette.value).subscribe(res => {
      console.log(res);
      this.getallPalette();
    });
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      width: 500,
      padding: 50,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
    Toast.fire({
      icon: 'success',
      title: 'The changes saved'
    });
  }

  /*Gérer transport*/

  getallTransport() {
    this.ServiceTransport.all().subscribe(result => {

      this.listTransport = result;

      console.log('listTransport', this.listTransport);

    });
  }

  addtran() {
    console.log('formgroup', this.addtransport.value);
    this.ServiceTransport.ajout(this.addtransport.value).subscribe(res => {
      console.log(res);
      this.getallTransport();
    });
    Swal.fire({
      position: 'center',
      title: 'Added Successfully',
      html: 'Transport has been added',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      width: 500,
    });

  }

  supprimertr(idTransport) {
    Swal.fire({
      position: 'center',
      title: 'Are you sure?',
      html: 'You wont it be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      width: 500,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.ServiceTransport.supprimer(idTransport).subscribe(res => {
          console.log(res);
          this.getallTransport();
        });
        Swal.fire(
          'Deleted!',
          'Your Transport has been deleted.',
          'success',
        );
      }
    });
  }

  recupertransp(id, pay, desq, quo, off) {
    this.idTransport = id;
    this.addtransport.get('pays').setValue(pay);
    this.addtransport.get('destination').setValue(desq);
    this.addtransport.get('quotation').setValue(quo);
    this.addtransport.get('offer').setValue(off);
  }

  edittran() {
    this.ServiceTransport.modifier(this.idTransport, this.addtransport.value).subscribe(res => {
      console.log(res);
      this.getallTransport();
    });
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      width: 500,
      padding: 50,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
    Toast.fire({
      icon: 'success',
      title: 'The changes saved'
    });
  }

  /*Gérer insert*/

  getallInserrt() {
    this.ServiceInser.all().subscribe(result => {

      this.listInserrt = result;

      console.log('listInserrt', this.listInserrt);

    });
  }

  addins() {
    console.log('formgroup', this.addinsert.value);
    this.ServiceInser.ajout(this.addinsert.value).subscribe(res => {
      console.log(res);
      this.getallInserrt();
    });
    Swal.fire({
      position: 'center',
      title: 'Added Successfully',
      html: 'Insert has been added',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      width: 500,
    });

  }

  supprimerin(idInserrt) {
    Swal.fire({
      position: 'center',
      title: 'Are you sure?',
      html: 'You wont it be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      width: 500,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.ServiceInser.supprimer(idInserrt).subscribe(res => {
          console.log(res);
          this.getallInserrt();
        });
        Swal.fire(
          'Deleted!',
          'Your Insert has been deleted.',
          'success',
        );
      }
    });
  }

  recuperinse(id, desig, co, unit, pic, tra, scr) {
    this.idInserrt = id;
    this.addinsert.get('design').setValue(desig);
    this.addinsert.get('code').setValue(co);
    this.addinsert.get('unite').setValue(unit);
    this.addinsert.get('price').setValue(pic);
    this.addinsert.get('trans').setValue(tra);
    this.addinsert.get('scrap').setValue(scr);
  }

  editins() {
    this.ServiceInser.modifier(this.idInserrt, this.addinsert.value).subscribe(res => {
      console.log(res);
      this.getallInserrt();
    });
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      width: 500,
      padding: 50,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
    Toast.fire({
      icon: 'success',
      title: 'The changes saved'
    });
  }

  /*Gérer colorant*/

  getallColorant() {
    this.ServiceCol.all().subscribe(result => {

      this.listColorant = result;

      console.log('listColorant', this.listColorant);

    });
  }

  addcol() {
    console.log('formgroup', this.addcolorant.value);
    this.ServiceCol.ajout(this.addcolorant.value).subscribe(res => {
      console.log(res);
      this.getallColorant();
    });
    Swal.fire({
      position: 'center',
      title: 'Added Successfully',
      html: 'Colorant has been added',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      width: 500,
    });

  }

  supprimercol(idColorant) {
    Swal.fire({
      position: 'center',
      title: 'Are you sure?',
      html: 'You wont it be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      width: 500,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.ServiceCol.supprimer(idColorant).subscribe(res => {
          console.log(res);
          this.getallColorant();
        });
        Swal.fire(
          'Deleted!',
          'Your Colorant has been deleted.',
          'success',
        );
      }
    });
  }

  recupercol(id, des, cs, ni, pi) {
    this.idColorant = id;
    this.addcolorant.get('designation').setValue(des);
    this.addcolorant.get('code').setValue(cs);
    this.addcolorant.get('unite').setValue(ni);
    this.addcolorant.get('price').setValue(pi);
  }

  editcol() {
    this.ServiceCol.modifier(this.idColorant, this.addcolorant.value).subscribe(res => {
      console.log(res);
      this.getallColorant();
    });
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      width: 500,
      padding: 50,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
    Toast.fire({
      icon: 'success',
      title: 'The changes saved'
    });
  }

  /*Gérer machine*/

  getallMachine() {
    this.ServMach.all().subscribe(result => {

      this.listMachine = result;

      console.log('listMachine', this.listMachine);

    });
  }

  addmach() {
    console.log('formgroup', this.addmachine.value);
    this.ServMach.ajout(this.addmachine.value).subscribe(res => {
      console.log(res);
      this.getallMachine();
    });
    Swal.fire({
      position: 'center',
      title: 'Added Successfully',
      html: 'Machine has been added',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      width: 500,
    });

  }

  supprimermach(idMachine) {
    Swal.fire({
      position: 'center',
      title: 'Are you sure?',
      html: 'You wont it be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      width: 500,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.ServMach.supprimer(idMachine).subscribe(res => {
          console.log(res);
          this.getallMachine();
        });
        Swal.fire(
          'Deleted!',
          'Your Machine has been deleted.',
          'success',
        );
      }
    });
  }

  recupermach(id, mm, ta, en, com, op, st, ope, ste) {
    this.idMachine = id;
    this.addmachine.get('im').setValue(mm);
    this.addmachine.get('tauxho').setValue(ta);
    this.addmachine.get('energie').setValue(en);
    this.addmachine.get('completen').setValue(com);
    this.addmachine.get('opedev').setValue(op);
    this.addmachine.get('startingdev').setValue(st);
    this.addmachine.get('opeven').setValue(ope);
    this.addmachine.get('startingof').setValue(ste);
  }

  editmach() {
    this.ServMach.modifier(this.idMachine, this.addmachine.value).subscribe(res => {
      console.log(res);
      this.getallMachine();
    });
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      width: 500,
      padding: 50,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
    Toast.fire({
      icon: 'success',
      title: 'The changes saved'
    });
  }

  /*Gérer machineparam*/

  getallMachineParam() {
    this.SerParam.all().subscribe(result => {

      this.listMachineParam = result;

      console.log(' listMachineParam', this.listMachineParam);

    });
  }

  addmachpar() {
    console.log('formgroup', this.addmachineParam.value);
    this.SerParam.ajout(this.addmachineParam.value).subscribe(res => {
      console.log(res);
      this.getallMachineParam();
    });
    Swal.fire({
      position: 'center',
      title: 'Added Successfully',
      html: 'Machine Parameter has been added',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      width: 500,
    });

  }

  supprimermachpar(idMachineParam) {
    Swal.fire({
      position: 'center',
      title: 'Are you sure?',
      html: 'You wont it be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      width: 500,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.SerParam.supprimer(idMachineParam).subscribe(res => {
          console.log(res);
          this.getallMachineParam();
        });
        Swal.fire(
          'Deleted!',
          'Your Machine Parameter has been deleted.',
          'success',
        );
      }
    });
  }

  recupermachpa(id, cu, ha, sc, sa, rdd, pro) {
    this.idMachineParam = id;
    this.addmachineParam.get('customer').setValue(cu);
    this.addmachineParam.get('handling').setValue(ha);
    this.addmachineParam.get('scrap').setValue(sc);
    this.addmachineParam.get('sales').setValue(sa);
    this.addmachineParam.get('rd').setValue(rdd);
    this.addmachineParam.get('profit').setValue(pro);
  }

  editmachpar() {
    this.SerParam.modifier(this.idMachineParam, this.addmachineParam.value).subscribe(res => {
      console.log(res);
      this.getallMachineParam();
    });
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      width: 500,
      padding: 50,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
    Toast.fire({
      icon: 'success',
      title: 'The changes saved'
    });
  }

  getallclient() {
    this.servclient.all().subscribe(result => {
      this.listclient = result;
      console.log('listClient', this.listclient);

    });
  }

  public onChangeSelectedClient(event) {
    this.selectclient = event.target.value;
    console.log('select', this.selectclient);
    this.servclient.getClientbyfullname(this.selectclient).subscribe(result => {
      this.detailclient = result;
      console.log('detailclient', this.detailclient);
    });
  }

  Search() {
    if ( this.im ===  '') {
      this.ngOnInit();
    } else {
      this.listMachine = this.listMachine.filter(res => {
        return res.im.toLocaleLowerCase().match(this.im.toLocaleLowerCase());
      });
    }
  }
  SearchP() {
    if ( this.customer ===  '') {
      this.ngOnInit();
    } else {
      this.listMachineParam = this.listMachineParam.filter(res => {
        return res.customer.toLocaleLowerCase().match(this.customer.toLocaleLowerCase());
      });
    }
  }
  Searchde() {
    if ( this.designation === '') {
      this.ngOnInit();
    } else {
      this.listColorant = this.listColorant.filter(res => {
        return res.designation.toLocaleLowerCase().match(this.designation.toLocaleLowerCase());
      });
    }
  }
  Searchin() {
    if ( this.design === '') {
      this.ngOnInit();
    } else {
      this.listInserrt = this.listInserrt.filter(res => {
        return res.design.toLocaleLowerCase().match(this.design.toLocaleLowerCase());
      });
    }
  }
  Searchtr() {
    if ( this.destination ===  '') {
      this.ngOnInit();
    } else {
      this.listTransport = this.listTransport.filter(res => {
        return res.destination.toLocaleLowerCase().match(this.destination.toLocaleLowerCase());
      });
    }
  }

  Searchca() {
    if ( this.description ===  '') {
      this.ngOnInit();
    } else {
      this.listCarton = this.listCarton.filter(res => {
        return res.description.toLocaleLowerCase().match(this.description.toLocaleLowerCase());
      });
    }
  }
  Searchbag() {
    if (this.description ===  '') {
      this.ngOnInit();
    } else {
      this.listSachet = this.listSachet.filter(res => {
        return res.description.toLocaleLowerCase().match(this.description.toLocaleLowerCase());
      });
    }
  }
  Searchsep() {
    if (this.description ===  '') {
      this.ngOnInit();
    } else {
      this.listSeparation = this.listSeparation.filter(res => {
        return res.description.toLocaleLowerCase().match(this.description.toLocaleLowerCase());
      });
    }
  }
  Searchpal() {
    if (this.description ===  '') {
      this.ngOnInit();
    } else {
      this.listPalette = this.listPalette.filter(res => {
        return res.type.toLocaleLowerCase().match(this.type.toLocaleLowerCase());
      });
    }
  }
}
