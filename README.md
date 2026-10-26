# DSA com TypeScript 🧠

Repositório pessoal de estudos de **algoritmos e estruturas de dados (DSA)** usando **TypeScript**.

O objetivo é desenvolver raciocínio algorítmico, compreender como as estruturas funcionam e praticar a resolução de problemas — sem me limitar a memorizar soluções.

## 📚 Materiais

- **Livro:** *Entendendo Algoritmos* — Aditya Bhargava (base teórica).
- **Curso:** *The Last Algorithms Course You'll Need*, de ThePrimeagen (implementações e explicações).
- **Prática:** [NeetCode](https://neetcode.io/roadmap) e [LeetCode](https://leetcode.com/) (problemas e entrevistas técnicas).
- **Apoio:** cursos de DSA de Scott Barrett e Colt Steele, quando precisar reforçar algum tema.

## 📁 Organização

```text
dsa-typescript/
├── src/
│   ├── livro/
│   │   ├── cap-01-introducao/
│   │   │   ├── notas.md
│   │   │   ├── busca-binaria.ts
│   │   │   └── exercicios.ts
│   │   └── ...
│   ├── primeagen/
│   │   └── ...
│   ├── neetcode/
│   │   ├── arrays-hashing/
│   │   ├── two-pointers/
│   │   └── ...
│   └── revisoes/
│       └── capitulos-01-a-05/
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 🚀 Preparando o ambiente

Requisitos: Node.js e npm instalados.

Na primeira configuração do repositório:

```bash
npm init -y
npm install -D typescript tsx @types/node
npx tsc --init
```

Para executar um arquivo `.ts` diretamente:

```bash
npx tsx src/livro/cap-01-introducao/busca-binaria.ts
```

Para verificar erros de tipos no projeto:

```bash
npx tsc --noEmit
```

## 🧩 Método de estudo

1. **Ler** o conteúdo, buscando compreender a ideia antes de olhar uma implementação.
2. **Implementar** o conceito em TypeScript, preferencialmente sem copiar a solução.
3. **Testar** com casos comuns, casos-limite e entradas inesperadas.
4. **Anotar** conceitos importantes, complexidade de tempo/espaço e dúvidas.
5. **Praticar** problemas correspondentes no NeetCode/LeetCode, quando tiver base para o assunto.
6. **Revisar** a cada cinco capítulos do livro, priorizando recordação ativa e reimplementação em vez de apenas reler.

A meta de leitura é, **quando viável**, um capítulo por dia. Compreender bem importa mais do que cumprir uma contagem.

---

**Objetivo final:** ser capaz de explicar os algoritmos, implementá-los e reconhecer quando aplicá-los em problemas reais.
