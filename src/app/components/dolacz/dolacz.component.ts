import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-dolacz',
  templateUrl: './dolacz.component.html',
  styleUrls: ['./dolacz.component.scss']
})
export class DolaczComponent {
  form: FormGroup = this.fb.group({
    from_name: "imię",
    from_surname: "nazwisko",
    from_email: "email",
    message: "wiadomość",
  })

  constructor(private fb: FormBuilder) {}

  async send() {
    emailjs.init('kW3UOVISvkS5xmzID');
    let response = await emailjs.send("service_luym6x9","template_lekmsrv",{
      from_name: this.form.value.from_name,
      from_surname: this.form.value.from_surname,
      from_email: this.form.value.from_email,
      message: this.form.value.message,
      });

    alert('Message sent succesfully');
    this.form.reset();
  }
}

