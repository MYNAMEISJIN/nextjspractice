import sql from 'better-sqlite3'

const db = sql('meals.db')

export async function getMeals(){

    await new Promise((resolve)=> setTimeout(resolve,2000));
    //이건 안해도 되지만 로딩 나중에 구현하기 위해 지연을 2초 걸어주는거

    // throw new Error("hello you got this error!")
    // //에러 구현하기.

    return db.prepare('SELECT * FROM meals').all()
    //all 은 데이터를 fetch 할때 쓰고, run 은 데이터를 넣을때 쓴다.
    //get은 하나의 데이터를 가지고 올때 쓴다.

}



