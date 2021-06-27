const chai = require('chai');
const expect = chai.expect;
const soup = require('../soup');


describe("soup", function() {
    it("should return 2", async function() {
      const soupOb = new soup();
      const res=soupOb.searchInSoup("EIO,EIO", 2, 3);
      
      expect(res).to.equal(2);
    });

    it("should return true", async function() {
      const soupOb = new soup();
      const res=soupOb.verifyColumns(3, "EIO,EIO");
      
      expect(res).to.equal(true);
    });
});