import { RouterModule, Routes} from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemCompoment } from './listagem/listagem.component';

const appRoutes: Routes = [
    { path: '', component: ListagemCompoment },
    { path: 'cadastro', component: CadastroComponent },
    { path: '**', component: ListagemCompoment }
];

export const routing = RouterModule.forRoot(appRoutes);
