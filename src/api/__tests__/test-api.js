import { getPVSolarBenefits } from "../api"

describe("calling getPVSolarBenefits", () => {
  it("we pass it the right arguments", async () => {
    const locations = {
      data: [{
        lat: 1.0, lng: 1.0
      }],
    };
    const response = await getPVSolarBenefits(locations);
    response.should.have.status(200);
  });
});