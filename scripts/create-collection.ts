import { vectorsSize } from "../config/ollama";
import { COLLECTION, qdrant } from "../config/qdrant";

const collections = await qdrant.getCollections();

const exists = collections.collections.some((c) => c.name === COLLECTION);

if (exists) {
  console.log("Collection already exists");
} else {
  await qdrant.createCollection(COLLECTION, {
    vectors: {
      size: vectorsSize,
      distance: "Cosine",
    },
  });

  console.log("Collection created");
}