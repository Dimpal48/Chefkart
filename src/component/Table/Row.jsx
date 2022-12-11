import React, { useEffect, useState } from 'react'
import "./style.css"

export default function Row({show, parsed, row, header, setData, idx, data}) {
    const getValue = (e, row)=>{
        if(!Array.isArray(e)) e = [e];
        var value = "";
        for(var i of e){
            value += row[parsed.floc[i]] + " ";
        }
        return value;
    }

    const [showMenu, setShowMenu] = useState({});
    
    const sortValues = (field, sortType)=>{
        console.log(field);
        var sorted = [...parsed.records];
        if(sortType != 0) {
            sorted.sort((a, b)=> {
                // console.log(getValue(field, a), getValue(field, b));
                return (getValue(field, a).toLowerCase() > getValue(field, b).toLowerCase()? 1 : -1) * sortType
            });
            setData(sorted);
        }
        setShowMenu({});
    }

    const changeColor = (idx)=>{
        var temp = [...data];
        if(temp[idx][parsed.floc["status"]] == "false") temp[idx][parsed.floc["status"]] = "true";
        else temp[idx][parsed.floc["status"]] = "false";
        setData(temp)
    }

    if(header){
        return (
            <tr className='row'>
                {
                    show.map((e, idx)=>{
                        return (
                            <td className={idx != show.length - 1?"show_sep header_Col":"header_Col"} style={{fontWeight:"900"}}>
                                {e.label}
                                <div className='drop'>
                                    <i class="fa-solid fa-ellipsis-vertical" style={{cursor:"pointer"}} onClick={()=>setShowMenu({[idx]:"block"})}></i>
                                    <div className='sorter' style={{display:showMenu[idx] == null?"none":"block"}}>
                                        <div onClick={()=>sortValues(e.field, 0)}>Unsorted</div>
                                        <div onClick={()=>sortValues(e.field, 1)}>Sort By ASC</div>
                                        <div onClick={()=>sortValues(e.field, -1)}>Sort By DESC</div>
                                    </div>
                                </div>
                            </td>
                        )
                    })
                }
            </tr>
        )
    }else{
        return (
            <tr className='row' style={{backgroundColor:row[parsed.floc["status"]]=="true"?"rgb(163, 255, 163)":"rgb(255, 177, 177)", cursor:"pointer"}} onClick={()=>changeColor(idx)}>
                {
                    show.map((e, idx)=>{
                        return (
                            <td>
                                {
                                    getValue(e.field, row)
                                }
                            </td>
                        )
                    })
                }
            </tr>
        )
    }
}
