import React, { useState } from 'react'
import "./style.css";
import data from "../../resources/csv/mock_data"
import csvparser from "../../utility/csvparser"
import Row from "../../component/Table/Row";
import Table from '../../component/Table/Table';

export default function Homepage() {
    const [parsed, setParsed] = useState(csvparser(data, true, ","));
    const show = [
        {
            label : "First Name",
            field : "first_name"
        }, 
        {
            label : "Last Name",
            field : "last_name"
        },
        {
            label : "Area",
            field : "area"
        },
        {
            label : "Full Name",
            field : ["first_name", "last_name"]
        },
        {
            label : "Status",
            field : "status"
        }
    ]
    return (
        <div>
            <Table parsed={parsed} show={show} />
        </div>
    )
}
