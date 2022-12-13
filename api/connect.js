import mysql from 'mysql2';

export const db = mysql.createConnection({
	host: '0.0.0.0',
	user: 'root',
	password: '20992099',
	database: 'spectrum-social-media',
});
