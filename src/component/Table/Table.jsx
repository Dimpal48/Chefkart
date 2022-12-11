import React, { useEffect, useState } from 'react'
import Row from './Row'

export default function Table({parsed, show}) {
    const [data, setData] = useState(parsed.records);
    useEffect(()=>{
        console.log("data chamged");
    }, [data]);
    return (
        <table className="table">
            <Row parsed={parsed} show={show} header={true} setData={setData}/>
            {
                data.map((e, idx)=>{
                    return(
                        <Row parsed={parsed} row={e} header={false} show={show} key={idx} idx={idx} data={data}  setData={setData}/>
                    )
                })
            }
        </table>
    )
}
