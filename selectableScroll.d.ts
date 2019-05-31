/// <reference types="jquery" />
/// <reference types="jqueryui" />

declare namespace JQueryUI{
    interface SelectableScrollOptions extends SelectableOptions {
        scrollElement?: JQuery<HTMLElement> | null;
        scrollSnapX?: number;
        scrollSnapY?: number;
        scrollAmount?: number;
        scrollIntervalTime?: number;
    }
    
    interface SelectableScroll extends Selectable{
    }
}

interface JQuery{
    selectableScroll(): JQuery;
    selectableScroll(methodName: 'destroy'): void;
    selectableScroll(methodName: 'disable'): void;
    selectableScroll(methodName: 'enable'): void;
    selectableScroll(methodName: 'widget'): JQuery;
    selectableScroll(methodName: string): JQuery;
    selectableScroll(options: JQueryUI.SelectableScrollOptions): JQuery;
    selectableScroll(optionLiteral: string, optionName: string): any;
    selectableScroll(optionLiteral: string, options: JQueryUI.SelectableScrollOptions): any;
    selectableScroll(optionLiteral: string, optionName: string, optionValue: any): JQuery;
}