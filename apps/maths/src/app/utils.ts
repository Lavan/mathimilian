export class Utils {
  static copyFill<T>(input: T[], newLength: number, value: T): T[] {
    if (input.length >= newLength) {
      return input.slice(0, newLength);
    }
    const empty = Array(newLength - input.length).fill(value);
    return input.concat(empty);
  }

  static getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
