export const getFormatedDate = (dateString: any)=>{
    const options = { month: "long", day: "numeric", year: "2-digit" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
}