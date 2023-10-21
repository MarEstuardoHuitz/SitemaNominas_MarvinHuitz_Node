const { Pool } = require('pg');

// Configuración de conexión a la base de datos PostgreSQL
const masterPool = new Pool({
  user: 'postgres',
  host: 'containers-us-west-47.railway.app',
  database: 'railway',
  password: 'Gu9BYmFIU7i1N47ZqdzJ',
  port: 7092,
});

// Endpoint para obtener todos los usuarios

async function obtenerEmpresas(req, res) {

  //const {dbConfig } = req;
  
  //console.log(dbConfig)

    try {
        const result = await masterPool.query('SELECT id as value, nombre as label, logo_url as url FROM list_empresas WHERE estado = true');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la lista de Empresas: ' + error });
    }
}


module.exports = {
  obtenerEmpresas,
};
