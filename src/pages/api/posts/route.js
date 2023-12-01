import { connectToDatabase } from '../../../../db';

async function handlePost(req, res) {
  try {
    const { nome, imagem, categoria, topico, descricao } = req.body;
    const { db } = await connectToDatabase();
    const collection = db.collection('posts');

    const result = await collection.insertOne({
      nome,
      imagem,
      categoria,
      topico,
      descricao,
    });

    console.log(`New listing created with the following id: ${result.insertedId}`);
    res.status(201).json({ success: true });
  } catch (error) {
    console.error('Erro ao processar requisição POST:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    if (client) {
      await client.close();
    }
  }
}
export default handlePost; 
