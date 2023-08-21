import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await sqlite.open({
    filename:  './taxi_queue.db',
    driver:  sqlite3.Database
});

await db.migrate();

// Function to join the queue
export async function joinQueue() {
    const sql = `INSERT INTO queue (timestamp) VALUES (CURRENT_TIMESTAMP)`;
    await db.execute(sql);
}


export async function leaveQueue() {
    const sql = `DELETE FROM queue WHERE id = ?`;
    const id = await db.query('SELECT id FROM queue ORDER BY id DESC LIMIT 1');
    await db.execute(sql, [id[0]['id']]);
}


export async function joinTaxiQueue() {
    const sql = `INSERT INTO taxi_queue (timestamp) VALUES (CURRENT_TIMESTAMP)`;
    await db.execute(sql);
}


export async function queueLength() {
    const sql = `SELECT COUNT(*) FROM queue`;
    const results = await db.query(sql);
    return results[0]['COUNT(*)'];
}


export async function taxiQueueLength() {
    const sql = `SELECT COUNT(*) FROM taxi_queue`;
    const results = await db.query(sql);
    return results[0]['COUNT(*)'];
}


export function taxiDepart() {
   
}
