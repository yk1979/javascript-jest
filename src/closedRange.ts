export class ClosedRange {
  private lowerEndpoint;
  private upperEndpoint;
  constructor(lowerEndpoint: number, upperEndpoint: number) {
    if (!(Number.isInteger(lowerEndpoint) && Number.isInteger(upperEndpoint)))
      throw new Error("整数を渡してください");

    if (lowerEndpoint > upperEndpoint) {
      throw new Error("上端点より下端点が大きい閉区間を作ることはできません");
    }

    this.lowerEndpoint = lowerEndpoint;
    this.upperEndpoint = upperEndpoint;
  }

  toString(): string {
    return `[${this.lowerEndpoint}, ${this.upperEndpoint}]`;
  }

  contains(num: number): boolean {
    return this.lowerEndpoint <= num && num <= this.upperEndpoint;
  }

  isEqual(instance: ClosedRange): boolean {
    return instance.toString() === this.toString();
  }

  isOverWrapping(instance: ClosedRange): boolean {
    return (
      this.lowerEndpoint <= instance.lowerEndpoint &&
      instance.upperEndpoint <= this.upperEndpoint
    );
  }
}
