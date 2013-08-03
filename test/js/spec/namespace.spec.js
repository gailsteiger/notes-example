/**
 * Created with JetBrains WebStorm.
 * User: gs
 * Date: 03/08/13
 * Time: 21:32
 * To change this template use File | Settings | File Templates.
 */
describe('Namespoce', function (){
    it("provides the 'App' object", function (){
        // Expect exists and is an object.
        expect(App).to.be.an("object");

        // Expect all namespace properties are present.
        expect(App).to.include.keys(
            "Config", "Collections", "Models",
            "Routers", "Templates", "Views"
        );
    });
    it("provides the 'app' object", function (){
        expect(app).to.be.an("object");
    });
});
