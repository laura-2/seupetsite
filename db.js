'use client'

import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://laura:jAJQhTSwahIN6gGi@clustersps.s3bxtqk.mongodb.net/';

export async function connectToDatabase() {
  try {
  const client = await MongoClient.connect(uri, 
    { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db('spspost');
  console.log("Conectado ao mongoDB")
  return { client, db };
  } catch (error){
    console.log("Error connecting to database", error);
  }
}
