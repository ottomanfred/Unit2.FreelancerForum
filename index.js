// === Type Definitions ===
/**
 * @typedef {Object} Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} price
 */

// === State ===

const names = ["Alice", "Bob", "Carol"];
const occupations = ["Writer", "Teacher", "Programmer"];
const prices = [30, 50, 70];

/**@type {Freelancer[]} */
const allFreelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
];

function calcAverage() {
  let totalPrice = allFreelancers.reduce(
    (acc, freelancer) => (acc += freelancer.price),
    0
  );
  let average = totalPrice / allFreelancers.length;
  return Math.floor(average);
}

/**
 * @param {T[]} arr - array to select from
 * @returns {T} random element from `arr` */
function selectRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function addRandomFreelancer() {
  const name = selectRandomElement(names);
  const occupation = selectRandomElement(occupations);
  const price = selectRandomElement(prices);
  const freelancer = { name, occupation, price };
  allFreelancers.push(freelancer);
}

// === Render ===

/**
 * Renders actual freelancers onto the document
 * @param {Freelancer[]} allFreelancers
 */
function renderFreelancers(allFreelancers) {
  // Transform each freelancer object into an HTMLElement
  // use $ to denote a variable that will show up on the page
  const $freelancers = allFreelancers.map((freelancer) => {
    const $freelancer = document.createElement("li");
    $freelancer.textContent =
      freelancer.name + freelancer.occupation + freelancer.price;
    return $freelancer;
  });

  // Replace the existing children of the <ul>
  const ulNames = document.querySelector("span.table");
  ulNames.replaceChildren(...$freelancers);
}

/**
 * Render everything in state
 * @param {Freelancer[]} allFreelancers
 */
function render(allFreelancers) {
  // renders the invididual freelancer objects in state
  renderFreelancers(allFreelancers);
}

function renderAverage() {
  const pAverage = document.querySelector("p.average");
  pAverage.textContent = `The average price is $${calcAverage()}.`;
}

// === Script ===

render(allFreelancers);
renderAverage();

// Every 2000ms (2s), add a random square and rerender
setInterval(() => {
  addRandomFreelancer();
  calcAverage();
  render(allFreelancers);
  renderAverage();
}, 2000);
