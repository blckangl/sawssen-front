import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DevisEssaiService} from '../../services/devis-essai.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alldevis-essai',
  templateUrl: './alldevis-essai.component.html',
  styleUrls: ['./alldevis-essai.component.scss']
})
export class AlldevisEssaiComponent implements OnInit {

  selectdevisEssai;
  listDevEssai;
  idDevisEssai;
  DetailsEssai;
  p = 1;
  service: any;
  currentDate = new Date().toLocaleDateString();
  addDevisEssai: FormGroup;
  submitted = false;
  constructor(private actvroute: ActivatedRoute, private SerDevEss: DevisEssaiService, private formBuilder: FormBuilder ,
              private router: Router ) { }

  ngOnInit() {
    this.getallDevisEssai();
    this.addDevisEssai = this.formBuilder.group({
      service: ['', Validators.required],
      numdoc: ['', Validators.required],
      date: this.currentDate,
      client: ['', Validators.required],
      proj: ['', Validators.required],
      mold: ['', Validators.required],
      ref: ['', Validators.required],
      name: ['', Validators.required],
      number: ['', Validators.required],
      dest: ['', Validators.required],
      sales: ['', Validators.required],
      macro: ['', Validators.required],
      cond: ['', Validators.required],
      validity: ['', Validators.required],
      matqu: ['', Validators.required],
      comqu: ['', Validators.required],
      othqu: ['', Validators.required],
      purp: ['', Validators.required],
      purco: ['', Validators.required],
      purot: ['', Validators.required],
      cosma: ['', Validators.required],
      cospu: ['', Validators.required],
      cosu: ['', Validators.required],
      cosd: ['', Validators.required],
      cost: ['', Validators.required],
      cosq: ['', Validators.required],
      marma: ['', Validators.required],
      marcom: ['', Validators.required],
      marothe: ['', Validators.required],
      offma: ['', Validators.required],
      offpur: ['', Validators.required],
      offeoth: ['', Validators.required],
      offtota: ['', Validators.required],
      offmar: ['', Validators.required],
      aym: ['', Validators.required],
      offtot: ['', Validators.required],
      proma: ['', Validators.required],
      proop: ['', Validators.required],
      protec: ['', Validators.required],
      prooth: ['', Validators.required],
      promu: ['', Validators.required],
      propr: ['', Validators.required],
      prote: ['', Validators.required],
      prootc: ['', Validators.required],
      proco: ['', Validators.required],
      procop: ['', Validators.required],
      propc : ['', Validators.required],
      proth: ['', Validators.required],
      prto: ['', Validators.required],
      prma: ['', Validators.required],
      prat: ['', Validators.required],
      mapr: ['', Validators.required],
      prpr: ['', Validators.required],
      mete : ['', Validators.required],
      protu: ['', Validators.required],
      prmc: ['', Validators.required],
      pr: ['', Validators.required],
      prtc: ['', Validators.required],
      prot: ['', Validators.required],
      ofpr: ['', Validators.required],
      ofpa: ['', Validators.required],
      ofd: ['', Validators.required],
      vme: ['', Validators.required],
      qume: ['', Validators.required],
      prme: ['', Validators.required],
      come: ['', Validators.required],
      mame: ['', Validators.required],
      ofme: ['', Validators.required],
      qumeq: ['', Validators.required],
      prime: ['', Validators.required],
      pme: ['', Validators.required],
      cme: ['', Validators.required],
      mgme: ['', Validators.required],
      comec: ['', Validators.required],
      marme: ['', Validators.required],
      tome: ['', Validators.required],
      tame: ['', Validators.required],
      txme: ['', Validators.required],
      tvme: ['', Validators.required],
      prv: ['', Validators.required],
      prq: ['', Validators.required],
      pri: ['', Validators.required],
      prc: ['', Validators.required],
      prm: ['', Validators.required],
      prr: ['', Validators.required],
      pro: ['', Validators.required],
      prt: ['', Validators.required],
      prth: ['', Validators.required],
      prco: ['', Validators.required],
      pry: ['', Validators.required],
      prti: ['', Validators.required],
      prmq: ['', Validators.required],
      prtt: ['', Validators.required],
      proo: ['', Validators.required],
      prx: ['', Validators.required],
      pra: ['', Validators.required],
      otv: ['', Validators.required],
      otq: ['', Validators.required],
      otp: ['', Validators.required],
      otc: ['', Validators.required],
      otm: ['', Validators.required],
      oto: ['', Validators.required],
      otu: ['', Validators.required],
      otpi: ['', Validators.required],
      otco: ['', Validators.required],
      otmo: ['', Validators.required],
      ott: ['', Validators.required],
      otss: ['', Validators.required],
      otma: ['', Validators.required],
      otze: ['', Validators.required],
      otsq: ['', Validators.required],
      otqs: ['', Validators.required],
      otvg: ['', Validators.required],
      pckv: ['', Validators.required],
      pckq: ['', Validators.required],
      pckc: ['', Validators.required],
      pcks: ['', Validators.required],
      pckr: ['', Validators.required],
      pckf: ['', Validators.required],
      pcky: ['', Validators.required],
      pcki: ['', Validators.required],
      pcke: ['', Validators.required],
      pckii: ['', Validators.required],
      pckk: ['', Validators.required],
      pckss: ['', Validators.required],
      pckaq: ['', Validators.required],
      pcka: ['', Validators.required],
      pckm: ['', Validators.required],
      pckh : ['', Validators.required],
      pckg: ['', Validators.required],
      prtvi: ['', Validators.required],
      prtq: ['', Validators.required],
      prtv: ['', Validators.required],
      prtm: ['', Validators.required],
      prtl: ['', Validators.required],
      prtb: ['', Validators.required],
      prtu: ['', Validators.required],
      prtr: ['', Validators.required],
      prtx: ['', Validators.required],
      prta: ['', Validators.required],
      prtf: ['', Validators.required],
      prtfe: ['', Validators.required],
      prtre: ['', Validators.required],
      prtez: ['', Validators.required],
      prtp: ['', Validators.required],
      prtw: ['', Validators.required],
      prmt: ['', Validators.required],
      wov: ['', Validators.required],
      woq: ['', Validators.required],
      wod: ['', Validators.required],
      wos: ['', Validators.required],
      wom: ['', Validators.required],
      wof: ['', Validators.required],
      wok: ['', Validators.required],
      wog: ['', Validators.required],
      won: ['', Validators.required],
      wou: ['', Validators.required],
      wor: ['', Validators.required],
      wop: ['', Validators.required],
      woz: ['', Validators.required],
      woa: ['', Validators.required],
      wob: ['', Validators.required],
      wow: ['', Validators.required],
      woj: ['', Validators.required],
      ayp: ['', Validators.required],
      aya: ['', Validators.required],
      ayz: ['', Validators.required],
      aye : ['', Validators.required],
      ayr: ['', Validators.required],
      ayt: ['', Validators.required],
      ayu: ['', Validators.required],
      ayi: ['', Validators.required],
      ayo: ['', Validators.required],
      abp: ['', Validators.required],
      ayq: ['', Validators.required],
      ayw: ['', Validators.required],
      ayx: ['', Validators.required],
      ayha: ['', Validators.required],
      ayg: ['', Validators.required],
      ayv: ['', Validators.required],
      ina: ['', Validators.required],
      inz: ['', Validators.required],
      ine: ['', Validators.required],
      inr: ['', Validators.required],
      itn: ['', Validators.required],
      iny: ['', Validators.required],
      inu: ['', Validators.required],
      ini: ['', Validators.required],
      ino: ['', Validators.required],
      inp: ['', Validators.required],
      inq: ['', Validators.required],
      ins: ['', Validators.required],
      ind: ['', Validators.required],
      inf: ['', Validators.required],
      ing: ['', Validators.required],
      inh : ['', Validators.required],
      ink : ['', Validators.required],
      pcck: ['', Validators.required],
    });
  }
  get f() {
    return this.addDevisEssai.controls;
  }

  onSubmit() {
    this.submitted = true;

    console.log('addform', this.addDevisEssai.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addDevisEssai.value, null, 4));
  }
  getallDevisEssai() {
    this.SerDevEss.getall().subscribe(result => {

      this.listDevEssai = result ;

      console.log('listDevEssai', this.listDevEssai);

    });
  }
  supprimer(iddevisEssai) {
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
        this.SerDevEss.supprimer( iddevisEssai).subscribe(res => {
          console.log(res);
          this.getallDevisEssai();
        });
        Swal.fire(
          'Deleted!',
          'Your Trial quote has been deleted.',
          'success',
        );
      }
    });
  }
  recuper(id, ser, nu, da, cl, pr, mo, re, na, num, de, sa, ma, pu, cos, a, b, c, d, e, f, g, h, k, w, x, v, n, aa, zz, ee, rr,
          tt, yy, uu, ii, oo, pp, qq, ss, dd, ff, gg, hh, jj, kk, ll, mm, ww, xx, cc, vv, bb, nn, of, oa, oz, oe, or, ot, oy,
          ou, oi, op, oq, os, od, og, oh, oj, ok, ol, om, ow, ox, oc, ov, ob, on, xa, xz, xe, xr, xt, xy, xu, xi, xo, xp, xq, xs,
          xd, xf, xg, xh, xj, xk, xl, xm, xw, xc, xv, xb, xn, ka, kz, ke, kr, kt, ky, ku, ki, ko, kp, kq, ks, kd, kf, kg, kh, kj,
          kl , km, kw, kx, kc, kv, kb, kn, pa, pz, pe, pt, py, pi, po, pq, ps, pd, pf, pg, ph, pj, pk, pl, pm, pw, px, pc, pv, pb,
          pn, ha, hz, he, hr, ht, hy, hu, hi, ho, hp, hq, hs, hd, hf, hg, hj, hk, hl, hm, hw, hx, hc, hv, hb, hn, ia, iz, ie, ir,
          iy, iu, io, ip, iq, is, ig, ih, ij, ik, il, im, iw, ix, ic, iv, ib) {
    this.idDevisEssai = id;
    this.addDevisEssai.get('service').setValue(ser);
    this.addDevisEssai.get('numdoc').setValue(nu);
    this.addDevisEssai.get('date').setValue(da);
    this.addDevisEssai.get('client').setValue(cl);
    this.addDevisEssai.get('proj').setValue(pr);
    this.addDevisEssai.get('mold').setValue(mo);
    this.addDevisEssai.get('ref').setValue(re);
    this.addDevisEssai.get('name').setValue(na);
    this.addDevisEssai.get('number').setValue(num);
    this.addDevisEssai.get('dest').setValue(de);
    this.addDevisEssai.get('sales').setValue(sa);
    this.addDevisEssai.get('matqu').setValue(ma);
    this.addDevisEssai.get('purp').setValue(pu);
    this.addDevisEssai.get('cosma').setValue(cos);
    this.addDevisEssai.get('marma').setValue(a);
    this.addDevisEssai.get('offma').setValue(b);
    this.addDevisEssai.get('comqu').setValue(c);
    this.addDevisEssai.get('purco').setValue(d);
    this.addDevisEssai.get('cospu').setValue(e);
    this.addDevisEssai.get('marcom').setValue(f);
    this.addDevisEssai.get('offpur').setValue(g);
    this.addDevisEssai.get('othqu').setValue(h);
    this.addDevisEssai.get('purot').setValue(k);
    this.addDevisEssai.get('cosu').setValue(w);
    this.addDevisEssai.get('marothe').setValue(x);
    this.addDevisEssai.get('offeoth').setValue(v);
    this.addDevisEssai.get('cosd').setValue(n);
    this.addDevisEssai.get('offtota').setValue(aa);
    this.addDevisEssai.get('cost').setValue(zz);
    this.addDevisEssai.get('offmar').setValue(ee);
    this.addDevisEssai.get('cosq').setValue(rr);
    this.addDevisEssai.get('offtot').setValue(tt);
    this.addDevisEssai.get('proma').setValue(yy);
    this.addDevisEssai.get('promu').setValue(uu);
    this.addDevisEssai.get('proco').setValue(ii);
    this.addDevisEssai.get('mapr').setValue(oo);
    this.addDevisEssai.get('prmc').setValue(pp);
    this.addDevisEssai.get('proop').setValue(qq);
    this.addDevisEssai.get('propr').setValue(ss);
    this.addDevisEssai.get('procop').setValue(dd);
    this.addDevisEssai.get('prpr').setValue(ff);
    this.addDevisEssai.get('pr').setValue(gg);
    this.addDevisEssai.get('protec').setValue(hh);
    this.addDevisEssai.get('prote').setValue(jj);
    this.addDevisEssai.get('propc').setValue(kk);
    this.addDevisEssai.get('mete').setValue(ll);
    this.addDevisEssai.get('prtc').setValue(mm);
    this.addDevisEssai.get('prooth').setValue(ww);
    this.addDevisEssai.get('prootc').setValue(xx);
    this.addDevisEssai.get('proth').setValue(cc);
    this.addDevisEssai.get('protu').setValue(vv);
    this.addDevisEssai.get('prot').setValue(bb);
    this.addDevisEssai.get('prto').setValue(nn);
    this.addDevisEssai.get('ofpr').setValue(of);
    this.addDevisEssai.get('prma').setValue(oa);
    this.addDevisEssai.get('ofpa').setValue(oz);
    this.addDevisEssai.get('prat').setValue(oe);
    this.addDevisEssai.get('ofd').setValue(or);
    this.addDevisEssai.get('vme').setValue(ot);
    this.addDevisEssai.get('qume').setValue(oy);
    this.addDevisEssai.get('prme').setValue(ou);
    this.addDevisEssai.get('come').setValue(oi);
    this.addDevisEssai.get('mame').setValue(op);
    this.addDevisEssai.get('ofme').setValue(oq);
    this.addDevisEssai.get('qumeq').setValue(os);
    this.addDevisEssai.get('prime').setValue(od);
    this.addDevisEssai.get('pme').setValue(og);
    this.addDevisEssai.get('cme').setValue(oh);
    this.addDevisEssai.get('mgme').setValue(oj);
    this.addDevisEssai.get('comec').setValue(ok);
    this.addDevisEssai.get('tame').setValue(ol);
    this.addDevisEssai.get('marme').setValue(om);
    this.addDevisEssai.get('txme').setValue(ow);
    this.addDevisEssai.get('tome').setValue(ox);
    this.addDevisEssai.get('tvme').setValue(oc);
    this.addDevisEssai.get('prv').setValue(ov);
    this.addDevisEssai.get('prq').setValue(ob);
    this.addDevisEssai.get('pri').setValue(on);
    this.addDevisEssai.get('prc').setValue(xa);
    this.addDevisEssai.get('prm').setValue(xz);
    this.addDevisEssai.get('prr').setValue(xe);
    this.addDevisEssai.get('pro').setValue(xr);
    this.addDevisEssai.get('prt').setValue(xt);
    this.addDevisEssai.get('prth').setValue(xy);
    this.addDevisEssai.get('prco').setValue(xu);
    this.addDevisEssai.get('pry').setValue(xi);
    this.addDevisEssai.get('prti').setValue(xo);
    this.addDevisEssai.get('proo').setValue(xp);
    this.addDevisEssai.get('prmq').setValue(xq);
    this.addDevisEssai.get('prx').setValue(xs);
    this.addDevisEssai.get('prtt').setValue(xd);
    this.addDevisEssai.get('pra').setValue(xf);
    this.addDevisEssai.get('otv').setValue(xg);
    this.addDevisEssai.get('otq').setValue(xh);
    this.addDevisEssai.get('otp').setValue(xj);
    this.addDevisEssai.get('otc').setValue(xk);
    this.addDevisEssai.get('otm').setValue(xl);
    this.addDevisEssai.get('oto').setValue(xm);
    this.addDevisEssai.get('otu').setValue(xw);
    this.addDevisEssai.get('otpi').setValue(xc);
    this.addDevisEssai.get('otco').setValue(xv);
    this.addDevisEssai.get('otmo').setValue(xb);
    this.addDevisEssai.get('ott').setValue(xn);
    this.addDevisEssai.get('otss').setValue(ka);
    this.addDevisEssai.get('otsq').setValue(kz);
    this.addDevisEssai.get('otma').setValue(ke);
    this.addDevisEssai.get('otqs').setValue(kr);
    this.addDevisEssai.get('otze').setValue(kt);
    this.addDevisEssai.get('otvg').setValue(ky);
    this.addDevisEssai.get('pckv').setValue(ku);
    this.addDevisEssai.get('pckq').setValue(ki);
    this.addDevisEssai.get('pckc').setValue(ko);
    this.addDevisEssai.get('pcks').setValue(kp);
    this.addDevisEssai.get('pckr').setValue(kq);
    this.addDevisEssai.get('pckf').setValue(ks);
    this.addDevisEssai.get('pcky').setValue(kd);
    this.addDevisEssai.get('pcki').setValue(kf);
    this.addDevisEssai.get('pcke').setValue(kg);
    this.addDevisEssai.get('pckii').setValue(kh);
    this.addDevisEssai.get('pckk').setValue(kj);
    this.addDevisEssai.get('pckss').setValue(kl);
    this.addDevisEssai.get('pckm').setValue(km);
    this.addDevisEssai.get('pcka').setValue(kw);
    this.addDevisEssai.get('pckh').setValue(kx);
    this.addDevisEssai.get('pckaq').setValue(kc);
    this.addDevisEssai.get('pckg').setValue(kv);
    this.addDevisEssai.get('prtvi').setValue(kb);
    this.addDevisEssai.get('prtq').setValue(kn);
    this.addDevisEssai.get('prtv').setValue(pa);
    this.addDevisEssai.get('prtm').setValue(pz);
    this.addDevisEssai.get('prtl').setValue(pe);
    this.addDevisEssai.get('prtb').setValue(pt);
    this.addDevisEssai.get('prtu').setValue(py);
    this.addDevisEssai.get('prtr').setValue(pi);
    this.addDevisEssai.get('prtx').setValue(po);
    this.addDevisEssai.get('prta').setValue(pq);
    this.addDevisEssai.get('prtf').setValue(ps);
    this.addDevisEssai.get('prtfe').setValue(pd);
    this.addDevisEssai.get('prtp').setValue(pf);
    this.addDevisEssai.get('prtre').setValue(pg);
    this.addDevisEssai.get('prtw').setValue(ph);
    this.addDevisEssai.get('prtez').setValue(pj);
    this.addDevisEssai.get('prmt').setValue(pk);
    this.addDevisEssai.get('wov').setValue(pl);
    this.addDevisEssai.get('woq').setValue(pm);
    this.addDevisEssai.get('wod').setValue(pw);
    this.addDevisEssai.get('wos').setValue(px);
    this.addDevisEssai.get('wom').setValue(pc);
    this.addDevisEssai.get('wof').setValue(pv);
    this.addDevisEssai.get('wok').setValue(pb);
    this.addDevisEssai.get('wog').setValue(pn);
    this.addDevisEssai.get('won').setValue(ha);
    this.addDevisEssai.get('wou').setValue(hz);
    this.addDevisEssai.get('wor').setValue(he);
    this.addDevisEssai.get('wop').setValue(hr);
    this.addDevisEssai.get('wob').setValue(ht);
    this.addDevisEssai.get('woz').setValue(hy);
    this.addDevisEssai.get('wow').setValue(hu);
    this.addDevisEssai.get('woa').setValue(hi);
    this.addDevisEssai.get('woj').setValue(ho);
    this.addDevisEssai.get('ayp').setValue(hp);
    this.addDevisEssai.get('aya').setValue(hq);
    this.addDevisEssai.get('ayz').setValue(hs);
    this.addDevisEssai.get('aye').setValue(hd);
    this.addDevisEssai.get('ayr').setValue(hf);
    this.addDevisEssai.get('ayt').setValue(hg);
    this.addDevisEssai.get('ayu').setValue(hj);
    this.addDevisEssai.get('ayi').setValue(hk);
    this.addDevisEssai.get('ayo').setValue(hl);
    this.addDevisEssai.get('abp').setValue(hm);
    this.addDevisEssai.get('ayq').setValue(hw);
    this.addDevisEssai.get('ayw').setValue(hx);
    this.addDevisEssai.get('ayg').setValue(hc);
    this.addDevisEssai.get('ayx').setValue(hv);
    this.addDevisEssai.get('aym').setValue(hb);
    this.addDevisEssai.get('ayha').setValue(hn);
    this.addDevisEssai.get('ayv').setValue(ia);
    this.addDevisEssai.get('ina').setValue(iz);
    this.addDevisEssai.get('inz').setValue(ie);
    this.addDevisEssai.get('ine').setValue(ir);
    this.addDevisEssai.get('inr').setValue(iy);
    this.addDevisEssai.get('itn').setValue(iu);
    this.addDevisEssai.get('iny').setValue(io);
    this.addDevisEssai.get('inu').setValue(ip);
    this.addDevisEssai.get('ini').setValue(iq);
    this.addDevisEssai.get('ino').setValue(is);
    this.addDevisEssai.get('inp').setValue(ig);
    this.addDevisEssai.get('inq').setValue(ih);
    this.addDevisEssai.get('ins').setValue(ij);
    this.addDevisEssai.get('ing').setValue(ik);
    this.addDevisEssai.get('ind').setValue(il);
    this.addDevisEssai.get('inh').setValue(im);
    this.addDevisEssai.get('inf').setValue(iw);
    this.addDevisEssai.get('ink').setValue(ix);
    this.addDevisEssai.get('macro').setValue(ic);
    this.addDevisEssai.get('cond').setValue(iv);
    this.addDevisEssai.get('validity').setValue(ib);
  }

  edit() {
    this.SerDevEss.modifier(this.idDevisEssai, this.addDevisEssai.value).subscribe(res => {
      console.log(res);
      this.getallDevisEssai();
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
  Search() {
    if ( this.service == '') {
      this.ngOnInit();
    } else {
      this.listDevEssai = this.listDevEssai.filter(res => {
      return res.service.toLocaleLowerCase().match(this.service.toLocaleLowerCase());
      });
    }
  }
}
