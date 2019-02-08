import BootstrapTable from 'react-bootstrap-table-next';
import React,{ PureComponent } from 'react';

const columns = [
    {
        dataField: 'id',
        text: 'Product ID'
    }, {
        dataField: 'name',
        text: 'Product Name'
    }, {
        dataField: 'price',
        text: 'Product Price'
    }
];
    
const selectRow = {
    mode: 'radio',
    clickToSelect: true
};

const products = [
    {
        id: 0,
        name: "ad1",
        price: 1
    },
    {
        id: 1,
        name: "ad2",
        price: 2
    },
    {
        id: 2,
        name: "ad3",
        price: 3
    },
    {
        id: 3,
        name: "ad4",
        price: 4
    },
    {
        id: 4,
        name: "ad4",
        price: 5
    },
    {
        id: 5,
        name: "ad5",
        price: 6
    }
]

class Table extends PureComponent{
    render(){
        return (
            <BootstrapTable
                bootstrap4
                keyField='id'
                data={ products }
                columns={ columns }
                selectRow={ selectRow }
            />
        )
    }
}
export default Table