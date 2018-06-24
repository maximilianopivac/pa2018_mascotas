import { Component, OnInit } from "@angular/core";
import { MenuComponent } from "../menu/menu.component";
import { Usuario } from "../usuario/usuario.service";


@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html"
})
export class WelcomeComponent implements OnInit {

  constructor() {
   }

  ngOnInit() { }
}
