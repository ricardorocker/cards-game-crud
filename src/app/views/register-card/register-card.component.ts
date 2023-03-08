import { Card } from './../../interfaces/card';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css']
})
export class RegisterCardComponent implements OnInit {
  form!: FormGroup;
  card: Card[] = [];
  error: string = '';
  isNewRecord: boolean = false;

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
    private route: Router,
    private activateRoute: ActivatedRoute
  ) {
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

  ngOnInit(): void {
    const idCard = this.activateRoute.snapshot.paramMap.get('id');

    if (idCard) {
      this.isNewRecord = false;
      this.onEditCard(idCard);
    } else {
      this.isNewRecord = true;
    }
  }

  onEditCard(idCard: string) {
    this.card = this.localStorage.getCard(idCard!);

    this.form.patchValue({
      id: this.card[0].id,
      name: this.card[0].name,
      description: this.card[0].description,
      atack: this.card[0].atack,
      defense: this.card[0].defense,
      type: this.card[0].type,
      class: this.card[0].class
    })

    this.form.get('id')?.disable();
  }

  findInvalidControls(): void {
    const invalidControls = [];
    const controls = this.form.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalidControls.push(this.getDescription(name));
      }
    }
    const plural = invalidControls.length > 1 ? 's' : '';
    this.error = `Verifique o${plural} campo${plural} ${invalidControls.join(', ')}.`;
  }

  submitCard(): void {
    this.error = '';

    if (this.form.valid) {
      const idCard = this.form.get('id')?.value;


      if (this.isNewRecord) {
        if (this.localStorage.getCard(idCard).length > 0) {
          this.error = 'Código já utilizado!'
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

      } else {
        this.card[0].id = idCard;
        this.card[0].name = this.form.get('name')?.value;
        this.card[0].description = this.form.get('description')?.value;
        this.card[0].atack = this.form.get('atack')?.value;
        this.card[0].defense = this.form.get('defense')?.value;
        this.card[0].type = this.form.get('type')?.value;
        this.card[0].class = this.form.get('class')?.value;

        localStorage.setItem(idCard, JSON.stringify(this.card));
      }

      this.form.reset();
      this.route.navigateByUrl('');

    } else {
      this.findInvalidControls();
    }
  }

  getDescription(fieldsEnum: string): string {
    switch (fieldsEnum) {
      case 'id':
        return "Código";
      case 'name':
        return "Nome";
      case 'description':
        return "Descrição";
      case 'atack':
        return "Ataque";
      case 'defense':
        return "Defesa";
      case 'type':
        return "Tipo";
      case 'class':
        return "Classe";
      default:
        break;
    }
    return "";
  }
}
