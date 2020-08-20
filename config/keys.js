dbPassword = 'mongodb+srv://deploy:' +  encodeURIComponent('filsoldeploy') + '@cluster0.mivpe.mongodb.net/filsol?retryWrites=true&w=majority';

module.exports = {
    mongoURI: dbPassword
};