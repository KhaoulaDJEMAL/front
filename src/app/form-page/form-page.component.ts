import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StepModel } from '../models/StepModel';
import { Observable } from 'rxjs';
import { StepsService } from '../service/steps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormPageComponent implements OnInit {
  currentStep: Observable<StepModel>;

  constructor(
    private stepsService: StepsService,
    private router: Router) { }

  ngOnInit(): void {
    this.currentStep = this.stepsService.getCurrentStep();
  }

  onNextStep() {
    if (!this.stepsService.isLastStep()) {
      this.stepsService.moveToNextStep();
    } else {
      this.onSubmit();
    }
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Continue' : 'Finish';
  }

  onSubmit(): void {
    this.router.navigate(['/complete']);
  }
}