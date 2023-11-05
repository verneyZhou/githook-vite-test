import mongodb, { MongoClient } from 'mongodb';
import DB from '../db/config.js';

const ObjectId = mongodb.ObjectId;

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
    const { id, name } = JSON.parse(req.body);
    console.log('===delUser===id', id, name);
    // 连接MongoDB
    const client = await MongoClient.connect(DB.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        const db = await client.db(DB.database); // 获取数据库
        const userName = await db.collection(DB.collection); // 获取集合
        // 更新数据
        const result = await userName.updateOne({ _id: new ObjectId(id) }, { $set: { name } }, { upsert: true });
        console.log('====result', result);
        res.status(200).json({
            code: 200,
            msg: 'success',
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
