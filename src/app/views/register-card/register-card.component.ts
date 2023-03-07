import { Card } from './../../interfaces/card';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css']
})
export class RegisterCardComponent {
  form!: FormGroup
  card: Card[] = [];
  error: string = '';

  types = [
    { name: 'Magia', value: "Magia" },
    { name: 'Criatura', value: "Criatura" }
  ]

  classes = [
    { name: 'Mago', value: "Mago" },
    { name: 'Paladino', value: "Paladino" },
    { name: 'Caçador', value: "Caçador" },
    { name: 'Druida', value: "Druida" },
    { name: 'Qualquer', value: "Qualquer" }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private localStorage: LocalStorageService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      atack: ['', Validators.required],
      defense: ['', Validators.required],
      type: ['', Validators.required],
      class: ['', Validators.required]
    })
  }

  onCreateCard() {
    this.error = '';

    if (this.form.valid) {
      const idCard = this.form.get('id')?.value;

      if (this.localStorage.getCard(idCard).length > 0) {
        this.error = 'Id já utilizado!'
        return
      }

      this.card.push({
        id: idCard,
        name: this.form.get('name')?.value,
        description: this.form.get('description')?.value,
        atack: this.form.get('atack')?.value,
        defense: this.form.get('defense')?.value,
        type: this.form.get('type')?.value,
        class: this.form.get('class')?.value
      })

      this.localStorage.createCard(idCard, this.card);
      this.form.reset()
      this.route.navigateByUrl('');

    } else {
      this.error = 'Campos obrigatórios!'
    }

  }
}
