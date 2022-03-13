import { AfterViewInit, ContentChildren, Directive, QueryList } from '@angular/core';
import { createSingleton } from 'tippy.js';
import { ToolTipDirective } from './tool-tip.directive';
@Directive({
  selector: '[appToolTipSingleten]'
})
export class ToolTipSingletenDirective implements AfterViewInit {

  @ContentChildren(ToolTipDirective, {descendants:true})
  elementsWithTooltips: QueryList<ToolTipDirective> | any;

  singletonInstance: any;

  constructor() { }
  ngAfterViewInit(){
    this.singletonInstance = createSingleton(this.getTippyInstance(),{
      delay:[200,0],
      moveTransition: 'transform 0.2s ease-out',
    });
    
    this.elementsWithTooltips.changes.subscrie(()=>{
      this.singletonInstance.setInstance(this.getTippyInstance());
    })
  }

  getTippyInstance(){
    return this.elementsWithTooltips?.toArray().map((t: { tippyInstances: any; }) => t.tippyInstances);
      
  }

}
function tippyInstances(tippyInstances: any, arg1: { delay: number; moveTransition: string; }) {
  throw new Error('Function not implemented.');
}

