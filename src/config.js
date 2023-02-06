const config = {
    production: {
        PORT: 1234,
        DB_URI: 'mongodb://localhost:27017/cubicle'

    },
    development: {
        PORT: 3000,
        DB_URI: 'mongodb://localhost:27017/cubicle'
    }
};

module.exports = config[ process.env.node_env || 'development']