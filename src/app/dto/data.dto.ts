import { TData, TItems } from "../types/data"

export const dataDto = (item:TItems, uom:string) : TData => {
  return {
    object: `${item.item_id}/${item.item_revision_id}`,
    identificator: item.item_id,
    revision: item.item_revision_id,
    name: item.object_name,
    type: item.object_type,
    uom: uom,
    ...item.manufacturer && {manufacturer: item.manufacturer}, // must be undefined
    ...item.density && {density: item.density}, // must be undefined
  }
}