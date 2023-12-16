import {Surreal} from "surrealdb.js";const QUERY = `DEFINE TABLE user SCHEMALESS    PERMISSIONS FULL;    DEFINE TABLE room SCHEMALESS    PERMISSIONS FULL;    DEFINE TABLE message SCHEMALESS    PERMISSIONS FULL;DEFINE FIELD createdAt ON TABLE message TYPE datetime  DEFAULT time::now()  VALUE $before OR $value;DEFINE FIELD email ON user TYPE string ASSERT string::is::email($value);DEFINE FIELD password ON user TYPE string;DEFINE INDEX email ON user FIELDS email UNIQUE;DEFINE SCOPE user SESSION 14d    SIGNIN (        SELECT * FROM user WHERE email = $email AND crypto::argon2::compare(password, $password)    )    SIGNUP (        CREATE user CONTENT {            email: $email,            password: crypto::argon2::generate($password)        }    );`;(async () => {  const db = new Surreal();  await db.connect('http://127.0.0.1:8000/rpc', {    namespace: 'test',    database: 'test',  });  await db.query(QUERY)  await db.close()})()