export class Card {
  constructor(
    public Content: string,
    public Image: string,
    public Owner: string,
    public School: string,
    public Topic: string,
    public UpdatedBy: string,
    public createdAt: Date,
    public objectId: string,
    public updatedAt: Date
    ) { }
}