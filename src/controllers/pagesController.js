exports.getPageHome = async (req, res) => {
    try {
        res.render('pages/home', {
            title: 'Lista de Tickets',
            layout: 'layout/main'
        });
    } catch (error) {
        console.error('Falha carregar página home:', error);
        res.status(500).send({ message: "Erro carregar página home" });
    }
};
