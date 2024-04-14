const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

const formatDate = (fechaStr) => {
  const date = new Date(fechaStr);

  const monthName = months[date.getMonth()];
  const day = date.getDate();

  const formatedDate = `${monthName} ${day}, ${date.getFullYear()}`;

  return formatedDate;
};

export default formatDate;
