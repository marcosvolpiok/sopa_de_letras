const chai = require('chai');
const expect = chai.expect;
const soup = require('../classes/soup');


describe("soup", function() {
    it("should return 2 when search words in soup", async function() {
      const soupOb = new soup();
      const res=soupOb.searchInSoup("EIO,EIO", 2, 3);
      
      expect(res).to.equal(2);
    });

    it("should return 3 when search words in soup", async function() {
      const soupOb = new soup();
      const res=soupOb.searchInSoup("OIE,IIX,EXE", 3, 3);
      
      expect(res).to.equal(3);
    });   
    
    it("should return 4 when search words in soup", async function() {
      const soupOb = new soup();
      const res=soupOb.searchInSoup("EIOIEIOEIO", 1, 10);
      
      expect(res).to.equal(4);
    });  

    it("should return 8 when search words in soup", async function() {
      const soupOb = new soup();
      const res=soupOb.searchInSoup("EAEAE,AIIIA,EIOIE,AIIIA,EAEAE", 5, 5);
      
      expect(res).to.equal(8);
    }); 

    it("should return 3 when search words in soup", async function() {
      const soupOb = new soup();
      const res=soupOb.searchInSoup("OX,IO,EX,II,OX,IE,EX", 7, 2);
      
      expect(res).to.equal(3);
    });

    it("should return 0 when search words in soup", async function() {
      const soupOb = new soup();
      const res=soupOb.searchInSoup("E", 1, 1);
      
      expect(res).to.equal(0);
    });

    it("should return true when try to validate columns", async function() {
      const soupOb = new soup();
      const res=soupOb.verifyColumns(3, "EIO,EIO");
      
      expect(res).to.equal(true);
    });

    it("should return false when try to validate columns", async function() {
      const soupOb = new soup();
      const res=soupOb.verifyColumns(3, "EIO,EIOxxxx");
      
      expect(res).to.equal(false);
    });

    it("should return true when try to validate rows", async function() {
      const soupOb = new soup();
      const res=soupOb.verifyRows(2, "EIO,EIO");
      
      expect(res).to.equal(true);
    });
    
    it("should return false when try to validate rows", async function() {
      const soupOb = new soup();
      const res=soupOb.verifyRows(2, "EIO,EIO,xxx");
      
      expect(res).to.equal(false);
    });    
    
    it("should convert vertical into a string", async function() {
      const soupOb = new soup();
      const res=soupOb.convertVertical("EIO,EIO", 2, 3);

      expect(res[0]).to.equal('EE');
      expect(res[1]).to.equal('II');
      expect(res[2]).to.equal('OO');
      
    }); 
});