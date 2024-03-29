import { ColumnsType } from "antd/es/table";

import { Beer } from "@/resources/beer";

export const columns: ColumnsType<Beer> = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    width: '35%',
  },
  {
    title: 'Alcohol',
    dataIndex: 'alchool',
    key: 'alchool',
    width: '10%',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: '55%',
  }
]