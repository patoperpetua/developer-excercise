"use strict";
import 'mocha';
import { expect } from 'chai';
import app from '../src/app';
import { agent as request } from 'supertest';
import { ProductsRepository } from '../src/databases/repositories';
import { Products } from '../src/databases';
import { getCustomRepository, Repository } from 'typeorm';

const PATH = "/products";
let repository: Repository<Products>;

before(function(done) {
    app.on("appStarted", function(){
        repository = getCustomRepository(ProductsRepository);
        done();
    });
});

describe(`tests for ${PATH}`, async () => {
    
    describe('tests for post', () => {
        const objectSave: Products = new Products({ name: "Banana", price: 1.5 });
        let saved: Products;

        it('should respond 200 for "Request OK."', async () => {
            const res = await request(app).post(`${PATH}`).send(objectSave);
            saved = new Products(res.body);
            expect(res.status).to.equal(200);
            expect(res.body).not.to.be.empty;
            expect(res.body).to.be.an("object");
            expect(res.body).to.contain(objectSave);
            expect(res.body.id).to.be.a("number");
            let got: Products = await repository.findOne(saved.id);
            expect(got).to.deep.contain(saved);
            await repository.remove(saved);
            got = await repository.findOne(saved.id);
            expect(got).not.exist;
        });

        it('should respond 400 for "Name already exists"', async() => {
            saved = await repository.save(objectSave);
            const res = await request(app).post(`${PATH}`).send(objectSave);
            const response = { message: `Name ${objectSave.name} already exists`, data: objectSave };
            res.body.data.modifiedAt = new Date(res.body.data.modifiedAt);
            res.body.data.createdAt = new Date(res.body.data.createdAt);
            expect(res.status).to.equal(400);
            expect(res.body).not.to.be.empty;
            expect(res.body).to.be.an("object");
            expect(res.body).to.deep.include(response);
            await repository.remove(saved);
            const got = await repository.findOne(saved.id);
            expect(got).not.exist;
        });

        it('should respond 400 for "Price should be greater than zero."', async() => {
            objectSave.price = 0;
            saved = await repository.save(objectSave);
            const response = { message: `Price ${objectSave.price} can't be 0 or less`, data: objectSave };
            const res = await request(app).post(`${PATH}`).send(objectSave);
            res.body.data.modifiedAt = new Date(res.body.data.modifiedAt);
            res.body.data.createdAt = new Date(res.body.data.createdAt);
            expect(res.status).to.equal(400);
            expect(res.body).not.to.be.empty;
            expect(res.body).to.be.an("object");
            expect(res.body).to.deep.include(response);
            await repository.remove(saved);
            const got = await repository.findOne(saved.id);
            expect(got).not.exist;
        });

        it('should respond 400 for "Price should be greater than zero." Product don\'t exists', async() => {
            objectSave.price = 0;
            delete objectSave.id;
            const response = { message: `Price ${objectSave.price} can't be 0 or less`, data: objectSave };
            const res = await request(app).post(`${PATH}`).send(objectSave);
            res.body.data.modifiedAt = new Date(res.body.data.modifiedAt);
            res.body.data.createdAt = new Date(res.body.data.createdAt);
            expect(res.status).to.equal(400);
            expect(res.body).not.to.be.empty;
            expect(res.body).to.be.an("object");
            expect(res.body).to.deep.include(response);
        });

    });

    // describe('tests for get', function() {
    //     it('should respond 200 for "Request OK."', function() {
    //         var response = request('get', 'http://localhost:8000/products', { 
    //             'qs': {"page":13779484,"size":39329713,"sort":"consequat Duis","deleted":"ALL","metadata":false},
    //             'time': true
    //         });

    //         expect(response).to.have.status(200);
    //         return chakram.wait();
    //     });


    //     it('should respond 204 for "Response is empty."', function() {
    //         var response = request('get', 'http://localhost:8000/products', { 
    //             'qs': {"page":-9545284,"size":87274189,"sort":"et quis tempor irure","deleted":"ACTIVE","metadata":true},
    //             'time': true
    //         });

    //         expect(response).to.have.status(204);
    //         return chakram.wait();
    //     });


    //     it('should respond 400 for "Some parameters are missing or badly entered."', function() {
    //         var response = request('get', 'http://localhost:8000/products', { 
    //             'qs': {"page":-67928756,"size":1719599,"sort":"Duis id eiusmod veniam","deleted":"ALL","metadata":true},
    //             'time': true
    //         });

    //         expect(response).to.have.status(400);
    //         return chakram.wait();
    //     });


    //     it('should respond 401 for "Unauthorized"', function() {
    //         var response = request('get', 'http://localhost:8000/products', { 
    //             'qs': {"page":72150531,"size":18571206,"sort":"et dolore est veniam anim","deleted":"ALL","metadata":true},
    //             'time': true
    //         });

    //         expect(response).to.have.status(401);
    //         return chakram.wait();
    //     });


    //     it('should respond 404 for "Entity not found."', function() {
    //         var response = request('get', 'http://localhost:8000/products', { 
    //             'qs': {"page":-91599074,"size":33316330,"sort":"aute in","deleted":"ACTIVE","metadata":true},
    //             'time': true
    //         });

    //         expect(response).to.have.status(404);
    //         return chakram.wait();
    //     });


    //     it('should respond 405 for "Illegal input for operation."', function() {
    //         var response = request('get', 'http://localhost:8000/products', { 
    //             'qs': {"page":85972238,"size":-24048700,"sort":"est","deleted":"ALL","metadata":false},
    //             'time': true
    //         });

    //         expect(response).to.have.status(405);
    //         return chakram.wait();
    //     });
    
    // });
});