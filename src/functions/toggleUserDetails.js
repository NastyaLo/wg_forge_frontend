function toggleUserDetails(id) {
    const userDetails = document.getElementById(id);

    userDetails.classList.toggle('open');
}

export default toggleUserDetails;