import { Injectable } from '@angular/core';
import { TooltipContainerComponent } from './tooltip-container.component';

@Injectable()
export class TooltipService {
  registeredTooltipContainers: TooltipContainerComponent[] = [];
  tooltipContainer: TooltipContainerComponent;

  deregisterTooltipContainer() {
    this.registeredTooltipContainers.pop();
    this.tooltipContainer = this.registeredTooltipContainers[this.registeredTooltipContainers.length - 1];
  }

  registerTooltipContainer(tooltipContainer: TooltipContainerComponent) {
    this.tooltipContainer = tooltipContainer;
    this.registeredTooltipContainers.push(this.tooltipContainer);
  }
}
