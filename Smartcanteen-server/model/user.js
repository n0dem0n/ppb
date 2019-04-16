var pool = require('./databaseConfig.js');
var userDB = {
    getUsers: function (email, password, callback) {
        pool.getConnection(function (err, conn) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                console.log("Connected!");
                console.log(email+", "+password)
                var sql = 'SELECT * FROM tb_user WHERE email=? AND password=?';
                conn.query(sql, [email, password], function (err, result) {
                    conn.release();
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    } else {
                        console.log(result);
                        return callback(null, result);
                    }
                });
            }
        });
    }
    /* end function getUser */
};
module.exports = userDB