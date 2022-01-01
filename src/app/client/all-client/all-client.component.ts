import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../../services/client.service';
import Swal from 'sweetalert2';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'app-all-client',
  templateUrl: './all-client.component.html',
  styleUrls: ['./all-client.component.scss']
})
export class AllClientComponent implements OnInit {
  listClient;
  idClient;
  ClientDetails;
  addClient: FormGroup;
  submitted = false;
  filesToUpload: Array<File>;
  selectedFile: File;
  public  userFile: any = File;
  constructor(private actvroute: ActivatedRoute, private ServiceClient: ClientService , private formBuilder: FormBuilder,
              private  srvcimg: ImageService, private router: Router) { }

  ngOnInit() {
    this.getallClient();
    this.addClient = this.formBuilder.group({
      fullname: ['', Validators.required],
      sector: ['', Validators.required],
      activity: ['', Validators.required],
      adresse: ['', Validators.required],
      country: ['', Validators.required],
      mobile: ['', Validators.required],
      fax: ['', Validators.required],
      email: ['', Validators.required],
      websi: ['', Validators.required],
      contact: ['', Validators.required],
      emacom: ['', Validators.required],
      num: ['', Validators.required],
      cap: ['', Validators.required],
      busn: ['', Validators.required],
      crea: ['', Validators.required],
      source: ['', Validators.required],
      mobcc: ['', Validators.required],
      info: ['', Validators.required],
      profile: ['', Validators.required],
      product: ['', Validators.required],
      joinindate: ['', Validators.required]
    });
  }

  get f() {
    return this.addClient.controls;
  }

  onSubmit() {
    this.submitted = true;

    console.log('addform', this.addClient.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addClient.value, null, 4));

  }

  onReset() {
    this.submitted = false;
    this.addClient.reset();
  }
  getallClient() {
    this.ServiceClient.all().subscribe(result => {

      this.listClient = result ;

      console.log('listClient', this.listClient);

    });
  }

  add() {
    console.log('formgroup', this.addClient.value);
    this.ServiceClient.ajout(this.addClient.value).subscribe(res => {
      console.log(res);
      this.getallClient();
    });
    Swal.fire({
      position: 'center',
      title: 'Added Successfully',
      html: 'Customer has been added',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      width: 500,
    });

  }
  supprimer(idClient) {
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
        this.ServiceClient.supprimer(idClient).subscribe(res => {
          console.log(res);
          this.getallClient();
        });
        Swal.fire(
          'Deleted!',
          'Your Customer has been deleted.',
          'success',
        );
      }
    });
  }

  recuper(id, nam, sec, act, adr, cn, mobb, fx, emx, cnt, enm, mob, numm, caz, bus, cre, ser, inf, prof, prod, wed) {
    this.idClient = id;
    this.addClient.get('fullname').setValue(nam);
    this.addClient.get('sector').setValue(sec);
    this.addClient.get('activity').setValue(act);
    this.addClient.get('adresse').setValue(adr);
    this.addClient.get('country').setValue(cn);
    this.addClient.get('mobile').setValue(mobb);
    this.addClient.get('fax').setValue(fx);
    this.addClient.get('email').setValue(emx);
    this.addClient.get('contact').setValue(cnt);
    this.addClient.get('emacom').setValue(enm);
    this.addClient.get('mobcc').setValue(mob);
    this.addClient.get('num').setValue(numm);
    this.addClient.get('cap').setValue(caz);
    this.addClient.get('busn').setValue(bus);
    this.addClient.get('crea').setValue(cre);
    this.addClient.get('source').setValue(ser);
    this.addClient.get('info').setValue(inf);
    this.addClient.get('profile').setValue(prof);
    this.addClient.get('product').setValue(prod);
    this.addClient.get('websi').setValue(wed);
  }

  edit() {

    this.ServiceClient.modifier(this.idClient, this.addClient.value).subscribe(res => {
      console.log(res);
      this.getallClient();
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



}
