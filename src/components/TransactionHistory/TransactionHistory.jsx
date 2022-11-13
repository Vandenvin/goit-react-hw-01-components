// import css from './TransactionHistory.module.css'
import { Table, TableRow, TableHeader, TableData } from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => { 
    return (
        <Table>
            <thead>
                <TableRow>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Amount</TableHeader>
                    <TableHeader>Currency</TableHeader>
                </TableRow>
            </thead>

            <tbody>
                {items.map(item  => ( 
                    <TableRow key={item.id}>
                        <TableData>{item.type}</TableData>
                        <TableData>{item.amount}</TableData>
                        <TableData>{item.currency}</TableData>
                    </TableRow>
                ))}
            </tbody>
        </Table>
    )
}