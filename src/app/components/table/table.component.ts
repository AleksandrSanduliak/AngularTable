import { NgFor, NgIf } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterTablePipe } from '../../pipes/filter-table.pipe';
import { LocalStorageService } from '../../services/local-storage.service';
import { TData } from '../../types/data';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor, FormsModule, FilterTablePipe, ModalComponent, NgIf],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  tableTitle: string[] = ['Объект', 'Имя', 'Тип', 'Еденицы измерения', 'Производитель', 'Плотность'];
  itemValues:(keyof TData)[] = ['object', 'name', 'type', 'uom', 'manufacturer', 'density']
  @Input() tableData!: TData[];
  modalData: null | TData = null;
  
  // input
  searchText: string = '';
  constructor(private localStore: LocalStorageService) {
  }

  ngOnInit(): void {
    const getLocalData = this.localStore.getData('filter');
    console.log('getLocalData', getLocalData);
    this.searchText = getLocalData ?? '';
  }

  onChange(event:Event) {
    console.log('work')
    const input = event.target as HTMLInputElement;
    this.localStore.saveData('filter', input.value);
  };

  // modal

  isModalOpen = false;

  openModal(data:{}) {
    this.modalData = data as TData;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}