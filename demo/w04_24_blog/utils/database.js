const{Pool} = require('pg');

let pool;

pool = new Pool({
    host:'localhost',
    port:'5432',
    user:'postgres',
    password:'910226',
    database:'wp1_demo_24'
});

const testDB =async()=>{
    try{
    const results =  await pool.query(`select *from card_24`);
    console.log('json data',results.rows);
    }catch(error){
        console.log(error);
    }
    
    }
testDB();

// console.log('connect database',pool);
module.exports =pool;