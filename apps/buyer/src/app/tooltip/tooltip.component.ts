import { Component, ViewChild, ElementRef, Input,
  HostListener, HostBinding,
  Directive, ChangeDetectionStrategy,
  ComponentFactoryResolver, TemplateRef, ContentChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { TooltipService } from './tooltip.service';
import { TooltipContentComponent } from './tooltip-content.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ds1-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator // @HostListener doesn't work with server-side rendering (creates a reference to a browser-only event type)
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '(focusout)': 'onFocusout($event)',
    '(click)': 'onClick($event)'
  },
  queries: {
    tooltipContentTemplateRef: new ContentChild('tooltipContentTemplate')
  }
})
export class TooltipComponent {
  @HostBinding('tabindex') tabIndex = -1;

  @Input() content: string;
  @Input() header: string;
  @Input() isTooltipWide: boolean;
  @Input() size: 'sm' | 'md' | 'lg' = 'sm'; // default to 'sm'

  @ViewChild('trigger') trigger: ElementRef;
  @ViewChild('customTrigger') customTrigger: ElementRef;

  tooltipContentTemplateRef: TemplateRef<any>;

  private tooltipContentComponent: TooltipContentComponent;
  private isTooltipShown: boolean;

  constructor(
    private tooltipService: TooltipService,
    public elementRef: ElementRef,
    public cfr: ComponentFactoryResolver) { }

  get hasCustomTrigger() {
    if(!this.customTrigger){
      return false;
    }

    return this.customTrigger.nativeElement.children.length > 0;
  }

  onFocusout(event: Event): boolean {
    this.hide();
    return this.stopPropagation(event);
  }

  onClick(event: Event): boolean {
    // tslint:disable-next-line: deprecation
    const isAnchor = (event.target || event.srcElement) instanceof HTMLAnchorElement;
    return isAnchor || this.stopPropagation(event);
  }

  toggle(event: Event): void {
    !this.isTooltipShown ? this.show() : this.hide();
  }

  hide(): void {
    if (this.tooltipContentComponent) {
      this.tooltipContentComponent.hide();
      this.isTooltipShown = false;
    }
  }

  private show(): void {
    this.tooltipContentComponent = this.tooltipService.tooltipContainer.open(this);
    this.isTooltipShown = true;
  }

  private stopPropagation(event: Event): boolean {
    // perevents the default action and click event from bubbling outside of the tooltip component
    event.preventDefault();
    event.stopImmediatePropagation();
    return false;
  }

}
