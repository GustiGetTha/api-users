const dbPool = require('../config/database.js');

const getAllUsers = () => {
    const SQLQuery = "SELECT * FROM users"
    return dbPool.execute(SQLQuery);
}

const createUsers = (body) => {
    const SQLQuery = `  INSERT INTO users (nama, alamat) 
                        VALUES ('${body.nama}', '${body.alamat}')`;
    
    return dbPool.execute(SQLQuery);
}

const updateUsers = (body, id) => {
    const SQLQuery =`   UPDATE users 
                        SET nama='${body.nama}', alamat='${body.alamat}' 
                        WHERE id='${id}'`;

    return dbPool.execute(SQLQuery);
}

const deleteUsers = (id) => {
    const SQLQuery =`DELETE FROM users WHERE id='${id}'`;
    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUsers,
    createUsers,
    updateUsers,
    deleteUsers
}