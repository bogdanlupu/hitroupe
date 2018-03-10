export class Group {
  constructor(
    public title: string,
    public description: string,
    public dateAndTime: Date,
    public numberOfPeople: number,
    public latitude: number,
    public longitude: number,
    public radius: number
  ) {}
}
