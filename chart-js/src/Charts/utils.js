
export const FormatNumber = (n) =>{
    // if(isEmptyValue(n)){
    //     return 0
    // };
    var parts = n.toString().split(".")
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".")
}