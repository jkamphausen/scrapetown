import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync('./db.json');
const db = low(adapter);

db.defaults({ twitter: [], instagram: [] }).write();

//db.get('posts').push({ id: 1, title: 'lowdb!!!' }).write();

export default db;