const buildRows = (data, columns) =>
  Array.isArray(data) &&
  data.map((datum) => {
    const row = { style: datum.style };
    datum.values?.forEach((value, index) => {
      const { key: columnKey } = columns[index] || { key: undefined };
      row[columnKey] = value;
    });
    return row;
  });

export default buildRows;
