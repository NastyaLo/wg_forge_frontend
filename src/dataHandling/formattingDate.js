// Format time from ms to DD/MM/YYYY hh:mm:ss
function formattingDate(ms) {
    const date = new Date(ms);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${day > 9 ? day : `0${day}` }/${month > 9 ? month : `0${month}`}/${year} ${hour > 9 ? hour : `0${hour}`}:${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`;
}

export default formattingDate;