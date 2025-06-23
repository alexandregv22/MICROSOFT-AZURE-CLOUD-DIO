const express = require('express');
const router = express.Router();
const viacepService = require('../services/viacepService');

router.get('/:cep', async (req, res) => {
    const cep = req.params.cep;

    try {
        const address = await viacepService.getAddressByCep(cep);
        if (!address) {
            return res.status(404).json({ message: 'Endereço não encontrado' });
        }
        res.json(address);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar endereço', error: error.message });
    }
});

module.exports = router;