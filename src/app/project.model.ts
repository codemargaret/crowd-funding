export class Project {
  public fundsRecieved: number = 0;
  constructor(public title: string, public details: string, public fundingGoal: number, public category: string) {}
}
