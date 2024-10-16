import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';

export interface PeriodicElement {
  name: string;
  positions: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {positions: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {positions: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {positions: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {positions: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {positions: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {positions: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {positions: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {positions: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {positions: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {positions: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-angular-material-table',
  templateUrl: './angular-material-table.component.html',
  styleUrls: ['./angular-material-table.component.css']
})
export class AngularMaterialTableComponent implements AfterViewInit {
  private _liveAnnouncer = inject(LiveAnnouncer);
  displayedColumns: string[] = ['positions', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  sortData(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
