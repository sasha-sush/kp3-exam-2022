
import React from 'react';
//import './Table.css';
//import './apiurl.js';
import BootstrapTable from 'react-bootstrap/Table';

class Table extends React.Component
{
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state= {
            headers : this.props.headers || [],
            content : this.props.content || []
        };
    }

    render(){
        var i, j;
        const headers = this.state.headers;
        const content = this.state.content;
        const tHeaders = [];
        for(i = 0; i < headers.length; ++i){
            tHeaders.push(<th key={'th ' + i}>{headers[i]}</th>);
        }

        const tRows = [];
        
        for(i = 0; i < content.length; ++i){
            const curcontent = content[i];
            const row = [];
            for(j = 0; j < headers.length; ++j){
                const id = headers[j];
                const element = <td key={'td ' + i + ' ' + j}>{curcontent[id]}</td>
                row.push(element);
            }
            tRows.push(<tr key={'tr ' + i}>{row}</tr>);
        }
            

        return (
        <BootstrapTable>
            <thead>
            <tr>
                {tHeaders}
            </tr>
            </thead>
            <tbody>
                {tRows}    
            </tbody>
        </BootstrapTable>
        );
    }
}

export default Table;
