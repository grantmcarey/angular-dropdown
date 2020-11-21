import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from "@angular/core";

@Component({
  selector: "my-app",
  styleUrls: ["app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent {

  emptyDataSelection = {
    name: 'Select'
  };
 

  // @Input()
  options = [
    { name: "Any", id: 1 },
    { name: "AII", id: 2 },
    { name: "AHJ", id: 3 },
    { name: "SP", id: 4 },
    { name: "PO", id: 5 },
    { name: "Address", id: 6 },
    { name: "Contact", id: 7 },
    { name: "Report", id: 8 }
  ];

  currentSelection = {
    name: "Filter Search"
  };
  
  currentSelectionChange = new EventEmitter<object>();
  _currentSelection: any;
  get currentSelection() {
    return this._currentSelection;
  }
  
  set currentSelection(value) {
    this._currentSelection =
      value === '' || value === null || value === undefined
        ? this.emptyDataSelection
        : value;
  }



  setCurrentSelection(option) {
    this.currentSelection = option;
    this.currentSelectionChange.emit(option);
  }
}
