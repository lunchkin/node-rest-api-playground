module.exports = {
    getFileNames: async (path) => {
        return await fs.readdirSync(path);
    }
};