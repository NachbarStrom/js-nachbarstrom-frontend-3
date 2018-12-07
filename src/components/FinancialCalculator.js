export class FinancialCalculator {
  static roundToTwoDecimals(number) {
    return Math.round(number*10) / 10;
  }
  static getNumPanels(roofArea) {
    return Math.round(roofArea);
  }
  static getCapacity(roofArea) {
    return FinancialCalculator.roundToTwoDecimals(roofArea / 6);
  }
}