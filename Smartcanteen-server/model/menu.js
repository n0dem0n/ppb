var pool = require('./databaseConfig.js');
var menuDB = {
    getMenu: function (id_user, callback) {
        pool.getConnection(function (err, conn) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                console.log("Connected!");
                console.log(id_user)
                var sql = 'SELECT * FROM tb_menu WHERE id_user=? ';
                conn.query(sql, [id_user], function (err, result) {
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

};
module.exports = menuDB