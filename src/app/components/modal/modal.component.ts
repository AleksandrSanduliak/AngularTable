import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TData } from '../../types/data';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgFor],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() modalData!: TData;
  @Output() closeModal = new EventEmitter<void>();
  modalTitle: string[] = ['Объект', 'Идентификатор', 'Ревизия', 'Имя', 'Тип', 'Еденицы измерения', 'Производитель', 'Плотность'];
  itemValues:(keyof TData)[] = ['object', 'identificator', 'revision', 'name', 'type', 'uom', 'manufacturer', 'density']

  close() {
    this.closeModal.emit();
  }
}
