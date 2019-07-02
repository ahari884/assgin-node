module.exports = {
    dbUrl : "mongodb://localhost/feedback-prod",
    sessionSecret : "heregoessecret",
    illegalUsernames: ['user','admin','users','admins'],
    PORT: process.env.NODE_PORT || 5000,
    HOST: process.env.NODE_HOST || 'localhost'
}
