import React from 'react'
import { Tabela } from './Tabela'
import './Menu.css' 
import * as ReactBootStrap from 'react-bootstrap';
const Menu = ()=>{
    const data=[
        {Rbr:'1', Naziv:'Čokoladna torta', Cena:'1200 din/kg'},
        {Rbr:'2', Naziv:'Jagoda torta', Cena:'1400 din/kg'},
        {Rbr:'3', Naziv:'Saher torta', Cena:'1200 din/kg'},
        {Rbr:'4', Naziv:'Čoko-banana torta', Cena:'1300 din/kg'},
        {Rbr:'5', Naziv:'Nugat-lešnik torta', Cena:'1700 din/kg'},
        {Rbr:'6', Naziv:'Malina/višnja torta', Cena:'1600 din/kg'},
        {Rbr:'7', Naziv:'Baklava', Cena:'150 din/kom'},
        {Rbr:'8', Naziv:'Tulumba', Cena:'150 din/kom'},
        {Rbr:'9', Naziv:'Koh', Cena:'100 din/kom'},
        {Rbr:'10', Naziv:'Mafini', Cena:'120 din/kom'},
        {Rbr:'11', Naziv:'Bajadera', Cena:'120 din/kom'},
        {Rbr:'12', Naziv:'Kolač sa jagodama', Cena:'70 din/kom'},
        {Rbr:'13', Naziv:'Kinder Pingui kolač', Cena:'190 din/kom'},
        {Rbr:'14', Naziv:'Kikiriki kuglice', Cena:'100 din/kom'},
    ]
    const columns= (data, index)=>{
        return(
            <tr key={index}>
            <td>{data.Rbr}</td>
            <td>{data.Naziv}</td>
            <td>{data.Cena}</td>
            

            </tr>
        )
    
}
return(
    
    <ReactBootStrap.Table >
        <thead>
            <tr>
                <th>Redni broj</th>
                <th>Naziv</th>
                <th>Cena</th>
            </tr>
        </thead>
        <tbody>
       {data.map(columns)}
        </tbody>

    </ReactBootStrap.Table>
    
);

}
export default Menu
