type TUom<T>= T extends number ? number : string; // request = number, transformData = string

export type TItems= {
  item_id: string;
  item_revision_id: string;
  object_name: string;
  object_type: string;
  manufacturer?: string;
  density?: number;
  uom: TUom<number>;
}

export type TUoms = {
  uom_id: number;
  uom_name: string;
}

export type TData = {
  object: string;
  identificator: string;
  revision: string;
  name: string;
  type: string;
  manufacturer?: string;
  density?: number;
  uom: TUom<string>;
}
