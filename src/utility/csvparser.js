const csvParser = (data, header=false, sep=";")=>{
    var parsed = {
    };

    //setting header
    if(header){
        parsed.header = data[0].split(sep);
        //setting field index
        var floc = {};
        for(var i = 0; i < parsed.header.length; i++){
            floc[parsed.header[i]] = i;
        }
        parsed["floc"] = floc;
    }

    //setting records
    var startFrom = 0;
    var records = [];
    if(header) startFrom++;
    for(; startFrom < data.length; startFrom++){
        var temp = data[startFrom].split(sep);
        records.push(temp);
    }
    parsed["records"] = records;
    return parsed;
}

export default csvParser;