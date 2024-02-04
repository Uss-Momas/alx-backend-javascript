const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const { expect } = require('chai');

describe('Test sendPaymentRequestToApi', () => {
    it('Checks the SUM of values', () => {
        const stub = sinon.stub(Utils, 'calculateNumber');
        stub.returns(10);

        const consoleSpy = sinon.spy(console, 'log');

        const apiRequestRes = sendPaymentRequestToApi(100, 20);

        expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.equal(true);
        expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.equal(true);
        expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(apiRequestRes);
        stub.restore();
        consoleSpy.restore();
    });
});