import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnboardingWidgetComponent } from './onboarding-widget/onboarding-widget.component';
import { AppRoutingModule } from './app.routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { FindingsComponent } from './findings/findings.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    OnboardingWidgetComponent,
    PageNotFoundComponent,
    AppDashboardComponent,
    FindingsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NoopAnimationsModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
