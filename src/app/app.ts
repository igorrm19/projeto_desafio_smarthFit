import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Form } from './components/form/form';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Form],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('projeto_desafio_smarthFit');
}
