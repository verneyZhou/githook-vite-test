import { MongoClient } from 'mongodb';
import DB from '../db/config.js';

export default async function (req, res) {
    console.log('===addUser===req', req.body);
    if (String(req.method).toLowerCase() !== 'post') {
        res.status(500).json({
            error: {
                message: `Method ${String(res.method)} is not allowed`,
            },
        });
        return;
    }
    const { name } = JSON.parse(req.body);
    console.log('===addUser===name', name);
    // 连接MongoDB
    const client = await MongoClient.connect(DB.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        const db = await client.db(DB.database); // 获取数据库
        const userName = await db.collection(DB.collection); // 获取集合
        const result = await userName.insertOne({
            name,
            gender: Math.ceil(Math.random() * 2),
            age: Math.ceil(Math.random() * 50),
        }); // 获取集合中的所有数据
        console.log('====result', result);
        res.status(200).json({
            code: 200,
            msg: 'success',
            data: {
                _id: result.insertedId || '',
            },
        });
    } catch (err) {
        console.log('===getUserName===err', err);
        res.status(400).json({
            code: 400,
            msg: JSON.stringify(err),
        });
    } finally {
        client.close(); // 关闭连接
    }
}
