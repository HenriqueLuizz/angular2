import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemCompoment { 
    
    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string = '';

    constructor(service: FotoService) {
        
        this.service = service;
        service
        .lista()
        .subscribe( fotos => {
            this.fotos = fotos;
        }, err => console.log(err))
    }

    remove(foto) {
        this.service.remove(foto)
        .subscribe(
            () => {
                let novasFotos = this.fotos.slice(0);
                let indice = novasFotos.indexOf(foto);
                novasFotos.splice(indice, 1);
                this.fotos = novasFotos;
                this.mensagem = 'Foto removida com sucesso!';
            },
            err => {
                this.mensagem = 'Foto removida com sucesso!';
                console.log(err);
            }
        );
    }
}