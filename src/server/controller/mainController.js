
export const getHomeHtmlController = async (req, res) => {
    return res.sendFile(process.cwd() + "/src/client/index.html");
}