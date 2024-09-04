import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import emailjs from '@emailjs/browser';
import { PopUpComponent } from '../pop-up/pop-up.component';
@Component({
  selector: 'app-dolacz',
  templateUrl: './dolacz.component.html',
  styleUrls: ['./dolacz.component.scss'],
})
export class DolaczComponent implements OnInit {
  form: FormGroup = this.fb.group({
    from_name: 'imię',
    from_surname: 'nazwisko',
    from_email: 'email',
    message: 'wiadomość',
  });

  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.openPopUp();
  }
  openPopUp() {
    this.dialog.open(PopUpComponent, {
      width: '1200px',
      panelClass: ['custom-dialog-container', 'centered-content'],
      position: { top: '-1050px', left: '15%' },
    });
  }
  async send() {
    emailjs.init('kW3UOVISvkS5xmzID');
    let response = await emailjs.send('service_luym6x9', 'template_lekmsrv', {
      from_name: this.form.value.from_name,
      from_surname: this.form.value.from_surname,
      from_email: this.form.value.from_email,
      message: this.form.value.message,
    });

    alert('Message sent succesfully');
    this.form.reset();
  }
}
