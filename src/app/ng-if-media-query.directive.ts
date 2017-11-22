import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * How to use this directive?
 *
 * ```
 * <div *ngIfMediaQuery="'(min-width: 500px)'">
 *     Div element will exist only when media query matches, and created/destroyed when the viewport size changes.
 * </div>
 * ```
 */
function isBlank (x) { return !x; }
@Directive({
  selector: '[ngIfMediaQuery]',
  inputs: ['ngIfMediaQuery']
})
export class ngIfMediaQuery {
  private prevCondition: boolean = null;

  private mql: MediaQueryList;
  private mqlListener: (mql: MediaQueryList) => void;   // reference kept for cleaning up in ngOnDestroy()
  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<Object>) {}

  /**
   * Called whenever the media query input value changes.
   */
  set ngIfMediaQuery(newMediaQuery: string) {
    if (!this.mql) {
      this.mql = window.matchMedia(newMediaQuery);

      /* Register for future events */
      this.mqlListener = (mq) => {
        this.onMediaMatchChange(mq.matches);
      };
      this.mql.addListener(this.mqlListener);
    }

    this.onMediaMatchChange(this.mql.matches);
  }

  ngOnDestroy() {
    this.mql.removeListener(this.mqlListener);
    this.mql = this.mqlListener = null;
  }

  private onMediaMatchChange(matches: boolean) {
    // this has been taken verbatim from NgIf implementation
    if (matches && (isBlank(this.prevCondition) || !this.prevCondition)) {
      this.prevCondition = true;
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (!matches && (isBlank(this.prevCondition) || this.prevCondition)) {
      this.prevCondition = false;
      this.viewContainer.clear();
    }
  }
}
