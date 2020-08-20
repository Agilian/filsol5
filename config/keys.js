dbPassword = 'mongodb+srv://deploy2:' + encodeURIComponent('filsoldeploy') + '@cluster0.f26p0.gcp.mongodb.net/filsol?retryWrites=true&w=majority';

module.exports = {
    mongoURI: dbPassword
};