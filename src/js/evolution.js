/*
var Store = [];
async function fetchAnimes() {
  let id = 1;
  for (let i = 0; i < 300; i++) {
    let response = await fetch(`https://api.jikan.moe/v3/anime/${i + 1}`);
    if (response.status === 200) {
      id++;
      let { genres, rank, score, synopsis, title, image_url, trailer_url, id } = await response.json();
      Store.push({ genres, rank, synopsis, score, title, image_url, trailer_url, id });
    }
  }
  debugger;
}
*/

function getRandomInt(min, max, ignore = null) {
  if (ignore !== null) {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    while (random === ignore) {
      random = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return random;
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function getRandomFloat(min, max) {
  return (Math.random() * (max - min + 1)) + min;
}
const GENRES = [
  "Action",
  "Adventure",
  "Demons",
  "Drama",
  "Fantasy",
  "Horror",
  "Military",
  "Romance",
  "Seinen",
  "Supernatural",
  "Ecchi",
  "Sci-Fi",
  "Comedy",
  "Mecha",
  "Space",
  "Music",
  "Shounen",
  "Slice of Life",
  "Psychological",
  "Sports",
  "Shoujo",
  "Police",
  "Magic",
  "Mystery",
  "Game",
  "Historical",
  "Samurai",
  "Martial Arts",
  "Demons",
  "Vampire",
  "School",
  "Super Power",
  "Thriller",
  "Cars",
  "Josei",
  "Harem"
]

class DNA {
  constructor({ mutation, target, totalPopulation, AnimeStore }) {
    this.target = target;
    this.AnimeStore = AnimeStore;
    this.mutation = mutation;
    this.generateGenes();
  }

  generateGenres(top) {
    let result = [];
    for (let i = 0; i < top; i++) {
      let index = getRandomInt(0, top);
      result.push(GENRES[index]);
    }
    return result;
  }

  mutate() {
    let { mutation } = this;
    if (Math.random() < mutation) {
      this.fitness += getRandomFloat(-1, 1);
    }
  }

  generateGenes() {
    let { AnimeStore } = this;
    let index = getRandomInt(0, AnimeStore.length - 1);
    let anime = AnimeStore[index];
    if (anime) {
      if (anime.hasOwnProperty('taken')) {
        index = getRandomInt(0, AnimeStore.length - 1, index);
      }
    } else {
      animes.taken = index;
    }
    let { genres, score, id } = anime;
    this.genes = { genres, score, id };
  }

  measureFitness() {
    let { target, genes } = this;
    let genres = genes.genres.filter(genre => target.genes.genres.indexOf(genre) > -1);
    let reward = 0;
    target.target.genres.forEach((genre) => {
      let { value, name } = genre;
      if (genes.genres.indexOf(name) > -1) reward += value;
    })
    let result = (genres.length / target.genes.genres.length) + reward;
    //console.log(result);
    return result;
  }
}

class Population {
  constructor({ target, mutation, totalPopulation, AnimeStore }) {
    this.target = target;
    this.mutation = mutation;
    this.AnimeStore = AnimeStore;
    this.totalPopulation = totalPopulation;
    this.population = this.generatePopulation(totalPopulation);
  }

  generatePopulation(totalPopulation) {
    let { target, mutation, AnimeStore } = this;
    let result = [];
    let index = 0;
    for (let i = 0; i < totalPopulation; i++) {
      if (target.target.id === i) {
        //console.log(target.target.id)
        continue;
      }
      result[index] = new DNA({ mutation, target, AnimeStore });
      result[index].fitness = 0;
      index++;
    }
    return result;
  }

  evolve(child) {
    let { totalPopulation } = this;
    this.population = this.generatePopulation(totalPopulation - 1);
    this.population.push(child);
    //console.log("new generation ", this.population);
  }

  theFittest(a, b) {
    if (a.measureFitness() >= b.measureFitness()) return a;
    if (b.measureFitness() >= a.measureFitness()) return b;
  }

  crossOver() {
    let { population } = this;
    let { a, b } = this.selection();
    let c = this.theFittest(population[a.index], population[b.index]);
    //console.log(c);
    c.mutate();
    return c;
  }

  getTheBest() {
    let result = { fitness: -Infinity, index: null };
    let { population } = this;
    for (let i = 0; i < population.length; i++) {
      let member = population[i];

      if (member.fitness > result.fitness) {
        result.fitness = member.fitness;
        result.index = i;
      }
    }
    if (result.index === null) console.log("vacio ", population.length);
    return population[result.index];
  }

  selectByFitness(result, ignore = null) {
    let { population } = this;
    let index = getRandomInt(0, population.length - 1, ignore);
    let shoot = getRandomFloat(0, 1);
    let prob = population[index].fitness;
    for (let i = 0; i < population.length; i++) {
      if (ignore !== null && ignore === i) continue;
      while (prob < shoot) {
        //console.log(p, ' ', r, ' ', p < r);
        shoot = getRandomFloat(0, 1);
        index = getRandomInt(0, population.length - 1, ignore);
        prob = population[index].fitness;
      }
      if (population[index].fitness > result.fitness) {
        result.fitness = population[index].fitness;
        result.index = index;
      }
    }
  }

  selection() {
    let { population } = this;
    let a = { fitness: 0, index: null };
    let b = { fitness: 0, index: null };
    this.selectByFitness(a);
    this.selectByFitness(b, a.index);
    return { a, b };
  }

  calcFitness() {
    let { population, target } = this;
    for (let i = 0; i < population.length; i++) {
      let member = population[i];
      if (i !== target.id && member) {
        member.fitness = member.measureFitness();
        //member.fitness = Math.pow(member.fitness, 8);
      }
    }
  }
}

const Evolution = ({ target, AnimeStore }) => {
  let murationRate = 0.01;
  let genesis = new DNA({ mutation: murationRate, target, AnimeStore });
  let population = new Population({ target: genesis, mutation: murationRate, AnimeStore, totalPopulation: AnimeStore.length });
  population.calcFitness();
  let record = 0;
  const presition = 1;
  while (record < presition) {
    population.calcFitness();
    population.evolve(population.crossOver());
    record = population.getTheBest().fitness;
    //console.log(AnimeStore[test.getTheBest().genes.id].title, " generation: ", i);  
  }
  //console.log(record, " ", AnimeStore[population.getTheBest().genes.id]);
  return population.getTheBest().genes.id;
  //console.log(window.test.getTheBest().genes);
  //let choosen = AnimeStore[window.test.getTheBest().genes.id];
  //console.log(test.getTheBest().fitness, " ", choosen.title, " ", choosen.genres);
}

module.exports = Evolution;
