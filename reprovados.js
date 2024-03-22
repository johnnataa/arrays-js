const alunos = ['Ana', 'John', 'Maria', 'Mauro'];
const medias = [7, 9.5, 8, 4.5];

const reprovados = alunos.filter((_, indice) => {
  return medias[indice] < 7;
});

console.log(reprovados);