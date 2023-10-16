export class PlanetResponseDTO {
  count;
  next;
  previous;
  results;

  constructor(data) {
    this.count = data.count;
    this.next = data.next;
    this.previous = data.previous;
    this.results = data.results;
  }
}