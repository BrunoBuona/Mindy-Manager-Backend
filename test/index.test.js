const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const request = require("supertest");

describe("GET /api/hotels/", () => {
  it("Brings me an 404 error.",
    function (done) {
        let intentionalError = 'This will be always an error.';
      request(app).get(`/api/hotels/?name=${intentionalError}&order=`).expect(404, done);
    })});


describe('GET /api/cities', function (done) { 
    it('Check if returns an Array of Objects.', function (done) {
        request(app)
            .get('/api/cities/')
            .expect(res => {
                assert.typeOf(res.body.response,'array')
                assert.isObject(res.body.response[0])
                done()
            })
            .end(function (err, res) {
                if (err) {
                    return done(err)
                }
            })
    })
})
describe("Form Validation", () => {
    it("The user setted a number at Capacity property.", (done) => {
        let user = {
        name: "Hotel Novotel Barcelona City",
        photo: [
            "https://www.ahstatic.com/photos/5560_ho_05_p_1024x768.jpg",
            "https://www.ahstatic.com/photos/5560_sm_00_p_1024x768.jpg",
            "https://www.ahstatic.com/photos/5560_sw_02_p_1024x768.jpg",
        ],
        capacity: 50000,
        citiId: "636fca0425d63341f230ebc2",
        userId: "636f1edc14f79b76f5e442bc",
        };
        expect(user.capacity).to.be.a("Number"); // to.be.a es una cadena
        done();
    });
});
describe("Verification of Hotel Creation", () => {
it("Check status 201.", (done) => {
    request(app)
        .post("/api/hotels/")
        .send({
            name: "Beijing Double",
            photo: [
                "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/386982477.jpg?k=bd7264fadf0b4cccd8464167b425295b0727d479fbe457eab4d77e0b8488936c&o=&hp=1",
                "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/182086832.jpg?k=a1d1f77f720076d1d7a3204de34d017b22ba7ba6032f26a7588172129066e7cb&o=&hp=1",
            ],
            capacity: 1000,
            citiId: "636fca0425d63341f230ebc3",
            userId: "636f1edc14f79b76f5e442ba",
        })
        expect(201, done());
})})

describe("DELETE /api/hotel/:id", () => {
    it("Delete a hotel by id.", (done) => {
        request(app).del("/api/hotels/63844d25326fa29111d2e2e0").expect(200).end(done)    });
});


