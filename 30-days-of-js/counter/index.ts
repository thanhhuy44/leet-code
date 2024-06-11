function createCounter(n: number): () => number {
  return () => n++;
}

const answer = createCounter(10);
console.log("🚀 ~ answer:", answer());
console.log("🚀 ~ answer:", answer());
console.log("🚀 ~ answer:", answer());
