
const GetfirstAndLastName = (fullName) => {
    const nameParts = fullName.split(' ');
    if (nameParts.length > 2) {
    return `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
    }
    return fullName;
};  

export default GetfirstAndLastName


  