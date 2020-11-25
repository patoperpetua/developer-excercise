"use strict";
import 'mocha';
import { expect } from 'chai';
import app from '../src/app';
import { agent as request } from 'supertest';
import { getCustomRepository, Repository } from 'typeorm';
import { ProductsRepository } from '../src/databases/repositories';
import { Products } from '../src/databases';
import { ParametersComplete, Metadata } from '../src/models';

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

    describe('tests for get', function() {
        const products = [];
        let productsSaved: Array<Products>;
        before(function(done) {
            for (let i = 0; i < 10; i++) {
                products.push(new Products({name: `Product${i}`, price: i * 1.02}))
            }
            repository.save(products).then((saved) => {
                productsSaved = saved;
                done();
            });
        });
        
        it('should respond 200 for "Request OK." No metadata', async function() {
            const objectSave: ParametersComplete = { skip: 0, limit: 10, metadata: false };
            const response = { items: productsSaved };
            const res = await request(app).get(`${PATH}`).query(objectSave);
            res.body.items.forEach((element: Products) => {
                element.modifiedAt = new Date(element.modifiedAt);
                element.createdAt = new Date(element.createdAt);
            });
            expect(res.status).to.equal(200);
            expect(res.body).not.to.be.empty;
            expect(res.body).to.be.an("object");
            expect(res.body).to.deep.include(response);
        });

        it('should respond 200 for "Request OK." With metadata', async function() {
            const objectSave: ParametersComplete = { skip: 0, limit: 10, metadata: true };
            const response: { metadata: Metadata, items: Array<Products>} = { metadata: { first: 0, prev: 0, last: 10, next: 0, self:0 }, items: productsSaved }
            const res = await request(app).get(`${PATH}`).query(objectSave);
            res.body.items.forEach((element: Products) => {
                element.modifiedAt = new Date(element.modifiedAt);
                element.createdAt = new Date(element.createdAt);
            });
            expect(res.status).to.equal(200);
            expect(res.body).not.to.be.empty;
            expect(res.body).to.be.an("object");
            expect(res.body).to.deep.include(response);
        });

        it('should respond 200 for "Request OK." pagination', async function() {
            const objectSave: ParametersComplete = { skip: 0, limit: 5, metadata: true };
            const response: { metadata: Metadata, items: Array<Products>} = { metadata: { first: 0, prev: 0, last: 10, next: 5, self:0 }
            , items: productsSaved.slice(0,5) };
            const res = await request(app).get(`${PATH}`).query(objectSave);
            res.body.items.forEach((element: Products) => {
                element.modifiedAt = new Date(element.modifiedAt);
                element.createdAt = new Date(element.createdAt);
            });
            expect(res.status).to.equal(200);
            expect(res.body).not.to.be.empty;
            expect(res.body).to.be.an("object");
            expect(res.body).to.deep.include(response);
        });

        it('should respond 200 for "Request OK." pagination 2', async function() {
            const objectSave: ParametersComplete = { skip: 5, limit: 5, metadata: true };
            const response: { metadata: Metadata, items: Array<Products>} = { metadata: { first: 0, prev: 0, last: 10, next: 0, self:5 }
            , items: productsSaved.slice(5,productsSaved.length) };
            const res = await request(app).get(`${PATH}`).query(objectSave);
            res.body.items.forEach((element: Products) => {
                element.modifiedAt = new Date(element.modifiedAt);
                element.createdAt = new Date(element.createdAt);
            });
            expect(res.status).to.equal(200);
            expect(res.body).not.to.be.empty;
            expect(res.body).to.be.an("object");
            expect(res.body).to.deep.include(response);
        });


        it('should respond 204 for "Response is empty."', async function() {
            const objectSave: ParametersComplete = { skip: 10, limit: 5, metadata: true };
            const res = await request(app).get(`${PATH}`).query(objectSave);
            expect(res.status).to.equal(204);
            expect(res.body).to.be.empty;
        });

        after(function(done) {
            repository.remove(productsSaved).then((saved) => {
                done();
            });
        });

        it.skip('should respond 400 for "Some parameters are missing or badly entered."', async function() {
            const objectSave: ParametersComplete = { skip: 10, limit: 5, metadata: true };
            const res = await request(app).get(`${PATH}`).query(objectSave);
        });


        it.skip('should respond 401 for "Unauthorized"', async function() {
            const objectSave: ParametersComplete = { skip: 10, limit: 5, metadata: true };
            const res = await request(app).get(`${PATH}`).query(objectSave);
        });


        it.skip('should respond 404 for "Entity not found."', async function() {
            const objectSave: ParametersComplete = { skip: 10, limit: 5, metadata: true };
            const res = await request(app).get(`${PATH}`).query(objectSave);
        });


        it.skip('should respond 405 for "Illegal input for operation."', async function() {
            const objectSave: ParametersComplete = { skip: 10, limit: 5, metadata: true };
            const res = await request(app).get(`${PATH}`).query(objectSave);
        });
    
    });
});