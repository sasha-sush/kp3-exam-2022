
import React from 'react';
//import './Table.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
var apiUrl = `https://localhost:7138/`;

class TableProducts extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
                headers: ["productId","name","price","producerId"],
                content: []
            }
    }

    UNSAFE_componentWillMount() {
        this.requestProducts()
    }

    requestProducts(){
        
        fetch(apiUrl + `product`)
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                isLoaded: true,
                content: result
                });
                this.forceUpdate();
            }
            );
    }

    deleteProduct(id){
        fetch(apiUrl + 'product?id=' + id, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(res => {
            console.log('deleted');
            console.log(res);
        });
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
            const buttonsDiv = <td key={'buttons ' + i}><div>
                <Button variant='danger' onClick={() => this.deleteProduct(curcontent['productId'])}>
                    <span className="material-symbols-outlined">delete</span>
                    </Button>
                </div></td>;
            row.push(buttonsDiv);
            tRows.push(<tr key={'tr ' + i}>{row}</tr>);
        }
            

        return (
        <Table bordered striped size="sm">
            <thead>
            <tr>
                {tHeaders}
            </tr>
            </thead>
            <tbody>
                {tRows}    
            </tbody>
        </Table>
        );
    }
}

export default TableProducts;
