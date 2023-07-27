export class Post {
  constructor(
    public id: number,
    public body: string,
    public title: string,
    public active: boolean,
    public type: string
  ) {}
}
