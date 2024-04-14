import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
} from '@chakra-ui/react';
import { formatDate, buildRows } from '../../utils';
import { FaRegUserCircle } from 'react-icons/fa';

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'birthDate', label: 'Birth Date' },
  { key: 'photo', label: 'Photo' },
];

const users = [
  {
    contactId: 21,
    name: 'Joan',
    surnames: 'Serra',
    birthDate: '1985-12-12',
    gender: 'MALE',
    photo: null,
    phone: '+5411523456',
    profesion: 'Arquitecto',
    email: 'jserra@yopmail.com',
  },
  {
    contactId: 41,
    name: 'Carla',
    surnames: 'López',
    birthDate: '2020-07-07',
    gender: 'FEMALE',
    photo:
      'https://www.clarin.com/img/2022/05/02/es-de-las-pocas-divas___jaXKnyR7D_340x340__1.jpg',
    phone: '+541145678909',
    profesion: 'Médico',
    email: 'clopez@yopmail.com',
  },
];

const getRows = () =>
  users.map((user) => {
    const rows = [
      `${user.name} ${user.surnames}`,
      formatDate(user.birthDate),
      user.photo,
    ];
    return { key: user.id, values: rows };
  });

export const TableComponent = () => {
  const columnsData = Array.isArray(columns) ? columns : [];
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {columnsData.map((column) => (
              <Th key={column.key}>
                <Text textAlign="center">{column.label}</Text>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {users.length > 0 &&
            buildRows(getRows(), columnsData).map((row) => (
              <Tr key={row?.key} align="center">
                {columnsData.map((rowData) => (
                  <Td key={`${rowData.key}`} style={{ textAlign: 'center' }}>
                    {rowData.key === 'photo' ? (
                      row[rowData.key] ? (
                        <img src={row[rowData.key]} alt="User Photo" />
                      ) : (
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                          }}
                        >
                          <FaRegUserCircle size={24} />
                        </div>
                      )
                    ) : (
                      row[rowData.key]
                    )}
                  </Td>
                ))}
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
