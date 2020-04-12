const pool = require("../../config/database")

module.exports = {
    create: (data,callback) =>{
        pool.query(`insert into registration(First_name,Last_name,Gender,Email,Password,Phone_no)
        
        values(?,?,?,?,?,?)`,
        [
            data.First_name,
            data.Last_name,
            data.Gender,
            data.Email,
            data.Password,
            data.Phone_no
        ],
        (error,results,fields) =>{
            if(error){
                return callback(error)
            }
            //using this callback we return value to controller...
            return callback(null,results)
        }
        
        )
    },
    getUserByUserEmail: (email, callBack) => {
        pool.query(
          `select * from registration where Email = ?`,
          [email],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      getUserByUserId: (id, callBack) => {
        pool.query(
          `select id,First_name,Last_name,Gender,Email,Phone_no from registration where id = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      getUsers: callBack => {
        pool.query(
          `select id,First_name,Last_name,Gender,Email,Phone_no from registration`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
      updateUser: (data, callBack) => {
        pool.query(
          `update registration set First_name=?, Last_name=?, Gender=?, Email=?, Password=?, Phone_no=? where id = ?`,
          [
            data.First_name,
            data.Last_name,
            data.Gender,
            data.Email,
            data.Password,
            data.Phone_no,
            data.id
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      deleteUser: (data, callBack) => {
        pool.query(
          `delete from registration where id = ?`,
          [data.id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      }
}