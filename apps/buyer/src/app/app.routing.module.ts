import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OnboardingWidgetComponent } from './onboarding-widget/onboarding-widget.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { FindingsComponent } from './findings/findings.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: AppDashboardComponent,
        children: [
          {
            path: '',
            outlet: 'stepper',
            component: OnboardingWidgetComponent
          }
        ]
      },
      {
        path: 'findings',
        component: FindingsComponent
      },
      {
        path: 'not',
        component: PageNotFoundComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
  {
    path: 'component-aux',
    component: OnboardingWidgetComponent,
    outlet: 'tour'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
