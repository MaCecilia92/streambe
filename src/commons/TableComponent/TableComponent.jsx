import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  VStack,
  Flex,
} from '@chakra-ui/react';
import { buildRows } from '../../utils';
import { FaRegUserCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const TableComponent = ({ data, columns }) => {
  const columnsData = Array.isArray(columns) ? columns : [];
  return (
    <VStack w="100%">
      <Flex w="100%" overflowX="auto" overflowY="hidden">
        <TableContainer borderWidth="1px" borderColor="gray.200">
          <Table variant="striped">
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
              {buildRows(data, columnsData).map((row) => (
                <Tr key={row?.key} align="center">
                  {columnsData.map((rowData) => (
                    <Td key={`${rowData.key}`} style={{ textAlign: 'center' }}>
                      {rowData.key === 'photo' ? (
                        row[rowData.key] ? (
                          <img
                            src={row[rowData.key]}
                            alt="User Photo"
                            style={{
                              borderRadius: '50%',
                              width: '100%',
                              maxWidth: '50px',
                              height: 'auto',
                            }}
                          />
                        ) : (
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: '50px',
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
      </Flex>
    </VStack>
  );
};

TableComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

TableComponent.defaultProps = {
  data: [],
  columns: [],
};
