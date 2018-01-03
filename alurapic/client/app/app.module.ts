import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { PainelModule } from './painel/painel.model';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemCompoment } from './listagem/listagem.component';
import { routing } from './app.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ 
        BrowserModule, 
        FotoModule, 
        HttpModule, 
        PainelModule, 
        routing,
        FormsModule
    ],
    declarations: [ 
        AppComponent, 
        CadastroComponent, 
        ListagemCompoment 
    ],
    bootstrap: [ 
        AppComponent 
    ]
})
export class AppModule { }