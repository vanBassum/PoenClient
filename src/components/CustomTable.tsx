import React from 'react';

interface TableColumn<T> {
  key: keyof T;
  label: string;
}

interface CustomTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
}

function CustomTable<T>({ data, columns }: CustomTableProps<T>) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            {columns.map((column) => (
              <th key={String(column.key)}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={String(column.key)}>{item[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomTable;
