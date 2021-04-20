export const getStatusClass = status => {
    let statusClass = 'pending'
    if (status === 'pending'){
        statusClass = 'danger'
    } else if (status === 'ongoing'){
        statusClass = 'warning'
    } else if (status === 'done'){
        statusClass = 'success'
    } else {
        statusClass = 'default'
    }
    return statusClass;
}