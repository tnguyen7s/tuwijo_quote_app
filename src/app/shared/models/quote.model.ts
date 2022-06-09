export class Quote{
  private nextId = 0;
  public id: number;
  constructor(public content: string, public author: string, public tag: string, public note: string, public imagePath: string)
  {
    this.id = this.nextId;
    this.nextId += 1;

    this.content = content;
    this.author = author;
    this.tag = tag;
    this.note = note;
    this.imagePath = imagePath;
  }
}
