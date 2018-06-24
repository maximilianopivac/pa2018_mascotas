import { Component, OnInit } from "@angular/core";
import { Perfil, PerfilService } from "../perfil/perfil.service";
import { Http } from "@angular/http";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-buscar-amigos",
    templateUrl: "./buscar-amigos.component.html"
})

export class BuscarAmigosComponent implements OnInit {

    perfil: Perfil;

    constructor (public perfilService: PerfilService, private http: Http, private route: ActivatedRoute) {
        console.log(this.perfil);
    }

    ngOnInit() {
        this.perfilService
        .buscarPerfil().then(perfil => {this.perfil = perfil; });
        console.log(this.perfil);
    }
}