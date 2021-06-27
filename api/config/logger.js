const {createLogger,format,transports} = require('winston');
const path = require('path');
const dirPath = path.join('logs');

module.exports = createLogger({
    format: format.combine(
        format.simple(),
        format.timestamp(),
        format.printf(info => `[${info.timestamp}] [${info.level}] ${info.message}`)
    ),
    transports: [
        new transports.File({
            filename: `${dirPath}/proceso.log`
        }),
        new transports.Console({
            level: 'debug'
        })
    ]
})