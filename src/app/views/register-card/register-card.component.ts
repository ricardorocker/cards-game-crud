import { Card } from './../../interfaces/card';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

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
    { name: 'Magia', value: "1" },
    { name: 'Criatura', value: "2" }
  ]

  classes = [
    { name: 'Mago', value: "1" },
    { name: 'Paladino', value: "2" },
    { name: 'Caçador', value: "3" },
    { name: 'Druida', value: "4" },
    { name: 'Qualquer', value: "5" }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private localStorage: LocalStorageService
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

      console.log(localStorage);
    } else {
      this.error = 'Campos obrigatórios!'
    }

  }
}
