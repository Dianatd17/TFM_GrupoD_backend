const updateStatus = (id, status) => {
    return db.query('update usuarios set status = ? where id = ?', [status, id]);
}

module.exports = { updateStatus }