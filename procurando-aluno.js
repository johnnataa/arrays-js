const alunos = ["John", "Ju", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaAlunosMedias = [alunos, medias];

function exibeNomeENota(aluno) {
  if (listaAlunosMedias[0].includes(aluno)) {
    const [alunos, medias] = listaAlunosMedias;

    const indice = alunos.indexOf(aluno);

    const mediaDoAluno = medias[indice];

    console.log(`${aluno} tem a média ${mediaDoAluno}`);
  } else {
    console.log("Aluno não encontrado!");
  }
}

exibeNomeENota("Ju");
