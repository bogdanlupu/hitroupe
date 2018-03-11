export class Group {
  constructor(
    public title: string,
    public description: string,
    public dateAndTime: Date,
    public targetNumberOfPeople: number,
    public currentNumberOfPeople: number,
    public latitude: number,
    public longitude: number,
    public groupOwner: string,
    public radius: number
  ) {}
}
