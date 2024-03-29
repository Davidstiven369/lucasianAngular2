import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { SizeComponent } from './shared/forms/size/size.component';
//david

import { LoginComponent } from './components/login/login.component';
import { EffortComponent } from './shared/forms/effort/effort.component';
import { CostingComponent } from './shared/forms/costing/costing.component';
import { NewProjectComponent } from './components/newProject/newProject.component';
import { PivotEffortComponent } from './shared/forms/pivotEffort/pivotEffort.component';
import { DialogFormComponent } from './components/login/dialogForm/dialogForm.component';
import { ExistingProjectComponent } from './components/existingProject/existingProject.component';
import { ComplementaryActivitiesComponent } from './shared/forms/complementaryActivities/complementaryActivities.component';
import { NoPagedFoundComponent } from './shared/pageNotFound/pageNotFound.component';

//david
import { DialogFormsizeComponent } from './shared/forms/size/dialogForm/dialogForm.component';



//Modulos

import { MaterialModule } from './shared/modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatStepperModule } from '@angular/material/stepper';

// services david
import { TamanioService } from 'src/app/services/tamanio.service';
import { UsuarioService } from './services/usuario.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SizeComponent,
    LoginComponent,
    EffortComponent,
    CostingComponent,
    NewProjectComponent,
    DialogFormComponent,
    DialogFormsizeComponent,
    PivotEffortComponent,
    ExistingProjectComponent,
    ComplementaryActivitiesComponent,
    NoPagedFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  
  providers: [UsuarioService,TamanioService],
  bootstrap: [AppComponent],
  entryComponents: [DialogFormComponent,DialogFormsizeComponent]
})
export class AppModule { }
