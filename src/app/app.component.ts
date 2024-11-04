import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ModalComponent } from './components/modal/modal.component';
import { TableComponent } from './components/table/table.component';
import { dataDto } from './dto/data.dto';
import { DataService } from './services/data.service';
import { TData } from './types/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testProject';
 
  tableService = inject(DataService)
  tableData: TData[] = []

  constructor() {
    forkJoin(this.tableService.getData()).subscribe(({items, uoms}) => {
        const transformData =  items?.map((item) => {
          const findUoms = uoms?.find((uom) => uom.uom_id === item.uom);
          
          return dataDto(item, findUoms?.uom_name!)
        })

        this.tableData = transformData;
    });
  }
}
