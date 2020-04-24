import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

const headCells = [
    { id: 'Country', numeric: false, disablePadding: true, label: 'Country' },
    { id: 'TotalConfirmed', numeric: true, disablePadding: false, label: 'Total Confirmed' },
    { id: 'NewConfirmed', numeric: true, disablePadding: false, label: 'New Confirmed' },
    { id: 'TotalDeaths', numeric: true, disablePadding: false, label: 'Total Deaths' },
    { id: 'NewDeaths', numeric: true, disablePadding: false, label: 'New Deaths' },
    { id: 'TotalRecovered', numeric: true, disablePadding: false, label: 'Total Recovered' },
    { id: 'NewRecovered', numeric: true, disablePadding: false, label: 'New Recovered' },
];


export default function EnhancedTableHead(props) {
    const {order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'center' : 'left'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
               
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
  };